import React, { useState, useEffect } from "react";
export default function Searcher() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    const timeoutId = setTimeout(() => {
      if (searchTerm.length >= 1) {
        fetchData();
      }
    }, 500);

    setSearchTimeout(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      console.log(" se hace la busqueda");
      /*      const response = await fetch(
        `https://api.example.com/search?q=${searchTerm}`
      );
      const data = await response.json();

      setSearchResults(data.results);*/
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
