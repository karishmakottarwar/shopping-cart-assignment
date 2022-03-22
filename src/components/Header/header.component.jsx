import { AppBar, Container, Toolbar, Typography, Box, Button, SvgIcon, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = ({ totalItems, setCartOpen, isLoggedInUser, setLoggedInUser }) => {
  const handleClick = () => {
    setLoggedInUser(false);
  }
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', padding: '0px 11.5%' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography component="div" sx={{ mr: 15 }}>
            <img src={'/static/images/logo.png'} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, position: 'relative', top: '25px' }}>
            <Link className="menuItem" to='/'>Home</Link>
            <Link className="menuItem" to='/products/all'>Products</Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container justifyContent='flex-end'>
                {
                  isLoggedInUser ?
                    <Link className="menuItem auth" to='' onClick={handleClick}>SignOut</Link>
                    :
                    <Link className="menuItem auth" to='/login'>SignIn</Link>
                }
                <Link className="menuItem auth" to='/signup'>Register</Link>
              </Grid>
            </Box>
            <Button
              onClick={() => setCartOpen(true)}
              className={"addToCart"}
            >
              <SvgIcon sx={{ color: '#dc143c', height: '18px', mr: 0.8 }}>
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </SvgIcon>
              <Typography sx={{ fontSize: '14px', color: '#333' }}>{totalItems} items</Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;