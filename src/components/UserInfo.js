import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfoThunk } from "../store/slice/userInfoSlice";

const UserInfo = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const {userInfo, loading, error} = useSelector((state)=> state.userInfo);

    const handleSubmit = (e) => { // submit에도 input에 대한 값을 찾을 수 있다!
        e.preventDefault();
        // console.log("event", e.target.key.value);
        dispatch(fetchUserInfoThunk(name));
     
    }
    return (
        <h4>
            <form onSubmit={handleSubmit}>
                <label>이름</label>
                <input
                placeholder="이름을 입력하세요." 
                type="text" 
                value={name} // 백엔드에서도 input태그에 들어온 값으로 찾음
                name="key"
                onChange={(e) => setName(e.target.value)} // e.target.value input의 이벤트에서 입력한 값을 찾음.
                />
                <button type="submit">전송</button>
            </form>

            <div>{ userInfo[0]?.name }</div>
            <div>{ userInfo[0]?.email }</div>
            <div>{ userInfo[0]?.age }</div>
        </h4>
    );
}

export default UserInfo;