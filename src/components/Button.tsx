export default function Button({ value }: { value: string }) {
  return (
    <div
      className={`button ${
        value === "DEL" || value === "RESET"
          ? "special-button"
          : value === "="
          ? "equal-button"
          : /^[\d.]$/.test(value) ? "number-button" : "operator-button"
      }`}
    >
      {value}
    </div>
  )
}
