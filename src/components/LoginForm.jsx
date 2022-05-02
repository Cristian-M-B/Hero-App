import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from '../context/StoreProvider.js';
import { actionsTypes } from '../context/StoreReducer.js';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function submitForm(values) {
        try {
            let response = await axios.post('http://challenge-react.alkemy.org', values);
            dispatch({ type: actionsTypes.SET_TOKEN, payload: response.data.token });
            navigate('/');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ingrese un email y contraseña validos!',
                confirmButtonText: 'Cerrar',
                timer: 5000,
            })
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            let errors = {}
            if (!values.email) {
                errors.email = 'El email es requerido'
            }
            if (!values.password) {
                errors.password = 'La contraseña es requerida'
            }
            return errors
        },
        onSubmit: (values, { resetForm }) => {
            submitForm(values);
            resetForm();
        }
    })

    return (
        <div style={{ height: '100vh' }} className='d-flex align-items-center'>
            <Container style={{ width: '30vw', borderRadius: '10px', border: '1px solid #212529', boxShadow: '10px 10px 10px #212529' }} className='bg-light p-3'>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className='mt-3'>
                                <Form.Control
                                    name='email'
                                    type='email'
                                    placeholder='Email *'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                <Form.Text className='text-danger'>
                                    {formik.touched.email && formik.errors.email}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className='mt-3'>
                                <Form.Control
                                    name='password'
                                    type='password'
                                    placeholder='Contraseña *'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <Form.Text className='text-danger'>
                                    {formik.touched.password && formik.errors.password}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                type='submit'
                                variant='dark'
                                className='mt-3 mb-3'
                                style={{ width: '100%' }}
                            >
                                ENVIAR
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}
