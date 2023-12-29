import React, {useState} from 'react';
import "./newpost.css"
import {calcReadTime} from "../../helpers/readtime.jsx";

function Newpost(props) {



    const [formState, setFormState] = useState({
        title: "",
        subtitle: "",
        content: "",
        author: "",
        created: "",
        readTime: 0,
        comments: 0,
        shares: 0,
    })


    function handleChange(e) {
        const changedFieldName = e.target.name

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        })
    }
function handleSubmit(e) {
    formState.readTime = calcReadTime(formState.content)
        const date = new Date()
        formState.created = date.toISOString()
    e.preventDefault()
    console.log(formState)
}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Titel</label>
                    <input type="text" onChange={handleChange} id={"title"} required={true} name={"title"} value={formState.title}/>
                </div>
                <div>
                    <label>Subtitel</label>
                    <input type="text" onChange={handleChange} id={"subtitle"} required={true} name={"subtitle"} value={formState.subtitle}/>
                </div>
                <div>
                    <label>Auteur</label>
                    <input type="text" onChange={handleChange} id={"author"} required={true} name={"author"} value={formState.author}/>
                </div>
                <div>
                    <label>Bericht</label>
                    <textarea name="content" id="content" rows="10" cols="33" minLength="300" maxLength="2000"
                              placeholder="content of the blog" required={true} onChange={handleChange} value={formState.content}/>
                </div>
                <button type="submit" >Verzenden</button>
            </form>

        </>
    );
}



export default Newpost;