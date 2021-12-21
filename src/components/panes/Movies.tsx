import MovieCarousel from "./MovieCarousel";
import {Container} from "react-bootstrap";
import {CardGroup, Card, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import style from '../../style/scss/movies.module.scss';
import AntMan from '../../style/images/movies/ant-man.jpeg';
import Avatar from '../../style/images/movies/Avatar.jpeg';
import BabyDriver from '../../style/images/movies/BABY-Driver.jpeg';
import Dune from '../../style/images/movies/Dune.jpeg';
import HouseGucci from '../../style/images/movies/House-of-Gucci.jpeg';
import Incredible from '../../style/images/movies/Incredibles.jpeg';
import Joker from '../../style/images/movies/Joker.jpeg';
import Mermaid from '../../style/images/movies/Mermaid.jpeg';
import Moonlight from '../../style/images/movies/MoonLight.jpeg';
import SpiritAway from '../../style/images/movies/spirited-away.jpeg';
import Matrix from '../../style/images/movies/The-Matrix.jpeg';
import Titanic from '../../style/images/movies/Titanic.jpeg';


const images = [AntMan, Avatar, BabyDriver, Dune, HouseGucci, Incredible, Joker, Mermaid, Moonlight, SpiritAway, Matrix, Titanic];

function Movies() {
    let movies = images.map((link, index) =>
        <Col xs={12} md={6} lg={4}>
            <Card>
                <Card.Img variant="top" src={link} />
                <Card.Footer>
                    <FontAwesomeIcon className="me-2" style={{color: "#f5c519"}} icon={faStar}/>
                    <small className="text-muted">7.{index}</small>
                </Card.Footer>
            </Card>
            <br/>
        </Col>
    )
    return(
        <Container className={style.Movies}>
            <br/>
            <MovieCarousel/>
            <hr/>
            <Row>
                {movies}
            </Row>
        </Container>
    );
}

export default Movies;