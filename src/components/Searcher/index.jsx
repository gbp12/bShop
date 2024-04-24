import React, { useState, useEffect } from "react";
import getBShopsByName from "../../api/fetch/getBShopsByName";

export default function Searcher() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    const timeoutId = setTimeout(() => {
      if (searchTerm.length >= 3) {
        fetchData();
      }
    }, 300);

    setSearchTimeout(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const fetchData = async () => {
    const bShops = await getBShopsByName(searchTerm);
    console.log("🚀 ~ fetchData ~ bShops:", bShops);

    setSearchResults(bShops);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchResults.length > 0 &&
        searchResults.map((result) => {
          return (
            <div key={result.id}>
              <h1>{result.name}</h1>
              <h2>{result.initialDescription}</h2>
            </div>
          );
        })}
    </div>
  );
}
