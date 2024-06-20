import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'

const Home = () => {
  const [posts, setPosts]= useState([])

  const getPosts = async() =>{
    try{
      const response = await axios.get('')
    }catch{

    }
  }

  useEffect(()=>{
    getPosts();
  },[])
  
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  )
}

export default Home