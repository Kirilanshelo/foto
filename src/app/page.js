"use client";
import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PhotoGallery from './components/Gallery';

const Home = () => {
  const [collection, setCollection] = useState('tokyo');

  const handleCollectionChange = (event) => {
    setCollection(event.target.value);
  };

  return (
      <Container maxWidth="lg" sx={{ padding: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Honeymoon Gallery
        </Typography>
        <FormControl sx={{color: '#fff'}} fullWidth>
          <InputLabel id="collection-select-label">Choose a collection</InputLabel>
          <Select
            variant='filled'
            labelId="collection-select-label"
            id="collection-select"
            value={collection}
            label="Choose a collection"
            onChange={handleCollectionChange}
            sx={{color: '#fff'}}
          >
            <MenuItem value="kyoto">kyoto</MenuItem>
            <MenuItem value="tokyo">tokyo</MenuItem>
            <MenuItem value="takayama">takayama</MenuItem>
            <MenuItem value="kanazawa">kanazawa</MenuItem>
            <MenuItem value="nara">nara</MenuItem>
            <MenuItem value="osaka">osaka</MenuItem>
            <MenuItem value="shirakawago">shirakawago</MenuItem>
            <MenuItem value="thailandia">thailandia</MenuItem>
          </Select>
        </FormControl>
        <PhotoGallery collection={collection} />
      </Container>
  );
};

export default Home;
