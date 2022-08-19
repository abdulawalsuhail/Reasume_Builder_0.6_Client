import { useEffect, useState } from 'react';
import axiosPrivate from '../Pages/Api/axiosPrivate';

const BlogQuery = (id) => {
    const [blog,setBlog] = useState({})

    useEffect(() => {
        axiosPrivate.get(`/blog/${id}`)
        .then(res => {
            setBlog(res.data)
        })
    },[id])


    return [blog]
};

export default BlogQuery;