import React from 'react'
import './profile.styles.css'
import Users from '../../components/User/Users'
import Welcome from '../../components/Welcome'

function Profile() {
    return (
        <div className='profile-comp space-y-10'>
            <Welcome />
            <Users />
        </div>
    )
}

export default Profile