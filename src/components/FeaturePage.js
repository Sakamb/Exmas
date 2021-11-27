import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@material-ui/core/Container';
import './FeaturePage.css'


function Item1(props) {
  const { sx, ...other } = props;
  return (
      
    <Box
        sx={{
        bgcolor: 'primary.main',
        color: 'white',
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
          gridTemplateColumns: 'repeat(2, 1fr)',
          my: 15,
        }}
      >
        <Item1>1</Item1>
        <Item1>2</Item1>
        <Item1>3</Item1>
        <Item1>4</Item1>
        <Item1>4</Item1>
        <Item1>4</Item1>
      </Box>
    </div>
  );
}
