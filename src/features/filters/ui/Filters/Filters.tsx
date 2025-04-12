import { SpecializationsList } from '../SpecializationsList/SpecializationList'
import { SkillsList } from '../SkillsList/SkillsList'
import { ComplexityList } from '../ComplexityList/ComplexityList'
import { RateList } from '../RateList/RateList'
import { QuestionSearch } from '../QuestionSearch/QuestionSearch'
import { setIsOpen } from '../../model/slice'

import styles from './styles.module.css'

import { AdaptiveSidePanel, Card } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/shared/lib'

export const Filters = () => {
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector(state => state.filters)

  return (
    <AdaptiveSidePanel
      isOpen={isOpen}
      setIsOpen={() => dispatch(setIsOpen(false))}
      renderDesktop={children => (
        <Card>
          <section className={styles.container}>{children}</section>
        </Card>
      )}
    >
      <QuestionSearch />
      <SpecializationsList />
      <SkillsList />
      <ComplexityList />
      <RateList />
    </AdaptiveSidePanel>
  )
}
