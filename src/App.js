import React from 'react'
import Routes from './routes/Route'
import {MuiThemeProvider} from '@material-ui/core/styles'
import color from './themes/color'

export default () => (
    <MuiThemeProvider theme={color}>
      <Routes />
    </MuiThemeProvider>
)