import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider';

function Header() {

    const[{basket,user} ,dispatch] = useStateValue();
    return (
        <div>
        <div className="header">
        <div className="header_option">
                
                <span className="header_optionlinetwo">SHOP</span>
                 </div>
                 <div className="header_option">
                
                <span className="header_optionlinetwo"> BUSINESS</span>
                 </div>
                 <div className="header_option">
                
                <span className="header_optionlinetwo">SERVICE</span>
                 </div>
             
            <div className="header-search">
                <input className="header_searchinput" type="text"></input>
                <SearchIcon className="header_searchicon"></SearchIcon>
            </div>
            <div className="header_nav">
            <Link to="/login">
                <div className="header_option">
                
                <span className="header_optionlinetwo"> Log in</span>

                </div>
                </Link>
                <div className="header_option">
                
                <span className="header_optionlinetwo">Track orders</span>
                 </div>
                 </div>
                <div className="header_option">
                
                <span className="header_optionlinetwo"> join prime</span>
                 </div>

                <Link to ="/Checkout">
                 <div className="header_optionBasket">
                 <ShoppingBasketIcon></ShoppingBasketIcon>
                 <span className="header_optionlinetwo  header_basketCount"
                 >
                 {basket?.length}
                 </span></div>
                 </Link>
            </div>

        </div>
    )
}

export default Header
