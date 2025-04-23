import React, {Component} from 'react'
import BlogCard from '../components/BlogCard'
import { API_ENDPOINTS } from '../config/apiEndpoints'
import { BLOG_IMAGES } from '../config/blogImages';
import { Navigate} from 'react-router-dom'
import './BlogList.css'


class BlogList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        blogs: [],
        filteredBlogs: [],
        searchTerm: '',
        isLoading: true,
        redirectTo: null,
      };
    }

    //navigation in class somponent
    handleNavigation = (id) => {
        this.setState({ redirectTo: `/blog/${id}` });
      };
    
      componentDidMount() {
        this.fetchBlogs();
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
          this.filterBlogs();
        }
      }

// Fetching blog with Async/Await by error handling
fetchBlogs = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.BLOGS);
      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();
      const blogWithImages = data.map((blog, index) => ({
        ...blog,
        image:
          BLOG_IMAGES[index % BLOG_IMAGES.length] || 'https://via.placeholder.com/250x160', // fallback
      }));

      this.setState({
        isLoading: false,
        blogs: blogWithImages,
        filteredBlogs: blogWithImages,
      });
    } catch (error) {
      console.error('Network or parsing error', error);
      this.setState({ isLoading: false });
    }
  };

// Filter blogs on search
filterBlogs = () => {
    const { blogs, searchTerm } = this.state;
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredBlogs: filtered });
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

render() {
    const { filteredBlogs, searchTerm, isLoading, redirectTo } = this.state;

    // If we have a redirect URL, render the Navigate component to handle redirection
    if (redirectTo) {
      return <Navigate to={redirectTo} />;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="app-container">
        <h1 className="app-heading">Blog</h1>
        <input
          type="text"
          placeholder="Search posts..."
          className="search-input"
          value={searchTerm}
          onChange={this.handleSearchChange}
        />

        <div className="blog-list">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.body.slice(0, 100) + '...'}
              image={blog.image}
              onClick={() => this.handleNavigation(blog.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BlogList;