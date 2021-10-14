import { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../shared/Input";
import { t } from "@lingui/macro";
import { CloseOutlined } from "@ant-design/icons";
import { SearchResult, FormSearch } from "../StyledComponents/Header.Styled";
import SearchIcon from "./SearchIcon";
export default function HeaderSearch() {
  const history = useHistory();
  const [searchStr, setSearchStr] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchStr.trim()) {
      history.push("/search?q=" + searchStr);
    }
  }

  function handleChange(evt) {
    setSearchStr(evt.target.value);
  }
  function handleOnBlur() {
    setIsFocus(false);
  }
  function handleOnFocus() {
    setIsFocus(true);
  }

  return (
    <div style={{ flex: 1 }}>
      <FormSearch onSubmit={handleSubmit}>
        <Input
          placeholder={t`Nhập từ khoá tìm kiếm`}
          type="search"
          value={searchStr}
          onChange={handleChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        {searchStr.length !== 0 && <CloseOutlined onClick={() => setSearchStr("")} />}

        {searchStr.length !== 0 ? (
          <div style={{ display: isFocus ? "block" : "none" }}>
            <SearchResult>
              <SearchIcon />
              <span>Tìm '{searchStr.trim()}'</span>
            </SearchResult>
          </div>
        ) : null}
      </FormSearch>
    </div>
  );
}
