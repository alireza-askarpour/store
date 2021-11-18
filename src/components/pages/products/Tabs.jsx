import React, { useState } from 'react'

import { useLayout } from '../../../providers/layout'

import { grid, list } from '../../../assets/icons'

const Tabs = () => {
    const { changeProductsListLayout } = useLayout()
    const [activeTab, setActiveTab] = useState('grid')
    
    const handleGrid = () => {
        setActiveTab('grid')
        changeProductsListLayout('grid')
    }
    const handleList = () => {
        setActiveTab('list')
        changeProductsListLayout('list')
    }

    return (
        <div className="tabs">
            <button
                className={activeTab === "grid" ? "tab active" :"tab"}
                onClick={handleGrid}
            >
                {grid}
            </button>
            <button
                className={activeTab === "list" ? "tab active" : "tab"}
                onClick={handleList}
            >
                {list}
            </button>
        </div>
    )
}

export default Tabs
