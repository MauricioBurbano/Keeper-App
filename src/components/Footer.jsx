const date = new Date();

function Footer() {
    return (
        <footer>
            <p>Copyright <span>©️</span> {date.getFullYear()}</p>
        </footer>
    );
}

export default Footer;