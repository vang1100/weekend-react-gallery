import Header from "../Header/Header";
import axios from 'axios';
import {useEffect, useState} from 'react';
import GalleryList from "../GalleryList/GalleryList";


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

      <p>The gallery goes here!</p>
      
      <GalleryList galleryData={galleryData} />

      {/* <button onClick={() => addLike()}>Like</button> */}

      {/* testing response data with json stringify

      {JSON.stringify(galleryData)} */}

       
      
        
        {/* <ul>

          { galleryData.map(
            function(gallery) {
              return (
                <li key={gallery.id}>
               <p onClick={() => handleChange()}>{toggle ? (<img src={gallery.url}/>) : (gallery.description)}</p>
                </li>
              )
            }
          ) }

        </ul> */}


      </div>
    );
}

export default App;
