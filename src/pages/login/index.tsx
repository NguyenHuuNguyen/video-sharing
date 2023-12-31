import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../../store/authSlice';
import { useLogin } from '../../services/queries';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface Props { }

const LoginPage: React.FC<Props> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const loginMutation = useLogin();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    const loginData = {
      email: username,
      password: password,
    };
  
    loginMutation.mutate(loginData, {
      onSuccess: (data) => {
        dispatch(setAuthData(data));
        navigate('/');
      },
      onError: (error) => {
          console.log(error.message)
      },
    });
  };

  const resetHandler = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className="justify-center items-center flex fixed inset-0 bg-white z-50">
      <div className='w-765px h-427px flex-shrink-0 shadow-shadow rounded-[10px] bg-white px-32 pt-8 pb-10 grid grid-rows-4 grid-cols-5 gap-y-7 gap-x-2 text-base font-medium'>
        <p className='col-start-1 col-end-6 text-blue text-xl font-bold flex justify-center items-center'>LOGIN SYSTEM</p>
        <p className='text-[#000] flex items-center'>Email</p>
        <input
          className='col-start-2 col-end-6 border-2 border-gray-300 px-3 rounded'
          onChange={(e) => setUsername(e.target.value)}
          type='email'
          value={username}
        />
        <p className='text-[#000] flex items-center'>Password</p>
        <input
          className='col-start-2 col-end-6 border-2 border-gray-300 px-3 rounded'
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div></div>
        <div className='flex gap-4 col-start-2 col-end-6'>
          <button className='bg-blue rounded text-white flex-1' onClick={loginHandler}>LOGIN</button>
          <button className='bg-white border border-gray-500 rounded text-gray-500 flex-1' onClick={resetHandler}>RESET</button>
        </div>
        <p className='col-start-3 col-end-6 italic text-base font-normal text-right'>
          <NavLink to='/register'>
            You don't have any account?
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
