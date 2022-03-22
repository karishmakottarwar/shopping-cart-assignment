import { Paper, Grid, Button, Typography } from '@mui/material';
import data from '../../../server/categories/index.get.json';

const Categories = () => {
    return (
        <>
            {
                [].concat(data)
                    .sort((a, b) => a.order > b.order ? 1 : -1)
                    .map(({ id, name, imageUrl, key, order, description, enabled }) => {
                        const img = <Grid item xs={4}>
                            <img className='categoryImage' src={imageUrl} alt={name} />
                        </Grid>
                        if (!enabled) return null;
                        else return (<Paper key={id} elevation={1} sx={{ my: 3.5 }}>
                            <Grid container justifyContent="space-between" sx={{ py: 2 }}>
                                {(order % 2 !== 0) ?
                                    img
                                    :
                                    null}
                                <Grid item xs={8} sx={{ textAlign: 'center', alignSelf: 'center', px: 2 }}>
                                    <Typography variant={'h5'} sx={{ mb: 1.5 }}>{name}</Typography>
                                    <Typography sx={{ mb: 2.5, fontSize: '14px', color: "#333" }}>{description}</Typography>
                                    <Button className="explore" href={`/products/${id}`}><span>Explore</span>&nbsp;{key}</Button>
                                </Grid>
                                {(order % 2 === 0) ?
                                    img
                                    :
                                    null}
                            </Grid>
                        </Paper>
                        )
                    })
            }
        </>
    );
}

export default Categories;