import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
// import { useSelector } from 'react-redux';


// import CartIcon from '../../Components/CartIcon/CartIcon.component';
// import CartDropdown from '../../Components/CartDropdown/CartDropdown.component';

// import { selectIsCartOpen } from '../../Store/Cart/Cart.selector';
// import { selectCurrentUser } from '../../Store/User/User.selector';
// import { signOutUser }  from '../../utils/Firebase/firebase.utils';
// import { connect } from 'react-redux';

import BuddhaEyes from '../../assets/images/BuddhaEyes.png';

// import { NavigationContainer, 
//   HeaderLogo, 
//   NavBarLinkContainer, 
//   NavBarLink, 
//  } from './navigation.styles';
import './navigation.styles.scss';

const Navigation = () => {

  const [basicOpen, setBasicOpen] = useState(true);
  // const [basicCollapse1, setBasicCollapse1] = useState(true);
  // const [basicCollapse2, setBasicCollapse2] = useState(false);

  return (
<div >
      <div container className='pageHeader' col='2'>
        <h1> Andrea Traber</h1>
        <MDBBtn onClick={() => setBasicOpen(!basicOpen)} style={{ backgroundColor: '#835E4A', left:'38%', height: '60px', marginBottom: '2px'}}>
          <MDBIcon fas icon='bars'  />
        </MDBBtn>

      </div>

        <div >
      <MDBSideNav isOpen={basicOpen} absolute getOpenState={(e) => setBasicOpen(e)}>
      <Link  to='/home' >
        <img className='navigation_Logo' src={BuddhaEyes} alt='nestz logo'></img>
      </Link>
      <div className='navigation_Menu'>
        <MDBSideNavMenu className='background'>
          <MDBSideNavItem className='Item'>
            <MDBSideNavLink  href='/home'>
              HOME
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem className='Item'>
            <MDBSideNavLink href='/meditations'>
              MEDITATIONS
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem className='Item'>
            <MDBSideNavLink href='/collections'>
            COLLECTIONS
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem className='Item'>
            <MDBSideNavLink href='/andrea'>
            ANDREA
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem className='Item'>
            <MDBSideNavLink href='/contemplations'>
            CONTEMPLATIONS
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem className='Item'>
            <MDBSideNavLink href='/social'>
            SOCIAL
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem className='Item'>
            <MDBSideNavLink href='/cinema'>
            CINEMA
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem className='Item'>
            <MDBSideNavLink href='/contact'>
            CONTACT
            </MDBSideNavLink>
          </MDBSideNavItem>
          {/* <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={basicCollapse1} onClick={() => setBasicCollapse1(!basicCollapse1)}>
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              Category 1
            </MDBSideNavLink>
            <MDBSideNavCollapse show={basicCollapse1}>
              <MDBSideNavLink>Link 2</MDBSideNavLink>
              <MDBSideNavLink>Link 3</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem> */}
          {/* <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={basicCollapse2} onClick={() => setBasicCollapse2(!basicCollapse2)}>
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              Category 2
            </MDBSideNavLink>
            <MDBSideNavCollapse show={basicCollapse2}>
              <MDBSideNavLink>Link 4</MDBSideNavLink>
              <MDBSideNavLink>Link 5</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem> */}
        </MDBSideNavMenu>
        {/* <Link className='navigation_Item'  to='/home' >HOME</Link>
        <Link className='navigation_Item' to='/meditations' >MEDITATIONS</ Link>
        <Link className='navigation_Item' to='/collections' >COLLECTIONS</ Link>
        <Link className='navigation_Item' to='/andrea' >ANDREA</ Link>
        <Link className='navigation_Item' to='/contemplations' >CONTEMPLATIONS</ Link>
        <Link className='navigation_Item' to='/social' >SOCIAL</ Link>
        <Link className='navigation_Item' to='/cinema' >CINEMA</ Link>
        <Link className='navigation_Item' to='/contact' >CONTACT</ Link> */}
      </div>
      </MDBSideNav>

      
</div>

</div>

)}


export default Navigation
