"use client"
import React, { useState } from 'react'
import SimpleInput from '../components/SimpleInput'
import SimpleButton from '../components/SimpleButton'
import { CompanyName, Slogan } from '../Config/config.company';
import { getRequest, postRequest } from '../ApiRequestUristore/apiRequest';
const LoginForm = () => {
    const [username, Setusername] = useState('');
    const [password, Setpassword] = useState('');


    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        const _data = new FormData();
        _data.append('username', username);
        _data.append('password', password);
        getRequest('account', 'username', username)?.then(response => {
            console.log(response)
        })
            .catch(error => console.error('GET Error:', error));

    }
    const HanleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        const _data = new FormData();
        _data.append('username', username);
        _data.append('password', password);
        postRequest('account', _data)?.then(response => {
            console.log(response);
        })
            .catch(error => console.error('GET Error:', error));
    }
    const [isLogin, setIsLogin] = React.useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="relative w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <div className={` transform transition-transform duration-500 ${isLogin ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="w-full flex">
                        <div className="w-1/2 p-8">
                            <h2 className="text-2xl font-bold mb-6 ">Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Username</label>
                                    <SimpleInput type="text" placeholder="Enter your username" onChange={(e) => Setusername(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Password</label>
                                    <SimpleInput type="password" placeholder="Enter your password" onChange={(e) => Setpassword(e.target.value)} />
                                </div>
                                <SimpleButton type='submit' text="Login" onClick={() => { }} />
                            </form>
                        </div>
                        <div className="w-1/2 bg-blue-500 text-white flex flex-col items-center justify-center p-8">
                            <h2 className="text-2xl font-semibold mb-6">Welcome to {CompanyName}</h2>
                            <p className="mb-6">{Slogan}{" "}{" If you don't have an account. Create one ?"}</p>
                            <SimpleButton text="Register" onClick={toggleForm} />
                        </div>
                    </div>
                </div>
                <div className={`absolute inset-0 transform transition-transform duration-500 ${isLogin ? 'translate-x-full' : 'translate-x-0'}`}>
                    <div className="w-full flex">
                        <div className="w-1/2 bg-blue-500 text-white flex flex-col items-center justify-center p-8">
                            <h2 className="text-2xl font-semibold mb-6">{CompanyName}</h2>
                            <p className="mb-6">{Slogan}</p>
                            <SimpleButton text="Login" onClick={toggleForm} />
                        </div>
                        <div className="w-1/2 p-8">
                            <h2 className="text-2xl font-semibold mb-6">Register</h2>
                            <form onSubmit={HanleRegister}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Username</label>
                                    <SimpleInput type="text" placeholder="Enter your username" onChange={(e) => Setusername(e.target.value)} />
                                </div>
                                {/* <div className="mb-4">
                                    <label className="block text-gray-700">Email</label>
                                    <SimpleInput type="email" placeholder="Enter your email" onChange={() => { }} />
                                </div> */}
                                <div className="mb-4">
                                    <label className="block text-gray-700">Password</label>
                                    <SimpleInput type="password" placeholder="Enter your password" onChange={(e) => Setpassword(e.target.value)} />
                                </div>
                                <SimpleButton type='submit' text="Register" onClick={() => { }} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm