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

export default function FeaturePage() {
  return (
    <div className="intro-page">
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(3, 1fr)',
          my: 15,   
          alignItems: 'left',
          height: 500,
          width: 500,
        //   maxHeight: { xs: 233, md: 167 },
        //   maxWidth: { xs: 350, md: 250 },
          left: 256,
          top: 160,
          position: 'relative',
        
        }}
      >
        <Item1>
        <Box sx={{
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
       
      }}
    >
      <Box
        component="img"
        sx={{
          alignItems: 'left',
          height: 200,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },

        }}
        alt="The house from the offer."
        src={NotificationImg}
      />
        </Box>
        </Item1>
        <Item1>
        <Box sx={{
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
       
      }}
    >
      <Box
        component="img"
        sx={{
          alignItems: 'left',
         

        }}
        alt="The house from the offer."
        src={NotificationImg}
      />
        </Box>
        </Item1>
        <Item1>
        <Box sx={{
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
       
      }}
    >
      <Box
        component="img"
        sx={{
          alignItems: 'left',
         

        }}
        alt="The house from the offer."
        src={NotificationImg}
      />
        </Box>
        </Item1>
        <Item1>
        <Box sx={{
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
       
      }}
    >
      <Box
        component="img"
        sx={{
          alignItems: 'left',
         

        }}
        alt="The house from the offer."
        src={NotificationImg}
      />
        </Box>
        </Item1>
        <Item1>
        <Box sx={{
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
       
      }}
    >
      <Box
        component="img"
        sx={{
          alignItems: 'left',
         

        }}
        alt="The house from the offer."
        src={NotificationImg}
      />
        </Box>
        </Item1>
        <Item1>
        <Box sx={{
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
       
      }}
    >
      <Box
        component="img"
        sx={{
          alignItems: 'left',
         

        }}
        alt="The house from the offer."
        src={NotificationImg}
      />
        </Box>
        </Item1>
      </Box>
    </div>
  );
}
