"use client";

import { createContext, useEffect, useState } from "react";
import { fetchMovies, fetchGenres } from "@/app/lib/actions";
import { AppContextType, Genre, Movie } from "@/app/lib/definitions";

export const AppContext = createContext<AppContextType>({
	movies: [],
	setSortOption: () => {},
	genreData: [],
    setGenreOption: () => { },
    searchParam: "",
	setSearchParam: () => {},
    moviesToDisplay: [],
    genreOption: "",
    sortOption: "",
    movieUrl: "",
    setMovies: () => { },
    setMoviesToDisplay: () => { },
});

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const movieUrl = "https://api.themoviedb.org/3/discover/movie?";

	const [movies, setMovies] = useState<Movie[]>([]);
	const [sortOption, setSortOption] = useState<string>("");
	const [genreOption, setGenreOption] = useState<string>("");
	const [genreData, setGenreData] = useState<Genre[]>([]);
	const [moviesToDisplay, setMoviesToDisplay] = useState<Movie[]>([]);
	const [searchParam, setSearchParam] = useState<string>("");


	const handleSearch = (search: string) => {
		const searchResult = movies.filter((movie) =>
			movie.title.toLowerCase().includes(search.toLowerCase())
		);
		setMoviesToDisplay(searchResult);
	};

	useEffect(() => {
		handleSearch(searchParam);
	}, [searchParam]);

	useEffect(() => {
		const loadGenres = async () => {
			const data = await fetchGenres();
			setGenreData(data);
		};

		const loadMovies = async () => {
            setMovies([]);
            setMoviesToDisplay([]);
            
            const data = await fetchMovies(movieUrl, sortOption, genreOption);
            
			setMovies(data);
			setMoviesToDisplay(data);
			setSearchParam("");
		};
		if (genreData.length === 0) {
			loadGenres();
		}
		loadMovies();
	}, [sortOption, genreOption]);

	const value: AppContextType = {
		movies,
		setSortOption,
		genreData,
		setGenreOption,
		moviesToDisplay,
        setSearchParam,
        searchParam,
        genreOption,
        sortOption,
        movieUrl,
        setMovies,
        setMoviesToDisplay,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
