import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (<div>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button 
      LinkComponent={Link}
      to="/books"
      sx={{marginTop:15,background:"orengered"}} 
      
      variant="contained">

      <Typography variant ="h3">View All product</Typography>  
        </Button>

    </Box>
  </div>// bhai return k neeche div , krne se error aa rha tha, div or return ek line m alighn hone chiye
  );
};

export default Home;