import './contact.css'
import { Card, Form, Col, Row } from 'react-bootstrap'
import Button from '../button'

export default () => {
    return (
        <>
            <Card.Title><h1> Estás en Contactos</h1></Card.Title>
            <div className='form-class'>
                <Form className='container'>
                    <Row className='mt-5'>
                        <Col>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type='text' placeholder='Nombre' />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type='text' placeholder='Apellido' />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type='email' placeholder='example@gmail.com' />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type='number' placeholder='+56 9 1234 5678' />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                            <Button
                                variant="primary"
                                message="enviar"
                                type="submit"
                            />
                        </Col>
                        <Col>
                            <Button
                                variant="danger"
                                message="eliminar"
                                type="submit"
                            />
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}