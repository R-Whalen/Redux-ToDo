import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    toggleTodo,
    removeTodo,
    markCompleted,
    markIncomplete,
} from '../../redux/actions';
import { useDispatch } from 'react-redux'
import { faTrash, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { IToDo } from '@/types';
import classNames from 'classnames';

interface Props {
    todo: IToDo,
    index: number
}

const ToDoItem = ({ todo, index }: Props) => {
    const dispatch = useDispatch();

    const item = classNames(
        'flex',
        'flex-col',
        'sm:flex-row',
        'sm:items-center',
        'justify-between',
        'p-2',
        'gap-4',
        'rounded-2xl',
        todo.completed && 'bg-green-500 outline outline-1 outline-green-700 dark:bg-green-800 dark: dark:outline-green-600'
    );

    return (
        <li className={item}>
            <div className='flex items-center'>
                <span className='mr-4'>{index + 1}.</span>
                <span className='whitespace-nowrap text-ellipsis overflow-hidden'>{todo.text}</span>
            </div>
            <div className='space-x-3 pl-8 flex flex-nowrap pr-2 justify-center'>
                <button
                    className='mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded w-[28px] h-[28px]'
                    onClick={() => dispatch(removeTodo(index))}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                {!todo.completed && (
                    <button
                        className="text-sm bg-green-500 text-white w-[28px] h-[28px] sm:px-2 px-1 py-1 rounded flex items-center justify-center"
                        onClick={() => dispatch(markCompleted(index))}
                    >
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                )}
                {todo.completed && (
                    <button
                        className="text-sm bg-yellow-500 text-white w-[28px] h-[28px] sm:px-2 px-1 py-1 rounded flex justify-center items-center"
                        onClick={() => dispatch(markIncomplete(index))}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
            </div>
        </li>
    )
}

export default ToDoItem