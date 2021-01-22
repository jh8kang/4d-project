import React from 'react';
import './NavBarTrends.scss';

export default function NavBarTrends() {
    return (
        <div className="navbartrends">
            <ul className="navbartrends-list">
                <li className="navbartrends-list-item navbartrends-list-item ">Top Insights</li>
                <li className="navbartrends-list-item--active">Top Trends</li>
            </ul>
        </div>
    )
}