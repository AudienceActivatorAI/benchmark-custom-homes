const R = "#C41E2A";

export default function Eyebrow({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  const c = color ?? R;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1.5rem",
      }}
    >
      <span
        style={{
          width: "2rem",
          height: "2px",
          backgroundColor: c,
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          color: c,
        }}
      >
        {children}
      </span>
    </div>
  );
}
