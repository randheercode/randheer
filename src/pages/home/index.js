import React, {useState} from 'react';
import './index.css';
import DataManager from "../../data/DataManager";
import {WebsiteData} from "../../data/StaticData";
import ComponentManager from "../../components/ComponentManager";

function Home() {

    const [data] = useState(WebsiteData)
    const [dataManager] = useState(new DataManager(data))
    const [activeTabs, setActiveTabs] = useState(data.tabs[0].action)

    return (
        <div className="Home">
            {ComponentManager.getHeader(dataManager.getHeaderData())}
            {ComponentManager.getTabs(data.tabs, (tabs) => setActiveTabs(tabs))}
            <div>{activeTabs}</div>
        </div>
    );
}

export default Home;
