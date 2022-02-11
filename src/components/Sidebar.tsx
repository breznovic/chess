import React from 'react'
import {FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt} from "react-icons/all";

export const Sidebar = () => {
    return <div className='sidebar' data-testid='sidebar'>
        <ul className='sedebar__generic'>
            <li>
                <span><FaInbox/></span>
                <span>Inbox</span></li>
            <li>
                <span><FaRegCalendar/></span>
                <span>Today</span></li>
            <li>
                <span><FaRegCalendarAlt/></span>
                <span>Nex 7 days</span></li>
        </ul>
        <div className='sidebar__middle'>
            <span><FaChevronDown/></span>
            <h2>Projects</h2>
        </div>
        <ul className='sidebar__projects'>
            Projects will be here
        </ul>
        AddProject Comp
    </div>
}