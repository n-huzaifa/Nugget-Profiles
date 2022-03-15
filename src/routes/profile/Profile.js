import React from 'react'
import styles from './profile.module.css'
import Users from '../../components/User/Users'
import Welcome from '../../components/Welcome'

function Profile() {
    return (
        <div className={`${styles.profileComp} space-y-10`}>
            <Welcome />
            <Users />
        </div>
    )
}

export default Profile