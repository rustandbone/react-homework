import { useAuth } from "@/contexts/Auth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { isAuth, signOut } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
    await signOut();
    navigate('./')
  }

  return (
    <header className="flex justify-between">
      <h1 className="mt-4 ml-10">
        <a href="./">
          <img src="./Logo_1.png" alt="TAING" />
        </a>
      </h1>
      {
        isAuth &&
        <button type="button" onClick={handleSignOut} className="mt-4 mr-10">로그아웃</button>
      }
    </header>
  )
}