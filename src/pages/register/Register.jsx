import React from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { register } from '../../utils/api';


const Register = () => {
  const navigate = useNavigate();

  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [verifPassword, onVerifPasswordChange] = useInput('');

  const onRegister = () => {
    if (password === verifPassword) {
      getUserDataRegister(
        {
          name: name,
          email: email,
          password: password
        })
      alert('Berhasil Mendaftar');
    } else {
      alert('Password Harus Identik!');
    }
  }

  async function getUserDataRegister(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Parent Care</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis cupiditate maiores mollitia quidem delectus exercitationem minus rerum, molestiae, dolores, impedit deserunt sed distinctio. Dolores inventore ullam animi dignissimos at.</p>
          <span>Sudah Memiliki Akun?</span>
          <Link to='/login'>
            <button>Masuk Disini</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <div>
            <input type="text" placeholder="Name" value={name} onChange={onNameChange} />
            <input type="email" placeholder="email" value={email} onChange={onEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
            <input type="password" placeholder="Confirm Password" value={verifPassword} onChange={onVerifPasswordChange} />
            <button onClick={onRegister}>Daftar </button>
          </div>
          <div className="toRegister">
            <span>Sudah Memiliki Akun?</span>
            <Link to='/login'>
              <span>Masuk Disini</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;