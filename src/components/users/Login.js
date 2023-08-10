import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = ({getuser}) => {
    const history = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const getToken = () => {
        fetch('http://127.0.0.1:5000/token/<token>', {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
    })
    .then(res => res.json())
    .then(msg => console.log(msg))

    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                // "Authorization":"Basic " + btoa(`${email}:${password}`),
            },
            body: JSON.stringify({ email, password }),
        })
        .then((response) => {
            if (response.status === 200) {
                // getToken()
                getuser(email)
                history('/');
            } else {
                return response.json();
            }
        })
        .then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setError('Login failed');
            }
            
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            setError('An error occurred while logging in.');
        });
    };

    
    

    return(
        <div className='addproperty'>
            <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
                {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                </button>
                {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a> */}
                </div>
            </form>
        
            </div>

        </div>
            
    )

}

export default Login