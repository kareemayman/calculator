import { useContext } from "react"
import ButtonGrid from "./components/ButtonGrid"
import Header from "./components/Header"
import Screen from "./components/Screen"
import { CalculatorContext, CalculatorProvider } from "./context/CalculatorContext"

export default function App() {
  const { theme } = useContext(CalculatorContext)

  return (
    <CalculatorProvider>
      <div className={`calculator theme-${theme}`}>
        <Header></Header>
        <Screen></Screen>
        <ButtonGrid></ButtonGrid>
      </div>
    </CalculatorProvider>
  )
}
