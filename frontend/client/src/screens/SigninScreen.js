import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { signin } from '../actions/UserActions';

const SigninScreen=(props)=> {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userSignin=useSelector(state=>state.userSignin);
    const {loading,userInfo,error} =userSignin;
 

    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
    }, [userInfo])

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log('my data',email,password)
        dispatch(signin(email,password))

        
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>

                <ul className="form-container">
                    <li>
                        <h2>
                            Sign-In
                        </h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email"  onChange={e=>setEmail(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" onChange={e=>setPassword(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Signin</button>
                    </li>
                    <li>
                        New to AgriZone?

                    </li>
                    <li>
                        <Link to ="/register" className="button secondary text-center " >Create Agrizone account</Link>
                    </li>
                </ul>
            </form>

            
        </div>
    )
}

export default SigninScreen;
