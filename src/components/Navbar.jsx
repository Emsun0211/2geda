import { Avatar, InputAdornment, TextField } from "@mui/material";
import { GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdList } from "react-icons/io";
import useIsMobile from "../hooks/isMobile";
import SidebarMobile from "./SidebarMobile";
import {  useState } from "react";

function Navbar() {
    const isMobile = useIsMobile();
    const [showSideBar, setShowSideBar] = useState(false)
    

    const toggleSidebar = () => {
        setShowSideBar(!showSideBar);
    };

    return (
        <nav
        // id="nav_bar"

        >
            <div className="flex py-2 px-5 items-center  justify-between  ">



                <div className="flex items-center gap-2">
                    <div className="">

                        {isMobile && <div>

                            <IoMdList size={24} onClick={toggleSidebar} />
                        </div>}
                    </div>
                    <img
                        src="/assets/2geda_logo.svg"
                        alt="2geda_logo"
                        className="hidden sm:block"
                    />
                </div>
                <div className={`flex items-center  gap-6`}>
                    {!isMobile && <TextField
                        size="small"
                        placeholder="Search..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <GoSearch />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />}

                    <div className="flex items-center gap-5">
                        <IoNotificationsOutline size={isMobile ? 24 : 32} />

                        <div className="flex flex-col justify-center items-center ">
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/profile.svg"
                                size={isMobile ? 8 : 16}
                            />
                            <p className="font-bold text-[0.5rem] text-center">My Profile</p>
                        </div>
                    </div>
                </div>
            </div>
            {showSideBar &&

                <SidebarMobile closeSidebar={() => setShowSideBar(false)} showSideBar={showSideBar}  />

            }
        </nav>
    )
}

export default Navbar