import '@fontsource/irish-grover' // Defaults to weight 400
import '@fontsource/irish-grover/400.css' // Specify weight
import './Logo.css'


const Logo = ({ text = 'Framelt' }) => {
    return (
        <h1
            className='text-[#3c3a33] text-4xl'
            id="Logo"
        >
            {text}
        </h1>
    )
}

export default Logo
