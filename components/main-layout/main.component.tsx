export function Main({ children }: { children: React.ReactNode }) {
return (
    <main className="flex-1">
      <div className="py-6">
        <div className="px-4 max-w-7xl sm:px-6 md:px-8">
          <div className="py-4">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
