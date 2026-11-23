
function SearchFilter({
  searchTerm,
  setSearchTerm,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search hotels by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <input
        type="number"
        placeholder="Minimum price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Maximum price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
}

export default SearchFilter;
