import { useRef } from "react";
import ProfileTitle from "./ProfileTitle";
import pb from "@/api/pocketbase";
import { useNavigate } from "react-router-dom";
import ProfileText from "./ProfileText";
import { Link } from "react-router-dom";

export default function ProfileCreate() {
  const nicknameRef = useRef(null);
  const imageRef = useRef(null);
  const uploadimageRef = useRef(null);
  const navigate = useNavigate();

  const handleRegisterProfile = async (e) => {
    e.preventDefault();

    if(!nicknameRef.current.value && !imageRef.current.files[0]) {
      alert('프로필 사진과 이름을 등록해주세요')
      return;
    }
    else if(!nicknameRef.current.value) {
      alert('프로필 이름을 등록해주세요')
      return;
    } else if(!imageRef.current.files[0]) {
      alert('프로필 사진을 등록해주세요.')
      return;
    }

    const formData = new FormData();

    formData.append('nickname', nicknameRef.current.value);
    formData.append('img', imageRef.current.files[0]);

    try {
      await pb.collection('profile').create(formData);
      alert('프로필 생성이 완료되었습니다.')
      navigate('/profile');
    } catch(error) {
      console.log(error)
      alert('사진과 프로필 이름을 정해주세요')
    }
  }

  const handleDisplayUploadImgae = (e) => {
    const photoFile = e.target.files[0];
    const photoUrl = URL.createObjectURL(photoFile);
    uploadimageRef.current.setAttribute('src', photoUrl);
  };

  return (
    <section className="mb-24 mt-12">
      <ProfileTitle>프로필 생성</ProfileTitle>
      <ProfileText>원하는 사진과 이름으로 프로필을 생성할 수 있습니다.</ProfileText>
      <form className="flex justify-center items-center flex-col pt-11"
        encType="multipart/form-data" onSubmit={handleRegisterProfile}>
        <div className="relative w-40 h-40 border rounded-md border-white border-solid">
          <label htmlFor="photo" className='sr-only'>사진</label>
          <input type="file" name="image" id="photo" accept="*.jpg, *.png, *.webp, *.avif"
            ref={imageRef} onChange={handleDisplayUploadImgae} 
            className="absolute w-full h-full opacity-0 cursor-pointer" />
          <div className="flex justify-center">
            <img className={`-z-10 rounded-md absolute h-full`}
              src='./icon/taing.svg' ref={uploadimageRef}
              alt="" />
          </div>
        </div>
    
        <input ref={nicknameRef} className="py-4 text-center text-xl text-gray3 bg-transparent outline-none" 
        placeholder="프로필 이름을 적어주세요" /> 
        <button
        type="submit"
        className={`mt-8 block w-60 cursor-pointer rounded border border-solid border-gray6 py-5 text-xl text-black bg-gray-300 hover:font-bold}`}>
          완료</button>
        
        <Link to="/profile">
          <button
          type="button"
          className={`m-auto mt-1 block w-60 cursor-pointer border border-solid border-gray6 rounded py-5 text-xl text-gray2 hover:font-bold}`}>
            취소</button>
        </Link>
      </form>
    </section>
  )
}