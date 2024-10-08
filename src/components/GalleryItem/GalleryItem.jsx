import axios from 'axios';
import {useState} from 'react';

  // PUT - For Likes

function GalleryItem({gallery, grabGallery}) {

    // const gallery = props.gallery;

    // const grabGallery = props.grabGallery;

     const [toggle, setToggle] = useState(true);

    const addLike = (id) => {
        axios.put(`/api/gallery/like/${id}`)
          .then((response) => {
            console.log(response);
            grabGallery();
          })
          .catch((error) => {
            console.log(error)
          })
      }
    
      const handleChange = () => {
        return setToggle(!toggle);
      }
    
      return (
    <div data-testid="galleryItem">
   <h2>{gallery.title} </h2> 
    <p data-testid="galleryItem" onClick={() => handleChange()}>
    { toggle ? (<img src={gallery.url}/> ):(gallery.description)} 
    </p>
    < br /> 
        <button data-testid="galleryItem" onClick={() => addLike(gallery.id)}>LIKE</button> 
    < br />
        {gallery.likes}
        < br />
        
    
    </div >
)
}

export default GalleryItem;