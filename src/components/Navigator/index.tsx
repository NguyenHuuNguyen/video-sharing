import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';
import { setShowLogin, resetAuthData } from '../../store';

const Navigator: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.accessToken);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(setShowLogin(true));
  };

  const handleLogoutClick = () => {
    dispatch(resetAuthData());
  };

  return (
    <div className='w-[300px] h-full flex-shrink-0 box-shadow px-3 py-5 fixed'>
      <div className='flex flex-col'>
        <div className='flex gap-3'>
          <img src='/asset/images/ShoppingIcon.png' className='w-[40px] h-[40px]' alt='shopping icon' />
          <p className='text-[28px] font-[400]'>Video sharing</p>
        </div>
        <div className='mt-7 flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
            <NavLink to="/" className='text-[28px] font-[400] flex gap-2 items-center'>
              <img src='/asset/images/Home.png' alt='Home' className='w-[24px] h-[24px]' />
              Home
            </NavLink>
          </div>
          {isLoggedIn ? (
            <>
              <div className='flex gap-2 items-center'>
                <NavLink to="/page2" className='text-[28px] font-[400] flex gap-2 items-center'>
                  <img src='/asset/images/User_alt.png' alt='Profile' className='w-[24px] h-[24px]' />
                  Page2
                </NavLink>
              </div>
              <button
                className='bg-[#08C03C] rounded-[8px] flex-shrink-0 w-[260px] h-[44px] text-[28px] font-[700] text-white'
                onClick={handleLogoutClick}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <button
              className='bg-[#08C03C] rounded-[8px] flex-shrink-0 w-[260px] h-[44px] text-[28px] font-[700] text-white'
              onClick={handleLoginClick}
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navigator;
