import React from 'react'
import './index.scss'
import profile from '../../../assets/images/pf_img.png';

const Profile = () => {
  return (
    <div className="profile-container">
        <figure className='profile-img'>
          <img src={profile} />
        </figure>
    </div>
  )
}

export default Profile