import type { FC, PropsWithChildren } from 'react'
import { RouterProvider } from 'react-aria-components'
import { useNavigate } from 'react-router'

import { I18nProvider } from '@/presentation/providers'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate}>
      <I18nProvider>
        {children}
      </I18nProvider>
    </RouterProvider>
  )
}
