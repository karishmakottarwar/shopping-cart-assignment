import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Stack } from '@mui/material';
import './login.styles.css';

const Login = ({users,setLoggedInUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const handleLogin = () => {
        if (email && password) {
            const reversePass = password.split('').reverse().join('')
            const userLists = users;
            const loggedInUser = userLists.every(x => x.email === email && x.password === reversePass)
            if (loggedInUser) {
                setLoggedInUser(true);
                setEmail('');
                setPassword('');
                history.push('/')
            }else{
                alert('Please enter the valid Email or Password!')
            }
        } else {
            alert('All fields are required!')
        }
    }
    return (
        <Grid container sx={{ my: 3, padding: '0px 19%' }}>
            <Grid item xs={6}>
                <Typography variant={'h5'}>Login</Typography>
                <Typography sx={{ color: '#333', fontSize: '16px', mt: 3.5 }}>Get access to your Orders, Wishlist and Recommendations</Typography>
            </Grid>
            <Grid item xs={6}>
                <Stack
                    component="form"
                    spacing={3}
                    noValidate
                    autoComplete="off"
                    sx={{ width: '75%' }}
                >
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)} className="input" id="email" type="email" label="Email" variant="standard" />
                    <TextField value={password} onChange={(e) => setPassword(e.target.value)} className="input" id="password" type="password" label="Password" variant="standard" />
                    <Button className='loginButton' onClick={handleLogin}>Login</Button>
                </Stack>
            </Grid>
        </Grid>
    );

}

export default Login;