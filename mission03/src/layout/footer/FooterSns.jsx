export default function FooterSns({sns}) {
  
  const snsKorean = Object.keys(sns)[0];
  const snsEnglish = Object.values(sns)[0];
  
  return (
    <li className="flex-shrink-0">
      <a
        href="./"
        className="flex items-center justify-center rounded-[50%] bg-gray8 h-[52px] w-[52px]">
        <img src={`/icon/${snsEnglish}.svg`} alt={snsKorean}/>
      </a>
    </li>
  )
  }