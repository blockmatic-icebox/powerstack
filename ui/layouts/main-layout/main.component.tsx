export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="max-w-7xl px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl font-semibold text-gray-900">Main</h2>
        </div>
        <div className="max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">{children}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
