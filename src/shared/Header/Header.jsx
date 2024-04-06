import logo from '../../logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center my-6'>
            <img className='mx-auto' src={logo} alt="" />

            <p>Journalism without Fear or Fevour</p>
            <p className='text-xl'> {moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;