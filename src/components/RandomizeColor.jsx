import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export default function RandomizeColor() {
  const onClick = e => {
    let body = document.querySelector('body');
    
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  return (
    <Container>
      <Typography variant='h3' textAlign='center'>
        Randomize Color
      </Typography>
      <Stack direction='row' justifyContent='center' gap='10px' mt={5}>
        <Button
          onClick={onClick} 
          variant='contained' 
          color='primary'
        >
          Click Me
        </Button>
        <Button
          onClick={onClick} 
          variant='contained' 
          color='error'
        >
          Click Me
        </Button>
        <Button
          onClick={onClick} 
          variant='contained' 
          color='success'
        >
          Click Me
        </Button>
        <Button
          onClick={onClick} 
          variant='contained' 
          color='warning'
        >
          Click Me
        </Button>
      </Stack>
    </Container>
  )
}
