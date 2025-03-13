import Link from "next/link"

export default function AllScreensPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Panteras Calendar - All Screens</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-4">Login Screen</h2>
          <p className="text-gray-600 mb-4">Initial login screen with Google authentication</p>
          <Link href="/" className="text-blue-600 hover:underline">
            View Screen
          </Link>
        </div>

        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-4">Menu Screen</h2>
          <p className="text-gray-600 mb-4">Menu with profile and sign out options</p>
          <Link href="/menu" className="text-blue-600 hover:underline">
            View Screen
          </Link>
        </div>

        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-4">Profile Screen</h2>
          <p className="text-gray-600 mb-4">User profile with personal information</p>
          <Link href="/profile" className="text-blue-600 hover:underline">
            View Screen
          </Link>
        </div>

        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-4">Main Menu Screen</h2>
          <p className="text-gray-600 mb-4">Main menu with navigation options</p>
          <Link href="/main-menu" className="text-blue-600 hover:underline">
            View Screen
          </Link>
        </div>

        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold mb-4">Dashboard/Event Screen</h2>
          <p className="text-gray-600 mb-4">Calendar dashboard with event creation</p>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            View Screen
          </Link>
        </div>
      </div>
    </div>
  )
}

