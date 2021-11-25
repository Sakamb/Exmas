
import React, { Component } from 'react';
import './App.css';
import Stack from '@material-ui/core/Stack'
import AppHeader from './components/AppHeader';
import LandingPage from './components/LandingPage';
import IntroPage from './components/IntroPage';
import Container from '@material-ui/core/Container';
import Grid from '@mui/material/Grid';
import {


  withRouter,


} from 'react-router-dom';

class App extends Component {
  render() {
    return (

        <React.Fragment>
          <AppHeader>
          </AppHeader>
          <LandingPage>
          </LandingPage>
          <IntroPage>
          </IntroPage>
        </React.Fragment>
        
    )
  }
}

export default withRouter(App);