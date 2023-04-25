import '../assets/general.css'
import './home.css'
import { Container, Row, Col } from 'react-bootstrap'

export default () => {
    return (
        <>
            <h1 className="home-class"> 
                <Container>
                    <Row>
                        <Col>Jedi Knight</Col>
                        <Col><img src='https://w7.pngwing.com/pngs/452/436/png-transparent-anakin-skywalker-star-wars-jedi-knight-ii-jedi-outcast-stormtrooper-star-wars-jedi-knight-ii-jedi-outcast-stormtrooper-leaf-logo-monochrome-thumbnail.png'></img></Col>
                    </Row>
                </Container>
            </h1>
        </>
    )
}