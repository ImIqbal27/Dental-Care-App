import React from 'react';
import drPic from '../../../../images/dr.jpg'
import './MeetWithMe.css'

const MeetWithMe = () => {
    return (
        <div className='meet-section'>

            <div className='dr-img-section'>
                <img src={drPic} alt="" />

            </div>
            <div className='dr-description-section'>

                <h1>Meet Dr. Robert</h1>
                <p>et quasi architecto beatae vitae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque. Totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque iste natus error sit volu ptatem accusantium dolore mque. Totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis.</p>
            </div>
        </div>
    );
};

export default MeetWithMe;