
import { Link } from 'react-router-dom';
import ArticleItemAvatar from './ArticleItemAvatar';
import { ClockCircleOutlined } from "@ant-design/icons"
import { createDateTime, getAvatarUser} from "../../helpers"

export default function ArticleItemInfo({
  isShowAvatar,
  created,
  authorId,
  authorName,
  authorAvatar,
  authorLink,
  isShowInfoUser = true
}) {

  const { createdDateStr, relativeTimeStr} =createDateTime(created)
  const avatar = getAvatarUser(authorId, authorAvatar)

  return (
    <div className="article-item__info">
      {
        isShowAvatar && <ArticleItemAvatar 
          avatar={avatar} 
          authorLink={authorLink}
          authorName={authorName}
        />
      }

      {
        isShowInfoUser ?   <div className="article-item__info-right">
        <div className="article-item__author-name">
          <Link to={authorLink}><strong>{authorName}</strong></Link>
        </div>
       
        <div className="article-item__datetime">
          <div className="date">{createdDateStr}</div>
          <div className="time">
            <ClockCircleOutlined className="time__icon" />
            <span className="time__text">{relativeTimeStr}</span>       
          </div>
        </div>
      </div> : null
       }
    
    </div>
  )
}
