import styles from './styles.module.css'

import { Filters } from '@/features/filters'
import { Questions } from '@/widgets/questions'

export const Main = () => {
  return (
    <main className={styles.main}>
      <Questions />

      <Filters />
    </main>
  )
}
