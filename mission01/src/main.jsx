import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Button from './parts/Button.jsx'
import './styles/index.css'
import { color } from './parts/data.js'

const root = document.querySelector('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button  
      onMouseEnter={() => {
        (root.firstChild.style.backgroundColor = color.hover);
      }}
      onMouseLeave={() => {
        (root.firstChild.style.backgroundColor = color.main);
      }}
      onFocus={() => {
        (root.firstChild.style.backgroundColor = color.focus);
      }}
      onBlur={() => {
        (root.firstChild.style.backgroundColor = color.main);
      }}
    />
    <Button
      size="tablet"
      onMouseEnter={() => {
        (root.childNodes[1].style.backgroundColor = color.hover);
      }}
      onMouseLeave={() => {
        (root.childNodes[1].style.backgroundColor = color.main);
      }}
      onFocus={() => {
        (root.childNodes[1].style.backgroundColor = color.focus);
      }}
      onBlur={() => {
        (root.childNodes[1].style.backgroundColor = color.main);
      }}
    />
    <Button size="mobile"
      onMouseEnter={() => {
        (root.childNodes[2].style.backgroundColor = color.hover);
      }}
      onMouseLeave={() => {
        (root.childNodes[2].style.backgroundColor = color.main);
      }}
      onFocus={() => {
        (root.childNodes[2].style.backgroundColor = color.focus);
      }}
      onBlur={() => {
        (root.childNodes[2].style.backgroundColor = color.main);
      }}
    />

    <Button disabled />
    <Button size="tablet" disabled />
    <Button size="mobile" disabled />
  </StrictMode>,
)
