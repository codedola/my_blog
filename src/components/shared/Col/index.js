import cls from 'classnames';

export default function Col({
  xs,
  md,
  children
}) {

  const classes = cls({
    ['tcl-col-' + xs]: xs <= 12 && xs >= 1,
    ['tcl-col-md-' + md]: md <= 12 && md >= 1,
  })

  return (
    <div className={classes}>{children}</div>
  )
}