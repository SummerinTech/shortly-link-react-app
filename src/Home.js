import { memo } from "react";

const Home = () => (
	<div className="lg:grid lg:grid-cols-2 mx-auto max-w-7xl lg:px-8 lg:gap-8 justify-center">
		<div className="lg: py-24 ">
			<h1 className="text-white text-4xl mt-4 font-extrabold sm:text-6xl lg:mt-6 tracking-tight">
				<span className="block">More than just </span>
				<span className="block">shorter links</span>
			</h1>
			<p className="text-white">
				Build your brand's recognition and get detailed insights on how your
				links are performing
			</p>
		</div>
		<div>
			<img src="/heroImage.png" alt="Man standing by a desk" />
		</div>
	</div>
);

export default memo(Home);
