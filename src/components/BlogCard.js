import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
            </div>
            <div className="blog-content">
                <p className='date'>1 January 2023</p>
                <h5 className="title">A Beatiful Sunday Morning Renaissance</h5>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus consectetur provident officia repudiandae id, labore repellat molestiae odio, ex natus, fugit tenetur. 
                Omnis eos consequuntur reprehenderit corrupti, hic veniam illo.</p>
                <Link to='/blog/:id' className='button'>Read more</Link>
            </div>
        </div>
  )
}

export default BlogCard