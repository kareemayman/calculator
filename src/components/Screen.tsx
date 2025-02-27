import { useContext } from "react"
import { CalculatorContext } from "../context/CalculatorContext"

export default function Screen() {
  const {screenValue, toBeCalculatedString} = useContext(CalculatorContext)

  return (
    <h1 className="screen">
        {screenValue}
        <span className="to-be-calculated">{toBeCalculatedString}</span>
    </h1>
  ) 
}
