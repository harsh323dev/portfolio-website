import React from 'react'
import './Sidebar.css'
import Home from '../Home/Home';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='container-fluid sidebar-section'>

        <div className='sidebar'>

            <div className='icon-for-sidebar-expand-and-collapse'>

                <p><BsChevronLeft size={30}/></p>


            </div>


        </div>
        <div className='container'>
            <Home />


        </div>
    </div>
  )
}

export default Sidebar