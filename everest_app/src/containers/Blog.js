import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosConfig';
import { apiEndPoints } from '../utils/apiconfig';
import useFullPageLoader from '../hooks/useFullPageLoader';
import { Link } from 'react-router-dom';

const Blog = () => {

    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(false);

    const [loader, showLoader, hideLoader] = useFullPageLoader();
    let arr = [], size = 3;

    useEffect(() => {
        getBlogs();
    }, [])

    const getBlogs = async () => {
        try {
            setLoading(true);
            showLoader();
            const res = await axiosInstance.get(`${apiEndPoints.baseUrl}` + '/blog/all/');
            setBlogs(res.data.data);
            hideLoader();
        } catch (error) {
            console.log(error)
        }
    }

    const renderRows = () => {

        let arrBlogs = [...blogs];

        while (arrBlogs.length > 0) {
            arr.push(arrBlogs.splice(0, size))
        }

        return arr.map((item, idx) => {
            return (
                <div key={idx} className="row">
                    {
                        item.map((rowItem) => {
                            return (
                                <div key={rowItem.id} className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="card mb-4">
                                        <img className="card-img-top" src={apiEndPoints.siteUrl + rowItem.thumb_image_path} />
                                        <div className="card-body">
                                            <h2 className="card-title">{rowItem.title}</h2>
                                            <div className="card-text">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: rowItem.short_description.substr(1, 100)
                                                    }}></div> ...
                                            </div>
                                            <Link to={`/blog/${rowItem.slug}/detail/`} className="btn btn-primary card-btn">Read More</Link>
                                        </div>
                                        <div className="card-footer text-muted">
                                            Posted by <a href="javascript::void(0);">{rowItem.author.name}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )

        })

    }


    return (
        <div className="container" style={{ marginTop: "90px" }}>
            {blogs && renderRows()}
            {loader}
        </div>
    );
}

export default Blog;