import { useState } from "react"
import Note from "./Note"

function Form(props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    function handleInput(event) {
        const value = event.target.value
        const name = event.target.name

        if (name === 'title') {
            setTitle(value)
        } else setContent(value)
    }

    function handleForm(event) {
        props.onSubmit(
            {
                title: title,
                content: content
            }
        )

        setTitle('')
        setContent('')
        event.preventDefault()
    }
    
    return (
        <div className="container">
            <div className="note form">
                <form onSubmit={handleForm}>
                    <input name="title" type="text" onChange={handleInput} value={title} />
                    <input name="content" type="text" onChange={handleInput} value={content} />
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Form