import { useRef } from 'react'

import { ButtonClose } from '../button/ButtonClose/ButtonClose'

import styles from './styles.module.css'

import { useMediaQuery, useOnClickOutside } from '@/shared/lib'

interface Props {
  renderDesktop: (children: React.ReactNode) => React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  children?: React.ReactNode
}

export const AdaptiveSidePanel = ({
  renderDesktop,
  isOpen,
  setIsOpen,
  children
}: Props) => {
  const isDesktop = useMediaQuery('(min-width: 992px)')
  const cardRef = useRef(null)
  useOnClickOutside(cardRef, () => setIsOpen(false))

  return (
    <>
      {isDesktop ? (
        renderDesktop(children)
      ) : (
        <div
          ref={cardRef}
          className={`${styles.container} ${isOpen ? '' : styles.hidden}`}
        >
          <ButtonClose
            onClick={() => {
              setIsOpen(false)
            }}
            className={styles.close}
          />
          {children}
        </div>
      )}
    </>
  )
}
