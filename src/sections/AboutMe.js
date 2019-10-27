import React from "react"
import {Container, Row} from "react-bootstrap";
import Banner from "../jumbotron/Banner";
import BAELogo from "../static/companies/baesystems.svg"
import Lockheed from "../static/companies/LM_logo_grey.svg"
import RaytheonLogo from "../static/companies/raytheon.png"
import CylexLogo from "../static/companies/cylex.png"
import ThalesLogo from "../static/companies/thales.jpg"
import FutureLogo from "../static/companies/future.png"
import MediaArea from "./MediaArea";

const AboutMe = props => {

    return (
        <React.Fragment>
            <Banner/>
            <section className="section">
                <h3>About me</h3>
                <p>Hi I am Shane Preater, a senior DevOps practitioner, systems designer and mentor. I have spent over 20 years in the software development industry in various roles.</p>
                <p>But, it didn't start off that way. I have actually done a degree in Chemistry and was working as a chemist designing printing materials. I had always had a love of computers and technology but had never persued it.</p><p>That is until I managed to break my leg whilst doing Martial arts. Having several weeks where I was unable to walk and get out of the house, my mum found a teach yourself programming book to keep me occupied. I suspect mainly to stop me moaning about being bored rather than for any altruistic reasons.</p>
                <p>That book, Sams: Teach yourself C in 21 days, literally changed the course of my life. I consumed the entire book in a couple of days and got stuck into writing code. Then, after a few weeks I got the companion book, Sams: Teach yourself C++ in 21 days.</p>
                <p>Since then I have slowly built up a vast amount of experience in various languages and also the various facets of the full software development lifecycle.</p>
                <p>These days I generally perform senior mentoring roles and systems architect / designer roles. I am considered a subject matter expert on Spring Boot and DevOps processes, with a string of satisfied customers to attest to my skills.</p>
            </section>
            <section className="section">
                <h3>Satisfied customers</h3>
                <Container fluid>
                    <Row>
                        <MediaArea logo={BAELogo} name="BAE Systems"
                                   content="I have provided mentoring and training to BAE Systems. I was also involved with designing the replacement for one of their customers legacy systems."/>
                        <MediaArea logo={RaytheonLogo} name="Raytheon"
                                   content="With Raytheon I headed up a team to create a full stack microservices system using DevOps processes. Part of this work was to stand up an entire Kubernetes cluster on their clients premises."/>
                        <MediaArea logo={Lockheed} name="Lockheed Martin"
                                   content="At Lockheed Martin, I was responsible for several high priority systems. I was also the principal engineer tasked with upskilling the development teams in Java best practices."/>
                         <MediaArea logo={CylexLogo} name="Cylex (formerly Blue Finger)" content="When I worked for Cylex, they were known as Blue Finger. My role for them was to rescue a failing system that they had just inherited during a merger with a European company. This role involved Java, C++ and C# for the various aspects of the system they had received. Being a polymath was essential to understand the various parts of the system and untangle the issues they were experiencing."/>
                         <MediaArea logo={ThalesLogo} name="Thales" content="During my time at Thales I worked on several high profile projects including Euro fighter and Thales mission debrief software. This used a combination of Java and C++ along with my requirements solicitation skills. This was also where I started to gain the skills of presenting and public speaking as I had to give briefing to senior staff."/>
                         <MediaArea logo={FutureLogo} name="Future" content="At Future, I headed up their team of contractors working on the shared platform that is used for their suite of online magazines. This involved talking to stakeholders and soliciting their requirements as well as creating a performant Java based web platform capable of handling the large scale of traffic Future enjoys"/>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default AboutMe;