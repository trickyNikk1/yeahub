import styles from './styles.module.css'

interface Props {
  className?: string
}

export const Skeleton = ({ className }: Props) => {
  return <div className={`${styles.skeleton} ${className ?? ''}`}></div>
}
