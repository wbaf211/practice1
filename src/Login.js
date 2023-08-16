import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Login = ({user, getUser}) => {

    const userList = useSelector(state => state.user.userList);

    const navigate = useNavigate();

    const submitInput = () => {
        const loginUser = userList.find(value => value.uid === user.uid)
        if (loginUser === '' || loginUser === undefined) {
            toast.error("Tài khoản không tồn tại", {containerId: "login-failed"});
            return;
        }
        if (loginUser.pw === user.pw) {
            toast.success(`Chào mừng ${loginUser.uname}`, {containerId: "login-success"});
            navigate("/customer");
        } else {
            toast.error("Sai mật khẩu", {containerId: "login-failed"});
        }
    }

    return (
        <div className="form-container">
            <form id="login">
                <div className="form-wrapper">
                    <h2 className="yellow">Đăng nhập</h2>

                    <div className="user-input__container">
                        <input type="text" placeholder="Tên đăng nhập" name="uid" value={user.uid} onChange={getUser}></input>
                        <input type="password" placeholder="Mật khẩu" name="pw" value={user.pw} onChange={getUser}></input>
                    </div>

                    <span className="signUp yellow">Chưa có mật khẩu? <span className="link" onClick={() => navigate("/signup")}>Đăng ký</span></span>
                    
                    <div className="btn-container">
                        <button type="button" onClick={() => submitInput()}>Đăng Nhập</button>
                    </div>
                    <span className="center underscore link fg-pw" onClick={() => alert("Cho đẹp thôi chứ không làm được gì đâu")}>Quên mật khẩu?</span>
                </div>
            </form>
        </div>
    );
}

export default Login;