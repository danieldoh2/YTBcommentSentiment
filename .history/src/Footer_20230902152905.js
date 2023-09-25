import React from 'react';
import './Footer.css'; // Import CSS for styling

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Your Company Name</p>
        </footer>
    );
}

export default Footer;
