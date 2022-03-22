import Carousel from 'react-material-ui-carousel';
import data from '../../../server/banners/index.get.json';
import { Paper } from '@mui/material';

const ItemsCarousel = () => {
    return (
        <Paper sx={{ mt: 4 }}>
            <Carousel
                className='carouselContainer'
                navButtonsAlwaysVisible={true}
                NextIcon='Next'
                PrevIcon="Prev"
                navButtonsProps={{
                    style: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: 0,
                        padding: '8px',
                        color: '#fff',
                        fontSize: '13px',
                        margin: 0
                    }
                }}
                sx={{ height: '400px' }}
                indicatorContainerProps={{
                    style: {
                        position: 'relative',
                        bottom: '50px',
                        zIndex: 2
                    }
                }}
            >
                {
                    [].concat(data)
                        .sort((a, b) => a.order > b.order ? 1 : -1)
                        .map(({ id, isActive, bannerImageUrl, bannerImageAlt }) => isActive ? <img key={id} className="carouselImage" src={bannerImageUrl} alt={bannerImageAlt} /> : null)
                }
            </Carousel>
        </Paper>
    );
}

export default ItemsCarousel;
