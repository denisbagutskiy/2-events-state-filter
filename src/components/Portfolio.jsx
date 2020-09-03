import React, { useState } from 'react';
import { Toolbar } from './Toolbar';
import data from './projects.json';
import './portfolio.css';
import { ProjectList } from './ProjectList';

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

export function Portfolio() {

    const[selected, setSelected] = useState('All');

    const filters = ['All'];
    data.map((item) => item.category).filter(onlyUnique).forEach((category) => filters.push(category));
  
    const projects = selected === 'All' ? data : data.filter((project) => project.category === selected);

    const onSelectFilter = filter => {
        setSelected(filter);
    }

    return (
        <div className="portfolio">
            <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter}></Toolbar>
            <ProjectList projects={projects}></ProjectList>
        </div>
    );
} 