import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 rounded-lg hover:bg-accent transition-colors relative focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <Sun
        className={`h-5 w-5 transition-all duration-300 ${
          theme === "light" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ${
          theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-90"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}