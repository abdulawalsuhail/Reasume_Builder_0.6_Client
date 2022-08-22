import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CareerCustomNavbar = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
      <Link
        style={{ borderBottom: match ? "4px solid #3346d3" : "none",color:match?"black":"", }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
    );
};

export default CareerCustomNavbar;