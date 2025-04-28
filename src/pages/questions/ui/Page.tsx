import styles from './styles.module.css'

import { Filters } from '@/features/filters'
import { Questions } from '@/widgets/questions'

export const QuestionsPage = () => {
  return (
    <div className="wrapper">
      <main className={styles.main}>
        <Questions />

        <Filters />
      </main>
    </div>
  )
}
