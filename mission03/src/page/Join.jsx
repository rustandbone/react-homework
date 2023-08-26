import pb from "@/api/pocketbase";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    username: '',
    email:'',
    password:'',
    passwordConfirm:''
  })

  const handleRegister = async (e) => {
    e.preventDefault();
    //PocketBase SDK 인증 요청
    const {password, passwordConfirm} = formState;
    if(password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해보세요.')
    }
    
    try {
      await pb.collection('users').create({
        ...formState,
        emailVisibility: true,
      })
      navigate('/profile');
    } catch(error) {
      console.log(error)
    }
  }

  const handleInput = async (e) => {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]:value
    })
    console.log(formState)
  }

  return (
    <section className="join mx-[auto] my-14 w-2/5 max-w-[400px]">
      <article className="title_wrap mb-[25px] text-center text-xl font-bold">
        <h3>
          티빙 회원가입
          <p className="mt-2.5 text-sm font-normal text-gray3">
            아이디와 이메일로 간편하게 티빙을 시작하세요!
          </p>
        </h3>
      </article>

      <form onSubmit={handleRegister}>
        <div className="make_id">
          <label htmlFor="userId" className="data_input_id layout_flex sr-only">아이디</label>
          <input
            type="text"
            name="username"
            id="userId"
            className="new_id mt-2.5 w-full rounded border-0 bg-darkbg2 px-[15px] py-5 text-white outline-none focus:border-[1px] focus:border-gray3"
            required
            placeholder="아이디"
            defaultValue={formState.name}
            onChange={handleInput}
          />
          <p className="input_info mt-[5px] text-[10px] font-medium text-gray5">
            영문 또는 영문, 숫자 조합 6~12자리
          </p>
        </div>

        <div className="make_pw relative">
          <label htmlFor="userPw" className="data_input_pw layout_flex sr-only">비밀번호</label>
          <input
            type="password"
            id="userPw"
            name="password"
            className="new_pw mt-2.5 w-full rounded border-0 bg-darkbg2 px-[15px] py-5 text-white outline-none focus:border-[1px] focus:border-gray3"
            required
            placeholder="비밀번호"
            defaultValue={formState.password}
            onChange={handleInput}
          />
          <button
            id="closePw"
            className="brightness-3 absolute bottom-[39px] right-6 h-[25px] w-[25px] bg-[url('/icon/DesktopPw.png')] bg-contain bg-[25px] invert-[50%]"
          ></button>
          <p className="input_pw mt-[5px] text-[10px] font-medium text-gray5">
            영문,숫자,특수문자(~!@#$%^&*) 조합 8~15자리
          </p>
        </div>

        <div className="make_pw make_check_pw relative">
          <label
            htmlFor="passwordConfirm"
            className="data_input_check layout_flex sr-only"
            >비밀번호 확인
          </label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm" 
            className="new_pw_check mt-2.5 w-full rounded border-0 bg-darkbg2 px-[15px] py-5 text-white outline-none focus:border-[1px] focus:border-gray3"
            required
            placeholder="비밀번호 확인"
            defaultValue={formState.passwordConfirm}
            onChange={handleInput}
          />
          <button
            id="closePwCheck"
            className="brightness-3 absolute right-6 top-[29px] h-[25px] w-[25px] bg-[url('/icon/DesktopPw.png')] bg-contain bg-[25px] invert-[50%]"
          ></button>

          <p className="input_checkpw mt-[3px] hidden text-[10px] font-medium text-gray5">
            비밀번호가 일치합니다.
          </p>
          <p className="input_checkpw_N mt-[3px] hidden text-[10px] font-medium text-red">
            비밀번호가 일치하지 않습니다.
          </p>
        </div>
        
        <div className="make_email">
          <label htmlFor="email" className="data_input_email layout_flex sr-only"
            >이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            className="new_email mt-2.5 w-full rounded border-0 bg-darkbg2 px-[15px] py-5 text-white outline-none focus:border-[1px] focus:border-gray3"
            required
            placeholder="이메일"
            defaultValue={formState.email}
            onChange={handleInput}
          />
        </div>
        <p
          className="input_email mt-[4px] hidden text-[10px] font-medium text-gray5"
        >이메일 형식이 일치합니다.</p>
        <p
          className="input_email_N mt-[4px] hidden text-[10px] font-medium text-red"
        >이메일 형식이 일치하지 않습니다.</p>

        <ul className="check_wrap mb-[13px] mt-3 text-[13px] font-light text-gray2">
          <li className="check_list">
            <input
              className="cursor-pointer appearance-none before:inline-block before:h-[17px] before:w-[17px] before:bg-[url('/icon/DesktopDFilled.png')] before:bg-[length:17px_17px] before:align-middle before:content-[''] checked:before:inline-block checked:before:h-[17px] checked:before:w-[17px] checked:before:bg-[url('/icon/DesktopAFilled.png')] checked:before:bg-[length:17px_17px] checked:before:bg-no-repeat"
              type="checkbox"
              id="agreeAll"
            />
            <label htmlFor="agreeAll" className="cursor-pointer">
              <span className="pl-[5px] align-middle">모두 동의합니다.</span>
            </label>
          </li>
        </ul>
        <ul className="checks_wrap">
          <li className="check_box mb-[15px]">
            <input
              type="checkbox"
              className="cursor-pointer appearance-none before:inline-block before:h-[17px] before:w-[17px] before:bg-[url('/icon/DesktopDNoFilled.png')] before:bg-[length:17px_17px] before:align-middle before:content-[''] checked:before:inline-block checked:before:h-[17px] checked:before:w-[17px] checked:before:bg-[url('/icon/DesktopANoFilled.png')] checked:before:bg-[length:17px_17px] checked:before:bg-no-repeat"
              id="agree_1"
            />
            <label htmlFor="agree_1" className="cursor-pointer text-gray5">
              만 14세 이상입니다.
            </label>
          </li>
          <li className="check_box mb-[15px]">
            <input
              type="checkbox"
              className="cursor-pointer appearance-none before:inline-block before:h-[17px] before:w-[17px] before:bg-[url('/icon/DesktopDNoFilled.png')] before:bg-[length:17px_17px] before:align-middle before:content-[''] checked:before:inline-block checked:before:h-[17px] checked:before:w-[17px] checked:before:bg-[url('/icon/DesktopANoFilled.png')] checked:before:bg-[length:17px_17px] checked:before:bg-no-repeat"
              id="agree_2"
            />
            <label htmlFor="agree_2" className="cursor-pointer text-gray5">
              [필수] 서비스 이용약관 동의
            </label>
          </li>
          <li className="check_box mb-[15px]">
            <input
              type="checkbox"
              className="cursor-pointer appearance-none before:inline-block before:h-[17px] before:w-[17px] before:bg-[url('/icon/DesktopDNoFilled.png')] before:bg-[length:17px_17px] before:align-middle before:content-[''] checked:before:inline-block checked:before:h-[17px] checked:before:w-[17px] checked:before:bg-[url('/icon/DesktopANoFilled.png')] checked:before:bg-[length:17px_17px] checked:before:bg-no-repeat"
              id="agree_3"
            />
            <label htmlFor="agree_3" className="cursor-pointer text-gray5">
              [필수] 개인정보 수집 및 서비스 활용 동의
            </label>
          </li>
          <li className="check_box mb-[15px]">
            <input
              type="checkbox"
              className="cursor-pointer appearance-none before:inline-block before:h-[17px] before:w-[17px] before:bg-[url('/icon/DesktopDNoFilled.png')] before:bg-[length:17px_17px] before:align-middle before:content-[''] checked:before:inline-block checked:before:h-[17px] checked:before:w-[17px] checked:before:bg-[url('/icon/DesktopANoFilled.png')] checked:before:bg-[length:17px_17px] checked:before:bg-no-repeat"
              id="agree_4"
            />
            <label htmlFor="agree_4" className="cursor-pointer text-gray5">
              [필수] 채널 홈페이지 개인정보 제 3자 제공 동의
            </label>
          </li>
        </ul>

      <button
        type="submit"
        id="btnRegist"
        className="regist_btn mx-0 mb-10 mt-2.5 inline-block w-full rounded bg-gray7 px-0 py-[15px] text-gray3"
      >
        가입하기
      </button>
      </form>

    </section>
  )
}