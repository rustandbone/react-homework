import Button from './../components/Button';
import ProfileText from './profile/ProfileText';
import ProfileTitle from './profile/ProfileTitle';
import ProfileList from './profile/ProfileList';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Profile({select, title}) {
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
      {
        select &&
        <NavLink to="/profile/edit"><Button>프로필 편집</Button></NavLink>
      }
      {
        !select &&
        <NavLink to="/profile"><Button>완료</Button></NavLink>
      }
    </section>
  )
}