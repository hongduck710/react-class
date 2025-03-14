import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserThunk} from "../store/slice/userSlice";



// const initialState = [
//     {
//         "id": 1,
//         "name": "요정컴미",
//         "email": "commi@commi.com",
//         "age": 12
//     },
//     {
//         "id": 2,
//         "name": "박미달",
//         "email": "midal@midal.com",
//         "age": 8
//     },
//     {
//         "id": 3,
//         "name": "Megan",
//         "email": "megan@example.com",
//         "age": 35
//     },
//     {
//         "id": 4,
//         "name": "강돌",
//         "email": "gangdol@example.com",
//         "age": 12
//     },
//     {
//         "id": 5,
//         "name": "Sarah Connor",
//         "email": "sarah@example.com",
//         "age": 32
//     },
//     {
//         "id": 6,
//         "name": "Ellen Ripley",
//         "email": "alien@example.com",
//         "age": 32
//     }
// ];



const UserList = () => {
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector((state) => state.userList); // service를 받는 부분. userList: store에 있는 이름 

        useEffect(() => {
            dispatch(fetchUserThunk());
            //console.log("users", users);
            //setUserData(users); setUserData와 dispatch같이 쓰면 안됨(?)
        }, [dispatch]);

        useEffect(() => {
            setUserData(users);
        },[users]);
        
    //const [users, setUsers] = useState(initialState);
    // const columns = users.length > 0 ? Object.keys(users[0]) : [];
    
    if(loading) {return <div>불러오는 중...</div>} 
    
    return (
        <>
            <table>
                {/* <thead>
                    <tr>
                        {columns.map((col)=>(
                            <th key={col}>{col}</th>
                        ))}
                    </tr>
                </thead> */}
                <tbody>
                    {userData?.map((user) => (          
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>      
            </table>  
        </>
    );
}

export default UserList;