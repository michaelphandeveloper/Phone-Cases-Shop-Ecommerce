import React, { useState, useEffect } from 'react';
import filterSearch from '../utils/filterSearch';
import { getData } from '../utils/fetchData';
import { useRouter } from 'next/router';

const Filter = ({ state }) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  const { categories } = state;

  const router = useRouter();

  const handleCategory = (e) => {
    setCategory(e.target.value);
    filterSearch({ router, category: e.target.value });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    filterSearch({ router, sort: e.target.value });
  };

  useEffect(() => {
    filterSearch({ router, search: search ? search.toLowerCase() : 'all' });
  }, [search]);

  return (
    <div className="input-group-fixed">
      <div className="input-group-fixed">
        <select
          className="custom-select-fixed"
          value={sort}
          onChange={handleSort}
        >
          <option value="-price">Giá: Cao - Thấp</option>
          <option value="price">Giá: Thấp - Cao</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
