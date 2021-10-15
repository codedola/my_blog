import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { t } from "@lingui/macro";
import { Popover } from "antd";
import {
  WapperInputSearch,
  InputSearch,
  TitleSearchResult,
} from "../StyledComponents/Header.Styled";
import SearchIcon from "./SearchIcon";
import HeaderPopoverContent from "./HeaderPopoverContent";
export default function HeaderSearch() {
  const history = useHistory();
  const [searchStr, setSearchStr] = useState("");

  function handleOnChange(e) {
    setSearchStr(e.target.value);
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
            <SearchIcon />
            <span className="text_search">Tìm '_{searchStr}'</span>
          </TitleSearchResult>
        }
        content={<HeaderPopoverContent />}
        trigger={["hover"]}
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
