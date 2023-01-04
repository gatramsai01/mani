import React,{useEffect, useState} from 'react'
import api from '../api'
import {addUsers} from '../features/slices/user'
import { useDispatch, useSelector } from 'react-redux'


import { Link } from 'react-router-dom'

const HomePage = () => {
const dispatch = useDispatch()

    useEffect(() => {

        
        api.get("/api/users").then((res)=>{
            dispatch(addUsers(res.data.data))
            console.log(res.data.data)
        }).catch(err=>console.error(err))
  

    }, [])

const data=useSelector(state=>state.user.data)

let datalist;
    
    if(data!=null){
      datalist=data.map(e=><Link to={`user/${e.id}`} key={e.id} ><button  > {e.id}</button></Link>)
    
    }

  return (
    <div>

        {datalist}

    </div>
  )
}

export default HomePage