import { createContext, useState } from "react"

// Define the type for the context value
interface CalculatorContextType {
  // Add the properties and methods that your context will provide
  value: string
  setValue: (value: string) => void
}

// Create a default value for the context
const defaultValue: CalculatorContextType = {
  value: "",
  setValue: () => {},
}

// Create the context with the default value
export const CalculatorContext = createContext<CalculatorContextType>(defaultValue)

export const CalculatorProvider = ({ children }: { children: any }) => {
  const [currentValue, setCurrentValue] = useState("")

  return (
    <CalculatorContext.Provider
      value={{ value: currentValue, setValue: setCurrentValue }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}
