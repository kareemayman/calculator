import React, { createContext, useState } from "react"

// Define the type for the context value
interface CalculatorContextType {
  // Add the properties and methods that your context will provide
  screenValue: string
  setScreenValue: React.Dispatch<React.SetStateAction<string>>
}

// Create a default value for the context
const defaultValue: CalculatorContextType = {
  screenValue: "",
  setScreenValue: () => {},
}

// Create the context with the default value
export const CalculatorContext = createContext<CalculatorContextType>(defaultValue)

export const CalculatorProvider = ({ children }: { children: any }) => {
  const [screenValue, setScreenValue] = useState("")

  return (
    <CalculatorContext.Provider
      value={{ screenValue: screenValue, setScreenValue: setScreenValue }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}
