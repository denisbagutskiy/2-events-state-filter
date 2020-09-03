import React from 'react';
import PropTypes from 'prop-types';
import './toolbar.css';

export function Toolbar({ filters, selected, onSelectFilter }) {

    const onClick = filter => {
        onSelectFilter(filter);
    }

    return (
        <div className="toolbar">
            {filters.map((filter, i) => 
                <button className={filter === selected ? "active" : ""} key={i} onClick={() => onClick(filter)}>{filter}</button>
            )}
        </div>
    );
} 

Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func
};