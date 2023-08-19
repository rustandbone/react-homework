export default function Button({children}) {
  return (
    <button
      type="button"
      className={`m-auto mt-8 block w-60 cursor-pointer rounded border border-solid border-gray6 py-5 text-xl 
        ${children === '완료' 
          ? 'text-black bg-gray-300 hover:font-bold' 
          : 'text-gray2 hover:border-white hover:text-white'}`}>
          {children}
    </button>
  )
}