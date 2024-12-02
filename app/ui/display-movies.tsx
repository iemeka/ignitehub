"use client";

import { AppContext } from "@/app/app-context";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { TableLoadingSkeleton } from "./skelentons";

export default function DisplayMovies() {
	const { moviesToDisplay, movies } = useContext(AppContext);
	return (
		(movies.length === 0 && <TableLoadingSkeleton />) ||
		(moviesToDisplay.length && (
			<div
				className="mt-6 bg-white overflow-y-auto"
				style={{ height: "500px", maxWidth: "500px" }}
			>
				<table className="min-w-full text-gray-900">
					<thead className="text-sm font-medium">
						<tr>
							<th className="px-4 py-5">Title</th>
							<th className="px-3 py-5">Release Date</th>
							<th className="px-3 py-5">Vote</th>
						</tr>
					</thead>
					<tbody className="bg-white  border-green-500">
						{moviesToDisplay?.map((movie) => (
							<tr key={movie.id} className="border-b text-sm">
								<td className="py-3 pl-6 pr-3 flex items-center gap-3">
									<Image
										src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
										className="rounded-full"
										width={50}
										height={50}
										alt={`${movie.title}'s profile picture`}
									/>
									<Link href={`/movies/${movie.id}/view`} className="text-blue-500 hover:text-blue-700 underline decoration-dashed">
										<p className="break-words text-base font-medium">{movie.title}</p>
									</Link>
								</td>
								<td className="px-3 py-3">{movie.release_date}</td>
								<td className="px-3 py-3">{movie.vote_count}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)) || (
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-6l font-bold text-gray-700 mb-4">No Matching Text</h1>
				<p className="text-l text-gray-600 mb-6">
					Oops! The movie you are looking for those not exist in this list.
				</p>
				<div className="text-gray-500 relative">
					<span className="text-9xl font-extrabold opacity-5 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
						😕
					</span>
				</div>
			</div>
		)
	);
}
