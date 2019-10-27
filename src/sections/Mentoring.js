import React from "react";
import MentoringImge from "../static/slider/mentoring03.jpg"
import DynamicParallax from "./DynamicParallax";

const Mentoring = props => {

    return (
        <React.Fragment>
            <DynamicParallax image={MentoringImge} alt="Training people in a comfortable surrounding" content={(
                <div><h3>Team training</h3>
                    <p>Over the years I had the opportunity to school many teams in various languages and techniques.
                        Some of these
                        include:</p>
                    <ul>
                        <li>Beginner Java, Python and Javscript coding</li>
                        <li>Advanced techniques in Java, Python and Javascript</li>
                        <li>Setting up DevOps environments on various cloud / in house architectures</li>
                        <li>Microservices techniques using Spring Boot and also Python with Flask</li>
                        <li>Best practices for Spring Boot applications</li>
                        <li>Many more</li>
                    </ul>
                </div>
            )}/>
            <section>
                <h3>Get your developers up to speed</h3>
                <p>Work with me to get your developers up to speed on new techniques and best practices. I can be
                    embedded into a team or work as the technical lead to up skill individual teams in the required
                    skills.
                </p>
            </section>
            <section>
                <h3>On site training days</h3>
                <p>I have several years experience in running training days at client sites to deep dive on one or more
                    subjects and get the developers enthused and informed about using new technologies. I have expert
                    working knowledge in various aspects of design and development, so I am well placed to deliver the
                    training required to get the job done.</p>
            </section>
            <section>
                <h3>Offsite workshops</h3>
                <p>I have had lots of experience in presenting to groups, both large and small. This means i am able to
                    offer full day off site training for individual teams or the whole enterprise to give training on my
                    various areas of expertise.</p>
            </section>
        </React.Fragment>
    )
}

export default Mentoring