import { useRouter } from 'next/router'

export default function Link({children,href}) {
  const router = useRouter()
  const style = {
    marginRight: 20,
    textUnderlinePosition: 'under',
    textDecoration: router.pathname === href ? 'underline' : 'none',
    color: 'black',
  }
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <a href={href} onClick={handleClick} style={style} class="link">
      {children}
    </a>
  )
}
