import Header from "../Header/Header";
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {

  // VARIBLES

    const [galleryData, setGalleryData] = useState([]);

  // GET GALLERY DATA

  useEffect (() => {
    grabGallery();
  },[])

  const grabGallery = () => {
    axios.get('/api/gallery')
      .then((response) =>{
        console.log(response.data)
      })

  }

    return (
      <div data-testid="app">
      
      <Header />

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
      </div>
    );
}

export default App;
