import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../store/index.jsx';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

function DropDown({ title, icon, children }){
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current); // Prevent premature closing
        setIsOpen(true);
    }
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
    }
    return(
        <div className="dropdown-menu" 
             onMouseEnter={handleMouseEnter} 
             onMouseLeave={handleMouseLeave}
            >
            <span className="dropdown-header">
                {title}
                {icon && <FontAwesomeIcon icon={icon} style={{paddingLeft: `10px`}} />}
            </span>
            {isOpen && <div className="dropdown-content">{children}</div>}
        </div>
    )
}

function Header(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            dispatch(LOGOUT())
            navigate("/login");
        }
        catch (error){
            console.error(error);
        }
    }

    return(
        <header className="header" style={{height: "60px"}}>
            <div className="header-container">
                <div className="left">
                    <img src={logo} alt="technimal-logo" width="141" />
                </div>
                <div className="right-handler">
                    <DropDown title="System Information" icon="fa-solid fa-chevron-down">
                        <div className="dropdown-item">About</div>
                        <div className="dropdown-item">Debug files</div>
                    </DropDown>
                    <DropDown title="English" icon="fa-solid fa-chevron-down">
                        <div className="dropdown-item">中文</div>
                        <div className="dropdown-item">English</div>
                    </DropDown>
                    <DropDown title={
                        <>
                            <span className="user-bg">
                                <FontAwesomeIcon icon="fa-regular fa-user" />
                            </span>
                        </>
                        }
                        icon="fa-solid fa-chevron-down"
                    >
                        <div className="dropdown-item" onClick={handleLogout}>Logout</div>
                    </DropDown>
                </div>
            </div>
        </header>
    )
}

DropDown.propTypes = {
    title: PropTypes.any.isRequired,
    icon: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
}

export default Header;