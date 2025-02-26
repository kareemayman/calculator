import { useContext } from "react"
import { CalculatorContext } from "../context/CalculatorContext"

export default function Screen() {
  const {screenValue, setScreenValue} = useContext(CalculatorContext)

  return (
    <h1 className="screen">
        {screenValue}
    </h1>
  ) 
}
