import { useState } from 'react'

import styles from './styles.module.css'

interface Props {
  total: number
  current: number
  handler: (page: number) => void
}

export const Pagination = ({ total, current, handler }: Props) => {
  const [currentPage, setCurrentPage] = useState(current)

  if (total <= 1) return null

  const generatePageNumbers = () => {
    if (total <= 10) return Array.from({ length: total }, (_, i) => i + 1)

    if (currentPage < 5) {
      return [...[...Array(6).keys()].map(i => i + 1), ...['...', total]]
    }

    if (currentPage >= total - 3) {
      return [1, '...'].concat(
        Array.from({ length: 6 }, (_, i) => total - 5 + i)
      )
    }

    return [1, '...'].concat(
      Array.from({ length: 6 }, (_, i) => currentPage - 3 + i),
      ['...', total]
    )
  }

  const handlePageChange = (page: number) => {
    if (page !== currentPage && typeof page === 'number') {
      setCurrentPage(page)
      handler(page)
    }
  }

  const pageNumbers = generatePageNumbers()

  return (
    <nav className={styles.pagination}>
      <button
        className={styles.prev}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      ></button>
      {pageNumbers.map((num, index) =>
        typeof num === 'number' ? (
          <button
            key={index}
            className={styles.page}
            disabled={num === currentPage}
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
        disabled={currentPage === total}
        onClick={() => handlePageChange(currentPage + 1)}
      ></button>
    </nav>
  )
}
