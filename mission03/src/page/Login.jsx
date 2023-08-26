import pb from "@/api/pocketbase";
import { useState } from "react";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";

export default function Login() {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    username:'',
    password:'',
  })

  const handleSignIn = async (e) => {
    e.preventDefault();
    //PocketBase SDK 인증 요청
    const { username, password } = formState;

    try {
      await pb.collection('users').authWithPassword(username, password)

      // if(!state) {
        navigate('/profile');
      // } else {
      //   navigate(state.wishLocationPath)
      // } 
    } catch (error) {
      console.error(error);
    }
  }

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]:value
    })
  }

  return (
    <section
      className="login mx-[auto] my-14 w-2/5 max-w-[400px]"
    >
      <div className="content_wrap">
        <div className="title_wrap">
          <h3 className="title mb-[25px] text-center text-xl font-bold">
            TAING ID 로그인
          </h3>
        </div>
      </div>

      <form name="input_form" onSubmit={handleSignIn}>
        <label htmlFor="id_input" className="data_input sr-only">아이디</label>
        <input
          type="text"
          className="id_box mb-2.5 block w-full rounded border-0 bg-darkbg2 px-[15px] py-5 text-white outline-[0]"
          id="id_input"
          name="username" 
          placeholder="아이디"
          required="required"
          defaultValue={formState.username} 
          onChange={handleInput}
        />
        <span
          className="error-message m-2 hidden text-xs text-red_login"
          id="userEmailError">아이디는 6자리 이상 10자리 이하로 입력해 주세요.</span>
        <div className="relative mb-2.5">
          <label htmlFor="password_input" className="data_input sr-only"
            >비밀번호
          </label>
          <input
            type="password"
            className="pw_box w-full rounded border-0 bg-darkbg2 px-[15px] py-5 text-white outline-[0]"
            id="password_input"
            name="password" 
            placeholder="비밀번호"
            required="required"
            autoComplete="current-password"
            defaultValue={formState.password} 
            onChange={handleInput}
          />
          <button
            id="closePW"
            className="brightness-3 absolute right-6 top-[20px] h-[25px] w-[25px] bg-[url('/icon/DesktopPw.png')] bg-contain bg-[25px] invert-[50%]"
          ></button>
          <span
            className="error-message m-2 hidden text-xs text-red_login"
            id="userPasswordError"
            >비밀번호는 특수문자 포함 10자리 이상으로 입력해 주세요.</span>
        </div>
      <ul className="checks_wrap">
        <li className="checks">
          <input
            className="appearance-none before:inline-block before:h-[17px] before:w-[17px] before:bg-[url('/icon/DesktopDFilled.png')] before:bg-[length:17px_17px] before:align-middle before:content-[''] checked:before:inline-block checked:before:h-[17px] checked:before:w-[17px] checked:before:bg-[url('/icon/DesktopAFilled.png')] checked:before:bg-[length:17px_17px] checked:before:bg-no-repeat"
            id="check"
            type="checkbox"
          />
          <label htmlFor="check">
            <span className="pl-[5px] align-middle">자동로그인</span>
          </label>
        </li>
      </ul>

        <button
          id="doLogIn"
          className="btn_color bg- mx-0 mb-10 mt-5 inline-block w-full rounded bg-red_login px-0 py-[15px] text-white"
        >
          로그인
        </button>
      </form>
      <div className="join_wrap flex justify-center gap-2.5 text-gray5">
        &quot;아직 계정이 없으신가요?&quot;
        <NavLink to="/join">
          <span id="regist" className="no_border text-gray3">회원가입</span>
        </NavLink>
      </div>
    </section>
  )
}