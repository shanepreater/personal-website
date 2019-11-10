import React from "react";
import { Redirect, Route } from "react-router";
import CreateBlog from "../admin/CreateBlog";
import CreateAdvert from "../admin/createAd";
import { connect } from "react-redux";
import { adminSelector, loggedInSelector } from "../authentication/AuthReducer";

const Admin = ({ isLoggedIn, isAdmin }) => {
  if (!isLoggedIn || !isAdmin) {
    return <Redirect to="/" />;
  }
  return (
    <React.Fragment>
      <Route path="/admin/blog/create" component={CreateBlog} />
      <Route path="/admin/advert/create" component={CreateAdvert} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: loggedInSelector(state),
  isAdmin: adminSelector(state)
});

export default connect(mapStateToProps)(Admin);
