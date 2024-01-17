export interface IToDo {
    id: number,
    text: string,
    completed: boolean
}

export interface IState {
    todos: IToDo[],
    filter: string,
    searchTerm: string
}