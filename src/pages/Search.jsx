import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} />
      </form>
    </div>
  );
};

export default Search;
