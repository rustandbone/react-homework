import Button from './../components/Button';
import ProfileText from './profile/ProfileText';
import ProfileTitle from './profile/ProfileTitle';
import ProfileList from './profile/ProfileList';
import { NavLink } from 'react-router-dom';

export default function ProfileSelect({select}) {
  return (
    <section className="mx-auto mb-24 mt-12 w-[70%]">
      <ProfileTitle>프로필 {select ? '선택' : '편집'}</ProfileTitle>
      <ProfileText>{select ? '시청' : '편집'}할 프로필을 선택해주세요.</ProfileText>
      <ProfileList selected={'이'} icon={select ? 'lock' : 'pencil'}></ProfileList>
      {
        select &&
        <NavLink to="/edit"><Button>프로필 편집</Button></NavLink>
      }
      {
        !select &&
        <NavLink to="/"><Button>완료</Button></NavLink>
      }
    </section>
  )
}