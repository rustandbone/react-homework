import ProfileText from './ProfileText';
import ProfileTitle from './ProfileTitle';
import ProfileList from './ProfileList';
import { useEffect, useState } from 'react';

export default function ProfileSelect({select, title}) {
  const [pagetitle, setTitle] = useState('');

  useEffect(()=> {
    setTitle(title);
    document.title = `TAING - ${pagetitle}`;
  }, [pagetitle, title])

  return (
    <section className="mx-auto mb-24 mt-12 w-[70%]">
      <ProfileTitle>프로필 {select ? '선택' : '편집'}</ProfileTitle>
      <ProfileText>{select ? '시청' : '편집'}할 프로필을 선택해주세요.</ProfileText>
      <ProfileList selected={'이'} icon={select ? 'lock' : 'pencil'}></ProfileList>
    </section>
  )
}