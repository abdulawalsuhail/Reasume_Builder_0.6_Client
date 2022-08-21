import { useEffect, useState } from 'react';
import axiosPrivate from '../Pages/Api/axiosPrivate';

const BlogQuery = (id) => {
    const [blog,setBlog] = useState({})
    const [reload,setReload] = useState(false)

    useEffect(() => {
        axiosPrivate.get(`/blog/${id}`)
        .then(res => {
            setBlog(res.data)
            setReload(!reload)
        })
    },[id])


    return [blog,reload,setReload]
};

export default BlogQuery;