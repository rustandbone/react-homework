import styles from './../styles/Button.module.css'

function Button({children, color = styles.main, size = styles.desktop, disabled, ...restProps }) {
  if(disabled) color = styles.disabled;

  if(size === 'tablet') size = styles.tablet;
  else if(size === 'mobile') {
    size = styles.mobile
  }

  const style = `${color} ${size}`;

  return (
    <button type='button' 
    className={style}
    disabled={disabled}
    {...restProps}>
      {children}
    </button>
  )
}

export default Button