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
    <>
    {gallery.title} 
    <p onClick={() => handleChange()}>
    { toggle ? (<img src={gallery.url}/> ):(gallery.description)} 
    </p>
    < br /> 
        <button onClick={() => addLike(gallery.id)}>LIKE</button> 
    < br />
        {gallery.likes}
        < br />
    
    </>
)
}

export default GalleryItem;