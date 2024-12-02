import { fetchMovidDetail } from "@/app/lib/actions";
import Link from "next/link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const id = params.id;
	const movieDetail = await fetchMovidDetail(id);
	return (
		<div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
			<img
				src={`https://image.tmdb.org/t/p/w200${movieDetail.poster_path}`}
				alt={movieDetail.title}
				className="w-48 h-auto rounded-lg mx-auto mb-6"
			/>
			<h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
				{movieDetail.title}
			</h1>
			<h2 className="text-lg italic text-gray-600 mb-4 text-center">
				{movieDetail.tagline}
			</h2>
			<p className="text-gray-700 text-justify leading-relaxed mb-6">
				{movieDetail.overview}
			</p>
			<div className="flex justify-center">
				<Link
					href="/movies"
					className="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
				>
					Back
				</Link>
			</div>
		</div>
	);
}

// add more display here.
