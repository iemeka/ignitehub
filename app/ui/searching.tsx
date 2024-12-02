"use client";

import { useContext } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { AppContext } from "@/app/app-context";

export default function Searching() {
	const { searchParam, setSearchParam } = useContext(AppContext);

	return (
		<div className="relative flex flex-1 flex-shrink-0 flex-grow">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input
				value={searchParam}
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				type="text"
				placeholder="Search movies..."
				onChange={(e) => {
					setSearchParam(e.target.value);
				}}
			/>

			<MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
		</div>
	);
}

// debounce here
