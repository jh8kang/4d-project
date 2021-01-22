import React from 'react';
import './NavBarTrends.scss';

export default function NavBarTrends(props) {
    let insight="navbartrends-list-item navbartrends-list-item--active";
    let category="navbartrends-list-item";
    if (props.state === "category") {
        insight = "navbartrends-list-item";
        category = "navbartrends-list-item navbartrends-list-item--active";
    }

    return (
        <div className="navbartrends">
            <ul className="navbartrends-list">
                <li onClick={e=>props.stateHandler(e, "insight")} value="insight" className={insight}>Top Insights</li>
                <li onClick={e=>props.stateHandler(e, "category")} value="category" className={category}>Top Trends</li>
            </ul>
        </div>
    )
}