"use client";

import { useContext } from "react";
import { AppContext } from "@/app/app-context";

export default function Filtering() {
	const { genreData, setGenreOption, genreOption, setSortOption, sortOption } =
		useContext(AppContext);

	return (
		<form className="w-full max-w-xl ">
			<div className="rounded-md bg-gray-50 p-4 md:p-6">
				<div className="mb-4">
					<label
						htmlFor="genre"
						className="mb-2 block text-sm font-medium text-gray-700"
					>
						Select Genre
					</label>
                    <select
                        id="genre"
						defaultValue={genreOption}
						onChange={(e) => setGenreOption(e.target.value)}
						className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500 focus:ring focus:ring-blue-500"
					>
						<option value="" disabled>
							Select Genre
						</option>
						{genreData.map((genre) => (
							<option key={genre.id} value={genre.id}>
								{genre.name}
							</option>
						))}
					</select>
				</div>
				<div>
					<label
						htmlFor="sort"
						className="mb-2 block text-sm font-medium text-gray-700"
					>
						Sort
					</label>
                    <select
                        id="sort"
						defaultValue={sortOption}
						onChange={(e) => setSortOption(e.target.value)}
						className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500 focus:ring focus:ring-blue-500"
					>
						<option value="" disabled>sort by:</option>
						<option value="title.asc">Title Asc</option>
						<option value="title.desc">Title Desc</option>
						<option value="primary_release_date.asc">Release Date Asc</option>
						<option value="primary_release_date.desc">Release Date Desc</option>
					</select>
				</div>
			</div>
		</form>
	);
}
