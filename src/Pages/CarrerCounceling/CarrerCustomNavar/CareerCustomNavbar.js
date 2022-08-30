import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CareerCustomNavbar = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
      <Link
        style={{ borderBottom: match ? "2px  solid #3144d3" : "none",color:match?"#3346d3":""}}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
    );
};

export default CareerCustomNavbar;