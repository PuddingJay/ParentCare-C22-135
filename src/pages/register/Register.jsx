import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
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
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="Password" />
            <button>Masuk </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;