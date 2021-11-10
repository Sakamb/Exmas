import React, { Component } from 'react';
import './LandingPage.css'
import BannerImg from './bannerImg.svg';
import Container from '@material-ui/core/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BottomImg from './bottom.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';



import {
  withRouter,
} from 'react-router-dom';

const slogan = makeStyles({
  sloganText: {
    fontSize: 25,
    fontWeight: "bold",
    padding: "20px"
  },
  annotaion: {
    fontSize: 11.2
  }

});



const bannerGrid = makeStyles({
  root: {
    padding: "180px 110px",


  },
});

const TryNowButton = makeStyles({
  button: {
    background: '#14C8FF',
    margin: "30px",
    lineHeight: 2,
    fontSize: 12,
    color: 'white',
    textTransform: 'capitalize',
    maxWidth: '1em', minWidth: '8em', minHeight: '1em',
    borderRadius: 8
  },



});



const rectangle = {

  position: 'absolute',

  left: '0px;',
  top: '584px',

  //background: '#FFFFFF',

};


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const bannerImageResponsive = {
  [theme.breakpoints.between('xs', 'md')]: {



  }

}



export default function LandingPage() {
  const banner_class = bannerGrid();
  const banner_slogan = slogan();
  const button_class = TryNowButton();


  return (
    <div className="landing-page"  >
      <Container>
        

        <Grid className={banner_class.root}  /* justifyContent="space-evenly" */ container spacing={0}>

          <Grid sx={{ ...bannerImageResponsive }} item-image xs={5}>
            <img src={BannerImg} alt="bannerImage" style={{ height: "55vh", width: "55vh" }} />
          </Grid>
          <Grid container rowSpacing={6} item-slogan xs={7} justifyContent="center" alignContent="center" >
            <Typography Font
              roboto color="common.white" align="center" className={banner_slogan.sloganText} sx={{ lineHeight: 1.2 }} >
              Manage Expanses Smarter, Brighter,
              Faster.
      </Typography>
            <Grid container item-desc xs={8} >
              <Typography className={banner_slogan.annotaion} Font
                roboto color="common.white" align="Center"  >
                Exmas monitors and automates your expenses managment process,
                provides claim management and expense analysis, all in one interface.
              <Button className={button_class.button} size="medium" >
                  Try now
               </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>

  );

}