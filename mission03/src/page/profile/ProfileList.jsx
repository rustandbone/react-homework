import { useEffect, useState } from "react";
import 이 from '@/assets/profile_이.png'
import 정 from '@/assets/profile_정.png'
import 진 from '@/assets/profile_진.png'
import 효 from '@/assets/profile_효.png'

export default function ProfileList({selected, icon}) {
  let [list, setList] = useState([]);

  useEffect(() => {
    async function fetchlists() {
      const response = await fetch("http://127.0.0.1:3000/api/collections/profile/records")
      if(!response.ok) {
        console.log(response.ok)
      }
      const data = await response.json();
      setList(data.items)
    }
    fetchlists();
  }, [])

  return (
    <ul className="flex items-center justify-center gap-x-11 pt-11">
      {
        list?.map((item) => { 
          return (
            <li key={item.nickname} className="text-gray3">
              <a
                href={`./${icon === 'lock' ? '' : 'edit'}`}
                className="text-gray3"
              >
                <div
                  className="relative duration-500 ease-linear hover:-translate-y-[5%]"
                >
                  <img
                    src={item.nickname === '이' ? 이 : item.nickname === '효' ? 효 : item.nickname === '정' ? 정 : 진}
                    alt={`${item.nickname} 프로필`}
                    className="w-40 flex-col gap-y-4 rounded"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 top-0 rounded 
                      ${item.nickname === selected && icon === 'lock' ? '' : 'bg-black/[.5]'}`}
                  >
                    {
                      (icon === 'lock' &&
                      item.nickname === selected) || 
                      <img
                        src={`/icon/${icon}.png`}
                        alt="자물쇠"
                        className={`absolute left-[calc(50%-1.5625rem)] top-[calc(50%-1.5625rem)] w-14 h-14 brightness-200 
                          ${icon === 'lock' ? 'invert-[80%]' : ''}`}
                      />
                    }
                  </div>
                </div>
                <p className="py-4 text-center text-xl text-gray3">{item.nickname}</p>
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}