import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const DashboardCustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
      <Link
        style={{ borderLeft: match ? "4px solid #3346d3" : "none",background:match ?"#fff":"",color:match?"#3346d3":"", }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
    );
};

export default DashboardCustomLink;