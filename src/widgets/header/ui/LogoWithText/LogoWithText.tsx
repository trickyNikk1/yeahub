import styles from './styles.module.css'
export const LogoWithText = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="src\6-shared\assets\svg\logo.svg"
        alt="Logo"
        width={33}
        height={33}
      />
      <img
        className={styles.text}
        src="src\6-shared\assets\svg\logo-text-black.svg"
        alt="Yeahub"
        width={99}
        height={32}
      />
    </div>
  )
}
