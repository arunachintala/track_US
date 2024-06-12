import React from 'react';
import rect from '../../assets/Rectangle 6319.svg';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Banner() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container style={{ backgroundColor: '#FBEAE7', border: '1px solid #ddd', borderRadius: '16px', padding: '20px' }}>
            <Grid item xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: isSmallScreen ? '20px' : '40px' }}>
                <Typography variant="h1" style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: isSmallScreen ? '28px' : '36px', lineHeight: isSmallScreen ? '42px' : '54px', color: '#121114' }}>
                    Customise your tracking page
                </Typography>
                <Typography variant="body1" style={{ color: '#5F5A6B', fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24.83px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget sem iaculis, congue ligula ac, imperdiet purus. Nunc elementum massa metus, id consectetur justo aliquet quis.
                </Typography>
            </Grid>
            <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={rect} alt="nologo" style={{ maxWidth: '100%', borderRadius: '16px' }} />
            </Grid>
        </Grid>
    );
}

export default Banner;
