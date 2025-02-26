import { useContext, useEffect } from "react"
import Button from "./Button"
import { CalculatorContext } from "../context/CalculatorContext"

export default function ButtonGrid() {
  const { screenValue, setScreenValue } = useContext(CalculatorContext)

  useEffect(() => {
    function handleBUttonClick(e: MouseEvent) {
      if (e.target && (e.target as HTMLElement).matches(".button")) {
        if ((e.target as HTMLElement).classList.contains("number-button")) {
          if ((e.target as HTMLElement).innerText !== ".") {
            setScreenValue(
              (prevValue) => prevValue + (e.target as HTMLElement).innerText
            )
          } else {
            setScreenValue((prevValue) => {
              if (!prevValue.includes(".")) {
                return prevValue + "."
              } else {
                return prevValue
              }
            })
          }
        } else if ((e.target as HTMLElement).innerText === "DEL") {
          setScreenValue((prevValue) => prevValue.slice(0, -1))
        } else if ((e.target as HTMLElement).innerText === "RESET") {
          setScreenValue("")
        }
      }
    }

    document.addEventListener("click", handleBUttonClick)

    return () => {
      document.removeEventListener("click", handleBUttonClick)
    }
  }, [])

  return (
    <div className="button-grid">
      <Button value="7"></Button>
      <Button value="8"></Button>
      <Button value="9"></Button>
      <Button value="DEL"></Button>
      <Button value="4"></Button>
      <Button value="5"></Button>
      <Button value="6"></Button>
      <Button value="+"></Button>
      <Button value="1"></Button>
      <Button value="2"></Button>
      <Button value="3"></Button>
      <Button value="-"></Button>
      <Button value="."></Button>
      <Button value="0"></Button>
      <Button value="/"></Button>
      <Button value="x"></Button>
      <Button value="RESET"></Button>
      <Button value="="></Button>
    </div>
  )
}
