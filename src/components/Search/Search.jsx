const Search = ({ setQuery }) => {
    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    return (
        <>
            <input 
                type="text" 
                className="border border-black"
                onChange={handleQuery}
            />
        </>
    )
}

export default Search
