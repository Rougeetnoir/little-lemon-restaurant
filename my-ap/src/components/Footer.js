import React from "react";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section contact">
                    <h3>Find Us:</h3>
                    <ul>
                        <li>Chicago, IL</li>
                        <li>Phone: (312) 555-0100</li>
                        <li>Email: info@littlelemon.com</li>
                    </ul>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/littlelemon">Facebook</a></li>
                        <li><a href="https://www.instagram.com/littlelemon">Instagram</a></li>
                        <li><a href="https://www.twitter.com/littlelemon">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Little Lemon Restaurant | Designed by Yaner
            </div>
        </footer>
    )
}