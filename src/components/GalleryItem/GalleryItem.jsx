import axios from 'axios';
import {useState} from 'react';

  // PUT - For Likes

function GalleryItem(props) {

    const gallery = props.gallery;

     const [toggle, setToggle] = useState(true);

    // const addLike = () => {
    //     axios.put('/api/gallery/:id')
    //       .then((response) => {
    //         console.log(response);
    //         grabGallery();
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   }
    
    //   const handleChange = () => {
    //     return setToggle(!toggle);
    //   }
    
      return (
    <>

<br /> {gallery.title}  <br /> <img src={gallery.url}/> < br/> {gallery.description} < br /> <button>LIKE</button> < br />{gallery.likes}< br />
    
    </>
)
}

export default GalleryItem;