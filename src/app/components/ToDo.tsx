import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Filter from './Filter';
import ToDoList from './ToDoList';

const ToDo = () => {
    const dispatch = useDispatch();

    const [newToDoText, setNewToDoText] = useState<string>('');
    const [search, setSearch] = useState<string>('');

    const handleAddTodo = (text: string) => {
        dispatch(addTodo(text));
    };

    const handleAddTodoClick = () => {
        if (newToDoText.trim() !== '') {
            handleAddTodo(newToDoText.trim());
            setNewToDoText('');
        }
    };

    const handleSearchChange = (value: string) => {
        setSearch(value);
        dispatch(updateSearchTerm(value.trim()));
    };


    return (
        <div className='md:mt-8 mt-4 flex flex-row min-w-full justify-center'>
            <div className='max-w-[1200px] sm:mt-8 p-4 bg-slate-200 dark:bg-dark-300 rounded shadow-2xl border-full'>
                <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Demo TODO APP</h2>
                <div className='flex items-center mb-4'>
                    <input
                        id='addToDoInput'
                        className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-primary-200 dark:focus:border-primary-400'
                        type='text'
                        placeholder='Add ToDo'
                        value={newToDoText}
                        onChange={(e) => setNewToDoText(e.target.value)}
                        onKeyDown={({ key }) => {
                            if (key === 'Enter')
                                handleAddTodoClick()
                        }}
                    />
                    <button
                        className='ml-4 p-2 bg-primary-200 dark:bg-primary-400 text-white rounded hover:bg-primary-200 dark:hover:bg-primary-400 focus:outline-none'
                        onClick={handleAddTodoClick}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <Filter />
                    <div className='flex items-center'>
                        <input
                            className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-primary-200 dark:focus:border-primary-400'
                            type='text'
                            placeholder='Search Todos'
                            value={search}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                        <button className='ml-4 p-2 bg-primary-200 dark:bg-primary-400 text-white rounded hover:border-primary-200 dark:hover:border-primary-400 focus:outline-none'>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
                <ToDoList />
            </div>
        </div>
    )
}

export default ToDo;