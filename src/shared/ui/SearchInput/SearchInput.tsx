import styles from './styles.module.css'

interface Props {
  value: string
  setValue: (value: string) => void
}

export const SearchInput = ({ value, setValue }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <input
      className={styles.input}
      onChange={handleChange}
      placeholder="Введите запрос..."
      type="text"
      value={value}
    />
  )
}
