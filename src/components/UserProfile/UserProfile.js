import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateUserInfo } from '../../api/UsersAPI';
import { useUser } from '../../UserContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import './UserProfile.css';
import {deleteUser} from '../../api/UsersAPI';

export default function UserAccount() {
    const token = localStorage.getItem('token');
    const { user: currentUser, setUser } = useUser();
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        try {
                const response = await deleteUser(currentUser._id);
                if (response) {
                    navigate('/login');
                    alert('User deleted successfully!');
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    setUser(null);
                }
            } catch (error) {
                alert(error.message || 'Something went wrong');
            }
    }

    const formik = useFormik({
        initialValues: {
            name: currentUser.name || '',
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            oldPassword: Yup.string(),
            newPassword: Yup.string().min(6, 'Must be at least 6 characters'),
            confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const payload = { name: values.name };
                if (values.oldPassword && values.newPassword) {
                    payload.password = values.newPassword;
                }

                const updated = await updateUserInfo(payload, token);
                alert('User updated successfully!');
                localStorage.setItem('user', JSON.stringify(updated));
                localStorage.setItem('token', updated.token);
                setUser(updated); 
            } catch (error) {
                alert(error.message || 'Something went wrong');
            } finally {
                setSubmitting(false);
            }
        }
    });

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary main-container">
            <div className="bg-white p-5 rounded shadow col-11 col-sm-10 col-md-8 col-lg-6 col-xl-7">
                <h1 className='text-center mb-4'>Your Profile</h1>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm={3}>Email</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="email" value={currentUser.email} readOnly />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="name">
                        <Form.Label column sm={3}>Full Name</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                isInvalid={formik.touched.name && formik.errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.name}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="oldPassword">
                        <Form.Label column sm={3}>Old Password</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                name="oldPassword"
                                value={formik.values.oldPassword}
                                onChange={formik.handleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="newPassword">
                        <Form.Label column sm={3}>New Password</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                name="newPassword"
                                value={formik.values.newPassword}
                                onChange={formik.handleChange}
                                isInvalid={formik.touched.newPassword && formik.errors.newPassword}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.newPassword}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="confirmPassword">
                        <Form.Label column sm={3}>Confirm New Password</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.confirmPassword}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 9, offset: 3 }}>
                            <Button type="submit" disabled={formik.isSubmitting}>
                                {formik.isSubmitting ? 'Updating!!' : 'Update My Info'}
                            </Button>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 9, offset: 3 }}>
                            <Button onClick={handleDeleteAccount}  className='mt-2'>
                                Delete Your Account
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}
