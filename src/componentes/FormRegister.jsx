import React from 'react'
import { Formik } from 'formik';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { schemaFormRegister } from '../utils/ValidateForms';
 
const FormRegister = () => {
        return (
        <Container className="my-3">
            <h1>REGISTRO</h1>
            <Formik
            validationSchema={schemaFormRegister}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    dni: '',
                    birthDay: '',
                    email: '',
                    password: '',
                    terms: false,
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                    isSubmitting,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row mb-3>
                            <Form.Group as={Col} md="6" controlId="validationFirstName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                    isInvalid={!!errors.firstName}
                                    feedback={errors.firstName}
                                    feedbackType="invalid"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationLastName">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>
                        <Row mb-3>
                            <Form.Group as={Col} md="6" controlId="validationDni">
                                <Form.Label>DNI</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="dni"
                                    value={values.dni}
                                    onChange={handleChange}
                                    isValid={touched.dni && !errors.dni}
                                    isInvalid={!!errors.dni}
                                    feedback={errors.dni}
                                    feedbackType="invalid"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.dni}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationBirthDay">
                                <Form.Label>FECHA NAC</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="birthDay"
                                    value={values.birthDay}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>
                        <Row mb-3>
                            <Form.Group as={Col} md="6" controlId="validationFormikEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={!!errors.email}
                                    feedback={errors.email}
                                    feedbackType="invalid"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationFormikPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={!!errors.password}
                                    feedback={errors.password}
                                    feedbackType="invalid"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3 mt-3">
                            <Form.Check
                                required
                                name="terms"
                                label="Aceptar Términos y Condiciones"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                feedbackType="invalid"
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button type="submit" disabled={isSubmitting}>Registrarse</Button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}
 
export default FormRegister
