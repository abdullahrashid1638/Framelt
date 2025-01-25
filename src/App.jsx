import React, { useEffect, useState } from 'react'
import Photos from './components/Photos/Photos.jsx'
import Search from './components/Search/Search.jsx'
import './style.css'
import Header from './components/Header/Header.jsx'
import unsplash from './unsplash/Unsplash.js'
import '@fontsource/itim' // Defaults to weight 400
import '@fontsource/itim/400.css' // Specify weight


const App = () => {
    const [photos, setPhotos] = useState([])
    const [query, setQuery] = useState('Picture')
    const [debouncedQuery, setDebouncedQuery] = useState(query)

    // Debouncing query logic
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedQuery(query)
        }, 500)

        return () => clearTimeout(timeoutId)
    }, [query])

    // Fetching images from Unsplash
    useEffect(() => {
        unsplash.getImages(debouncedQuery, 20)
            .then((photos) => {
                setPhotos(photos)
            })
    }, [debouncedQuery])

    // First Image object from Unsplash
    // console.log('Photos in state: ', photos)

    return (
        <>
            <Header />

            <div className='flex flex-col items-center mb-10'>
                <h1 className='text-3xl mt-7 mb-4'>
                    Free Images
                </h1>

                <hr className='w-3/4 border-none h-[2px] bg-gray-400'/>
            </div>

            <Photos photos={photos} />
        </>
    )
}

export default App
