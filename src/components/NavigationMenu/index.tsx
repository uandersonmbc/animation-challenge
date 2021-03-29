import Button from './../../components/Button';
import logo from './../../assets/images/logo.png';
import logoText from './../../assets/images/logo-text.png';

import './index.scss';

const NavigationMenu: React.FC = () => {
  return (
    <div className='nav'>
      <div className='nav-content'>
        <div className='nav-left'>
          {/* <img src={logo} alt='LOGO' /> */}
          <img src={logoText} alt='LOGO' className='nav-logo' />
        </div>
        <div className='nav-right'>
          <ul>
            <li>Doing Good</li>
            <li>Blog</li>
            <li>Help</li>
            <li>
              <Button outLine style={{ paddingTop: 10, paddingBottom: 10 }}>
                Get Rally
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
