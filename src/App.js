import React from 'react'
import {MuiThemeProvider} from '@material-ui/core/styles'
import color from './theme/color'
import Home from './screens/Home'

export default () => (
    <MuiThemeProvider theme={color}>
      <Home />
    </MuiThemeProvider>
)