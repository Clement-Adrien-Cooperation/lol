import { BrowserRouter } from 'react-router'

import { Router } from '@/application/router'
import { Providers } from '@/presentation/providers'
import { ErrorBoundary } from '@/presentation/components'

export const App = () => (
  <BrowserRouter>
    <Providers>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </Providers>
  </BrowserRouter>
)
