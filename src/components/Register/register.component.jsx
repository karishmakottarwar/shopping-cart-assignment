import { useState } from 'react';
import { Grid, Typography, TextField, Button, Stack } from '@mui/material';
import '../Login/login.styles.css';

const Register = ({ users, setUsers }) => {
    const initial = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };
    const [fields, setFields] = useState(initial);
    const [confirmPass, setPass] = useState('')
    const handleChange = (e, name) => {
        const obj = { ...fields, [name]: e.target.value }
        setFields(obj);
    }
    const handleRegister = () => {
        const userLists = [...users];
        let allFields = Object.values(fields).every((v) => v !== '');
        if (allFields) {
            if (confirmPass === fields.password) {
                userLists.push({ ...fields, password: fields.password.split('').reverse().join('') });
                setUsers(userLists)
                setFields(initial);
                setPass('');
                alert('User registered successfully!')
            } else {
                alert('Confirm Password does not match with the entered Password!')
            }
        } else {
            alert('All fields are required!')
        }
    }
    return (
        <Grid container sx={{ my: 3, padding: '0px 19%' }}>
            <Grid item xs={6}>
                <Typography variant={'h5'}>Signup</Typography>
                <Typography sx={{ color: '#333', fontSize: '16px', mt: 3.5 }}>We do not share your personal details with anyone.</Typography>
            </Grid>
            <Grid item xs={6}>
                <Stack
                    component="form"
                    spacing={3}
                    noValidate
                    autoComplete="off"
                    sx={{ width: '75%' }}
                >
                    <TextField value={fields.firstName} onChange={(e) => handleChange(e, 'firstName')} className='input' id="first-name" label="First Name" variant="standard" />
                    <TextField value={fields.lastName} onChange={(e) => handleChange(e, 'lastName')} className='input' id="last-name" label="Last Name" variant="standard" />
                    <TextField value={fields.email} onChange={(e) => handleChange(e, 'email')} className='input' type="email" id="email" label="Email" variant="standard" />
                    <TextField value={fields.password} onChange={(e) => handleChange(e, 'password')} className='input' type="password" id="password" label="Password" variant="standard" />
                    <TextField value={confirmPass} onChange={(e) => setPass(e.target.value)} className='input' type="password" id="confirm-password" label="Confirm Password" variant="standard" />
                    <Button className='loginButton' onClick={handleRegister}>Signup</Button>
                </Stack>
            </Grid>
        </Grid>
    );

}

export default Register;