import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';


// import CartIcon from '../../Components/CartIcon/CartIcon.component';
// import CartDropdown from '../../Components/CartDropdown/CartDropdown.component';

// import { selectIsCartOpen } from '../../Store/Cart/Cart.selector';
// import { selectCurrentUser } from '../../Store/User/User.selector';
// import { signOutUser }  from '../../utils/Firebase/firebase.utils';
// import { connect } from 'react-redux';

import Hung from '../../assets/images/hung.jpeg';

// import { NavigationContainer, 
//   HeaderLogo, 
//   NavBarLinkContainer, 
//   NavBarLink, 
//  } from './navigation.styles';
import './navigation.styles.scss';

const Navigation = () => {

  const [ extendNavBar, setExtendNavBar ] = useState(false);

  return (
<div >
<div className={'navigation'}>

      <Link  to='/' >
        <img className='navigation_Logo' src={Hung} alt='nestz logo'></img>
      </Link>
      <div className='navigation_Menu'>
        <Link className='navigation_Item'  to='/home' >HOME</Link>
        <Link className='navigation_Item' to='/meditations' >MEDITATIONS</ Link>
        <Link className='navigation_Item' to='/collections' >COLLECTIONS</ Link>
        <Link className='navigation_Item' to='/andrea' >ANDREA</ Link>
        <Link className='navigation_Item' to='/contemplations' >CONTEMPLATIONS</ Link>
        <Link className='navigation_Item' to='/social' >SOCIAL</ Link>
        <Link className='navigation_Item' to='/cinema' >CINEMA</ Link>
        <Link className='navigation_Item' to='/contact' >CONTACT</ Link>
      </div>
</div>

</div>

)}


export default Navigation
