import React from "react"
import {Route} from "react-router";
import Home from "./routes/Home"
import Blog from "./routes/blog";
import Mentor from "./routes/mentor";
import Designer from "./routes/designer";
import Developer from "./routes/developer";
import Languages from "./routes/languages";

const Routes = (props) => (
    <React.Fragment className="left-gutter">
        <Route path="/blog" component={Blog}/>
        <Route path="/mentor" component={Mentor}/>
        <Route path="/dev" component={Developer} />
        <Route path="/design" component={Designer} />
        <Route path="/languages" component={Languages} />
        <Route path="/" exact component={Home} />
    </React.Fragment>
);

export default Routes;