import { useState, useEffect } from 'react'

function useCustomScroll() {
  const [headerHeight, setHeaderHeight] = useState<number | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const header = document.getElementById('header')
      const calculatedHeight = header?.clientHeight || null
      setHeaderHeight(calculatedHeight)
    }
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = e.currentTarget.getAttribute('data-href')
    if (target !== null) {
      const element = document.querySelector(target) as HTMLElement
      if (element && headerHeight) {
        const topOffSet = element.offsetTop
        window.scrollTo({
          top: topOffSet - headerHeight - 50,
          behavior: 'smooth',
        })
      }
    }
  }

  return { handleLinkClick }
}

export default useCustomScroll
