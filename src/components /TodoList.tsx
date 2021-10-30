import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList = () => {
    const {error, limit, loading, page, todos} = useTypedSelector((state) => state.todo);
    const {fetchTodo, setTodoPage} = useActions();
    const dispatch = useDispatch();
    const pages = [1,2,3,4,5];
    const a = 5
    useEffect(() => {
        console.log('componentDidUpdate')
        fetchTodo(page, limit);
    }, [page]);

    if(loading) {
        return <div> Идёт загрузка, подождите</div>
    }
    if(error) {
        return <div>{error}</div>
    }

    return (
        <>
            <div>
                {
                    todos.map(todo => <div key={todo.id}>{`${todo.id} - ${todo.title}`}</div>)
                }
            </div>
            <div>
                {
                    pages.map(p => <span style={{border: p === page? 'green': '' }} onClick={() => setTodoPage(p)} key={p}>{p}</span>)
                }
            </div>
        </>

    );
};

export default TodoList;
