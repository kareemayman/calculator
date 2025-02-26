import { useContext } from "react"
import { CalculatorContext } from "../context/CalculatorContext"

export default function Screen() {
  const {value, setValue} = useContext(CalculatorContext)

  return (
    <h1 className="screen">
        {value}
    </h1>
  ) 
}
