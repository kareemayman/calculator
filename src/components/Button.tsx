export default function Button({ value }: { value: string }) {
  return (
    <div
      className={`button ${
        value === "DEL" || value === "RESET"
          ? "special-button"
          : value === "="
          ? "equal-button"
          : ""
      }`}
    >
      {value}
    </div>
  )
}
