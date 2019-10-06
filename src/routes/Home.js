import React from "react";
import {Link} from "react-router-dom";

const Home = (props) => (
    <div id="home">
        <h4>About me</h4>
        <p>Hi,<br/>I am a senior software consultant with a track record of providing value to my
            clients in various fields of industry.</p>
        <p>I am an expert in various <Link to="/languages">languages</Link>.</p>
        <p>Many of my roles have involved leading the design of complex systems.</p>
        <p>I have done many roles that required training / mentoring indivdual developers or
            complete development teams.</p>
    </div>
);

export default Home;
