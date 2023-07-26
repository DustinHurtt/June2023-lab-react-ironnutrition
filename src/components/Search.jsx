import { Divider, Input } from "antd";

function Search({ searchTerm, setSearchTerm}) {


    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

  return (
    <div className='search'>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input name="search" value={undefined} type="text" onChange={handleChange} />
    </div>
  );
}

export default Search;
