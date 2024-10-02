import React from 'react'
import sidebar from './sidebar'
import Sidebar from './sidebar'
import Makeit from './makeit'

function Content() {
    return (
    
        <div className='main-wrapper'>
            <h2>Mind Controller</h2>
            <Sidebar/>
            <Makeit/>
        </div>
        
    )
}

export default Content