import React from 'react'
import { UserData } from '../User/UserData'
import User from './User'

function Users() {
    return (
        <>
            {UserData.map(user => <User key={user.id} user={user} />)}
        </>
    )
}
export default Users
