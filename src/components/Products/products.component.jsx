import { useParams, useHistory } from 'react-router-dom'
import { Paper, Typography, Grid, Button, Stack } from '@mui/material';
import categories from '../../server/categories/index.get.json';
import products from '../../server/products/index.get.json';
import './products.styles.css';

const Products = ({ handleSetItems }) => {
    const { productId } = useParams();
    const history = useHistory();
    const sortedCategories = [].concat(categories)
        .sort((a, b) => a.order > b.order ? 1 : -1)
        .filter(({ enabled }) => enabled);
    return (
        <Grid container sx={{ padding: '0px 11.5%', mt: 0.2 }}>
            <Grid item xs={3} sx={{ backgroundColor: '#f0f0f0' }}>
                {
                    sortedCategories
                        .map(({ id, name }) => {
                            return (
                                <Paper
                                    key={id}
                                    onClick={() => history.push(id)}
                                    sx={{ backgroundColor: 'inherit', px: 3, py: 1.2, mb: 0.4, borderRadius: 0, borderRight: 0, cursor: 'pointer' }}
                                >
                                    <Typography>{name}</Typography>
                                </Paper>
                            )
                        })
                }
            </Grid>
            <Grid item xs={9} sx={{ px: 3, py: 4, pb: 0 }}>
                <Grid container>
                    {
                        products
                            .filter(({ category }) => productId === 'all' || category === productId)
                            .map(({ id, name, imageURL, description, price, key }, i) => {
                                return (
                                    <Paper component={Grid} key={id + i} item xs={3} sx={{ borderRadius: 0, mb: 3.5, p: 1.8 }}>
                                        <Stack>
                                            <Typography variant={'h5'} sx={{ lineHeight: 1.2, mb: 1 }}>{name}</Typography>
                                            <img src={imageURL} alt={key} height='200' />
                                            <Typography sx={{ fontSize: '13px', color: '#333', backgroundColor: '#f0f0f0', p: 1.2, my: 2.6 }}>{description}</Typography>
                                        </Stack>
                                        <Grid container justifyContent={"space-between"}>
                                            <Grid item xs={6} sx={{ alignSelf: 'center' }}>
                                                <Typography sx={{ fontSize: '14px', color: '#333', fontWeight: 600 }}>MRP Rs.{price}</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button className="buyNow" onClick={() => handleSetItems({ id, name, imageURL, price, qty: 1 })}>Buy Now</Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>)
                            })
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Products;