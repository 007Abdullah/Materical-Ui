import React from 'react';
import './App.css';
import Sidemenu from './../components/Sidemenu';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from './../components/Header';
import Pageheader from './../components/Pageheader';
import Employees from './../pages/Employees/Employees';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f832456'
    },
    background: {
      default: '#115293'
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})

const useStyles = makeStyles({
  appMenu: {
    paddingLeft: '320px',
    width: '100%'
  }
})



function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Sidemenu />
        <div className={classes.appMenu}>
          <Header />
          <Pageheader />
        </div>
        <Employees />
        <CssBaseline />
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
