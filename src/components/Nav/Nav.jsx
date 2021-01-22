import React from 'react';
import './Nav.scss';
import questionmark from '../../assets/icons/questionmark.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import shutterstock from '../../assets/logo/shutterstock.svg';
import user from '../../assets/icons/user.svg';
import globe from '../../assets/icons/globe.svg';
import downarrow from '../../assets/icons/downarrow.svg'


export default function Nav() {
    return (
        <div className="nav">
            <div className="nav__referral">
                <div className="nav__referral-div1">
                    <p className="nav__referral-div1-text">Promote your portfolio and earn up to <span className="nav__referral-div1-text-span">$200</span> for every new customer you refer. </p>
                    <img src={questionmark} alt="question mark" className="nav__referral-div1-image"></img>
                </div>
                <div className="nav__referral-div2">
                    <img src={facebook} alt="facebook" className="nav__referral-div2-image"></img>
                    <img src={twitter} alt="twitter"  className="nav__referral-div2-image"></img>
                    <button className="nav__referral-div2-button">Copy referral link</button>
                </div>
            </div>
            <div className="nav__header">
                <img src={shutterstock} alt="shutterstock"  className="nav__header-logo"></img>
                <div className="nav__header-right">
                    <div className="nav__header-right-div nav__header-right-div-first">
                        <img src ={user} alt= "user" className="nav__header-image"></img>
                        <p className="nav__header-text">User</p>
                        <img src ={downarrow} alt= "user" className="nav__header-image"></img>
                    </div>
                    <div className="nav__header-right-div">
                        <img src={globe} alt="user" className="nav__header-image"></img>
                        <p className="nav__header-text">English</p>
                        <img src ={downarrow} alt= "user" className="nav__header-image"></img>
                    </div>
                </div>
            </div>
            <div className="nav__bar">
                <div className="nav__bar-div">
                    <ul className="nav__bar-div-list">
                        <div className="nav__bar-div-list-section">
                            <li className="nav__bar-div-list-item">Earnings</li>
                            <img src ={downarrow} alt= "user" className="nav__header-image"></img>
                        </div>
                        <div className="nav__bar-div-list-section">
                            <li className="nav__bar-div-list-item">Portfolio</li>
                            <img src ={downarrow} alt= "user" className="nav__header-image"></img>
                        </div>
                        <div className="nav__bar-div-list-section">
                            <li className="nav__bar-div-list-item">Insights</li>
                            <img src ={downarrow} alt= "user" className="nav__header-image"></img>
                        </div>
                        <div className="nav__bar-div-list-section">
                            <li className="nav__bar-div-list-item">Upload</li>
                        </div>
                    </ul>
                </div>
                <div className="nav__bar-div">
                    <p className="nav__bar-div-text">Unpaid Earnings: $0.00</p>
                    <img src ={downarrow} alt= "user" className="nav__header-image"></img>
                </div>
            </div>
        </div>
    )
}
