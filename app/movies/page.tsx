import Filtering from "@/app/ui/filtering";
import Searching from "@/app/ui/searching";
import DisplayMovies from "@/app/ui/display-movies";

export default async function Page() {
	return (
		<div className="flex flex-col items-center justify-start min-h-screen">
			<div className="flex w-full items-center justify-center">
				<h1 className="text-2xl">Movies</h1>
			</div>
			<div className="flex w-full max-w-xl items-center justify-start gap-4 p-4 mb-1">
				<Filtering />
			</div>
			<div className="flex w-full max-w-xl items-center justify-center p-4 mb-6">
				<Searching />
			</div>

			<DisplayMovies />
		</div>
	);
}

/**
 * add type to data here
 */
