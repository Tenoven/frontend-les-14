import React, {useState} from 'react';
import "./newpost.css"

function Newpost(props) {


    let formState, setFormState;
    [formState, setFormState] = useState({
        title: "",
        subtitle: "",
        content: "",
        created: "",
        author: "",
        comments: 0,
        shares: 0,
    );
}

    function handleChange(e) {
        const changedFieldName = e.target

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        })
    }
function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
}

    return (
        <>
            <form>
                <div>
                    <label >Titel</label>
                    <input type="text" onChange={handleChange} id={"title"} value={formState.title}/>
                </div>
                <div>
                    <label>Subtitel</label>
                    <input type="text" onChange={handleChange} id={"subtitle"} value={formState.subtitle}/>
                </div>
                <div>
                    <label>Auteur</label>
                    <input type="text" onChange={handleChange} id={"author"} value={formState.author}/>
                </div>
                <div>
                    <label>Bericht</label>
                    <input type="text" onChange={handleChange} id={"content"} value={formState.content}/>
                </div>
                <button type="submit" onSubmit={handleSubmit}>Verzenden</button>
            </form>
        </>
    );
}

export default Newpost;