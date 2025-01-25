import Logo from './Logo.jsx'
import SearchField from './Search/SearchField.jsx'
import Categories from './Categories/Categories.jsx'
import { Button } from '@mui/material'
import '@fontsource/itim' // Defaults to weight 400
import '@fontsource/itim/400.css' // Specify weight
import './header.css'

// Background: #638F85 (gray-green)
// Background: #705c48

const Header = ({ className = '' }) => {
    return (<header className="bg-[#1b4965] h-36 rounded-md pt-7 relative">
        <div
            className={`grid grid-cols-[2fr,12fr,2fr] items-center w-full px-10 ${className}`}
        >
            {/* Left: Logo */}
            <div id="Logo" className="flex justify-start mr-6">
                <Logo />
            </div>

            {/* Center: Search Bar */}
            <div id="Search-bar" className="flex justify-center px-4">
                <div className="w-full max-w-[1200px] sm:min-w-[200px] sm:max-w-[800px] lg:max-w-[1000px]">
                    <SearchField className="w-full sm:min-w-[200px] sm:max-w-[800px]" />
                </div>
            </div>


            {/* Right: Authentication Buttons */}
            <div
                id="Authentication-user"
                className="flex space-x-4 pl-5"
            >
                <Button
                    variant="outlined"
                    sx={{
                        color: '#8c8c69',
                        borderColor: '#8c8c69',
                        borderRadius: '20px',
                        width: '100px',
                        height: '40px',
                        '&:hover': {
                            borderColor: '#808059',
                        },
                    }}
                    id="Login-btn"
                >
                    Login
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        color: '#3c3a33',
                        backgroundColor: '#8c8c69',
                        borderRadius: '20px',
                        width: '100px',
                        height: '40px',
                        boxShadow: 'none',
                        '&:hover': {
                            borderColor: '#6e6e4c', backgroundColor: '#6e6e4c', boxShadow: 'none',
                        },
                    }}
                    id="Signup-btn"
                >
                    Sign Up
                </Button>
            </div>
        </div>

        {/* Bottom: Categories */}
        <div className="w-full flex justify-center absolute bottom-4">
            <Categories />
        </div>
    </header>)

}

export default Header
