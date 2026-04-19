import InteriorWatermark from "@/components/InteriorWatermark";

export default function InteriorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <InteriorWatermark />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </>
  );
}
