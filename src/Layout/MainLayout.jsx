/* eslint-disable react/prop-types */

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
	return (
		<main className="grid grid-cols-1 sm:grid-cols-5 ">
			<div className=" bg-[#4F0DA3] hidden sm:block w-[100%]">
				<Sidebar />
			</div>

			<section
				// id="main_content"
				className="col-start-2 row-start-1 col-span-4 w-full relative"
			>
				<div className="fixed top-0 right-0 w-full sm:w-[80%] bg-white ">
					<Navbar />
				</div>
				<div className=" mt-10 sm:mt-24 p-4 bg-white md:bg-[#F5F5F5]">{children}</div>
			</section>
		</main>
	);
}

export default MainLayout;
