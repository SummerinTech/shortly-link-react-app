import { memo, useState } from "react";
import LoadingIcon from "./LoadingIcon";

const UrlForm = () => {
	const [url, setUrl] = useState("");
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [resultUrl, setResultUrl] = useState({});
	const shortenUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;

	const validateUrl = () => {
		if (url.indexOf("http") === 0 || url.indexOf("www.") === 0) {
			setError(false);
		} else {
			setError(true);
		}
	};

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		validateUrl();

		try {
			let response = await fetch(shortenUrl);
			let result = await response.json();
			console.log(result);
			setResultUrl(result);
			setLoading(false);
		} catch {
			setError(true);
			setLoading(false);
		}
	}

	return (
		<div className="mt-10 sm:mt-12">
			<form onSubmit={handleSubmit}>
				<div className="sm:flex">
					<div classsName="min-w-0 flex-1">
						<label htmlFor="url" className="sr-only">
							URL input
						</label>
						<input
							type="text"
							name="url"
							placeholder="Place your link here..."
							onChange={(e) => {
								setUrl(e.target.value);
							}}
							className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
						></input>
					</div>
					<div className="mt-3 sm:mt-0 sm:ml-3">
						<button
							type="submit"
							className="block w-full py-3 px-4 h-12 rounded-md shadow bg-gradient-to-r from-indigo-200 to-indigo-400 text-white font-bold hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
						>
							{loading ? <LoadingIcon /> : "Shorten It!"}
						</button>
					</div>
				</div>
			</form>
			{error && (
				<p className="mt-3 text-md font-bold text-red-400 sm:mt-4">
					Please enter a valid Url
				</p>
			)}
			{resultUrl.ok && !error ? (
				<>
					<div className="mt-5 flex flex-col items-center justify-center rounded-md bg-white py-4">
						<p className="text-gray-900 sm:mt-4">Link Created</p>
						<a
							target="_aboutblank"
							href={resultUrl.result.full_short_link}
							className="text-xl mt-2 text-green-500 hover:text-green-600
						hover:underline"
						>
							{resultUrl.result.full_short_link}
						</a>
					</div>
				</>
			) : (
				<p className="mt-3 text-sm text-gray-300 sm:mt-4">
					This website uses shrtcode API and by using it you agree to their
					Terms of Service
				</p>
			)}
		</div>
	);
};
export default memo(UrlForm);
