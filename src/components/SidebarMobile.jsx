/* eslint-disable react/prop-types */
import { GoHome, GoBook } from "react-icons/go";
import { PiUsersThreeThin } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { TfiTicket } from "react-icons/tfi";
import { MdOndemandVideo } from "react-icons/md";
import { RiMusic2Fill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { FaVoteYea } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Drawer } from "@mui/material";

const sideBarList = [
	{
		name: "Home",
		icon: <GoHome size={24} />,
		url: "/",
	},
	{
		name: "Users",
		icon: <PiUsersThreeThin size={24} />,
		url: "/",
	},
	{
		name: "Commerce",
		icon: <BsShopWindow size={24} />,
		url: "/",
	},
	
	{
		name: "Chat",
		icon: <BsChatDots size={24} />,
		url: "/",
	},
	{
		name: "Profile",
		icon: <CgProfile size={24} />,
		url: "/",
	},
	{
		name: "Ticket",
		icon: <TfiTicket size={24} />,
		url: "/",
	},
	{
		name: "Live",
		icon: <MdOndemandVideo size={24} />,
		url: "/",
	},
	{
		name: "Stereo",
		icon: <RiMusic2Fill size={24} />,
		url: "/",
	},
	{
		name: "TV",
		icon: <PiTelevisionFill size={24} />,
		url: "/",
	},
	{
		name: "Voting",
		icon: <FaVoteYea size={24} />,
		url: "/",
	},
	{
		name: "Education",
		icon: <GoBook size={24} />,
		url: "/",
	},
];

function SidebarMobile({ showSideBar, closeSidebar }) {
	return (
		<Drawer
			anchor="left"
			open={showSideBar}
			onClose={closeSidebar}
		>
			<section
				id="side_bar_mobile"
				className="pt-10 px-4 text-[#C47EFB]  cursor-pointer fixed top-0 left-0 bg-[#4F0DA3] h-full w-[50%]"
			>
				<div className="grid fixed gap-3 ">
					{sideBarList.map((item, index) => (
						<div
							className="flex items-center gap-4"
							key={index}
							onClick={closeSidebar}
						>
							{item.icon}
							<p className="">{item.name}</p>
						</div>
					))}
				</div>
				<div className="flex items-center text-white gap-2 fixed bottom-10 left-10 ">
					<FiLogOut />
					<p className="font-semibold">Sign out</p>
				</div>
			</section>
		</Drawer>
	);
}

export default SidebarMobile;
