import { Grid, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Grid container sx={{ p: 2, paddingLeft: '11.5%', backgroundColor: "#f0f0f0" }}>
            <Typography sx={{ fontSize: '13px', color: "#333" }}>Copyright Ⓒ 2001-2008 Sabka Bazar Grocery Supplies Pvt Ltd</Typography>
        </Grid>
    );
}

export default Footer;