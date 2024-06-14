import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdPerson2 } from "react-icons/md";
import '../styles/Signin.css'

export default function Signin() {

  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
    setUser(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const tmpError: string = user.trim().length<3 ? 'Name is too short' : '';
    setError(tmpError);
    if(!tmpError){
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/test');
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <div className='form-input-icon'><MdPerson2 size={30}/></div>
          <input 
            type='text' 
            placeholder='Inserisci il tuo nome' 
            name='name' 
            value={user} 
            onChange={handleUserChange}
          />
          {
            error && 
            <span className='error-msg'>{error}</span>
          }
        </div>
        <button className='submit-btn'>COMINCIA</button>
      </form>
    </div>
  )
}
