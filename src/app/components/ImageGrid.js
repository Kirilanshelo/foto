import React from 'react';
import { Box } from '@mui/material';

const ImageGrid = ({ image, collection, onClick }) => {
  return (
    <Box
      component="img"
      src={`/images/${collection}/${image}`}
      alt={image}
      onClick={onClick}
      sx={{
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        borderRadius: '4px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      }}
    />
  );
};

export default ImageGrid;
