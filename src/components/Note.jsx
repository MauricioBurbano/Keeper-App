function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="delete" onClick={() => {props.handleClick(props.index)}}>Delete</button>
        </div>
    );
}

export default Note;