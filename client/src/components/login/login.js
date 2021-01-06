import React, { useState } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import facebookImg from '../../images/facebook.png';
import googleImg from '../../images/google.png';
import './css/login.css';
import config from '../../config';
import authSvg from '../../assests/login.svg';

function Login(props) {

    // Bad code for facebook redirect and get token
    const address = window.location.href;
    if (address.indexOf('?token=') !== -1) {
        var token = address.substr(address.indexOf('?token=') + '?token='.length);
        if (token.indexOf('#chouser') !== -1) {
            token = token.substr(0, token.indexOf('#chouser'));
        }
        localStorage.setItem('token', token);
        window.location.href = '/';
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { message } = props;
    const { actions } = props;
  
    function validateForm() {
        const { isFetching } = props;
        return !isFetching && username.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
        event.preventDefault();
        actions.fetchLogin(username, password);
    }

    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-20 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Đăng nhập</h1>
              <div className="w-full flex-1 mt-8 text-indigo-500">
                <div className="flex flex-col items-center">
                  {/* <FacebookLogin
                    appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
                    autoLoad={false}
                    callback={responseFacebook}
                    render={renderProps => (
                      <button
                        onClick={renderProps.onClick}
                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                      >
                        <div className=" p-2 rounded-full ">
                          <i className="fab fa-facebook" />
                        </div>
                        <span className="ml-4">Sign In with Facebook</span>
                      </button>
                    )}
                  /> */}

                   </div>
     
                <form
                  className="mx-auto max-w-xs relative "
                  onSubmit={handleSubmit}
                >
                  <input
                    className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    placeholder="Tên đăng nhập"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                  />
                  <input
                    className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4"
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                  <button
                    type="submit"
                    className={` mt-4 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg ${validateForm()?`hover:bg-indigo-700 transition-all duration-300` : ''} ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
                    block
                    disabled={!validateForm()}
                  >
                    <i className="fas fa-sign-in-alt  w-6  -ml-2" />
                    <span className="ml-3">Đăng nhập</span>
                  </button>
                  <Link
                    to="/password/forget"
                    className="no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2"
                  >
                    Quên mật khẩu?
                  </Link>
                </form>
                <div className="my-12 border-b text-center">
                <p className="status-login-small">{message}</p>
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Hoặc đăng ký
                  </div>
                </div>
                <div className="flex flex-col items-center">
                <Link
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-2"
                    to="/register"
                  >
                    <i className="fas fa-user-plus fa 1x w-6  -ml-2 text-indigo-500" />
                    <span className="ml-4">Đăng ký</span>
                  </Link>
                  </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${authSvg})` }}
            ></div>
          </div>
        </div>
        ;
      </div>
    );
}

export default Login;