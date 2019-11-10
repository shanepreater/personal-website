import React from "react";
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

const NavLink = ({to, label, smallClasss}) => {
    return (
        <li className={smallClasss}>
            <Link to={to} className="nav-link">{label}</Link>
        </li>
    )
};

const DropDownLink = ({to, label}) => {
    return (
        <Dropdown.Item as={Link} to={to}>{label}</Dropdown.Item>
    )
};

const AdminLinks = ({smallClass, mode}) => {
    if(mode == "navLink") {
        return (
            <React.Fragment>
                <NavLink smallClasss={smallClass} to="/admin/advert/create" label="Create Advert" />
                <NavLink smallClasss={smallClass} to="/admin/blog/create" label="Create Post" />
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <DropDownLink to="/admin/advert/create" label="Create Advert" />
            <DropDownLink to="/admin/blog/create" label="Create Post" />

        </React.Fragment>
    )
};

export default AdminLinks;