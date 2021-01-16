function SearchBox({searcfield, searchChange}) {
    return(
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search Robots" name="SearchRobots" id="" onChange= {searchChange}/>
        </div>
    );
}

export default SearchBox;