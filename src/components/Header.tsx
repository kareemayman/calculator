import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header>
        <h1>calc</h1>

        <div className="theme-selector">
            <p>THEME</p>
            <ThemeToggle></ThemeToggle>
        </div>
    </header>
  )
}
