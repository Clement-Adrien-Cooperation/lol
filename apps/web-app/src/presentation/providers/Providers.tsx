import type { FC, PropsWithChildren } from 'react'
import { RouterProvider } from 'react-aria-components'
import { useNavigate } from 'react-router'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <RouterProvider navigate={navigate}>
      {children}
    </RouterProvider>
  )
}
