import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
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
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Masuk </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;