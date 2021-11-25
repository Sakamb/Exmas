import React, { Component } from 'react';
import './IntroPage.css'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import icon1 from './resources/icon1.svg';
import CloudIcon from './resources/cloudIcon.svg';
import CardIcon from './resources/cardIcon.svg';
import PolicyIcon from './resources/policyIcon.svg';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';

import {
  withRouter,
} from 'react-router-dom';

const message = `Scan your receptit and validate your expense hassle free and append them to your claim, ready to be approved for any time`;

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      Font roboto style={{ color: "#524646" }}
      sx={{
        fontSize: '1rem',
        maxWidth: 330, my: 1, mx: 1, p: 2,
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function RowAndColumnGap() {
  return (
  
      <div className="into-page">
    
        <Typography Font roboto color="blue" fontWeight='bold' fontSize='28' align="center" sx={{ mt: 13, mb: 5 }} style={{ color: "#2F76B9" }}>
          Discover best opportunities to understand your expenses
        </Typography>
        <Box
          sx={{
            display: 'grid',
            columnGap: 10,
            rowGap: 10,
            gridTemplateColumns: 'repeat(2, 1fr)',
            mx: 4, p: 2,
          }}>

          <Item>
            <Typography Font roboto color="blue">
              <img src={icon1} alt="icon1" align="left" style={{ height: "4rem", width: "4 rem" }} />
            </Typography>
            <Typography component="div" Font roboto color="black" align="left" sx={{ my: 2, mx: 10 }}>
              Scan Expense
            </Typography>
            <Typography Font poppins style={{ color: "#524646" }} align="left" sx={{ fontSize: 14, my: 1, mx: 8, pl: 2 }}>
              {message}
            </Typography>
          </Item>
          <Item sx={{ mx: -30 }} >
            <Typography Font roboto color="blue">
              <img src={PolicyIcon} alt="icon1" align="left" style={{ height: "4rem", width: "4rem" }} />
            </Typography>
            <Typography component="div" Font roboto color="black" align="left" sx={{ my: 2, mx: 10 }}>
              Scan Expense
            </Typography>
            <Typography Font poppins style={{ color: "#524646" }} align="left" sx={{ fontSize: 14, my: 1, mx: 8, pl: 2 }}>
              {message}
            </Typography></Item>
          <Item> <Typography Font roboto color="blue">
            <img src={CardIcon} alt="icon1" align="left" style={{ height: "4rem", width: "4rem" }} />
          </Typography>
            <Typography component="div" Font roboto color="black" align="left" sx={{ my: 2, mx: 10 }}>
              Scan Expense
            </Typography>
            <Typography Font roboto style={{ color: "#524646" }} align="left" sx={{ fontSize: 14, my: 1, mx: 8, pl: 2 }}>
              {message}
            </Typography></Item>
          <Item sx={{ mx: -30 }}>
            <Typography Font roboto color="blue">
              <img src={CloudIcon} alt="icon1" align="left" style={{ height: "4rem", width: "4rem" }} />
            </Typography>
            <Typography component="div" Font roboto color="black" align="left" sx={{ my: 2, mx: 10 }}>
              Scan Expense
            </Typography>
            <Typography Font roboto style={{ color: "#524646" }} align="left" sx={{ fontSize: 14, my: 1, mx: 8, pl: 2 }}>
              {message}
            </Typography>
          </Item>
        </Box>
  

      </div>
  );
}
