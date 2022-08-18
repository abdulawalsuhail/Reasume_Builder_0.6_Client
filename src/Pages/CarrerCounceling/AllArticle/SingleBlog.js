import React from 'react';
import { useParams } from 'react-router-dom';
import BlogQuery from '../../../Hook/BlogQuery';

const SingleBlog = () => {
    const {id} = useParams()
    const [blog] = BlogQuery(id)
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};

export default SingleBlog;