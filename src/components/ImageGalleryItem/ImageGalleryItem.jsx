const ImageGalleryItem = ({ hits }) => {
    // console.log(hits)
    return (
        hits.map((hit) => (
            <li key={hit.id} className="ImageGalleryItem">
                <img className="ImageGalleryItem-image" src={hit.webformatURL} alt={hit.tags} />
            </li>
        ))
    )
}

export default ImageGalleryItem;