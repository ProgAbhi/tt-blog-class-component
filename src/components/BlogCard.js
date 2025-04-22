import React, { Component } from 'react';
import './BlogCard.css';

class BlogCard extends Component {

    render() {
        const {title, description, image, onClick} = this.props

return (
    <div className = "blog-card" onClick = {onClick} >
    <img src={image} alt={title} className='blog-image' loading= "lazy"
    onError = {(e)=>{
        e.target.onError = null;
        e.target.src = 'https://source.unsplash.com/250x160/?travel,blog'
    }}
    />

    <div className='blog-content'>
        <h2 className='blog-title'>{title}</h2>
        <p className='blogdescription'>{description}</p>
    </div>
    </div>
)
}
}

export default BlogCard;