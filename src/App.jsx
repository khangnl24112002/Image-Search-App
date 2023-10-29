import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import LoadingIndicator from './components/LoadingIndicator';
import { Stack } from 'react-bootstrap';

function App() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const apiKey = 'wOq7OZiarEhQIwuaM25LSloei11F1GiLT160XGf6KqkfILohlWlllNb8';

  const searchPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchText}&per_page=4&page=${page}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      console.log(data)
      if (page === 1) {
        setImages([...data.photos]);
      } else {
        setImages((prevImages) => [...prevImages, ...data.photos]);
      }
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchText) {
      setImages([]);
      setPage(1);
      searchPhotos();
    }
  }, [searchText]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
      const isAtBottom = scrollHeight - clientHeight <= scrollTop + 1;
      if (isAtBottom && !loading) {
        searchPhotos();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div className="app">
      <Stack gap={2} className="col-md-5 mx-auto">
        <h1>Pexels Photo Search App</h1>
        <SearchBar onSearch={(text) => setSearchText(text)} />
        <ImageGrid images={images} />
        {loading && <LoadingIndicator />}
      </Stack>
    </div>

  );
}

export default App;