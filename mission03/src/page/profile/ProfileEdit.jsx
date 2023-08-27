import pb from '@/api/pocketbase';
import { getPbImageURL } from '@/utils/getPbImageURL'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileEdit({item, edit}) {
  const nicknameRef = useRef(null);
  const imageRef = useRef(null);
  const uploadimageRef = useRef(null);
  const navigate = useNavigate();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('nickname', nicknameRef.current.value);
    formData.append('img', imageRef.current.files[0]);

    try {
      await pb.collection('profile').update(item.id, formData);
      alert('프로필 수정이 완료되었습니다.')
      edit();
    } catch(error) {
      console.log(error)
      alert('사진과 프로필을 변경해주세요')
    }
  }

  const handleDeleteProfile = async () => {
    const confirmDelete = confirm('프로필을 정말 삭제하시겠습니까?')
    try {
      if(confirmDelete) {
        await pb.collection('profile').delete(item.id);
        alert('프로필이 삭제되었습니다.')
        edit();
        navigate('/profile');
      } 
    } catch(error) {
      console.log(error)
      alert('삭제에 실패했습니다. 다시 시도해주세요')
    }
  }

  const handleDisplayUploadImgae = (e) => {
    const photoFile = e.target.files[0];
    const photoUrl = URL.createObjectURL(photoFile);
    uploadimageRef.current.setAttribute('src', photoUrl);
  };

  return (
    <form className='pt-11 flex flex-col items-center' encType="multipart/form-data" onSubmit={handleUpdateProfile}>
      <div className="relative w-40 h-40 border-white border-solid">
        <label htmlFor="photo" className='sr-only'>사진</label>
        <input type="file" name="image" id="photo" accept="*.jpg, *.png, *.webp, *.avif"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          ref={imageRef} onChange={handleDisplayUploadImgae} />
        <div className="border-none w-40 h-40 flex justify-center">
          <img className="h-40 rounded-md"
            ref={uploadimageRef}
            src={getPbImageURL(item, 'img')} 
            alt="" />
        </div>
      </div>
      <input className="py-5 text-center text-xl text-gray3 bg-transparent outline-none" 
        ref={nicknameRef} 
        defaultValue={item.nickname} />
      <button
        type="submit"
        className={`m-auto mt-8 block w-60 cursor-pointer rounded border border-solid border-gray6 py-5 text-xl text-black bg-gray-300 hover:font-bold}`}
        >수정하기</button>
      <button
        type="button"
        onClick={handleDeleteProfile}
        className={`m-auto mt-1 block w-60 cursor-pointer rounded py-5 text-xl text-gray1 bg-red_landing hover:font-bold}`}
        >삭제하기</button>
    </form>
  )
}