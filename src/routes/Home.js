import React from "react";
import {Link} from "react-router-dom";
import raytheonLogo from "../static/companies/raytheon.png"
import futureLogo from "../static/companies/future.png"
import thalesLogo from "../static/companies/thales.jpg"
import lockheedLogo from "../static/companies/LM_logo_grey.svg"
import BAESystemsLogo from "../static/companies/baesystems.svg"
import blueFingerLogo from "../static/companies/cylex.png"

const Home = (props) => (
    <div id="home">
        <h4>About me</h4>
        <p>Hi,<br/>I am a senior software consultant with a track record of providing value to my
            clients in various fields of industry.</p>
        <p>I am an expert in various <Link to="/languages">languages</Link>.</p>
        <p>Many of my roles have involved leading the design of complex systems.</p>
        <p>I have done many roles that required training / mentoring indivdual developers or
            complete development teams.</p>
        <p>I have provided consultancy services in various capacities to many companies, including:</p>
        <ul>
            <li><img src={BAESystemsLogo}/></li>
            <li><img src={raytheonLogo}/></li>
            <li><img src={lockheedLogo}/></li>
            <li><img src={futureLogo}/></li>
            <li><img src={thalesLogo}/></li>
            <li><img src={blueFingerLogo}/></li>
        </ul>
    </div>
);

export default Home;
