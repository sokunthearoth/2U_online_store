import { useRouter } from 'next/router'

export default function Link(props) {
  const router = useRouter()
  const style = {
    marginRight: 20,
    textUnderlinePosition: 'under',
    textDecoration: router.pathname === props.href ? 'underline' : 'none',
  }
  const handleClick = (e) => {
    e.preventDefault()
    router.push(props.href)
  }
  return (
    <a href={props.href} onClick={handleClick} style={style} class="link">
      {props.name}
    </a>
  )
}
