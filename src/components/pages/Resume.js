import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Resume() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center my-5">Resume</h1>
                    <p>
                        Elijah Collins<br />
                        Full Stack Developer<br />
                        Phone: 337-496-4315<br />
                        Email: moses.e.collins@gmail.com<br />
                        LinkedIn: linkedin.com/in/elijah-collins-a82850224<br />
                        Open to Relocation<br /><br />
                        <strong>Summary</strong><br />
                        A dynamic and innovative full-stack developer with extensive experience in advanced CSS, HTML, GIT, JavaScript, Web API's, Third-Party API's, Server-Side API's, OOP, Node.js, Express, SQL, ORM, MVC, Computer Science, NoSQL, PWA, React, MERN, and State. Graduate of the prestigious University of Washington's Full Stack Bootcamp with a certificate. Holds a Bachelor's degree in Psychology from McNeese State University. Committed to delivering superior web applications to achieve business objectives.<br /><br />
                        <strong>Skills</strong><br />
                        E-Commerce, Team Management, Project Management,Business Acumen, Customer Relationship Management ,Server-side Development ,Front-End Development, Backend Development, Software Development Life Cycle, Languages: HTML, CSS, JavaScript, Frameworks: Express.js, Node.js, React, jQuery, Databases: MySQL, and MongoDB.<br /><br />

                        <strong>Projects</strong><br />
                        <em>That’s The Mov</em>
                        <li>Created a user-friendly tool with HTML, CSS, and APIs from Ticketmaster and Openbrewerydb for easy discovery of local events and popular breweries. Features a search modal for quick retrieval and display of popular events in the area.</li><br />
                        <em>Comic Bookies</em>
                        <li>Designed and developed a social platform that enables users to share comic books and exchange opinions through comments, while providing features such as user registration, login, posting, commenting, and log out functionality. Leveraged Cloudinary's API to enable smooth uploading of images, videos, and other file formats to the cloud, utilizing packages such as Express, Express Handlebars, Express Session, Handlebars, MySql2, dotenv, Connect Session Sequelize, Session, and Cloudinary throughout the site's development.</li><br />
                        <em>Doggie Dates</em>
                        <li>Platform provides users with the ability to create a comprehensive profile, add their furry companions, schedule meetups, join existing gatherings, and ultimately participate in dog-friendly events of their choice. Developed high-quality software solutions by utilizing technologies such as React.js, Tailwind CSS, Midjourney API, Google API, and Dayjs API.</li><br />

                        <strong>Professional Experience</strong><br />
                        <em>Service Advisor, Audi of Bellevue 2022-2022</em><br />
                        <ul>

                            <li>Received the prestigious Audi Certified Expert Service Advisor Certificate, exhibiting an exceptional mastery of the skills and knowledge required to provide top-tier customer service and oversee the maintenance and repair of Audi vehicles.
                            </li>
                            <li>Effectively supervised and managed a group of five skilled technicians, leveraging their expertise to efficiently meet customers' delivery times while ensuring the highest quality of work.
                            </li>
                            <li>Demonstrated a remarkable commitment to customer satisfaction, proactively staying in constant communication with all stakeholders to attentively and comprehensively address any concerns, inquiries, or feedback they may have had, thus instilling a deep sense of confidence and trust in the dealership's service capabilities.
                            </li>
                        </ul>
                        <em>Systems Analyst, Memorial HomeHealth Care, 2020-2022</em><br />
                        <ul>

                            <li>Trained clinicians and office staff to effectively use patient management software.
                            </li>
                            <li>Contributed to the overall improvement of healthcare service delivery by ensuring that staff members are up-to-date with the latest technological advancements in the field.
                            </li>
                            <li>Collaborated on the implementation of a HIPAA-compliant digital information system for patient consents and insurance documentation, resulting in better security for confidential patient records.
                            </li>
                            <li>Produced comprehensive documentation detailing complex computer systems for end-users and trainees.
                            </li>
                        </ul>

                        <strong>Education</strong><br />
                        <em>Full Stack Bootcamp Certificate, University of Washington,2022-2023</em><br />
                        <ul>
                            <li>Gained valuable real-life experience as a Full-Stack Developer, working within a team environment to meet project goals and deadlines.</li>
                            <li>Modules: HTML, CSS, and Git, Advanced CSS, JavaScript, Web APIs, Third-Party and Server-Side APIs, Node.js, Express.js, SQL, NoSQL, Object-Relational Mapping (ORM), Model-View-Controller (MVC), React, MERN applications, State (also object-oriented programming, computer science for javascript, PWAs).</li>
                        </ul>
                        <em>Bachelor of Science in Psychology, McNeese State University,2014-2020</em><br />
                        <ul>
                            <li>Gained insights into the potential risks and benefits of using technology in psychological research and practice.</li>
                            <li>Developed a deep understanding of how technology impacts human behavior and psychological processes.</li>
                            <li>Explored the role of social media and other online platforms in shaping attitudes, behaviors, and mental health.</li>
                        </ul>
                        <br />
                    </p>
                </Col>
            </Row>
        </Container>
    )
}



