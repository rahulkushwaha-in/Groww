import React, { useEffect } from 'react';
import Link from 'next/link';
import "./postCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare,faEye } from '@fortawesome/free-solid-svg-icons';
import usePhotoStore from '@/app/store/newsFeed';
import Image from 'next/image'

/**
 * The `PostCard` component is a React component that displays a list of posts with user information,
 * images, and like/share buttons.
 */
const PostCard = () => {
  /* The code snippet is using the `usePhotoStore` custom hook to fetch data and handle the state
  related to the photo store. */
    const {data,isLoading,fetchMorePhotos} = usePhotoStore();
    useEffect(() => {
    const fetchData = async () => {
    fetchMorePhotos();
    };
    fetchData();
    
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

 /* The `checkScrollPosition` function is a helper function that is used to determine if the user has
 scrolled to the bottom of the page. It calculates the distance from the bottom of the page to the
 current scroll position and checks if it is less than 200 pixels. If it is, it calls the
 `fetchMorePhotos` function, which is responsible for fetching more photos from the server. This
 allows for infinite scrolling functionality, where more photos are loaded as the user scrolls down
 the page. */
  function checkScrollPosition() {
    const distanceToBottom = document.documentElement.offsetHeight - (window.innerHeight + window.scrollY);

    if (distanceToBottom < 200) {
      fetchMorePhotos();
    }
  }
            
    
  return (
    <>
    {isLoading ? ( <p>Loading…</p> ): data.map((item)=>{
        const userLink = `/user/${item.user.id}`;
        return(
        <div className='postCard-section' key={item.id}>
        <div className='postCard-profile-section'>
            <Link className='username' href={userLink}>
            <Image width={500} height={500} src={item.user.profile_image.small} alt="" />
            <h3>{item.user.name}</h3>
            </Link> 
        </div>
        <div className='feed-section'>
            <p>{item.description == null? item.alt_description : item.description}</p>
                <div style={{width:'95%', height:'25rem'}}>
                <Image width={500} height={500}  src={item.urls.small} alt=""/>
                </div>    
        </div>
        <div className='like-section'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>  
        <button>
            <FontAwesomeIcon icon={faHeart} style={{color: "red",}} /> {item.likes}  
            </button> 
            <button>
            <FontAwesomeIcon icon={faShare} style={{color: "#1da1f2",}} /> Share 
            </button> 

      </div>
            <h3><FontAwesomeIcon icon={faEye} style={{color: "black",}} /> {item.views}</h3>
        </div>   
    </div>
     ) }
    
    )}
    </>
  )
}

export default PostCard;

