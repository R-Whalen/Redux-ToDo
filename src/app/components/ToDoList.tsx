'use-client';

import { Fragment } from "react";
import { shallowEqual, useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import { IState, IToDo } from "@/types";

const ToDoList = () => {
    const filteredToDos = useSelector((state: IState) => {
        const { todos, filter, searchTerm } = state;

        return todos.filter((todo) => {
            const matchesFilter = (
                filter === 'COMPLETED' && todo.completed ||
                filter === 'INCOMPLETE' && !todo.completed ||
                filter === 'ALL'
            )

            const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase())

            return matchesFilter && matchesSearch;
        })
    }, shallowEqual)

    return (
        <ul>
            <li className='my-2 text-sm font-semibold'>{filteredToDos.length ? 'View your notes...' : ''}</li>
            {filteredToDos.map((todo: IToDo, index: number) => {
                return (
                    <Fragment key={index}>
                        <ToDoItem todo={todo} index={index} />
                    </Fragment>)
            })}
        </ul>
    )
}

export default ToDoList