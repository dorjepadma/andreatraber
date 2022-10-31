import SignUpForm from '../../components/signUp/signUp.component';
import SignInForm from '../../components/signIn/signIn.component';

import './Authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication'>
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
    </div>
  );
};

export default Authentication;
