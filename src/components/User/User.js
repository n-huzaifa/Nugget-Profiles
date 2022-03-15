import React, { useState } from "react"
import styles from './Users.module.css'

function User({ user }) {
    const [selected, setSelected] = useState(false)

    return (
        <div
            className={selected ?
                `${styles.selectedUserComponent} "space-y-4 w-3/4 sm:w-2/4 md:w-2/5 lg:w-4/12 xl:w-1/4"`
                :
                `${styles.userComponent} "space-y-4 w-3/4 sm:w-2/4 md:w-2/5 lg:w-4/12 xl:w-1/4"`
            }
            key={user.id}
            onClick={() => setSelected(!selected)}>
            <div className={styles.picOverlay}>
                <img src={user.picture} alt=""></img>
            </div>
            <h1 className='text-2xl font-bold'>{user.name}</h1>
            <h3 className='font-medium'>Company: {user.company.name}</h3>
            <p className='font-medium'>Email: {user.email}</p>
            <p className='font-medium'>Phone: {user.phone}</p>
            <p className='font-medium'>Web: {user.website}</p>
        </div>
    )
}

export default User