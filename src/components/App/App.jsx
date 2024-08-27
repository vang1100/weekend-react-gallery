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
        console.log(response.data);
        setGalleryData(response.data);
      })

  }

    return (
      <div data-testid="app">
      
      <Header />

      {/* testing response data with json stringify

      {JSON.stringify(galleryData)} */}

        <p>The gallery goes here!</p>
        
        <ul>

          { galleryData.map(
            function(gallery) {
              return (
                <li key={gallery.id}>
                 <img src={gallery.url}/> < br/>{gallery.title} < br/> {gallery.description}< br/>{gallery.likes}< br/>
                </li>
              )
            }
          ) }

        </ul>


      </div>
    );
}

export default App;
