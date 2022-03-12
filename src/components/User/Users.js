import React from 'react'
import './Users.styles.css'
import { UserData } from '../User/UserData'

function Users() {
    return (
        <>{
            UserData.map((user) => {
                return (
                    <div className='user-component space-y-4' key={user.id}>
                        <div className='pic-overlay'>
                            <img src={user.picture}></img>
                        </div>
                        <h1 className='text-2xl font-bold'>{user.name}</h1>
                        <h3 className='font-medium'>Company:   {user.company.name}</h3>
                        <p className='font-medium'>Email: {user.email}</p>
                        <p className='font-medium'>Phone: {user.phone}</p>
                        <p className='font-medium'>Web: {user.website}</p>
                    </div>
                )
            })
        }</>
    )
}

export default Users