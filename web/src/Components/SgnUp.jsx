import { useState } from 'react';
import axios from 'axios'


const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8081/user/signup', {
                first_name: formData.firstName,
                second_name: formData.secondName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
            });

            if (response.data.status) {
                alert('Signup successful');
            } else {
                alert('Signup failed: ' + response.data.errors);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred during signup');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input name="secondName" placeholder="Second Name" value={formData.secondName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Sigup;
