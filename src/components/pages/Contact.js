import React from 'react';

function Contact() {
    return (
        <div className="container my-5">
            <h1>Contact</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="mt-5">
                <p>Phone: 337-496-4315</p>
                <p>Email: moses.e.collins@gmail.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/elijah-collins-a82850224/" target="_blank" rel="noopener noreferrer">linkedin.com/in/elijah-collins-a82850224/</a></p>
            </div>
        </div>
    );
}

export default Contact;
