import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import './PaymentPage.css'
import "../../App";


const orderSummary = {
    items: [
        { id: 1, name: "Product A", price: 30, quantity: 1 },
        { id: 2, name: "Product B", price: 20, quantity: 2 },
    ],
    total: 70,
};

const paymentMethods = ["Credit Card", "Paypal", "Apple Pay", "Cash On Delivery"];

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    address: yup.string().required("Address is required"),
    cardNumber: yup
        .string()
        .matches(/^\d{16}$/, "Card number must be 16 digits")
        .required("Card number is required"),
    expiryDate: yup
        .string()
        .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date (MM/YY)")
        .required("Expiry date is required"),
    cvv: yup
        .string()
        .matches(/^\d{3}$/, "CVV must be 3 digits")
        .required("CVV is required"),
    paymentMethod: yup.string().required("Please select a payment method"),
});

function PaymentPage() {
    return (
        <div className="container my-6">
            <Row>
                {/* Order Summary */}
                <Col md={4}>
                    <Card>
                        <Card.Header>Order Summary</Card.Header>
                        <Card.Body>
                            {orderSummary.items.map((item) => (
                                <div key={item.id} className="d-flex justify-content-between mb-2">
                                    <div>{item.name} x {item.quantity}</div>
                                    <div>${item.price * item.quantity}</div>
                                </div>
                            ))}
                            <hr />
                            <div className="d-flex justify-content-between fw-bold">
                                <div>Total:</div>
                                <div>${orderSummary.total}</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Billing Form */}
                <Col md={8}>
                    <Formik
                        validationSchema={schema}
                        onSubmit={(values) => {
                            alert("Payment confirmed!\n" + JSON.stringify(values, null, 2));
                        }}
                        initialValues={{
                            name: "",
                            email: "",
                            address: "",
                            cardNumber: "",
                            expiryDate: "",
                            cvv: "",
                            paymentMethod: "",
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values,
                            touched,
                            errors,
                            setFieldValue,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <h4>Billing Info</h4>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            isInvalid={touched.name && !!errors.name}
                                            isValid={touched.name && !errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isInvalid={touched.email && !!errors.email}
                                            isValid={touched.email && !errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        isInvalid={touched.address && !!errors.address}
                                        isValid={touched.address && !errors.address}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                                </Form.Group>

                                <h5>Payment Details</h5>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="cardNumber">
                                        <Form.Label>Card Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="cardNumber"
                                            maxLength={16}
                                            value={values.cardNumber}
                                            onChange={handleChange}
                                            isInvalid={touched.cardNumber && !!errors.cardNumber}
                                            isValid={touched.cardNumber && !errors.cardNumber}
                                            placeholder="1234123412341234"
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="3" controlId="expiryDate">
                                        <Form.Label>Expiry Date (MM/YY)</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="expiryDate"
                                            value={values.expiryDate}
                                            onChange={(e) => {
                                                let input = e.target.value.replace(/\D/g, ""); // يشيل أي حرف مش رقم
                                                if (input.length >= 3) {
                                                    input = input.slice(0, 2) + "/" + input.slice(2, 4);
                                                }
                                                setFieldValue("expiryDate", input);
                                            }}
                                            isInvalid={touched.expiryDate && !!errors.expiryDate}
                                            isValid={touched.expiryDate && !errors.expiryDate}
                                            placeholder="MM/YY"
                                            maxLength={5}
                                        />

                                        <Form.Control.Feedback type="invalid">{errors.expiryDate}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="3" controlId="cvv">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="cvv"
                                            maxLength={3}
                                            value={values.cvv}
                                            onChange={handleChange}
                                            isInvalid={touched.cvv && !!errors.cvv}
                                            isValid={touched.cvv && !errors.cvv}
                                            placeholder="123"
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.cvv}</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <h5>Payment Method</h5>
                                <Form.Group className="mb-3">
                                    {paymentMethods.map((method) => (
                                        <Form.Check
                                            key={method}
                                            type="radio"
                                            label={method}
                                            name="paymentMethod"
                                            value={method}
                                            checked={values.paymentMethod === method}
                                            onChange={handleChange}
                                            isInvalid={touched.paymentMethod && !!errors.paymentMethod}
                                            feedback={errors.paymentMethod}
                                            feedbackType="invalid"
                                        />
                                    ))}
                                </Form.Group>

                                <Button type="submit">Confirm Payment</Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </div>
    );
}

export default PaymentPage;
