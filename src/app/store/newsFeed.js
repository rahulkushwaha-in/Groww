import { create } from 'zustand';
import { fetchFromUnsplashAPI } from '../api';


/* The code is creating a custom hook called `usePhotoStore` using the `create` function from the
`zustand` library. */
const usePhotoStore = create((set, getState) => ({

  data: [],
  isLoading: false,
  currentPage: 1,
  fetchMorePhotos: async () => {
  
    const { currentPage, data ,isLoading} = getState();

    if (isLoading) return;

    try {
      const nextPage = currentPage + 1;
      const apidata = await fetchFromUnsplashAPI(nextPage, 10);

      set({
        data: [...data, ...apidata],
        currentPage: nextPage,
        isLoading: false,
      });
    } catch (error) {
      console.error('Error fetching more photos:', error);
      set({ isLoading: false });
    }
  },
}));

export default usePhotoStore;


