import { ReadMoreStyled } from "../StyledComponents/Homepage.Styled"

function ArticleItemDesc({ shortDesc: shortDescHTML, isBlog = false, slugLink }) {
  let count = isBlog ? 40 : 20;
  const shortDesc = shortDescHTML
    .replace('<p>', '')
    .replace('</p>', '');
  
  let str = shortDesc.split(' ')
    .slice(0, count)
    .join(' ')

  if (str !== shortDesc) {
    str += ' ... '
  }

  return (
    <p className="article-item__desc">
      {str}
      {
        isBlog ?
          <ReadMoreStyled to={slugLink}>Xem thêm</ReadMoreStyled>
          : null
      }
    </p>
  )
}

export default ArticleItemDesc;