import React, {useState, useEffect} from 'react';
import Card, { CardVariant } from './component/Card';
import UserList from './component/UserList';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './component/List';
import UserItem from './component/UserItem';
import TodoItem from './component/TodoItem';
import EventsExample from './component/EventsExample';

function App() {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])
    const fetchUsers = async () => {
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }
        catch(e){
            alert(e)
        }
    }
    const fetchTodos = async () => {
        try{
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        }
        catch(e){
            alert(e)
        }
    }
    
    return (
        <div className="App">
            <Card onClick={(num) => console.log("click", num)} variant={CardVariant.primary} width='200px' height='200px'>
                <button>Button</button>
            </Card>
            <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
            <EventsExample/>
        </div>
    );
}

export default App;
