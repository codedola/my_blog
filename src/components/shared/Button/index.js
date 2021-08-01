import './button.css';
import classNames from 'classnames';
import Loading from '../Loading';

export default function Button({ 
  children,
  htmlType,
  type = 'button',
  variant = 'default',
  size = '',
  className,
  loading,
  loadingPos = 'left',
  isDisabled = false,
  styleBtn={},
  ...restProps 
}) {


  const classes = classNames(className, 'btn', {
    'btn-default': variant === 'default',
    'btn-category': variant === 'category',
    'btn-primary': variant === 'primary',
    'btn-size-large': size === 'large',
    "btn-size-medium": size === "medium",
    "btn-disable": isDisabled === true
  })

  if (type === 'button') {
    return (
      <button {...restProps} type={htmlType} className={classes} style={styleBtn} disabled={isDisabled} >
        { loading && loadingPos === 'left' && <Loading /> }
        { children }
        { loading && loadingPos === 'right' && <Loading /> }
      </button>
    )
  }

  if (type === 'link') {
    return (
      <a {...restProps} className={classes}>
        { loading && loadingPos === 'left' && <Loading /> }
        { children }
        { loading && loadingPos === 'right' && <Loading /> }
      </a>
    )
  }
}
