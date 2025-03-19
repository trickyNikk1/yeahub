import { useDispatch } from 'react-redux'

import type { AppDispatch } from '@/app/appStore'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
