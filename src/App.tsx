import ButtonGrid from "./components/ButtonGrid";
import Header from "./components/Header";
import Screen from "./components/Screen";

export default function App() {
  return (
    <div className="calculator">
      <Header></Header>
      <Screen></Screen>
      <ButtonGrid></ButtonGrid>
    </div>
  )
}
