import React, {useState} from 'react';
import './index.css';
import ComponentManager from "../ComponentManager";

function Tabs(tabData, onTabChanged) {

    const [activeTab, setActiveTab] = useState(tabData[0].action)

    const clickItem = (tab) => {
        setActiveTab(tab)
        onTabChanged && onTabChanged(tab)
    }

    return (
        <div className="Tabs">
            <ol className="Tab-List">
                {tabData.map((data) => {
                    return ComponentManager.getTabItem(data, activeTab, clickItem)
                })}
            </ol>
        </div>
    )
}

export default Tabs;