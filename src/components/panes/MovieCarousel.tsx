import Carousel from "react-multi-carousel";
import {Image} from 'semantic-ui-react';
import 'react-multi-carousel/lib/styles.css';
import luca from '../../style/images/movies/luca.jpeg';
import pokemon from '../../style/images/movies/pokemon.jpeg';
import roberrt from '../../style/images/movies/roberrt.jpeg';
import starwar from '../../style/images/movies/star-war.jpeg';
import wendy from '../../style/images/movies/wendy.jpeg';
import cat from '../../style/images/movies/cat.jpeg';
import clown from '../../style/images/movies/clown.jpeg';
import lastdragon from '../../style/images/movies/last-dragon.jpeg';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 200},
        items: 3
    }
};
const images = [luca, pokemon, roberrt, starwar, wendy, cat, clown, lastdragon];

function MovieCarousel(){
    return (
        <Carousel
            deviceType="desktop"
            centerMode={true}
            responsive={responsive}
        >
            {images.map(image => {
                return (
                    <Image
                        draggable={false}
                        style={{ width: '100%', height: "100%", padding: '0.5em'}}
                        src={image}
                    />
                );
            })}
        </Carousel>
    );
}

export default MovieCarousel;