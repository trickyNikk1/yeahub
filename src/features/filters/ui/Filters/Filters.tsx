import { useRef } from 'react'

import { SpecializationsList } from '../SpecializationsList/SpecializationList'
import { SkillsList } from '../SkillsList/SkillsList'
import { ComplexityList } from '../ComplexityList/ComplexityList'
import { RateList } from '../RateList/RateList'
import { QuestionSearch } from '../QuestionSearch/QuestionSearch'
import { setIsOpen } from '../../model/slice'

import styles from './styles.module.css'

import { ButtonClose } from '@/shared/ui'
import { useAppDispatch, useAppSelector, useOnClickOutside } from '@/shared/lib'

export const Filters = () => {
  const filtersRef = useRef(null)
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector(state => state.filters)
  useOnClickOutside(filtersRef, () => dispatch(setIsOpen(false)))

  return (
    <section
      ref={filtersRef}
      className={`${styles.container} ${isOpen ? '' : styles.hidden}`}
    >
      <ButtonClose
        onClick={() => {
          dispatch(setIsOpen(false))
        }}
        className={styles.close}
      />
      <QuestionSearch />
      <SpecializationsList />
      <SkillsList />
      <ComplexityList />
      <RateList />
    </section>
  )
}
