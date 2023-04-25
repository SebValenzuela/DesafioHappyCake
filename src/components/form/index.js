import './form.css'
import { Card, Form, Col, Row } from 'react-bootstrap'
import Button from '../button'

export default () => {
    return (
        <div className='bg-gradients'>
            <Card.Title><h1>En que te podemos ayudar</h1></Card.Title>
            <div className='form-class'>
                <Form className='container mt-5'>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Escribenos tu problema</Form.Label>
                        <Form.Control type='textarea' rows={3} />
                    </Form.Group>
                    <Row>
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
        </div>
    )
}