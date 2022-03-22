import { useHistory } from 'react-router-dom';
import { Dialog, DialogActions, DialogTitle, DialogContent, Stack, IconButton, Typography, Box, Button, Grid, SvgIcon } from '@mui/material';
import './addtocart.styles.css';

const AddToCart = ({ cartItems, open, setCartOpen, handleRemoveItem, handleQty, isLoggedInUser }) => {
  const history = useHistory();
  const handleClose = () => {
    setCartOpen(false)
  }
  const handleCheckout = () => {
    if (!isLoggedInUser) history.push('/login')
    else alert('Order placed successfully!')
    setCartOpen(false);
  }
  const totalPrice = cartItems.reduce((total, x) => total + (x.price * x.qty), 0);
  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" sx={{ borderRadius: 0, backgroundColor: '#333', color: '#fff' }}>
        <Typography>
          <span className='heading'>My Cart </span>
          {cartItems.length ? <span style={{ fontSize: '20px' }}>({cartItems.length} item)</span> : null}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 10,
            color: '#fff',
          }}
        >
          <SvgIcon sx={{ fontSize: '16px' }}>
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </SvgIcon>
        </IconButton>
      </DialogTitle>
      {
        cartItems.length ?
          <>
            <DialogContent dividers sx={{ backgroundColor: '#f0f0f0', p: 0, height: '720px' }}>
              {
                cartItems.map((item, index) => {
                  return (
                    <Grid container key={item.id + index} sx={{ mt: 2, backgroundColor: '#fff', p: 1 }}>
                      <Grid item xs={2}>
                        <img className="cartImg" src={item.imageURL} alt={item.name} />
                      </Grid>
                      <Grid item xs={10} sx={{ px: 2 }}>
                        <Typography variant='h6' sx={{ mt: 1.2 }}>
                          {item.name}
                        </Typography>
                        <Grid container justifyContent={"space-between"} sx={{ mt: 2.2 }}>
                          <Grid item>
                            <Box>
                              <IconButton onClick={() => handleQty(item.qty, 'subtract', index)} className='icon'>
                                <SvgIcon sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                  <path d="M19 13H5v-2h14v2z"></path>
                                </SvgIcon>
                              </IconButton>
                              <span className='qty'>{item.qty}</span>
                              <IconButton className='icon' onClick={() => handleQty(item.qty, 'add', index)}>
                                <SvgIcon sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                </SvgIcon>
                              </IconButton>
                              <IconButton
                                onClick={() => handleRemoveItem(item.id)}
                                className='qty'
                              >
                                <SvgIcon sx={{ fontSize: '16px' }}>
                                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </SvgIcon>
                              </IconButton>
                              Rs.{item.price}
                            </Box>
                          </Grid>
                          <Grid item>
                            Rs.{item.price * item.qty}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )
                })
              }
              <Box sx={{ p: 2 }}>
                <Grid container sx={{ p: 2, backgroundColor: '#fff' }}>
                  <Grid item xs={3}><img className='cartImg' src={'/static/images/lowest-price.png'} alt='lowest-price' /></Grid>
                  <Grid item xs={7} sx={{ ml: 5, alignSelf: 'center' }}>You won't find it cheaper anywhere</Grid>
                </Grid>
              </Box>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'unset' }}>
              <Stack sx={{ width: '100%', p: 1 }}>
                <Typography sx={{ mb: 1.5, textAlign: 'center', fontSize: '15px' }}>Promo code can be applied on payment page</Typography>
                <Button
                  className='proceed'
                  autoFocus
                  onClick={handleCheckout}
                  endIcon={
                    <Grid container justifyContent={'space-between'} alignItems="center">
                      <Grid item>
                        <Typography>{`${totalPrice}`}</Typography>
                      </Grid>
                      <Grid item>
                        <SvgIcon sx={{ position: 'relative', top: '5px', left: '5px' }}>
                          <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                        </SvgIcon>
                      </Grid>
                    </Grid>
                  }
                >
                  Proceed to Checkout
                </Button>
              </Stack>
            </DialogActions>
          </>
          :
          <DialogContent dividers sx={{ p: 2, height: '720px', width: '450px' }}>
            <Stack sx={{ height: 'inherit' }} spacing={39.2}>
              <Box sx={{ textAlign: 'center', pt: 36 }}>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>No items in your cart</Typography>
                <Typography sx={{ mt: 2 }}>Your favourite items are just a click away</Typography>
              </Box>
              <Button sx={{ justifyContent: 'center!important' }} href="/products/all" className='proceed'>Start Shopping</Button>
            </Stack>
          </DialogContent>
      }
    </Dialog>
  );
}

export default AddToCart;