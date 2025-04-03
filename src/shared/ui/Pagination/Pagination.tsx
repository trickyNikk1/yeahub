import styles from './styles.module.css'

interface Props {
  total: number
  current: number
  handler: (page: number) => void
}

export const Pagination = ({ total, current, handler }: Props) => {
  if (total <= 1) return null

  const generatePageNumbers = () => {
    if (total <= 10) return Array.from({ length: total }, (_, i) => i + 1)

    if (current < 5) {
      return [...[...Array(6).keys()].map(i => i + 1), ...['...', total]]
    }

    if (current >= total - 3) {
      return [1, '...'].concat(
        Array.from({ length: 6 }, (_, i) => total - 5 + i)
      )
    }

    return [1, '...'].concat(
      Array.from({ length: 6 }, (_, i) => current - 3 + i),
      ['...', total]
    )
  }

  const handlePageChange = (page: number) => {
    if (page !== current && typeof page === 'number') {
      handler(page)
    }
  }

  const pageNumbers = generatePageNumbers()

  return (
    <nav className={styles.pagination}>
      <button
        className={styles.prev}
        disabled={current === 1}
        onClick={() => handlePageChange(current - 1)}
      ></button>
      {pageNumbers.map((num, index) =>
        typeof num === 'number' ? (
          <button
            key={index}
            className={styles.page}
            disabled={num === current}
            onClick={() => handlePageChange(num)}
          >
            {num}
          </button>
        ) : (
          <div key={index} className={styles.dots}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        )
      )}
      <button
        className={styles.next}
        disabled={current === total}
        onClick={() => handlePageChange(current + 1)}
      ></button>
    </nav>
  )
}
