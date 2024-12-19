import categories from './categories.js'
import '@fontsource/itim' // Defaults to weight 400
import '@fontsource/itim/400.css' // Specify weight
import './categories.css'
import { useState, useEffect } from 'react'

const Categories = () => {
    const [currentCategory, setCurrentCategory] = useState('')
    const [lookingFor, setLookingFor] = useState('Pictures')
    const [visibleCategories, setVisibleCategories] = useState(categories)

    // Function to determine how many categories to display based on screen size
    const updateVisibleCategories = () => {
        const screenWidth = window.innerWidth
        if (screenWidth > 1900) {
            setVisibleCategories(categories) // Ultrawide screens
        } else if (screenWidth > 1224) {
            setVisibleCategories(categories.slice(0, 12)) // Full list for large screens
        } else if (screenWidth > 768) {
            setVisibleCategories(categories.slice(0, 6)) // Show top 6 categories for medium screens
        } else {
            setVisibleCategories(categories.slice(0, 3)) // Show top 3 categories for small screens
        }
    }

    useEffect(() => {
        updateVisibleCategories() // Initial setup
        window.addEventListener('resize', updateVisibleCategories) // Update on window resize

        return () => {
            window.removeEventListener('resize', updateVisibleCategories) // Cleanup on unmount
        }
    }, [])

    const changeCategory = (e) => {
        setCurrentCategory(e.target.textContent) // Use textContent instead of value to get the category name
    }

    const changeLookingFor = (e) => {
        setLookingFor(e.target.textContent) // Use textContent to get the "Pictures" or "Illustrations" name
    }

    return (
        <div className="flex text-white" id="Categories">
            <div className="flex space-x-4">
                {/* Looking For Links */}
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className={`relative pb-1 ${
                            lookingFor === 'Pictures'
                                ? 'text-white'
                                : 'text-gray-400'
                        }`}
                        onClick={changeLookingFor} // Add the onClick event for Pictures
                    >
                        Pictures
                        {lookingFor === 'Pictures' && (
                            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[3px] w-[18px] bg-white rounded-full"></span>
                        )}
                    </a>
                    <a
                        href="#"
                        className={`relative pb-1 ${
                            lookingFor === 'Illustrations'
                                ? 'text-white'
                                : 'text-gray-400'
                        }`}
                        onClick={changeLookingFor} // Add the onClick event for Illustrations
                    >
                        Illustrations
                        {lookingFor === 'Illustrations' && (
                            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[3px] w-[18px] bg-white rounded-full"></span>
                        )}
                    </a>
                </div>

                <p className="px-3">|</p>

                {/* Categories Links */}
                <div className="flex space-x-4">
                    {visibleCategories.map((category) =>
                        currentCategory === category ? (
                            <a
                                href="#"
                                key={category}
                                className="relative pb-1 text-white"
                                onClick={changeCategory} // Add onClick event for category links
                            >
                                {category}
                                <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-white rounded-full"></span>
                            </a>
                        ) : (
                            <a
                                href="#"
                                key={category}
                                className="text-gray-400"
                                onClick={changeCategory} // Add onClick event for category links
                            >
                                {category}
                            </a>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Categories
