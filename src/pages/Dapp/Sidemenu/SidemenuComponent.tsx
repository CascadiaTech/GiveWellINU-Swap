// eslint-disable-next-line no-restricted-imports
import 'react-pro-sidebar/dist/css/styles.css'
import './Sidemenu.css'

import React, { useState } from 'react'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
import { ProSidebar, SidebarHeader } from 'react-pro-sidebar'
import Link from 'react-scroll'

export default function Sidermenu() {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
  }

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <p style={{ paddingTop: '3vh', marginTop: '3vh', marginBottom: '3vh' }}></p>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle style={{ marginRight: '3px' }} />}
            </div>
          </SidebarHeader>
          <div className={'flexbox-vertical-container'}>
            <Link
              className={'header-link'}
              style={{
                paddingLeft: '1.5vw',
                fontFamily: 'OpenDyslexic3',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
              }}
              to="DashBoard"
              spy={true}
              smooth={true}
            >
              DashBoard
            </Link>
            <Link
              className={'header-link'}
              style={{
                paddingLeft: '1.5vw',
                fontFamily: 'OpenDyslexic3',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
              }}
              to="NFT"
              spy={true}
              smooth={true}
            >
              NFT
            </Link>
            <Link
              className={'header-link'}
              style={{
                paddingLeft: '1.5vw',
                fontFamily: 'OpenDyslexic3',
                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
              }}
              to="Staking"
              spy={true}
              smooth={true}
            >
              Staking
            </Link>
          </div>
        </ProSidebar>
      </div>
    </>
  )
}
