import React,{useEffect} from 'react'
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { useState } from 'react';

const MulNews=(props)=>{

const [articles,setArticals]=useState([]);
const [loading,setloading]=useState(false);
const [page,setpage]=useState(1);
const[totalResults,setTotalResults]=useState(0);

document.title=`${props.category}- ( I B News )`;

    const pageUpdtae = async()=>{
      props.setProgress(0);
        // let url="https://newsapi.org/v2/top-headlines?sources=techcrunch&category=${props.category}&apiKey=03e411510ef2432bbae2f0cf8843e543";
        const url= `https://newsapi.org/v2/top-headlines?country=${props.county}&category=${props.category}&apiKey=03e411510ef2432bbae2f0cf8843e543&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        props.setProgress(30);
        let data= await fetch(url);
        props.setProgress(70);
        let parsedData= await data.json();
           setArticals(parsedData.articles)
           setTotalResults(parsedData.totalResults)
           setloading(false)
           props.setProgress(100);
    }

    useEffect(()=>{
      pageUpdtae(); 
    },[])

  
const onclickPrevious= async()=>{
  setpage(page-1);
  pageUpdtae();
  }
  
const onclickNext= async()=>{

   setpage(page+1);
   pageUpdtae();
  
}

    return (
     <div className='container my-3'>
       <h2 className='text-center' style={{margin:'40px 0px',marginTop:'90px', fontFamily:'serif',fontWeight:'600', fontSize:'2.5rem'}}>New Trending - Top Headlines on {props.category}</h2>
     {loading && <Spinner />}
       <div className="row">
       {!loading && articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <News title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imgURL={element.urlToImage} newaURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
       })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type="button" class="btn btn-dark"onClick={onclickPrevious}> &larr;Previous</button>
        <button disabled = {page+ 1 > Math.ceil(totalResults/props.pageSize)} type="button" class="btn btn-dark"onClick={onclickNext}> Next &rarr;</button>
        </div>
      </div>

    )
  
}
MulNews.defaultProps = {
  county :'in',
  pageSize: 8,
  category:'general'
}
MulNews.propTypes = {
  county :PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string
}

export default MulNews
