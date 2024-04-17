import React, { createContext, useContext, useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

// Context for Tabs
const TabsContext = createContext();

// Compound component Tabs
function Tabs({ children, id }) {
    const [activeTab, setActiveTab] = useState(id ?? null);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <Tab.Group> {/* Wrapping the Tab.Group around all Tab components */}
                {children}
            </Tab.Group>
        </TabsContext.Provider>
    );
}

// Compound component TabPane
function TabPane({ id, children }) {
    const { activeTab } = useContext(TabsContext);

    return activeTab === id ? <>{children}</> : null;
}

// Compound component TabMenuItem
function TabMenuItem({ id, children }) {
    const { activeTab, setActiveTab } = useContext(TabsContext);

    function handleClick() {
        setActiveTab(id);
    }

    return (
        <Tab
            className={({ selected }) =>
                classNames(
                    'w-1/4 py-2.5 text-2xl font-semibold leading-5 m-0 rounded-none',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400  m-0',
                    selected
                        ? '  text-blue-600 border-b-2 border-blue-600 focus:outline-none '
                        : 'bg-white text-gray-600'
                )
            }
            onClick={handleClick}
        >
            {children}
        </Tab>
    );
}

// Compound component TabMenu
function TabMenu({ children }) {
    return <>{children}</>;
}

// Exporting compound components
Tabs.TabPane = TabPane;
Tabs.TabMenuItem = TabMenuItem;
Tabs.TabMenu = TabMenu; // Exporting TabMenu component

export default Tabs;
