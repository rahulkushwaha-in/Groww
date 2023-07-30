// api.js

const accessToken = 'Cl7AhTKSuAdgGjx8kCc1eUoTroQki6zTQ0uKyT3wyGI';
/**
 * The function fetches random photos from the Unsplash API with a specified page and count.
 * @param [page=1] - The page parameter is used to specify the page number of the results you want to
 * fetch from the Unsplash API. By default, it is set to 1.
 * @param [count=10] - The `count` parameter specifies the number of random photos to fetch from the
 * Unsplash API. By default, it is set to 10 if no value is provided.
 * @returns the data fetched from the Unsplash API.
 */
export async function fetchFromUnsplashAPI(page=1, count=10){
    try{
        
        const response = await fetch(`https://api.unsplash.com/photos/random?page=${page}&count=${count}&client_id=${accessToken}`);
        if(!response.ok){
            throw new Error('Failed to fetch data from Unsplash API');
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error('Error fetching data:', error);
        return null;
    }
};



/**
 * The function fetches user photos from the Unsplash API using the provided username and access token.
 * @param username - The username parameter is the username of the user whose photos you want to fetch
 * from the Unsplash API.
 * @returns the data fetched from the Unsplash API if the response is successful. If there is an error
 * during the fetch or if the response is not ok, it will return null.
 */
export async function fetchUserPhotos(username){
    try{
        const response = await fetch(`https://api.unsplash.com/users/${username}/photos?client_id=${accessToken}`);

        if(!response.ok){
            throw new Error('Failed to fetch user images data from Unsplash API');
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error('Error fetching user images  data:', error);
        return null;
    }
};