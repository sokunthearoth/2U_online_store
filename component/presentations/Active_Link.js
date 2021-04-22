import { useRouter } from 'next/router'

export default function Active_Link({children,href}) {
  const router = useRouter()
  const style = {
    marginRight: 20,
    color: router.pathname === href ? 'red' : 'black',
  }
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <a href={href} onClick={handleClick} style={style} className="link">
      {children}
    </a>
  )
}
