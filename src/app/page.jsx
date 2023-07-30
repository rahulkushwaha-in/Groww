"use client"
import React from 'react'
import "./page.css";
import PostCard from './components/post/postCard';



const page = () => {
  return (
    <div className='parent-container'>
      <div className='navbar'>
      </div>
      <div className='body-container'>
        <div className='left-sidebar'>
        </div>
        <div className='main-feed-section'>
         <PostCard/>
        </div>
        <div className='right-sidebar'>
        </div>
      </div>

    </div>
  )
}

export default page