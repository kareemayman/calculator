import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [ theme, setTheme ] = useState<number>(() => {
    const storedTheme = localStorage.getItem('calculatorTheme')
    return storedTheme ? parseInt(storedTheme) : 1
  })

  useEffect(() => {
    document.body.className = `theme-${theme}`
  }, [theme])

  function handleToggleButtonClick() {
    if (theme === 1) {
      setTheme(2)
      localStorage.setItem('calculatorTheme', '2')
    } else if (theme === 2) {
      setTheme(3)
      localStorage.setItem('calculatorTheme', '3')
    } else {
      setTheme(1)
      localStorage.setItem('calculatorTheme', '1')
    }
  }

  return (
    <div className="theme-toggle">
      <div className="theme-numbers">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>

      <div className="theme-slider">
        <div className={`toggle-button theme-${theme}`} onClick={handleToggleButtonClick}></div>
      </div>
    </div>
  )
}
