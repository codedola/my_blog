import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { t } from "@lingui/macro";
import { Popover } from "antd";
import {
  WapperInputSearch,
  InputSearch,
  TitleSearchResult,
} from "../StyledComponents/Header.Styled";
import SearchIcon from "./SearchIcon";
import SearchLoadingIcon from "./SearchLoadingIcon";
import HeaderPopoverContent from "./HeaderPopoverContent";
import { PostService } from "../../services/posts";
export default function HeaderSearch() {
  const history = useHistory();
  const [searchStr, setSearchStr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [listPostSearch, setListPostSearch] = useState(null);

  useEffect(
    function () {
      if (searchStr === "") {
        setListPostSearch(null);
      }
    },
    [searchStr]
  );
  function handleOnChange(e) {
    const valueSearch = e.target.value;
    setSearchStr(valueSearch);
    //
    if (isLoading) return;
    const searchResult = valueSearch.trim();
    if (searchResult.length >= 2 && !isLoading) {
      const TimeoutID = setTimeout(() => {
        setIsLoading(true);
        PostService.getList({ search: searchResult, per_page: 4 })
          .then(function (res) {
            setIsLoading(false);
            clearTimeout(TimeoutID);
            if (res.status === 200) {
              setListPostSearch(res.data);
            }
          })
          .catch(() => {
            clearTimeout(TimeoutID);
            setIsLoading(false);
          });
      }, 400);
    }
  }

  function hanldeOnSubmit(data) {
    if (data.trim() !== "") {
      history.push("/search?q=" + data.trim());
    }
  }

  return (
    <div style={{ flex: 1 }}>
      <Popover
        className="NhanDo_Popover_Input"
        placement="bottom"
        title={
          <TitleSearchResult>
            {isLoading ? <SearchLoadingIcon /> : <SearchIcon />}
            <span className="text_search">Tìm '_{searchStr}'</span>
          </TitleSearchResult>
        }
        content={<HeaderPopoverContent listPostSearch={listPostSearch} />}
        trigger="hover"
        // visible={true}
        getPopupContainer={() => document.querySelector(".NhanDo_Popover_Input")}
      >
        <WapperInputSearch>
          <InputSearch
            size="large"
            placeholder="Tìm kiếm bài viết, framework,..."
            bordered={false}
            addonBefore={<SearchIcon />}
            allowClear
            enterButton={null}
            value={searchStr}
            onChange={handleOnChange}
            onSearch={hanldeOnSubmit}
          />
        </WapperInputSearch>
      </Popover>
    </div>
  );
}
