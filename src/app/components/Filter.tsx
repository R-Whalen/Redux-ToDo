// FilterButtons.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../../redux/actions';

const Filter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state: any) => state.filter);

    const handleFilter = (filter: string) => {
        dispatch(filterTodos(filter));
    };

    return (
        <div className="flex space-x-4 h-full items-center">
            <select
                className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value)}
            >
                <option value="ALL">All</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>

            <button
                className="text-sm px-2 py-1 bg-primary-200 dark:bg-primary-400 text-white rounded ml-2"
                onClick={() => dispatch(markAllCompleted())}
            >
                Mark All Completed
            </button>
        </div>
    );
};

export default Filter;