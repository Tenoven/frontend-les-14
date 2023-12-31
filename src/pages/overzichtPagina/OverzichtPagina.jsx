import React, {useEffect, useState} from 'react';
import data from "../../constants/data.json"
import "./OverzichtPagina.css"
import {Link} from "react-router-dom";
import axios from 'axios';

function OverzichtPagina() {


    useEffect(() => {
 fetchInfo()
    }, []);
async function fetchInfo() {
    try {
        const result = await axios.get(' http://localhost:3000/posts');
        console.log(result.data)
        setDataState(result.data)
    } catch (e) {
        console.error(e);
        alert("Info couldn't be loaded\ntry again")
    }
}

    const [dataState, setDataState] = useState([])

    return (
        <>
         <div>
             <ul>
                 {dataState.map((dat) => {
                 {/*{data.map((dat) => {*/}
                     console.log(dat)
                     return <fieldset className="boxes">
                            <h4> <Link to={`/post/${dat.id}`}>{dat.title}</Link> ({dat.author})</h4>
                            <p>{dat.comments} reacties - {dat.shares} keer gedeeld</p>
                        </fieldset>

                    }
                )}
         </ul>
         </div>
        </>
    );
}

export default OverzichtPagina;