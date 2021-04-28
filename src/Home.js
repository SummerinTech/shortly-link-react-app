import { memo } from "react";
import UrlForm from "./UrlForm";

const Home = () => (
	<div className="py-20">
		<div className="lg:grid lg:grid-cols-2 mx-auto max-w-7xl lg:px-8 lg:gap-8 justify-center">
			<div className="lg:py-24 mx-auto max-w-md px-4 sm:max-w-2xl sm:px6 lg:px-0">
				<h1 className="text-white text-4xl mt-4 font-extrabold sm:text-6xl lg:mt-6 tracking-tight">
					<span className="block">More than just </span>
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400 block">
						shorter links
					</span>
				</h1>
				<p className="text-white text-base text-gray-300 sm:mt-5 sm:text-xl">
					Build your brand's recognition and get detailed insights on how your
					links are performing
				</p>
				<UrlForm />
			</div>
			<div className="mt-12 large:relative">
				<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px6 lg:max-w-none lg:px-0">
					<img src="/heroImage.png" alt="Man standing by a desk" />
				</div>
			</div>
		</div>
	</div>
);

export default memo(Home);
