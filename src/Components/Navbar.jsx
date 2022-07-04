import React, { useEffect } from "react";
import Logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    useEffect(()=>{
        // axios.get(`http://127.0.0.1:5000/readmessages`)
        //   .then(res => {
        //     console.log(res)
        //   })
    })
    return(
        <nav className="relative flex flex-wrap items-center px-2 py-6 mb-3 w-full bg-indigo-800 bg-opacity-90">

            <div className=" w-full px-4 flex flex-wrap md:flex-nowrap items-center h-full">
            
                <div className="w-full flex flex-row justify-between md:justify-start h-full">
                    <img src={Logo} className="logo h-full mr-10 absolute top-0 left-0" alt="" />
                    <div className="flex flex-col sm:flex-row h-full md:items-center">
                        <div className="flex flex-row h-full">
                            <Link
                            className="mainlogo z-10 mr-5 text-2xl md:text-5xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white hover:text-indigo-300 transition-colors text-center align-middle"
                            to="/"
                            >
                            BCH ENERGO
                            </Link>
                        </div>
                        <div className="z-10 flex flex-row md:flex-col lg:flex-row items-center">
                            <p className="z-10 text-2xl sm:text-xl lg:text-2xl leading-relaxed py-2 whitespace-nowrap text-white lg:ml-10 inline-block align-text-bottom font-light">т. 8(495)210-85-85</p>
                            <div className="ml-5 md:ml-0 lg:ml-10 text-xl text-white">
                                <Dropdown label="КОНТАКТЫ" size="lg" inline={true}>
                                <Dropdown.Item>
                                    <p className="text-lg">вк ссыл0чка</p>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <p className="text-lg">инстик</p>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <p className="text-lg">ютубчик</p>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <p className="text-lg">привет</p>
                                </Dropdown.Item>
                                </Dropdown>        
                            </div>
                        </div>

                    </div>


                    <button
                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7H19" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 12H19" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 17H19" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
                    </svg>

                    </button>
                </div>

                <div
                    className={
                    "z-10 md:flex flex-grow items-center justify-start md:justify-end h-full transition-all" +
                    (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col md:flex-row list-none md:space-x-5 ">
                        <li className="nav-item">
                            <Link
                            className="md:hidden py-2 flex items-center text-lg md:text-lg uppercase font-semibold leading-snug text-white hover:opacity-75"
                            to="/retrospect"
                            >
                            <i className=" text-md leading-lg  opacity-75"></i><span className="ml-2">Ретроспектива</span>
                            </Link>

                            <Link to="/retrospect" className='w-15 h-15 hover:bg-pink-500 transition-colors ease-in-out bg-pink-400 rounded-full p-2 hidden md:flex cursor-pointer'>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L10.8522 5.91303C9.94978 7.41704 9.49857 8.16905 9.49857 9C9.49857 9.83095 9.94978 10.583 10.8522 12.087L11.5713 13.2854C11.7627 13.6045 11.8585 13.7641 12 13.7641C12.1415 13.7641 12.2373 13.6045 12.4287 13.2854L13.1478 12.087C14.0502 10.583 14.5014 9.83095 14.5014 9C14.5014 8.16905 14.0502 7.41704 13.1478 5.91303L12 4ZM12 4V2" stroke="#fff" strokeWidth="2"/>
                                    <path d="M20.1603 12.5981L17.9296 12.5606C16.1759 12.5311 15.2991 12.5163 14.5794 12.9318C13.8598 13.3473 13.4342 14.114 12.5828 15.6475L11.9045 16.8695C11.7239 17.1949 11.6336 17.3575 11.7043 17.4801C11.7751 17.6027 11.9612 17.6058 12.3332 17.6121L13.7307 17.6356C15.4844 17.6651 16.3612 17.6799 17.0809 17.2644C17.8005 16.8489 18.2262 16.0821 19.0775 14.5486L20.1603 12.5981ZM20.1603 12.5981L21.8923 11.5981" stroke="#ffF" strokeWidth="2"/>
                                    <path d="M3.83972 12.5981L6.07035 12.5606C7.82407 12.5311 8.70093 12.5163 9.42056 12.9318C10.1402 13.3473 10.5658 14.114 11.4172 15.6475L12.0955 16.8695C12.2761 17.1949 12.3664 17.3575 12.2957 17.4801C12.2249 17.6027 12.0388 17.6058 11.6668 17.6121L10.2693 17.6356C8.51561 17.6651 7.63876 17.6799 6.91913 17.2644C6.1995 16.8489 5.77385 16.0821 4.92254 14.5486L3.83972 12.5981ZM3.83972 12.5981L2.10767 11.5981" stroke="#ffF" strokeWidth="2"/>
                                    <path d="M12 15V22.5" stroke="#fff" strokeWidth="2"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                            className="md:hidden py-2 flex items-center text-lg md:text-lg uppercase font-semibold leading-snug text-white hover:opacity-75"
                            to="/letters"
                            >
                            <i className="text-lg leading-lg  opacity-75"></i><span className="ml-2">Благодарственные письма</span>
                            </Link>

                            <Link to="/letters"className='w-auto h-full hover:bg-blue-400 transition-colors ease-in-out bg-blue-300 rounded-full p-2 hidden md:flex cursor-pointer'>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4 18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V18.5" stroke="#ffF" strokeWidth="2"/>
                                    <path d="M9 8L15 8" stroke="#ffF" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                            className="md:hidden py-2 flex items-center text-lg md:text-lg uppercase font-semibold leading-snug text-white hover:opacity-75"
                            to="/team"
                            >
                            <i className="text-md leading-lg opacity-75"></i><span className="ml-2">Наша команда</span>
                            </Link>

                            <Link to="/team" className='w-15 h-15 hover:bg-green-400 transtition-colors ease-in-out bg-green-300 rounded-full p-2 hidden md:flex cursor-pointer'>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="8" r="3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M15.2679 8C15.5332 7.54063 15.97 7.20543 16.4824 7.06815C16.9947 6.93086 17.5406 7.00273 18 7.26795C18.4594 7.53317 18.7946 7.97 18.9319 8.48236C19.0691 8.99472 18.9973 9.54063 18.7321 10C18.4668 10.4594 18.03 10.7946 17.5176 10.9319C17.0053 11.0691 16.4594 10.9973 16 10.7321C15.5406 10.4668 15.2054 10.03 15.0681 9.51764C14.9309 9.00528 15.0027 8.45937 15.2679 8L15.2679 8Z" stroke="#fff" strokeWidth="2"/>
                                    <path d="M5.26795 8C5.53317 7.54063 5.97 7.20543 6.48236 7.06815C6.99472 6.93086 7.54063 7.00273 8 7.26795C8.45937 7.53317 8.79457 7.97 8.93185 8.48236C9.06914 8.99472 8.99727 9.54063 8.73205 10C8.46683 10.4594 8.03 10.7946 7.51764 10.9319C7.00528 11.0691 6.45937 10.9973 6 10.7321C5.54063 10.4668 5.20543 10.03 5.06815 9.51764C4.93086 9.00528 5.00273 8.45937 5.26795 8L5.26795 8Z" stroke="#fff" strokeWidth="2"/>
                                    <path d="M16.8816 18L15.9013 18.1974L16.0629 19H16.8816V18ZM20.7202 16.9042L21.6627 16.5699L20.7202 16.9042ZM14.7808 14.7105L14.176 13.9142L13.0194 14.7927L14.2527 15.5597L14.7808 14.7105ZM19.8672 17H16.8816V19H19.8672V17ZM19.7777 17.2384C19.7707 17.2186 19.7642 17.181 19.7725 17.1354C19.7804 17.0921 19.7982 17.0593 19.8151 17.0383C19.8474 16.9982 19.874 17 19.8672 17V19C21.0132 19 22.1414 17.9194 21.6627 16.5699L19.7777 17.2384ZM17 15C18.6416 15 19.4027 16.1811 19.7777 17.2384L21.6627 16.5699C21.1976 15.2588 19.9485 13 17 13V15ZM15.3857 15.5069C15.7702 15.2148 16.282 15 17 15V13C15.8381 13 14.9028 13.3622 14.176 13.9142L15.3857 15.5069ZM14.2527 15.5597C15.2918 16.206 15.7271 17.3324 15.9013 18.1974L17.8619 17.8026C17.644 16.7204 17.0374 14.9364 15.309 13.8614L14.2527 15.5597Z" fill="#fff"/>
                                    <path d="M9.21918 14.7105L9.7473 15.5597L10.9806 14.7927L9.82403 13.9142L9.21918 14.7105ZM3.2798 16.9041L4.22227 17.2384L4.22227 17.2384L3.2798 16.9041ZM7.11835 18V19H7.93703L8.09867 18.1974L7.11835 18ZM7.00001 15C7.71803 15 8.22986 15.2148 8.61433 15.5069L9.82403 13.9142C9.09723 13.3621 8.1619 13 7.00001 13V15ZM4.22227 17.2384C4.59732 16.1811 5.35842 15 7.00001 15V13C4.0515 13 2.80238 15.2587 2.33733 16.5699L4.22227 17.2384ZM4.13278 17C4.126 17 4.15264 16.9982 4.18486 17.0383C4.20176 17.0593 4.21961 17.0921 4.22748 17.1354C4.2358 17.181 4.22931 17.2186 4.22227 17.2384L2.33733 16.5699C1.85864 17.9194 2.98677 19 4.13278 19V17ZM7.11835 17H4.13278V19H7.11835V17ZM8.09867 18.1974C8.27289 17.3324 8.70814 16.206 9.7473 15.5597L8.69106 13.8614C6.96257 14.9363 6.356 16.7203 6.13804 17.8026L8.09867 18.1974Z" fill="#fff"/>
                                    <path d="M12 14C15.5715 14 16.5919 16.5512 16.8834 18.0089C16.9917 18.5504 16.5523 19 16 19H8C7.44772 19 7.00829 18.5504 7.11659 18.0089C7.4081 16.5512 8.42846 14 12 14Z" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;