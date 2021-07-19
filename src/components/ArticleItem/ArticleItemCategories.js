import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { genHashCategoryKey } from '../../store/categories/reducer';
import { PATHS} from "../../constants";
export default function ArticleItemCategories({
  categoriesId
}) {
  const hashCategoriesFromId = useSelector(state => state.Categories.hashCategoriesFromId);

  return (
    <ul className="article-item__categories">
      {
        categoriesId.map(categoryId => {
          const key = genHashCategoryKey(categoryId);
          const category = hashCategoriesFromId[key];

          if (!category) {
            return null;
          }
          const slugLink = PATHS.CATEGORY.replace(":slug", category.slug)
          return (
            <li key={categoryId}>
              <Link to={slugLink} className="btn btn-category">{category.name}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}