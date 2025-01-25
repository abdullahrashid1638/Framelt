import { createApi } from 'unsplash-js'


class Unsplash {
    /**
     * Creates an Unsplash objects and methods to get photos from unsplash
     */

    constructor() {
        this.unsplash = createApi({
            accessKey: 'qkSacVIFHXX0h9pJvmow1H7yoWLSWhOorLm0l1y9v-k'
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

let pictures = null
async function getPictures() {
    pictures = await unsplash.getImages('cats', 10)
}
getPictures()
    .then(() => {
        console.log('Pictures: ', pictures[0])
    })

export default unsplash
