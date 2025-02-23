import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import useMovies from "../../hooks/useMovies";
import { useSearchParams } from "react-router-dom";
import { GridSkeleton } from "../../components";
import { HomeAlerts, MoviesGrid, MoviesSearch } from "./components";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const { movies, totalResults, loading, error } = useMovies('s', query);

  const setQueryParams = () => {
    search.length > 0 && setQuery(`${search}&page=${page}`);
  }

  const handleSearch = (value: string) => {
    setQueryParams();
    setSearch(value);
    setPage(1);
  };

  useEffect(() => {
    setQueryParams();
    const params = search.length > 0 ? { search, page: page.toString() } : undefined;
    setSearchParams(params);
  }, [search, page]);

  return (
    <div className="mt-4">
      <MoviesSearch loading={loading} handleSearch={handleSearch} />
      {loading ? (
        <GridSkeleton />
      ) : (
        !error && search?.length > 0 && (
          <>
            <MoviesGrid movies={movies} />
            <Pagination 
              align="center" 
              current={page} 
              defaultCurrent={page} 
              total={totalResults} 
              onChange={setPage} 
            />
          </>
        )
      )}
      <HomeAlerts error={error} search={search} />
    </div>
  )
}

export default Home;