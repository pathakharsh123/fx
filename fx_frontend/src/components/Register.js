
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon, faFontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, {useState, useRef, useEffect} from'react';
import { Navigate } from 'react-router-dom';







const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&])(?=.*[a-z]).{8,24}$/;


export default function Register(props) {

  const { user, register} = props;
  const [formData, setFormData] = useState({
      username: '',
      password: '',
      re_password: ''
  });
  const [accountCreated, setAccountCreated] = useState(false);

  const {username, password, re_password} = formData;

 const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  //const dispatch = useDispatch();
  const onSubmit = e => {
      e.preventDefault();
      if (username === '' || password === '' || re_password === '') {
          alert('Please fill all the fields');
          return;
      };
      if (password!== re_password) {
          alert('Passwords do not match');
          return;
      };

      if (password === re_password) {
              register(formData)
          };
      
  };

    return(
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
           
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Welcome to Quasar.tech </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    username
                    </label>
                    <div className="mt-1">
                    <input
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="username"
                        value={username}
                        minLength="3"
                        onChange={e => onChange(e)}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block mt-5 text-sm font-medium text-gray-700">
                    Password
                    </label>
                    <div className="mt-1">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength ="8"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="confirm-password" className="block mt-5 text-sm font-medium text-gray-700">
                    Confirm Password
                    </label>
                    <div className="mt-1">
                    <input
                        id="confirm-password"
                        name="re_password"
                        type="password"
                        autoComplete="confirm-password"
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength="8"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center mt-5 ">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                    </div>

                    <div className="text-sm mt-5">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                    </a>
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="flex mt-5 w-full justify-center rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-2xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    Register Account
                    </button>
                </div>
                </form>
                <div className='mt-5'>
                    <p className='text-sm text-gray-500'>
                    Already have an account?
                        <a href='login'>
                            <a className='ml-2 text-blue-500'>   Login </a>
                        </a>
                    </p>

                </div>
                <div className="mt-6">
              

                <div className="mt-6 grid grid-cols-3 gap-3">
                  

        
                </div>
                </div>
            </div>
            </div>
        </div>
    );

}