export default function Footer() {
  return (
    <footer className="mx-8 text-sm leading-6">
      <div className="border-bottom flex justify-between border-b-[1px] border-solid border-gray8 pb-[1rem] text-gray2">
        <p className="notice">
          <strong className="mr-5 text-gray5">공지사항</strong
          ><a href="/">[안내] 합병보고 주주총회에 갈음하는 공고</a>
        </p>
        <div>
          <button
            className="cursor-pointer p-0 text-gray2 hover:text-white after:ml-[0.7rem] after:content-['+']"
          >
            브랜드 바로가기
          </button>
          <button
            className="cursor-pointer border-l-[1px] p-0 text-gray2 hover:text-white ml-[28px] pl-[28px] after:ml-[0.7rem] after:content-['+']"
          >
            그룹 계열사 바로가기
          </button>
        </div>
      </div>
      <ul
        className="flex text-gray2 gap-[36px] my-4"
      >
        <li>
          <a href="./" className="block hover:text-white">고객센터</a>
        </li>
        <li>
          <a href="./" className="block hover:text-white">이용약관</a>
        </li>
        <li>
          <a href="./" className="block hover:text-white">개인정보처리방침</a>
        </li>
        <li>
          <a href="./" className="block hover:text-white">청소년 보호정책</a>
        </li>
        <li>
          <a href="./" className="block hover:text-white">법적고지</a>
        </li>
        <li>
          <a href="./" className="block hover:text-white">이벤트</a>
        </li>
        <li>
          <a href="./" className="block hover:text-white">인재채용</a>
        </li>
      </ul>

      <div className="text-gray5">
        <p>
          <span>대표이사 : YANG JIEUL</span>
          <a
            href=""
            className="border-l-[1px] border-gray7 underline ml-[12px] pl-[14px]"
            >사업자정보확인</a>
          <span
            className="border-l-[1px] border-gray7 ml-[12px] pl-[14px]"
            >사업자등록번호 : 188-88-01893</span>
          <span
            className="border-l-[1px] border-gray7 ml-[12px] pl-[14px]"
            >통신판매신고번호 : 2020-서울마포-3641호</span>
        </p>
        <address>
          사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)
          호스팅사업자 : 씨제이올리브네트웍스(주)
        </address>
        <p>
          <a href="" className="underline">고객문의 바로가기</a>
          <a
            href=""
            className="border-l-[1px] border-gray7 underline ml-[12px] pl-[14px]"
            >대표메일 : tving@cj.net</a>
          <a
            href=""
            className="border-l-[1px] border-gray7 underline ml-[12px] pl-[14px]"
            >고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)</a>
        </p>
        <p>
          <span>ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780</span>
          <span>Mnet 고객센터(반송편성문의) : 1855-1631</span>
        </p>
      </div>

      <ul className="flex items-center gap-6 my-4">
        <li className="flex-shrink-0">
          <a
            href="./"
            className="youtube flex items-center justify-center rounded-[50%] bg-gray8 h-[52px] w-[52px]">
            <img src="/icon/youtube.svg" alt="유튜브"/>
          </a>
        </li>
        <li className="flex-shrink-0">
          <a
            href="./"
            className="instagram flex items-center justify-center rounded-[50%] bg-gray8 h-[52px] w-[52px]">
            <img src="/icon/instagram.svg" alt="인스타그램"/>
          </a>
        </li>
        <li className="flex-shrink-0">
          <a
            href="./"
            className="Twitter flex items-center justify-center rounded-[50%] bg-gray8 h-[52px] w-[52px]">
            <img src="/icon/twitter.svg" alt="트위터"/>
          </a>
        </li>
        <li className="flex-shrink-0">
          <a
            href="./"
            className="Twitter flex items-center justify-center rounded-[50%] bg-gray8 h-[52px] w-[52px]">
            <img src="/icon/facebook.svg" alt="페이스북"/>
          </a>
        </li>
      </ul>

      <small className="text-gray5 text-sm">Copyright © 주식회사 티빙 All right reserved.</small>
    </footer>
  )
}