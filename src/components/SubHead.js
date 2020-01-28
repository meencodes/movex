import React, { useEffect } from 'react';
import i18n from 'i18next';

function handleClick(lang) {
    i18n.changeLanguage(lang);
}

const SubHead = ({ t }) => {
    return (
        <div className="menu-top">
            <div className="menu-wrapper">
                <div className="pull-right language-wrapper">
                    <button className="active" onClick={() => handleClick('en')}>EN</button>&nbsp;
                    <button onClick={() => handleClick('th')}>TH</button>
                </div>
            </div>
        </div>
    )
}

export default SubHead;