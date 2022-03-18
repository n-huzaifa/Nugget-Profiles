import React, { useEffect, useState } from "react"
import Tag from "../Tag/Tag"
import { SetLocalValue, GetLocalValue } from '../../Store/LocalStore'
import styles from './Users.module.css'

function User({ user }) {

    const [selected, setSelected] = useState(localStorage.getItem(user.id))

    console.log(selected)
    useEffect(() => {
        localStorage.setItem(user.id, selected)
    }, [])

    const handleClick = () => {
        SetLocalValue(user.id, !selected)
        setSelected((prevState) => (!prevState))
    }

    return (
        <div
            className={selected === true ?
                `${styles.selectedUserComponent} space-y-4 w-3/4 sm:w-2/4 md:w-2/5 lg:w-4/12 xl:w-1/4`
                :
                `${styles.userComponent} space-y-4 w-3/4 sm:w-2/4 md:w-2/5 lg:w-4/12 xl:w-1/4`
            }
            key={user.id}
            onClick={handleClick}>
            <div className={styles.picOverlay}>
                <img src={user.picture} alt="" />
            </div>
            <h1 className='text-2xl font-bold'>{user.name}</h1>
            <h3 className='font-medium'>Company: <Tag text={user.company.name} /></h3>
            <p className='font-medium'>Email: {user.email}</p>
            <p className='font-medium'>Phone: {user.phone}</p>
            <p className='font-medium'>Web: {user.website}</p>
        </div>
    )
}

export default User