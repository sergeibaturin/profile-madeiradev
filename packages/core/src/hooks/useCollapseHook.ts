import { useEffect, useState } from 'react'

export const useCollapse = () => {
  const [isCollapse, setIsCollapse] = useState(window.innerWidth <= 645)

  useEffect(() => {
    const handleResize = () => {
      setIsCollapse(window.innerWidth >= 645)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isCollapse
}
