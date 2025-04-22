import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BLOG_IMAGES } from '../config/blogImages'
import './BlogDetail.css';

  function withRouter(ComponentWithRouter) {
    return function(props) {
      const params = useParams();
      const navigate = useNavigate();
      return <ComponentWithRouter {...props} params={params} navigate={navigate} />;
    };
  }
  
  class BlogDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: null,
        }
    }
    
    componentDidMount() {
        this.fetchBlog();
    }

    componentDidUpdate(prevProps) {
        const prevId = prevProps.params.id
        const currentId = this.props.params.id

        if(prevId !== currentId) {
            this.fetchBlog();
        }
    }
    
    fetchBlog = async () => {
        const {id} = this.props.params;
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) throw new Error('Failed to fetch blog');

        const data = await res.json();
        const imageIndex = (parseInt(id) - 1) % BLOG_IMAGES.length;

        this.setState({
          blog: {
            ...data,
            image: BLOG_IMAGES[imageIndex] || 'https://via.placeholder.com/250x160',
          }
        });
      } catch (err) {
        console.error(err);
      }
    };

    render() {
        const {blog} = this.state;
        if (!blog) return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>;
        
        return (
          <div className='detail-container'>
            <button className='back-button' onClick={() => this.props.navigate('/')}>← Back to Blog List</button>
            <h2 className='detail-title'>{blog.title}</h2>
            <img className='detail-image' src={blog.image} alt='Blog' />
            <p className='detail-description'>{blog.body}</p>
          </div>
        );
      };
    }


export default withRouter(BlogDetails);
