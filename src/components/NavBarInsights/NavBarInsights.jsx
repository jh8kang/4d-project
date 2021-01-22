import React from 'react';
import './NavBarInsights.scss';

export default function NavBarInsights() {
    return (
        <div className="navbarinsights">
            <ul className="navbarinsights-list">
                <li className="navbarinsights-list-item navbarinsights-list-item--active ">Top Insights</li>
                <li className="navbarinsights-list-item">Top Trends</li>
            </ul>
        </div>
    )
}