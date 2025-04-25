import styles from './styles.module.css'

interface Props<T> {
  title?: string
  items: T[]
  renderItem?: (item: T, index?: number) => React.ReactNode
  getKey?: (item: T, index: number) => string | number
}

export const InfoList = <T,>({
  title,
  items = [],
  renderItem,
  getKey = (_, index) => index
}: Props<T>) => {
  return (
    <div className={styles.container}>
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={getKey(item, index)}>
            {(renderItem && renderItem(item, index)) || null}
          </li>
        ))}
      </ul>
    </div>
  )
}
