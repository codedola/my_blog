import React from "react";
import { List, Avatar, Empty, Tag } from "antd";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoriesSearch from "../HomepageBlog/CategoriesSearch";
import {
  ListItemPostSearch,
  TopMorePostLastest,
  TitlePostItemSearch,
  ListItemPostSearchResult,
} from "../StyledComponents/Header.Styled";
import { genHashCategoryKey } from "../../store/categories/reducer";
import SearchListIcon from "./SearchListIcon";
export default function HeaderPopoverContent({ listPostSearch }) {
  const posts = useSelector((state) => state.Posts.articlesLatest);
  const hashCate = useSelector((state) => state.Categories.hashCategoriesFromId);

  return (
    <div className="wapper_content">
      <div className="result">
        <TopMorePostLastest paddingStyle={"0 0 10px"}>
          <h5>Kết quả tìm kiếm</h5>
          <Link to="/search?q=a">Tìm kiếm</Link>
        </TopMorePostLastest>

        {listPostSearch === null && (
          <div style={{ textAlign: "center" }}>
            <SearchListIcon />
          </div>
        )}
        {listPostSearch && listPostSearch?.length === 0 && (
          <Empty description="Không tìm thấy bài viết" />
        )}
        {listPostSearch &&
          listPostSearch?.length > 0 &&
          listPostSearch?.map((post, index) => {
            return (
              <ListItemPostSearchResult key={index}>
                <List.Item.Meta
                  avatar={<Avatar size="large" src={post?.featured_media_url} />}
                  title={
                    <TitlePostItemSearch>
                      <Link to={"/post/" + post.slug}>{post?.title?.rendered}</Link>
                    </TitlePostItemSearch>
                  }
                  description={
                    <span style={{ color: "#025ccb" }}>By {post?.author_data?.nickname}</span>
                  }
                />
              </ListItemPostSearchResult>
            );
          })}
      </div>
      <div className="courses">
        <TopMorePostLastest>
          <h5>Review công nghệ</h5>
          <Link to="/search?q=a">Xem thêm</Link>
        </TopMorePostLastest>
        <List
          itemLayout="horizontal"
          dataSource={posts}
          renderItem={(post, index) => {
            const isRise = index % 2 === 0;
            return (
              <ListItemPostSearch key={index}>
                <List.Item.Meta
                  avatar={<Avatar size="large" src={post?.featured_media_url} />}
                  title={
                    <TitlePostItemSearch>
                      <Link to={"/post/" + post.slug}>{post?.title?.rendered}</Link>
                      <div className={`${isRise ? "rise_view" : "rise_view fall"}`}>
                        views {isRise ? <RiseOutlined /> : <FallOutlined />}
                        <span>{post?.id || 20}%</span>
                      </div>
                    </TitlePostItemSearch>
                  }
                  description={
                    <div>
                      <span style={{ color: "#025ccb" }}>By {post?.author_data?.nickname} | </span>
                      {post.categories.map((id) => {
                        const keyCate = genHashCategoryKey(id);
                        return (
                          <Tag key={id} color="geekblue" style={{ borderRadius: 10 }}>
                            {hashCate[keyCate]?.name}
                          </Tag>
                        );
                      })}
                    </div>
                  }
                />
              </ListItemPostSearch>
            );
          }}
        />
      </div>
      <div className="categories">
        <TopMorePostLastest>
          <h5>Danh mục nổi bật</h5>
          <Link to="/search?q=a">Xem thêm</Link>
        </TopMorePostLastest>
        <CategoriesSearch isShowBtn={false} isShowNameIcon={false} isShowNameHover={true} />
      </div>
    </div>
  );
}
