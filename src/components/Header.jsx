import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/login-logo.svg";
import dropdownImg from "../assets/dropdown.svg";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
    }



    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex justify-between items-center bg-[#0D1826] py-2 px-4 custom-shadow h-[7vh]">
            <div className="flex items-center gap-0">
                <span
                    className="text-[#68B5C7] font-semibold text-[2.3vh]"
                    style={{ fontFamily: "Qualcomm Next" }}
                >
                    Qualcomm Airport Security
                </span>
                <img src={logo} alt="Falcon Logo" className="h-[3.5vh] w-[3vh]" />
            </div>

            <div className="flex items-center gap-[3vw]">

                <div className="flex items-center gap-[0.6vw] relative" ref={menuRef}>
                    <div className="bg-[#2E3765] rounded-full p-2 flex justify-center items-center">
                        <span className="text-[#FFFFFF] text-center font-medium">JM</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#FFFFFF] font-bold text-[1.8vh]">
                            Jock Martin
                        </span>
                        <span className="text-[#FFFFFF] font-medium text-[1.3vh]" style={{ fontStyle: "Nunito Sans" }}>
                            Ops Manger
                        </span>
                    </div>
                    <img src={dropdownImg}
                        alt="Options"
                        className={`h-3 w-3 cursor-pointer transition-transform duration-300 ease-in-out ${openMenu ? "rotate-180" : ""
                            }`}
                        onClick={() => setOpenMenu(!openMenu)} />

                    {/* dropdown for logout... */}
                    {openMenu && (
                        <button
                            onClick={handleLogout}
                            className=" absolute w-full px-4 py-2 text-left text-sm right-0 top-12 cursor-pointer z-1000 text-red-600 font-bold bg-gray-100 hover:bg-gray-200"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;