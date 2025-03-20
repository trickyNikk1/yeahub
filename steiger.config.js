import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/shared/**'],
    rules: {
      'fsd/public-api': 'off',
    },
  },
  {
    files: ['src/shared/lib/hooks/useAppDispatch.ts'],
    rules: {
      'fsd/forbidden-imports': 'off',
    },
  },
  {
    files: ['src/shared/lib/hooks/useAppSelector.ts'],
    rules: {
      'fsd/forbidden-imports': 'off',
    },
  },
])
