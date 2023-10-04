import { useState } from "react"

function Form(props) {
    const [note, setNote] = useState(
        {
            title: '',
            content: ''
        }
    )

    function handleInput(event) {
        const {name, value} = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function handleForm(event) {
        props.onSubmit(note)

        setNote({
            title: '',
            content: ''
        })

        event.preventDefault()
    }
    
    return (
        <div className="container">
            <div className="note form">
                <form onSubmit={handleForm}>
                    <input name="title" type="text" onChange={handleInput} value={note.title} />
                    <input name="content" type="text" onChange={handleInput} value={note.content} />
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Form