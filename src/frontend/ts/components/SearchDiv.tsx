export default function SearchDiv() {
  return (
    <div className="searchDiv">
      <div className="searchBarWrapper">
        <img
          src="/Images/Search-Icon.png"
          className="searchBarIcon"
          alt="Search"
        />

        <input className="searchBar" type="text"/>
      </div>

      <ul className="searchResultsMenu"></ul>

      <div className="noSearchResults">No search results</div>
    </div>
  );
}
