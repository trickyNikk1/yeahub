import styles from './styles.module.css'

import { Card } from '@/shared/ui'

const NotFoundPage = () => {
  return (
    <div className="wrapper">
      <Card className={styles.container}>
        <hgroup className={styles.title}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </hgroup>
      </Card>
    </div>
  )
}

export default NotFoundPage
