import React from 'react';
import googleIcon from '../../../images/g-logo.png';
import facebookIcon from '../../../images/facebook-logo.png';
import githubIcon from '../../../images/GitHub-logo.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>;
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>

            </div>
            {errorElement}

            <div >
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 mx-auto d-block my-2'>
                    <img src={googleIcon} alt="" />
                    <span className='px-3'>Google Login</span>
                </button>
                <button className='btn btn-primary w-50 mx-auto d-block my-2'>
                    <img src={facebookIcon} alt="" />
                    <span className='px-3'>Facebook Login</span>
                </button>
                <button className='btn btn-primary w-50 mx-auto d-block my-2'>
                    <img src={githubIcon} alt="" />
                    <span className='px-3'>Github Login</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;