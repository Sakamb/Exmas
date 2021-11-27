import React, { Component } from 'react';
import './IntroPage.css'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import image1 from './resources/image1.svg';
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
const message2 = 'By leveraging blockchain technology and mobile money infrastructure, we enable users to transfer money globally in seconds.';
const message3 = 'By leveraging blockchain technology and mobile money infrastructure, we enable users to transfer money globally in seconds.';
const message4 = 'By leveraging blockchain technology and mobile money infrastructure, we enable users to transfer money globally in seconds.';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      style={{ color: "#524646" }}
      sx={{
        fontSize: '1rem',
        lineHeight: 'normal', fontFamily: 'Poppins', fontSize: 15, fontWeight: 'regular', fontStyle: 'normal',
        my: 1, mx: 1, p: 2,

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
      <Typography Font roboto color="blue" fontWeight='bold' align="center" sx={{ fontSize: 18, mt: 14, mb: 10 }} style={{ color: "#2F76B9" }}>
        Discover best opportunities to understand your expenses
        </Typography>
      <img src={image1} alt="image1" align="right" style={{ height: "30rem", width: "30rem" }} />
      <Box
        sx={{
          lineHeight: 'normal', fontFamily: 'Poppins', fontSize: 1, fontWeight: 'regular', fontStyle: 'normal',
          display: 'grid',
          columnGap: 0,
          rowGap: 10,
          gridTemplateColumns: 'repeat(2, 1fr)',
          mx: 0, pl: 7,
          width: 710,
        }}>
        <Item >
          <img src={icon1} alt="icon1" align="left" style={{ height: "4.2rem", width: "4.2rem" }} />
          <Typography component="div" Font roboto color="black" align="left" sx={{ my: 2, mx: 10 }}>
            Scan Expense
            </Typography>
          <Typography Font poppins style={{ color: "#524646" }} align="left" sx={{ lineHeight: 'normal', fontFamily: 'Poppins', fontSize: 16, fontWeight: 'regular', fontStyle: 'normal', my: 1, mx: 8, pl: 2 }}>
            {message}
          </Typography>
        </Item>
        <Item>
          <img src={PolicyIcon} alt="icon1" align="left" style={{ height: "4.2rem", width: "4.2rem" }} />
          <Typography component="div" Font roboto color="black" align="left" sx={{ my: 2, mx: 10 }}>
          Policy Condition          
          </Typography>
            <Typography component="div" Font roboto color="black" align="left" sx={{ my: 2, mx: 10 }}>
          
          </Typography>
            <Typography Font poppins style={{ color: "#524646" }} align="left" sx={{ lineHeight: 'normal', fontFamily: 'Poppins', fontSize: 16, fontWeight: 'regular', fontStyle: 'normal', my: 1, mx: 8, pl: 2 }}>
            {message2}
          </Typography>
        </Item>
        <Item>
          <img src={CardIcon} alt="icon1" align="left" style={{ height: "4.2rem", width: "4.2rem" }} />
            <Typography component="div" Font roboto color="black" align="left" sx={{ my: 2, mx: 10 }}>
            Connect Your Cards
          </Typography>
            <Typography Font roboto style={{ color: "#524646" }} align="left" sx={{lineHeight: 'normal', fontFamily: 'Poppins', fontSize: 16, fontWeight: 'regular', fontStyle: 'normal', my: 1, mx: 8, pl: 2 }}>
            {message3}
          </Typography>
        </Item>
        <Item sx={{}}>
          <img src={CloudIcon} alt="icon1" align="left" style={{ height: "4.2rem", width: "4.2rem" }} />
            <Typography component="div" Font roboto color="black" align="left" sx={{ lineHeight: 'normal', fontFamily: 'Poppins', fontSize: 16, fontWeight: 'regular', fontStyle: 'normal',my: 2, mx: 10 }}>
            Cloud Storage          
          </Typography>
            <Typography style={{ color: "#524646" }} align="left" sx={{ lineHeight: 'normal', fontFamily: 'Poppins', fontSize: 16, fontWeight: 'regular', fontStyle: 'normal', my: 1, mx: 8, pl: 2 }}>
            {message4}
          </Typography>
        </Item>
      </Box>
    </div>
  );
}
