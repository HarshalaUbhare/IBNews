import React from 'react'

const News =(props)=>{

    let{title,description,imgURL,newaURL,author,date,source}=props;
  return (
    <div>
        <div className="card my-3">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%',zIndex:'1'}}>{source}</span>
         <img src={!imgURL?"https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8":imgURL} className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
           <a href={newaURL} target='_blank' className="btn btn-sm btn-dark">Red More</a>
         </div>
        </div>
    </div>
    )

}

export default News