// <!DOCTYPE html>
// <html>
// <head>
// 	<title>Elijah Collins</title>
// </head>
// <body>
// 	<h1>Elijah Collins</h1>
// 	<p>Phone: (337)496-4315 | Email: moses.e.collins@gmail.com | Kirkland, WA 98034 | <a href="https://www.linkedin.com/in/elijah-collins-a82850224/">linkedin.com/in/elijah-collins-a82850224</a></p>
// 	<h2>Summary</h2>
// 	<p>Experienced Full-Stack Developer with a Nanodegree in Full Stack Development from the University of Washington Bootcamp and a Bachelor's degree in Psychology from McNeese State University. Committed to delivering exceptional web applications that exceed user expectations and meet business objectives. Passionate about problem-solving and staying up-to-date with the latest advancements in the field.</p>
// 	<h2>Skills</h2>
// 	<ul>
// 		<li>E-Commerce</li>
// 		<li>Team Management</li>
// 		<li>Project Management</li>
// 		<li>Business Acumen</li>
// 		<li>Customer Relationship Management</li>
// 		<li>Server-side Development</li>
// 		<li>Front-End Development</li>
// 		<li>Backend Development</li>
// 		<li>Software Development Life Cycle</li>
// 		<li>Languages: HTML, CSS, JavaScript</li>
// 		<li>Frameworks: Express.js, Node.js, React, jQuery</li>
// 		<li>Databases: MySQL, and MongoDB</li>
// 	</ul>
// 	<h2>Projects</h2>
// 	<h3>That’s The Mov</h3>
// 	<p>Created a user-friendly tool with HTML, CSS, and APIs from Ticketmaster and Openbrewerydb for easy discovery of local events and popular breweries. Features a search modal for quick retrieval and display of popular events in the area.</p>
// 	<h3>Comic Bookies</h3>
// 	<p>Designed and developed a social platform that enables users to share comic books and exchange opinions through comments, while providing features such as user registration, login, posting, commenting, and log out functionality. Leveraged Cloudinary's API to enable smooth uploading of images, videos, and other file formats to the cloud, utilizing packages such as Express, Express Handlebars, Express Session, Handlebars, MySql2, dotenv, Connect Session Sequelize, Session, and Cloudinary throughout the site's development.</p>
// 	<h3>Doggie Dates</h3>
// 	<p>Platform provides users with the ability to create a comprehensive profile, add their furry companions, schedule meetups, join existing gatherings, and ultimately participate in dog-friendly events of their choice. Developed high-quality software solutions by utilizing technologies such as React.js, Tailwind CSS, Midjourney API, Google API, and Dayjs API.</p>
{/* <h2>EXPERIENCE</h2>
<div class="job">
  <h3>Service Advisor, Audi of Bellevue, Bellevue, WA</h3>
  <p class="date">2022-2022</p>
  <ul>
    <li>Received the prestigious Audi Certified Expert Service Advisor Certificate, exhibiting an exceptional mastery of the skills and knowledge required to provide top-tier customer service and oversee the maintenance and repair of Audi vehicles.</li>
    <li>Effectively supervised and managed a group of five skilled technicians, leveraging their expertise to efficiently meet customers' delivery times while ensuring the highest quality of work.</li>
    <li>Demonstrated a remarkable commitment to customer satisfaction, proactively staying in constant communication with all stakeholders to attentively and comprehensively address any concerns, inquiries, or feedback they may have had, thus instilling a deep sense of confidence and trust in the dealership's service capabilities.</li>
  </ul>
</div>

<div class="job">
  <h3>System Analyst, Memorial HomeHealth Care, Katy, TX</h3>
  <p class="date">2020-2022</p>
  <ul>
    <li>Trained clinicians and office staff to effectively use patient management software.</li>
    <li>Collaborated on the implementation of a HIPAA-compliant digital information system for patient consents and insurance documentation, resulting in better security for confidential patient records.</li>
    <li>Contributed to the overall improvement of healthcare service delivery by ensuring that staff members are up-to-date with the latest technological advancements in the field.</li>
  </ul>
</div>

<h2>EDUCATION</h2>
<div class="education">
  <h3>University of Washington, Seattle, WA - Full Stack Flex Certificate Bootcamp, 2023</h3>
  <ul>
    <li>Gained valuable real-life experience as a Full-Stack Developer, working within a team environment to meet project goals and deadlines.</li>
    <li>Modules: HTML, CSS, and Git, Advanced CSS, JavaScript, Web APIs, Third-Party and Server-Side APIs, Node.js, Express.js, SQL, NoSQL, Object-Relational Mapping (ORM), Model-View-Controller (MVC), React, MERN applications, State (also object-oriented programming, computer science for javascript, PWAs).</li>
  </ul>
</div>

<div class="education">
  <h3>McNeese State University, Lake Charles, LA — Psychology Degree, 2020</h3>
  <ul>
    <li>Gained insights into the potential risks and benefits of using technology in psychological research and practice.</li>
    <li>Developed a deep understanding of how technology impacts human behavior and psychological processes.</li>
    <li>Explored the role of social media and other online platforms in shaping attitudes, behaviors, and mental health.</li>
  </ul>
</div> */}