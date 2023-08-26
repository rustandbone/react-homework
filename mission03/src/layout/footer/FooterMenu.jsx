export default function FooterMenu({children}) {
  return (
    <li>
      <a href="./" className="block hover:text-white">{children}</a>
    </li>
  )
}