import { useSelector } from 'react-redux'

import type { RootState } from '@/app/appStore'

export const useAppSelector = useSelector.withTypes<RootState>()
