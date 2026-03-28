import { useEffect, useState } from 'react'

export const useScrollIndicatorHook = (offset = 10) => {
  const [isBottom, setIsBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - offset
      setIsBottom(scrolledToBottom)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return isBottom
}
