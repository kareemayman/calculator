import { useContext, useEffect, useRef, useState } from "react"
import Button from "./Button"
import { CalculatorContext } from "../context/CalculatorContext"

export default function ButtonGrid() {
  const {
    screenValue,
    setScreenValue,
    toBeCalculatedString,
    setToBeCalculatedString,
  } = useContext(CalculatorContext)
  const screenValueRef = useRef<string>(screenValue)
  const [ numbers, setNumbers ] = useState<number[]>([])
  const numbersRef = useRef<number[]>(numbers)
  const [ operators, setOperators ] = useState<string[]>([])
  const operatorsRef = useRef<string[]>(operators)
  const [ result, setResult ] = useState<number | null>(null)
  const resultRef = useRef<number | null>(result)

  useEffect(() => {
    screenValueRef.current = screenValue
  }, [screenValue])

  useEffect(() => {
    numbersRef.current = numbers
  }, [numbers])

  useEffect(() => {
    operatorsRef.current = operators
  }, [operators])

  useEffect(() => {
    resultRef.current = result
  }, [result])

  useEffect(() => {
    function handleBUttonClick(e: MouseEvent) {
      if (e.target && (e.target as HTMLElement).matches(".button")) {
        if ((e.target as HTMLElement).classList.contains("number-button")) {
          if (resultRef.current !== null) {
            setResult(null)
            setScreenValue("")
          }
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
          setToBeCalculatedString("")
        } else if ((e.target as HTMLElement).classList.contains("operator-button") && screenValueRef.current.trim() !== '') {
          setToBeCalculatedString(screenValueRef.current + " " + (e.target as HTMLElement).innerText)
          setNumbers((prevNumbers) => [...prevNumbers, parseFloat(screenValueRef.current)])
          setOperators((prevOperators) => [...prevOperators, (e.target as HTMLElement).innerText])
          setScreenValue("")
        } else if ((e.target as HTMLElement).innerText === "=") {
          setToBeCalculatedString(prevValue => prevValue + " " + screenValueRef.current + " =")
          calculate([...numbersRef.current, parseFloat(screenValueRef.current)], operatorsRef.current)
          setNumbers([])
          setOperators([])
        }
      }
    }

    document.addEventListener("click", handleBUttonClick)

    return () => {
      document.removeEventListener("click", handleBUttonClick)
    }
  }, [])

  function calculate(nums: number[], ops: string[]) {
    console.log(nums, ops)
    let res = nums[0]
    let j = 0
    for (let i = 1; i < nums.length; i++) {
      switch (ops[j]) {
        case "+":
          res += nums[i]
          break
        case "-":
          res -= nums[i]
          break
        case "x":
          res *= nums[i]
          break
        default:
          res /= nums[i]
      }
      j++
    }
    setResult(res)
    setScreenValue(res.toString())
  }

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
