// src/pages/index.js
import MoviesList from '../component/movieList';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';
import SearchAppBar from '@/component/navBar';
import styles from '@/styles/movie.module.css';
import Footer from '@/component/footer';
import { LIMIT } from '@/const/const';
import usePaginatedMovies from '../hooks/usePaginatedMovies';
import useSortedMovies from '../hooks/useSortedMovies';

export default function Home() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('None');

  const { records: paginatedRecords } = usePaginatedMovies(page, LIMIT);
  const { records: sortedRecords, error: sortError } = useSortedMovies(sort);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const records = sort === 'None' ? paginatedRecords : sortedRecords;

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.header}>
              <h1>
                <SearchAppBar />
              </h1>
            </div>
            <div className={styles.subHeader}>
              <h2>All Movies</h2>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label"></InputLabel>
                <Select onChange={handleSortChange} className={styles.select} value={sort}>
                  <MenuItem value="None">None</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="releaseDate">Release Date</MenuItem>
                </Select>
              </FormControl>
            </div>
            <MoviesList records={records} />
            <div className={styles.pagination}>
              <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
