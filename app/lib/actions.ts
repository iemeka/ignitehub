
const fetchOptions = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
};

export async function fetchMovies(
	movieUrl: string,
	sortOption: string,
    genreOption: string,
) {
	let url = movieUrl;
	url += sortOption ? `sort_by=${sortOption}&` : "";
    url += genreOption ? `with_genres=${genreOption}` : "";
	try {
		const res = await fetch(url, fetchOptions);
		const data = await res.json();
		return data.results;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchGenres() {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/genre/movie/list",
            fetchOptions
        );
        const data = await res.json();
        return data.genres;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchMovidDetail(id: string) {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?`,
			fetchOptions
		);
		const data = await res.json();
		return data;
    } catch (error) {
        console.error(error);
    }
}
