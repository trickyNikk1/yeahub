import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    // Проверяем, доступен ли `window` (чтобы избежать ошибок при SSR)
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query)

      // Обработчик изменений
      const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches)
      }

      // Устанавливаем начальное значение
      setMatches(mediaQueryList.matches)

      // Добавляем слушатель (для современных браузеров используем addEventListener)
      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', handleChange)
      } else {
        // Для совместимости со старыми браузерами
        mediaQueryList.addListener(handleChange)
      }

      // Убираем слушатель при размонтировании
      return () => {
        if (mediaQueryList.removeEventListener) {
          mediaQueryList.removeEventListener('change', handleChange)
        } else {
          mediaQueryList.removeListener(handleChange)
        }
      }
    }
  }, [query])

  return matches
}
