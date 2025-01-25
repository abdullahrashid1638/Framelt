import '@fontsource/itim' // Defaults to weight 400
import '@fontsource/itim/400.css' // Specify weight
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import './photocard.css'
import { useState, useEffect } from 'react'

const Photo = ({ imgUrl, imgDescription, profileImage, username }) => {
    const [cardWidth, setCardWidth] = useState(null)
    const [cardHeight, setCardHeight] = useState(null)

    // Use useEffect to handle image loading
    useEffect(() => {
        const img = new Image()
        img.onload = function() {
            setCardWidth(this.width)
            setCardHeight(this.height)
        }
        img.src = imgUrl
    }, [imgUrl]) // Re-run when imgUrl changes   

    return (
        <div className="rounded-md relative w-[450px] bg-[#d9d9d9]">
            <img src={imgUrl} alt={imgDescription} className='rounded-md w-[450px]' />
            <div id='user-info' className='absolute top-6 left-6 flex items-center'>
                <div className='overflow-hidden rounded-[50%] w-9 h-9 mr-3'>
                    <img src={profileImage} alt={username} className='object-cover w-full h-full' />
                </div>
                <p className='text-white font-semibold text-sm'>
                    {username}
                </p>
            </div>
            <div id='image-interaction' className='w-full flex justify-between absolute bottom-6 px-6'>
                <button id='download-button' className='bg-[#1b4965] text-white rounded px-20 py-1.5 text-sm font-semibold'>
                    Download Image
                </button>
                <div className='flex'>
                    <button className='bg-[#d9d9d9] w-12 h-8 flex items-center justify-center rounded'>
                        <ThumbUpIcon fontSize='small' sx={{ color: "#535348" }} />
                    </button>
                    <button className='bg-[#d9d9d9] w-12 h-8 flex items-center justify-center rounded ml-3 text-[#535348] text-2xl font-bold'>
                        +
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Photo
