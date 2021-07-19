import { EyeOutlined  } from "@ant-design/icons"
export default function ArticleItemStats({
  viewCount
}) {
  return (
    <ul className="article-item__stats">
      <li>
        <EyeOutlined  className="icons" />
        <span className="text">{viewCount}</span>
      </li>
    </ul>
  )
}