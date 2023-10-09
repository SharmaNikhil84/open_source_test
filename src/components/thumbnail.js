import './thumbnail.css'
function Thumbnail({title,id}){
    return(
        <div className="container">
      <img src={`https://picsum.photos/id/${id}/150`} alt='not available'></img> 
      {/* </div> */}
      {/* <div> */}
      {/* <div> */}
            
         <h5>{title}</h5>
         <h6>100K Views</h6>
        {/* </div>  */}
      </div>
    );
}

export default Thumbnail;