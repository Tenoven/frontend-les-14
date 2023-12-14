import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import data from "../../constants/data.json"


function BlogPage({}) {


    const {id} = useParams ()
    useEffect(() => {
    document.title = `blog #${id}`
    }, []);

    // pagina info //
    return (
        <>
            {id && <>
                <h1>{data[id - 1].title} ({data[id -1].readTime} min)</h1>
                <h3>{data[id -1].subtitle}</h3>
                <p>Geschreven door {data[id -1].author} op {data[id -1].created}</p>
                <p>{data[id -1].content}</p>
                <p>{data[id -1].comments} reacties - {data[id -1].shares} keer gedeeld</p>
                <Link to={`/overzichtpagina`}>Terug naar de overzichtspagina</Link>
            </>}
        </>
    );
}

export default BlogPage;