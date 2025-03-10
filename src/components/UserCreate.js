import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchUserCreateThunk } from "../store/slice/apiSlice";

const UserCreate = () => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {...formData, age: Number(formData.age)}
        dispatch(fetchUserCreateThunk(dataToSubmit));
        setFormData({...dataToSubmit});
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="name"
                onChange={handleChange}
                placeholder="이름을 입력하세요."
                />
                <input type="text"
                name="email"
                onChange={handleChange}
                placeholder="email을 입력하세요."
                />
                <input type="number"
                name="age"
                onChange={handleChange}
                placeholder="나이를 입력하세요."
                />
                <button type="submit">등록</button>
            </form>
        </>
    );
}

export default UserCreate;