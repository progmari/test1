import React from 'react';

import './Header.css';


export const Header: React.FC = () => (
    <div className="Header">
        <div className="Header__logo">
            eCharger
        </div>
        <div className="Header__user">
            <div className="Header__user-logo"></div>
            <div className="Header__user-name">Bart Vader</div>
        </div>
    </div>
);

export default Header;
