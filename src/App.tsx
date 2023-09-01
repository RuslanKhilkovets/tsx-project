import React, {useState, useEffect} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UserPage from './component/UserPage';
import TodosPage from './component/TodosPage';
import { Link } from 'react-router-dom';
import UserItemPage from './component/UserItemPage';
import TodoItemPage from './component/TodoItemPage';

function App() {
    
    return (
        <BrowserRouter>
            <div className="">
                <Link to={"/users"}>Users</Link>
                <Link to={"/todos"}>Todos</Link>
            </div>
            <Routes>
                <Route path='/users' element={<UserPage/>}/>
                <Route path='/users/:id' element={<UserItemPage/>}/>
                <Route path='/todos' element={<TodosPage/>}/>
                <Route path='/todos/:id' element={<TodoItemPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
