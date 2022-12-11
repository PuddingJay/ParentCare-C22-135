import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { login } from '../../utils/api';


const Login = ({ loginSuccess }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLogin = () => {
    getUserDataLogin(
      {
        email: email,
        password: password,
      })
  }

  async function getUserDataLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      alert('Selamat Datang ☺');
      loginSuccess(data);
    } else {
      alert('Email belum terdaftar nih, daftar duluuu')
    }
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Selamat Datang</h1>
          <p>Forum yang membantu para orang tua terkait masalah yang mereka hadapi dalam mendidik anak mereka , di aplikasi ini juga para orang tua dapat berdiskusi ataupun bertukar cerita dan memberikan solusi terhadap permasalahan yang sedang dihadapi. Di website ini juga ada artikel-artikel yang dapat dibaca oleh orang tua untuk mengedukasi orang tua dalam menentukan pola asuh yang terbaik untuk anak.</p>
          <span>Belum Memiliki Akun?</span>
          <Link to='/register'>
            <button>Daftar Disini</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <div>
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
            <Link to='/'>
              <button onClick={onLogin} >Masuk </button>
            </Link>
          </div>
          <div className="toRegister">
            <span>Belum Memiliki Akun?</span>
            <Link to='/register'>
              <span>Daftar Disini</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;