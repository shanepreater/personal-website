import React from "react";
import {Link} from "react-router-dom";
import BAESystemsLogo from "../static/companies/baesystems.svg"
import RaytheonLogo from "../static/companies/raytheon.png"
import LockheedLogo from "../static/companies/LM_logo_grey.svg"
import FutureLogo from "../static/companies/future.png"
import ThalesLogo from "../static/companies/thales.svg"

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
            <li><BAESystemsLogo/></li>
            <li><RaytheonLogo/></li>
            <li><LockheedLogo/></li>
            <li><FutureLogo/></li>
            <li><ThalesLogo/></li>
        </ul>
    </div>
);

export default Home;
