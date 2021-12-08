import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const TodoFilter = ({ filterType, handleChangeFilterStatus }) => (
  <div className="filter-section">
    <button
      type="button"
      className={cn({
        active: filterType === 'all',
      })}
      onClick={() => handleChangeFilterStatus('all')}
    >
      All
    </button>
    <button
      type="button"
      className={cn({
        active: filterType === 'pending',
      })}
      onClick={() => handleChangeFilterStatus('pending')}
    >
      Pending
    </button>
    <button
      type="button"
      className={cn({
        active: filterType === 'completed',
      })}
      onClick={() => handleChangeFilterStatus('completed')}
    >
      Completed
    </button>
  </div>
);

TodoFilter.propTypes = {
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  handleChangeFilterStatus: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
