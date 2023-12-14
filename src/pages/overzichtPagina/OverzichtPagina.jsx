import React from 'react';
import data from "../../constants/data.json"
import "./OverzichtPagina.css"
import {Link} from "react-router-dom";

function OverzichtPagina() {

    console.log(data)

    return (
        <>
        <div>
            <ul>
                {data.map((dat) => {
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