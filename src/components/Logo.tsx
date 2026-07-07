export function Logo({ compact = false }: { tone?: "dark" | "light"; compact?: boolean }) {
  return (
    <img
      src="/logo.png"
      alt="EquiRise Development Consulting"
      className={compact ? "h-9 w-auto" : "h-12 w-auto"}
    />
  );
}
