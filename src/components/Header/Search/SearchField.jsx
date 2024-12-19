import { TextField } from '@mui/material'
import { InputAdornment } from '@mui/material'
import { IconButton } from '@mui/material'
import "@fontsource/pacifico"; // Defaults to weight 400
import "@fontsource/pacifico/400.css";
import { useState } from 'react' // Specify weight

const searchIcon = 'src/components/Header/icons/search.png'

const SearchField = () => {
    const [searchInput, setSearchInput] = useState()

    const handleSearchClick = () => {
        console.log(`Search: ${searchInput}`)
    }

    return (
        <TextField
            fullWidth
            id="fullWidth"
            placeholder='Explore the world'
            onChange={(e) => setSearchInput(e.target.value)}
            sx={{
                // Background color
                '& .MuiOutlinedInput-root': {
                    backgroundColor: '#f0f0f0', // Set your desired background color
                    borderRadius: '50px', // Optional: Round edges
                    height: '40px', // Height
                    '& fieldset': {
                        borderColor: 'transparent', // Default border color
                    },
                    '&:hover fieldset': {
                        borderColor: 'transparent', // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'transparent', // Remove blue border on focus
                        boxShadow: 'none', // Remove focus shadow
                    },
                },
                // Input text
                '& .MuiOutlinedInput-input': {
                    color: '#888888',
                    fontSize: '14px', // User input font size
                    paddingLeft: '25px', // Ensure padding matches the height
                    paddingRight: '25px', // Ensure padding matches the height
                    fontFamily: 'Pacifico'
                },
                // Placeholder color
                '& .MuiOutlinedInput-input::placeholder': {
                    color: '#888888', // Set your desired placeholder color
                    opacity: 1, // Ensure opacity is not reduced
                    fontSize: '14px', // Font size
                    fontFamily: 'Pacifico',
                },
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton 
                            onClick={handleSearchClick}
                            style={{
                                marginRight: '5px'
                            }}
                        >
                            <img
                                src={searchIcon}
                                style={{ width: 22, height: 22 }}
                            />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default SearchField
