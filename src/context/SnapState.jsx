import React from "react";
import SnapContext from "./SnapContext";
import { useState, useEffect } from "react";

const SnapState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState('london');

  const api_key = "49796047-8b6f821d40ecb8e60e420fa94";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, [query]);

  const fetchImageByCategory = async (cat) =>{
    const api = await fetch (
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  }

  return (
    <SnapContext.Provider value={{ imageData, fetchImageByCategory, setQuery }}>
      {props.children}
    </SnapContext.Provider>
  );
};

export default SnapState;
