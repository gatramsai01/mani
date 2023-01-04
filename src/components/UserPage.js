import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'

const UserPage = () => {
    const {id}=useParams()
    const [data, setdata] = useState(null)
    useEffect(() => {
      api.get(`api/users/${id}`).then(res=>{
        setdata(res.data.data)
        console.log(res.data.data)
      }).catch(err=>console.error(err))  
    }, [])
    


  return (
    <div>

        {data? 
        <div>
        <img src={data.avatar} alt={data.first_name} />
        <p>First Name:{data.first_name}</p>
        <p>Last Name:{data.last_name}</p>
        <p>Email:{data.email}</p>
        </div> 
        :
        <p>loading</p>
       }
    </div>
  )
}

export default UserPage