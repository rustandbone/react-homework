import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "@/components/Button";
import ProfileEdit from "./ProfileEdit";
import { getPbImageURL } from "@/utils/getPbImageURL";

export default function ProfileList({selected, icon}) {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    async function fetchlists() {
      const response = await fetch("https://react-mission.pockethost.io/api/collections/profile/records")
      if(!response.ok) {
        console.log(response.ok)
      }
      const data = await response.json();
      setList(data.items)
    }
    fetchlists();
  }, [show, setShow])

  return (
    <>
      <ul className={`flex items-center justify-center gap-x-11 pt-11 ${show ? 'hidden' : ''}`}>
        {
          list?.map((item) => { 
            return (
              <li key={item.nickname} className="text-gray3">
                <Link to={`/profile${icon === 'lock' ? '' : '/edit'}`}>
                  <div
                    className="relative duration-500 ease-linear hover:-translate-y-[5%] w-40 flex justify-center"
                  >
                    <img
                      src={getPbImageURL(item, 'img')}
                      alt={`${item.nickname} 프로필`}
                      className="h-40 flex-col gap-y-4 rounded"
                    />
                    <button
                      onClick={() => {
                        icon !== 'lock' && setShow(!show)
                        icon !== 'lock' && setItem(item)
                      }}
                      className={`absolute bottom-0 left-0 right-0 top-0 rounded 
                        ${item.nickname === selected && icon === 'lock' ? '' : 'bg-black/[.5]'}`}
                    >
                      {
                        (icon === 'lock' &&
                        item.nickname === selected) || 
                        <img
                          src={`./icon/${icon}.png`}
                          alt="자물쇠"
                          className={`absolute left-[calc(50%-1.5625rem)] top-[calc(50%-1.5625rem)] w-14 h-14 brightness-200 
                            ${icon === 'lock' ? 'invert-[80%]' : ''}`}
                        />
                      }
                    </button>
                  </div>
                  <p className="py-4 text-center text-xl text-gray3">{item.nickname}</p>
                </Link>
              </li>
            )
          })
        }
        {
          list?.length < 4 &&
          <li className=" w-40">
            <Link to={`/profile/create`}>
              <div className="relative w-40 h-40 border rounded-md border-white border-solid">
                <img src='./icon/plus.svg' className={`absolute left-[calc(50%-1.5625rem)] top-[calc(50%-1.5625rem)] w-14 h-14 brightness-200 invert-[80%]`}/>
              </div>
              <p className="py-4 text-center text-xl text-gray3">프로필 생성</p> 
            </Link>
          </li>
        }
      </ul>
      {
        icon === 'lock' && !show &&
        <NavLink to="/profile/edit"><Button>프로필 편집</Button></NavLink>
      }
      {
        icon === 'pencil' && !show &&
        <NavLink to="/profile"><Button>완료</Button></NavLink>
      }
      {
        show &&
        <ProfileEdit item={item} edit={() => setShow(!show)}></ProfileEdit>
      }
      { show &&
        <button
        type="button"
        className={`m-auto mt-1 block w-60 cursor-pointer border border-solid border-gray6 rounded py-5 text-xl text-gray2 hover:font-bold}`}
        onClick={() => setShow(!show)}>취소</button>
      }
    </>
  )
}