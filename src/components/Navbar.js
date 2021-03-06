import React, { Component } from 'react';

// Images
import logo from '../images/logo.svg';

// Icons
import {FaAlignRight} from 'react-icons/fa';

// Router
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo} alt='Resort Home Page' />
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}