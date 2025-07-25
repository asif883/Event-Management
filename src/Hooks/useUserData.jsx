import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const useUserData = () => {
    const {user} = useAuth()
    const [ userData , setUserData ]  = useState({})
    useEffect(()=> {
        if(!user?.email) return

        const fetchData = () => {
            axios.get(`https://event-management-server-blond.vercel.app/user/${user?.email}`)
            .then(res => {
                setUserData(res.data)
            })
        }
        fetchData()
    }, [user])

    return userData
};

export default useUserData;