import { useParams } from 'react-router'

import styles from './styles.module.css'

export const QuestionPage = () => {
  const { id } = useParams()

  return <h1 className={styles.title}>Question {id}</h1>
}
