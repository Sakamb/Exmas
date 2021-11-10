import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container';
import LogoImg from './logo1.svg';
import Button from '@mui/material/Button';




export default function AppHeader() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const SignUpButton = {
    width: '4.5rem',
    height: '2rem',
    lineHeight: 2,
    fontSize: 12,
    background: '#14C8FF',
    borderRadius: 2,
    color: 'white',
    textTransform: 'capitalize',
  }

  const LoginButton = {
    width: '4.5rem',
    height: '2rem',
    lineHeight: 2,
    fontSize: 12,
    background: '#FFFFFF',
    borderRadius: 2,
    color: '#14C8FF',
    textTransform: 'capitalize',
    border: 1.5
  }

  const Logo = {
    padding : 3,
  }


  return (

    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="transparent" elevation={0}>
          <Toolbar>
            <Grid pt={1} pl={8}>
              <img src={LogoImg} alt="logoImg" style={{ height: "7vh", width: "7vh" }} />
            </Grid>
            <Grid>
              <Typography Font
                Hind Madurai color="common.white" variant="h6" sx={{ padding: 0.5 }}>
                exmas
        </Typography>
            </Grid>
            <Typography Font
              Roboto color="common.white" sx={{ textAlign: 'center', flexGrow: 1, fontSize: 10, fontWeight: 'bold', m: 1 }}>
              <Grid  pl={10} container spacing={0}>
                <Grid item-product xs={1.25}>
                  Product
                </Grid >
                <Grid item-company xs={1.25}>
                  Pricing
                </Grid>
                <Grid item-company xs={1.25}>
                  Company
                </Grid>
                <Grid item-company xs={1.25}>
                  Support
                </Grid>
                <Grid item-company xs={1.25}>
                  Resoruces
                </Grid>
                <Grid item-company xs={1.25}>
                  Client
                </Grid>
              </Grid> 
            </Typography>
            <Grid   xs={1} >
                <Button sx={{ ...LoginButton }}>
                  Login
                  </Button>
              </Grid>
              <Grid pr={18} xs={1}>
                <Button sx={{ ...SignUpButton }}>
                  Sign Up
                  </Button>
              </Grid>
            
          </Toolbar>
        </AppBar>
      </Box>
    </Container>

  );
}