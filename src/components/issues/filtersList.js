import React from 'react';

import '../../static/stylus/issues/filter.styl';

const FilterList = (props) => {
  const filterListItems = props.filters.map((filter, index) => {
    return (
      <li
        onClick={() => {
          props.onFilterSelected(filter.type);
        }}
        key={index}
        className={props.currentFilter === filter.type ? 'active' : ''}>
          {filter.name}
      </li>
    )
  });

  return (
    <div className="filters">
      <ul>
        {filterListItems}
      </ul>
    </div>
  )
};

export default FilterList;
