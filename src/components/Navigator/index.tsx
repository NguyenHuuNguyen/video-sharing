import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';
import { resetAuthData } from '../../store';
import { AiFillYoutube } from 'react-icons/ai';

const Navigator: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.accessToken);
  const userEmail = useSelector((state: RootState) => state.auth.email);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(resetAuthData());
  };

  return (
    <div className='w-full h-100px flex-shrink-0 shadow-xl fixed flex justify-between bg-grey p-5 px-10 top-0'>
      <NavLink to='/' className='flex items-center gap-3'>
        <div className='rounded-full bg-red-logo p-2'>
          <AiFillYoutube color='white' size={30}></AiFillYoutube>
        </div>
        <p className='text-red-text text-3xl font-extrabold text-shadow'>Youtube Videos Sharing</p>
      </NavLink>
      <div className='font-medium text-base flex justify-center'>
        {
          isLoggedIn
            ?
            <div className='flex gap-4 items-center'>

              <NavLink to='/share'>
                <button className='bg-blue text-white w-24 h-10 rounded'>Share</button>
              </NavLink>
              <p className='text-blue hover:cursor-pointer' onClick={handleLogoutClick}>Welcome {userEmail}</p>
            </div>
            :
            <div className='flex gap-3 items-center'>
              <NavLink to='/login'>
                <button className='bg-blue text-white w-24 h-10 rounded'>Login</button>
              </NavLink>
              <NavLink to='/register'>
                <button className='bg-grey text-blue w-24 h-10 rounded'>Register</button>
              </NavLink>
            </div>
        }
      </div>
    </div>
  );
};

export default Navigator;
