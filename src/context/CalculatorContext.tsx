import React, { createContext, useState } from "react"

// Define the type for the context value
interface CalculatorContextType {
  // Add the properties and methods that your context will provide
  screenValue: string
  setScreenValue: React.Dispatch<React.SetStateAction<string>>
  toBeCalculatedString: string
  setToBeCalculatedString: React.Dispatch<React.SetStateAction<string>>
  theme: number
  setTheme: React.Dispatch<React.SetStateAction<number>>
}

// Create a default value for the context
const defaultValue: CalculatorContextType = {
  screenValue: "",
  setScreenValue: () => {},
  toBeCalculatedString: "",
  setToBeCalculatedString: () => {},
  theme: 1,
  setTheme: () => {},
}

// Create the context with the default value
export const CalculatorContext =
  createContext<CalculatorContextType>(defaultValue)

export const CalculatorProvider = ({ children }: { children: any }) => {
  const [screenValue, setScreenValue] = useState("")
  const [toBeCalculatedString, setToBeCalculatedString] = useState("")
  const [theme, setTheme] = useState(1)

  return (
    <CalculatorContext.Provider
      value={{
        screenValue: screenValue,
        setScreenValue: setScreenValue,
        toBeCalculatedString: toBeCalculatedString,
        setToBeCalculatedString: setToBeCalculatedString,
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}
