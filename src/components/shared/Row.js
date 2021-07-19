import cls from 'classnames';

export default function Row({
  children,
  className
}) {

  return (
    <div className={cls('tcl-row', className)}>{children}</div>
  )
}