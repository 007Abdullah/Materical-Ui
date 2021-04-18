import React from 'react';
import './App.css';
import Sidemenu from './../components/Sidemenu';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './../components/Header';

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
      <Sidemenu />
      <div className={classes.appMenu}>
        <Header />
      </div>
      <CssBaseline />
    </React.Fragment>
  );
}

export default App;
