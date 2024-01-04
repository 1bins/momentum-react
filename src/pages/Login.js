import { useState } from "react";

const Login = ({ isLogin, setIsLogin }) => {
    const [userName, setUserName] = useState("");

    const handleSubmit = () => {
        if(window.event.keyCode==13){
            localStorage.setItem("userName", userName);
            setIsLogin(true);
        }
    }

    return(
        <section id="login-form">
            <div className="form-inner">
                <div className="img-box">
                    <img src={`${process.env.PUBLIC_URL}/image/login_user_icon.png`} alt="로그인 이미지" />
                </div>
                <p className="text">{isLogin ? "로그인 중입니다" : "이름이 무엇인가요?"}</p>
                <div className="form-box">
                    <input
                        id="login-txt"
                        type="userName"
                        onChange={e => setUserName(e.target.value)}
                        placeholder={`입력 후 "엔터"를 눌러주세요`}
                        onKeyUp={handleSubmit}
                    />
                </div>
            </div>
        </section>
    )
}

export default Login;