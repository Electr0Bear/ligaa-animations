import {filterMarkers} from './filter-markers';

export const filterHandler = (e, map) => {
  if (!e.target.closest('[data-filter]')) {return}

  const filter = e.target.closest('[data-filter]').dataset.filter;

  filterMarkers(map, filter);
};
