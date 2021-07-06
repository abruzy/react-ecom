import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Loading from '../components/loading'

function App () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
