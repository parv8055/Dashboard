import React, { useState } from "react";
import "./Sidebar.css";
import { motion } from "framer-motion";
import exam from '../../imgs/exam.png'
import { Link, useNavigate } from "react-router-dom"

import {
  UilEstate,
  UilClipboardAlt,
  UilBell,
  UilPackage,
  UilBookAlt,
  UilApps,
  UilSignOutAlt,
  UilBars
} from "@iconscout/react-unicons";


const Sidebar = () => {

  const navigate = useNavigate()

  const [selected, setSelected] = useState('');

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* logo */}
        <div className="logo" onClick={() => navigate('/')}>
          <img src={exam} alt="exam" />
        </div>
        <div className="menu">



          {/* {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })} */}


          <Link to='/' style={{ textDecoration: "none" }}
            className="menuItem"
          // onClick={() => setSelected(value)}
          >
            <UilEstate />
            <span>Dashboard</span>
          </Link>

          <Link to='/product' style={{ textDecoration: "none" }}
            className="menuItem"
          // onClick={() => setSelected(value)}
          >
            <UilPackage />
            <span>Product</span>
          </Link>

          <Link to='/testseries' style={{ textDecoration: "none" }}
            className="menuItem"
          // onClick={() => setSelected(value)}
          >
            <UilApps />
            <span>Testseries</span>
          </Link>

          <Link to='/order' style={{ textDecoration: "none" }}
            className="menuItem"
          // onClick={() => setSelected(value)}
          >
            <UilClipboardAlt />
            <span>Orders</span>
          </Link>

          <Link to='/cources' style={{ textDecoration: "none" }}
            className="menuItem"
          // onClick={() => setSelected(value)}
          >
            <UilBookAlt />
            <span>Cources</span>
          </Link>

          <Link to='/notification' style={{ textDecoration: "none" }}
            className="menuItem"
          // onClick={() => setSelected(value)}
          >
            <UilBell />
            <span>Notification</span>
          </Link>

          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
