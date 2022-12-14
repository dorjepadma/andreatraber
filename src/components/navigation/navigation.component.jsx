import React, { useState, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../Context/user.context';
import { signOutUser }  from '../../utils/Firebase/firebase.utils';
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
// import { connect } from 'react-redux';

import Sunflowers from '../../assets/images/Sunflowers.png';

import './navigation.styles.scss';

const Navigation = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);
  const { currentUser } = useContext(UserContext);
 
  console.log(currentUser)
  return (
<div >
    <div className='navigation'>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>

        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink href='/collections'>COLLECTIONS</MDBNavbarLink>
            <MDBNavbarLink href='/andrea'>ANDREA</MDBNavbarLink>
            <MDBNavbarLink href='/social'>SOCIAL</MDBNavbarLink>
            <MDBNavbarLink href='/cinema'>CINEMA</MDBNavbarLink>
            <MDBNavbarLink href='/contact'>CONTACT</MDBNavbarLink>
            {currentUser ? (
              <MDBNavbarLink href='home'onClick={signOutUser} >SIGN OUT</MDBNavbarLink>
            ) : (
              <MDBNavbarLink href='signin'>SIGN IN</MDBNavbarLink>)}
            
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBNavbarBrand href='/home'>
          <div>
          ANDREA TRABER STUDIO
          </div>
          <div >

        <img className='Logo'
              src={Sunflowers}
              height='60'
              alt='Buddha Eyes'
              loading='lazy'
            />
          </div>
          </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
    </div>
<Outlet/>
      
</div>



)}


export default Navigation
