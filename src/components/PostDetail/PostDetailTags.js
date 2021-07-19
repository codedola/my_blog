import React from "react";
import { PATHS } from "../../constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { genKeyTagID } from "../../store/tags/reducer"

function PostDetailTags({tagIDs}) {
  const tagsObj = useSelector(state => state.Tag.listTags)
  return (
    <div className="post-detail__tags">
      <h2>Thẻ:</h2>
      <ul>
        {
          tagIDs.map(function (id) {
            const tag = tagsObj[genKeyTagID(id)];
            const slugLink = PATHS.TAG.replace(":slug", tag?.slug);
            return (
              <li className="item" key={id}>
                <Link to={slugLink} className="btn btn-default">#{tag?.name?.toUpperCase()}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default PostDetailTags;