import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@material-ui/core/Container'
import { alpha } from '@mui/material/styles';
import './FeaturePage.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import NotificationImg from './resources/notificationImg.svg';

function Item1(props) {
  const { sx, ...other } = props;
  return (

    <Box
      sx={{
        p: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',


        ...sx,
      }}
      {...other}
    />
  );
}

Item1.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const paper = {

  alignItems: 'center',
  bgcolor: 'background.paper',
  overflow: 'hidden',
  borderRadius: '12px',
  boxShadow: 1,
  fontWeight: 'bold',
  height: 278,
  width: 306,

}

const paperImages = {
  alignItems: 'left',
  height: 120,
  width: 175,
}

export default function FeaturePage() {
  return (
    <div className="intro-page">
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(3, 1fr)',
          alignItems: 'center',
          maxHeight: { xs: 0, md: 167 },
          maxWidth: { xs: 0, md: 250 },
          left: 140,
          top: 120,
          position: 'relative',
        }}>
        <Item1>
          <Box sx={{ ...paper }}>
            <Box component="img" sx={{ ...paperImages }} alt=" feature 1" src={NotificationImg} />
          </Box>
        </Item1>
        <Item1>
          <Box sx={{ ...paper }}>
            <Box component="img" sx={{ ...paperImages }} alt="The house from the offer." src={NotificationImg} />
          </Box>
        </Item1>
        <Item1>
          <Box sx={{ ...paper }}>
            <Box component="img" sx={{ ...paperImages }} alt="The house from the offer." src={NotificationImg} />
          </Box>
        </Item1>
        <Item1>
          <Box sx={{ ...paper }}>
            <Box component="img" sx={{ ...paperImages }} alt="The house from the offer." src={NotificationImg} />
          </Box>
        </Item1>
        <Item1>
          <Box sx={{ ...paper }}>
            <Box component="img" sx={{ ...paperImages }} alt="The house from the offer." src={NotificationImg} />
          </Box>
        </Item1>
        <Item1>
          <Box sx={{ ...paper }}>
            <Box component="img" sx={{ ...paperImages }} alt="The house from the offer." src={NotificationImg} />
          </Box>
        </Item1>
      </Box>
    </div>
  );
}
