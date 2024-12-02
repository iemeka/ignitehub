import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
	return (
		<main className="flex justify-around min-h-screen flex-col p-6 border-2 border-red-500">
			<div className="flex flex-row justify-around gap-6 rounded-lg bg-gray-50 px-6 py-10">
				<Link
					className="flex items-center gap-5 self-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
					href="/movies"
				>
					<span>See Movies</span> <ArrowRightIcon className="w-5 md:w-6" />
				</Link>
			</div>
		</main>
	);
}
