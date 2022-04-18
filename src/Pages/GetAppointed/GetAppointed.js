import React from 'react';
import { Link } from 'react-router-dom';

const GetAppointed = () => {
    return (
        <div>
         
            <div className='text-center'>
                <Link to='/checkout' >
                    <button className='btn btn-primary mt-5 mb-5'>Proceed Checkout ?</button>
                </Link>
            </div>
        </div>
    );
};

export default GetAppointed;