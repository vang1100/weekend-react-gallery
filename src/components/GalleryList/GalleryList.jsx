import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList(props) {

    const galleryData = props.galleryData;

    return(
        <ul>
            {
                galleryData.map((gallery) => (
                    <GalleryItem key={gallery.id} gallery={gallery} />
                ))
            }
        </ul>
        // <ul>
        //     {galleryData.map(
        //         function(gallery) {
        //             return (
        //                 <li key={gallery.id}>
        //                     {gallery.title}
        //                 </li>
        //             )
        //         }
        //     )}
        // </ul>
    )

//       <ul>

// { galleryData.map(
//   function(gallery) {
//     return (
//       <li key={gallery.id}>
//      <p onClick={() => handleChange()}>{toggle ? (<img src={gallery.url}/>) : (gallery.description)}</p>
//       </li>
//     )
//   }
// ) }

// </ul>  
}

export default GalleryList;

