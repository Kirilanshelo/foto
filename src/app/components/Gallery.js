"use client";
import React, { useState } from 'react';
import { Grid, Dialog, DialogContent, IconButton } from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ImageGrid from './ImageGrid';

const collections = {
  kyoto: ['kyoto1.jpg', 'kyoto2.jpg', 'kyoto3.jpg', 'kyoto4.jpg', 'kyoto5.jpg', 'kyoto6.jpg', 'kyoto7.jpg', 'kyoto8.jpg', 'kyoto9.jpg', 'kyoto10.jpg', 'kyoto11.jpg', 'kyoto12.jpg', 'kyoto13.jpg', 'kyoto14.jpg', 'kyoto15.jpg', 'kyoto16.jpg', 'kyoto17.jpg', 'kyoto18.jpg', 'kyoto19.jpg', 'kyoto20.jpg', 'kyoto21.jpg', 'kyoto22.jpg', 'kyoto23.jpg', 'kyoto24.jpg', 'kyoto25.jpg'],
  tokyo: ['tokyo1.jpg', 'tokyo2.jpg', 'tokyo3.jpg', 'tokyo4.jpg', 'tokyo5.jpg', 'tokyo6.jpg', 'tokyo9.jpg', 'tokyo10.jpg', 'tokyo11.jpg', 'tokyo12.jpg', 'tokyo13.jpg', 'tokyo14.jpg', 'tokyo15.jpg', 'tokyotower1.jpg', 'tokyotower2.jpg', 'teamlab1.jpg', 'teamlab2.jpg', 'meiji1.jpg', 'meiji2.jpg', 'hachiko.jpg', 'fujisan.jpg', 'odaiba1.jpg', 'odaiba2.jpg'],
  takayama: ['takayama1.jpg', 'takayama2.jpg', 'takayama3.jpg', 'takayama4.jpg', 'takayama5.jpg', 'takayama6.jpg', 'takayama7.jpg', 'takayama8.jpg', 'takayama9.jpg'],
  kanazawa: ['kanazawa1.jpg', 'kanazawa2.jpg', 'kanazawa3.jpg', 'kanazawa4.jpg'],
  nara: ['nara1.jpg', 'nara2.jpg', 'nara3.jpg', 'nara4.jpg', 'nara5.jpg', 'nara6.jpg'],
  osaka: ['osaka1.jpg', 'osaka2.jpg', 'osaka3.jpg', 'osaka4.jpg', 'osaka5.jpg', 'osaka6.jpg'],
  shirakawago: ['shirakawago1.jpg', 'shirakawago2.jpg', 'shirakawago3.jpg', 'shirakawago4.jpg'],
  thailandia: ['thai1.jpg', 'thai2.jpg', 'thai3.jpg', 'thai4.jpg', 'thai5.jpg', 'thai6.jpg']
};

const PhotoGallery = ({ collection }) => {
  const images = collections[collection];
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center" marginTop={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ImageGrid image={image} collection={collection} onClick={() => handleClickOpen(image)} />
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent sx={{ position: 'relative', padding: 0 }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}
          >
            X
          </IconButton>
          <div style={{ position: 'relative', width: '100vw', height: '80vh', background: 'transparent'}}>
            <img
              src={`/images/${collection}/${selectedImage}`}
              alt={selectedImage}
              style={{ 'max-width': '100%', 'max-height': '100%' }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;
