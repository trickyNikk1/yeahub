import styles from './styles.module.css'

export const Card = ({
  children,
  className
}: React.HTMLAttributes<HTMLElement>) => {
  return <div className={`${styles.card} ${className ?? ''}`}>{children}</div>
}
