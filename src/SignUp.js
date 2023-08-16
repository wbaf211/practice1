import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./action/userAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = ({user, setUser, getUser}) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const add = () => {
        const newUser = {
            uname: user.uname,
            uid: user.uid,
            pw: user.pw,
        }
        const addList = addUser(newUser);
        dispatch(addList);
        toast.success("Đăng ký thành công", {containerId: "signup-success"});
        setUser("");
        navigate("/");
    }   

    return (
        <div className="form-container">
            <form id="signUp">
                <h2 className="yellow">Đăng Ký</h2>

                <div className="user-input__container">
                    <input type="text" placeholder="Tên" name="uname" onChange={getUser}></input>
                    <input type="text" placeholder="Tên đăng nhập" name="uid" onChange={getUser}></input>
                    <input type="password" placeholder="Mật khẩu" name="pw" onChange={getUser}></input>
                </div>

                <div className="btn-container">
                        <button type="button" onClick={() => add()}>Đăng Ký</button>
                    </div>
            </form>
        </div>
    );
}

export default SignUp;