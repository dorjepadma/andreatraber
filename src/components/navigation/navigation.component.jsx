import React, { useState, } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  MDBIcon,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
// import { useSelector } from 'react-redux';


// import CartIcon from '../../Components/CartIcon/CartIcon.component';
// import CartDropdown from '../../Components/CartDropdown/CartDropdown.component';

// import { selectIsCartOpen } from '../../Store/Cart/Cart.selector';
// import { selectCurrentUser } from '../../Store/User/User.selector';
// import { signOutUser }  from '../../utils/Firebase/firebase.utils';
// import { connect } from 'react-redux';

import BuddhaEyes from '../../assets/images/BuddhaEyes.png';

import './navigation.styles.scss';

const Navigation = () => {


  const [showNavSecond, setShowNavSecond] = useState(false);
  return (
<div >
    <div style={{fontFamily: 'Ubuntu',}}>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='HOME'>ANDREA TRABER STUDIOS</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink href='collections'>COLLECTIONS</MDBNavbarLink>
            <MDBNavbarLink href='andrea'>ANDREA</MDBNavbarLink>
            <MDBNavbarLink href='social'>SOCIAL</MDBNavbarLink>
            <MDBNavbarLink href='cinema'>CINEMA</MDBNavbarLink>
            <MDBNavbarLink href='contact'>CONTACT</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
<Outlet/>
      
</div>



)}


export default Navigation
