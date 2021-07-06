import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { LANDING_ROUTE } from '../utils/routes'

const LandingPage = React.lazy(() => import('../pages/landing-page'))

const Routes = () => {
  return (
    <Switch>
      <Route exact path={LANDING_ROUTE} component={LandingPage} />
    </Switch>
  )
}

export default Routes
