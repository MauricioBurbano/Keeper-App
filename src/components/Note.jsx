function Note(props) {
    return (
        <div className="note" onClick={() => {props.handleClick(props.index)}}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;