const Photo = () => {
    return (
        <div className="bg-[#d9d9d9] w-1/4 h-[500px] rounded-md relative">
            

            <div 
                id="image-interaction" 
                className="bg-[#638F85] w-full h-[70px] absolute bottom-0 rounded-b-md"
            >
                <div id="user">
                    <div id="user-profile">
                        
                    </div>

                    <div id="user-name">

                    </div>

                    <button id="download-button">
                        Download
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Photo
