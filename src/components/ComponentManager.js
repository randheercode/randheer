import Header from "./header";
import Tabs from "./tabs";
import Tab from "./tabs/Tab";

class ComponentManager {

    static getHeader(data) {
        return Header(data)
    }

    static getTabs(tabData, onTabChanged) {
        return Tabs(tabData, onTabChanged)
    }

    static getTabItem(data, activeTab, onClick) {
        return Tab(data, activeTab, onClick)
    }
}

export default ComponentManager