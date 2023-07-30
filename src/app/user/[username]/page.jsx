"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'
import "./Page.css";
import usePhotoStore from '@/app/store/newsFeed';
import { fetchUserPhotos } from '@/app/api';


/**
 * The function `findObjectById` takes an array of objects and an id, and returns the object with a
 * matching id.
 * @returns an object from the dataArray that has a user id matching the provided id.
 */
function findObjectById(dataArray, id) {
  return dataArray.find((item) => item.user.id === id);
}


/* The code defines a React functional component called `page`. It uses hooks such as `useState`,
`useEffect`, and `useParams` from the React library. */
const page = () => {
  const {data} = usePhotoStore();
  const Id = useParams();
  const [images, setImages] = useState([]);

const idToSearch = Id.username;
 /* The code is defining a useEffect hook that is responsible for fetching images based on the user
 data obtained from the `findObjectById` function. */
 const userData = findObjectById(data, idToSearch);
  useEffect(() => {
    async function fetchImages() {
      try {
        const data = await fetchUserPhotos(userData.user.username);
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages();
  }, []);


  /* The code `const [gridView, setGridView]= useState(true);` is using the `useState` hook to create a
  state variable called `gridView` and a corresponding setter function called `setGridView`. The
  initial value of `gridView` is set to `true`. */
  const [gridView, setGridView]= useState(true);
  const handleToggle = () => {
    setGridView(!gridView);
  };
  return (
    <>
        <div className='mainContainer'>
            <div className='profile-section'>
            <div className='profile-pic'>
                <img src={userData.user.profile_image.large}></img>
            </div>

            <div className='profile-detail'>
                <h3>{userData.user.first_name}</h3>
              
                <div className='user-followers'>
                    <span> Posts: {userData.user.total_photos} </span>
                    <span>Like: {userData.user.total_likes} </span>
                    <span>Collections: {userData.user.total_collections} </span>
                </div>
                <div className='bio-section'>
                    <p>
                      Bio: {userData.user.bio === 'null'? 'No Bio available':userData.user.bio}
                    </p>
                </div>
            </div>  
        </div>
<div className='post-converter'>
  <button onClick={handleToggle} className={gridView? 'allposts':'allPostList'}>{gridView? 'Grid View': 'List View'}</button>
 
</div>
<div className={gridView? 'allposts':'allPostList'}>
  { images && (images.map((image)=>{
    return (
      
   
        <div >
        <img src={image.urls.small}></img>
        <p>{image.description === 'null'? 'This is the preview text of the image':image.alt_description}
          </p>
        </div>
    )
  }))
}
</div>   
</div>
</>)
}

export default page;