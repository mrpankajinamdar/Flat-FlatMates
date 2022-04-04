import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import image1 from './images/image1.jpg';
import Typography from '@mui/material/Typography';

const FlatCard = () => {
  return (
    <div>
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src={image1} alt='' className='img'/>
                <Box padding={1}>
                    <Typography variant='subtitle1' component='h2'>
                     2BHK For Rent 
                    </Typography>
                </Box>
                <Box>
                    sx{

                    }
                </Box>
            </Paper>

        </Grid>


    </div>
  )
}

export default FlatCard