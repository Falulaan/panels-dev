export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/auth-bg.jpg')] bg-cover bg-center overflow-hidden"
        style={{
          filter: "blur(15px)",
          transform: "scale(1.07)", // Reduced scale to minimize overflow
        }}
      />
      <div className="relative flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
