import React, { useState, useRef } from 'react'
import Photo from './Photo'
import Masonry from 'react-responsive-masonry'

// const Photos = ({ photos }) => {
//     // Ensure photos is an array before calling .map()
//     if (!Array.isArray(photos)) {
//         return <div>No photos available</div> // Handle cases where photos is not an array
//     }

//     const breakpointColumnsObj = {
//         default: 4,
//         1100: 3,
//         700: 2,
//         500: 1
//     }

//     return (
//         <Masonry
//             breakPointCols={breakpointColumnsObj}
//             className='masonry-grid px-7'
//             columnClassName='masonry-column'
//             gutter='12px'
//             columnsCount={4}
//         >
//             {photos.map((photo) => (
//                 <div className='masonry-item'>
//                     <Photo
//                         key={photo?.id} // Add a unique key for each Photo component
//                         photoURL={photo?.urls?.regular}
//                         photoDescription={photo?.alt_description}
//                         height={photo?.height}
//                         width={photo?.width}
//                         owner={photo?.user.username}
//                     />
//                 </div>
                
//             ))}        
//         </Masonry>
//     )
// }

const Photos = ({ photos }) => {
    if (photos.length === 0) {
        return <p>Loading images...</p>  // Show loading or placeholder
    }

    return (
        <Photo imgUrl={photos[4].urls.small} imgDescription={photos[4].alt_description} profileImage={photos[4].user.profile_image.small} username={photos[4].user.username} />
    )
}

export default Photos
