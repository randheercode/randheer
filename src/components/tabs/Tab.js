import React, {useEffect, useState} from 'react';
import './index.css';

function Tab(data, activeTab, onClick) {

    const [className, setClassName] = useState(() => {
        let newClassName = 'Tab-List-Item';
        if (data.action === activeTab) {
            newClassName += ' Tab-List-Item-Active';
        }
        return newClassName
    })

    useEffect(() => {
        let newClassName = 'Tab-List-Item';
        if (data.action === activeTab) {
            newClassName += ' Tab-List-Item-Active';
        }
        setClassName(newClassName)
    }, [activeTab])

    return (
        <li
            className={className}
            onClick={() => onClick && onClick(data.action)}>
            {data.title}
        </li>
    )
}

export default Tab