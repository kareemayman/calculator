import { useContext } from "react"
import { CalculatorContext } from "../context/CalculatorContext"

export default function ThemeToggle() {
  const {theme, setTheme} = useContext(CalculatorContext)

  function handleToggleButtonClick() {
    if (theme === 1) {
      setTheme(2)
    } else if (theme === 2) {
      setTheme(3)
    } else {
      setTheme(1)
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
