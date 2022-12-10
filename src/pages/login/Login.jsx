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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis cupiditate maiores mollitia quidem delectus exercitationem minus rerum, molestiae, dolores, impedit deserunt sed distinctio. Dolores inventore ullam animi dignissimos at.</p>
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
            <button onClick={onLogin} >Masuk </button>
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