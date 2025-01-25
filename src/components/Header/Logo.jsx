import '@fontsource/irish-grover' // Defaults to weight 400
import '@fontsource/irish-grover/400.css' // Specify weight
import './logo.css'


const Logo = ({ text = 'Framelt' }) => {
    return (
        <h1
            className='text-[#8c8c69] text-4xl'
            id="Logo"
        >
            {text}
        </h1>
    )
}

export default Logo
