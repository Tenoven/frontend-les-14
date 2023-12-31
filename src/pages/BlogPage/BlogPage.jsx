import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import dataState from "../../constants/data.json"
import axios from "axios";


function BlogPage() {

        console.log("hallo")

    const {id} = useParams ()

    useEffect(() => {
    document.title = `blog #${id}`
    fetchInfo()
    }, []);

    async function fetchInfo() {
        try {
            const result = await axios.get(' http://localhost:3000/posts');
            console.log('result.data: ', result.data)
            setDataState(result.data)
        } catch (e) {
            console.error(e);
            alert("Info couldn't be loaded\ntry again")
        }
    }

    const [dataState, setDataState] = useState([])

    // pagina info //
    return (
        <>
            {Object.keys(dataState).length > 0 && <>
                <h1>{dataState[id - 1].title} ({dataState[id -1].readTime} min)</h1>
                <h3>{dataState[id -1].subtitle}</h3>
                <p>Geschreven door {dataState[id -1].author} op {dataState[id -1].created}</p>
                <p>{dataState[id -1].content}</p>
                <p>{dataState[id -1].comments} reacties - {dataState[id -1].shares} keer gedeeld</p>
                <Link to={`/overzichtpagina`}>Terug naar de overzichtspagina</Link>
            </>}
        </>
    );
}

export default BlogPage;