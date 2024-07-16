import MoviesList from '..//component/movieList';
import { styled, alpha } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';

export default function Home() {
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');

  const LIMIT = 8;

  const handleChange = (page, value) => {
    setPage(value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/movies/paginated?page=${page}&limit=${LIMIT}`)
      .then((Response) => Response.json())
      .then((Response) => setRecords(Response.data))
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/paginated?sortBy=${sort}`)
      .then((Response) => Response.json())
      .then((Response) => setRecords(Response.data))
      .catch((err) => console.log(err));
  }, [sort]);

  return (
    <>
      <div style={{
        width:"90%",
        display:'flex',
        justifyContent:'center',
      }}>
      <div
        style={{
          margin: '50px',
          width:"100%",
          height:"951px",
          gap:"23px",
          marginBlock:"80px"
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '120px',
          }}
        >
          <h1
            style={{
              color: 'rgba(65, 140, 251, 1)',
            }}
          >
            MMDB
          </h1>
          <search />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h2
            style={{
              color: 'rgba(0, 48, 85, 1)',
            }}
          >
            All Movies
          </h2>
          <FormControl sx={{ m: 1, minWidth: 120 }} size=" small">
            <InputLabel id="demo-select-small-label">Sort By</InputLabel>
            <Select
              onChange={handleSortChange}
              style={{
                alignItems: 'center',
                padding: '1px',
                border: '1px solid #ccc',
                borderRadius: '50px',
                backgroundColor: '#fff',
                boxShadow: 'none',
                width: '100%',
              }}
            >
              <MenuItem value="None">None </MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="releaseDate">Release Date</MenuItem>
            </Select>
          </FormControl>
        </div>
        <MoviesList records={records} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      </div>
      </div>
    </>
  );
}
