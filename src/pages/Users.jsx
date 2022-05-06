import React, { useEffect, useState } from 'react'
import UserTable from '../components/UserTable';
import AddUserForm from '../components/AddUserForm';
import EditUserForm from '../components/EditUserForm';
import { v4 as uuidv4} from 'uuid';


const Users = () => {
    const getIntialUsers = () => {
        let saved = localStorage.getItem("users");
        if(saved === "undefined") saved = "[]"
        const initialValue = JSON.parse(saved);
        return initialValue;
    }

    const [users, setUsers] = useState(getIntialUsers());
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        id: null, name:'', username: ''
    });

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const addUser = (user) => {
        user.id = uuidv4()
        setUsers([
          ...users,
          user
        ])
    }

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
          id: user.id, name: user.name, username: user.username
        })
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const deleteUser = (id) => {
        const arrayFiltrado = users.filter(user => user.id != id);
        setUsers(arrayFiltrado)
    }     

    return (
        <div className="container">
          <h1>CRUD App with Hooks</h1>
          <div className="flex-row">
            <div className="flex-large">
            {
              editing? (
                <div>
                  <h2>Edit user</h2>
                  <EditUserForm 
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                  
                </div>
              ) : (              
                <div>
                  <h2>Add user</h2>
                  <AddUserForm addUser={addUser}/>
                </div>                            
                )
            }   
             
            </div>
            <div className="flex-large">
              <h2>View users</h2>
              <UserTable
               users={users}
               deleteUser={deleteUser}
               editRow={editRow}
              />
            </div>          
          </div>
        </div>
    );
}
 
export default Users;