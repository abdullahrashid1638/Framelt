import { createApi } from 'unsplash-js'


class Unsplash {
    /**
     * Creates an Unsplash objects and methods to get photos from unsplash
     */

    constructor() {
        this.unsplash = createApi({
            accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        })
    }

    async getImages(query, pages = 5) {
        try {
            const photos = await this.unsplash.search.getPhotos({
                query: query,
                perPage: pages
            });
            return photos.response.results; // Return the results directly
        } catch (e) {
            console.log('Something went wrong: ', e);
            return []; // Return an empty array in case of error
        }
    }

}

const unsplash = new Unsplash()

export default unsplash
