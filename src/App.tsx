import ButtonGrid from "./components/ButtonGrid"
import Header from "./components/Header"
import Screen from "./components/Screen"
import { CalculatorProvider } from "./context/CalculatorContext"

export default function App() {
  return (
    <CalculatorProvider>
      <div className="calculator">
        <Header></Header>
        <Screen></Screen>
        <ButtonGrid></ButtonGrid>
      </div>
    </CalculatorProvider>
  )
}
