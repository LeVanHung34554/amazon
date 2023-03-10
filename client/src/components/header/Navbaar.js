import React from 'react'
import './navbaar.css' ;
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbaar =()=> {
return (
    <div>
          <header>
                <nav>
                    <div className='left'>
                        <img src="./amazon_PNG25.png" alt="" />
                    </div>
                    <div className='nav_searchbaar'>
                           <input type="text" name ="" id ="" />
                            <div>
                                <SearchIcon id="search"/>

                            </div>
                    </div>
                    <div className='right'>
                        <div className='nav_btn'>
                            <a href="">
                                signin
                            </a>
                        </div>
                        <div className="cart_btn">
                            <Badge
                            badgeContent={4} color="primary" 
                            >
                                    <ShoppingCartIcon id='icon' />
                            </Badge>
                            <p>Cart</p>

                        </div>
                        <Avatar className='avatar'/>
                    </div>
                </nav>
          </header>
    </div       >

)

}
export default Navbaar