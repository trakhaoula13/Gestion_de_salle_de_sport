
function SearchBar({search, setSearch}){
    return(
        <div className="mb-3">
            <input type="text" className="form-control" placeholder="Rechercher un abonné ..." value={search} onChange={(e) => setSearch(e.target.value)}  />
        </div>
    );
}
export default SearchBar;
