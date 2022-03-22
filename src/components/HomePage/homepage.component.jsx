import ItemsCarousel from './Carousel/carousel.component';
import Categories from './Categories/categories.component';
import './homepage.styles.css';

const HomePage = () => {
    return (
        <div className="homepageContainer">
            <ItemsCarousel />
            <Categories />
        </div>
    );
}

export default HomePage;