import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from '../context/StoreProvider.js';
import { actionsTypes } from '../context/StoreReducer.js';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';


export default function SearchBar() {
    const dispatch = useDispatch();

    async function submitForm(input) {
        try {
            let response = await axios.get(`https://superheroapi.com/api/4842455305833642/search/${input}`);
            if (response?.data?.results?.length) {
                dispatch({ type: actionsTypes.SEARCH, payload: response.data.results });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Character with given name not found!',
                    confirmButtonText: 'Close',
                    timer: 5000,
                })
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    const formik = useFormik({
        initialValues: {
            input: ''
        },
        validate: (values) => {
            let errors = {}
            if (values.input) {
                if (values.input.length < 4) {
                    errors.input = 'minimo 4 caracteres';
                }
            }
            return errors
        },
        onSubmit: (values, { resetForm }) => {
            submitForm(values.input);
            resetForm();
        }
    })

    return (
        <Container style={{ width: '30vw', borderRadius: '10px', border: '1px solid #212529', boxShadow: '10px 10px 10px #212529' }} className='bg-light p-3'>
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className='mt-3'>
                            <Form.Control
                                name='input'
                                type='text'
                                placeholder='Search ...'
                                value={formik.values.input}
                                onChange={formik.handleChange}
                            />
                            <Form.Text className='text-danger'>
                                {formik.touched.input && formik.errors.input}
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
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
