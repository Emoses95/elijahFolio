import React from 'react';

export default function About() {
    return (
        <div className="container mt-5">
            <h1 className="text-center display-4">Elijah Collins</h1>
            <hr className="w-25 mx-auto mb-5" />
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h2 className="text-center">About Me</h2>
                    <p className="lead text-justify">
                        As a graduate of the esteemed University of Washington bootcamp
                        program, I, Elijah Collins, am endowed with a rich set of
                        competencies in advanced CSS, HTML, and JavaScript technologies. My
                        skills in these areas allow me to create visually stunning and
                        highly functional applications, attuned to modern-day design
                        sensibilities. Moreover, my prowess in designing and implementing
                        complex Web APIs, Third-Party APIs, and Server-Side APIs facilitates
                        seamless integration between disparate systems, propelling efficient
                        exchange of information in today's digitally connected world.
                    </p>
                </div>
                <div className="col-md-6 mb-4">
                    <h2 className="text-center">Skills</h2>
                    <ul className="list-group">
                        <li className="list-group-item bg-primary text-light">Node.js</li>
                        <li className="list-group-item bg-primary text-light">Express</li>
                        <li className="list-group-item bg-primary text-light">SQL</li>
                        <li className="list-group-item bg-primary text-light">ORM</li>
                        <li className="list-group-item bg-primary text-light">MVC</li>
                        <li className="list-group-item bg-primary text-light">Computer Science</li>
                        <li className="list-group-item bg-primary text-light">NoSQL</li>
                        <li className="list-group-item bg-primary text-light">PWA</li>
                        <li className="list-group-item bg-primary text-light">React</li>
                        <li className="list-group-item bg-primary text-light">MERN</li>
                        <li className="list-group-item bg-primary text-light">State</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
