import type { NextPage } from 'next'
import Head from 'next/head'

const CustomerDashboard: NextPage = () => {
  const bookings = [
    {
      id: '1',
      service: 'AC Service',
      date: '2025-06-01',
      time: '10:00 AM',
      technician: 'Arjun Singh',
      status: 'accepted',
    },
  ]

  const profile = {
    name: 'Rajesh Kumar',
    phone: '9876543210',
    email: 'rajesh@gmail.com',
  }

  return (
    <>
      <Head>
        <title>My Dashboard | VATTAM</title>
      </Head>

      <div className="min-h-screen bg-darker">
        {/* Header */}
        <div className="bg-dark border-b border-accent/20 p-6">
          <h1 className="text-3xl font-bold text-primary">My Dashboard</h1>
          <p className="text-gray-400 mt-1">{profile.name}</p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-primary mb-4">Profile</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-white font-semibold">{profile.name}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">{profile.phone}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">{profile.email}</p>
                </div>
                <button className="w-full bg-primary text-black font-bold py-2 rounded hover:bg-accent transition mt-4">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Bookings List */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-primary mb-6">My Bookings</h3>
              {bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map(booking => (
                    <div key={booking.id} className="bg-dark p-4 rounded border border-gray-700">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-primary">{booking.service}</h4>
                          <p className="text-gray-400 text-sm">Technician: {booking.technician}</p>
                        </div>
                        <span className="bg-blue-900/20 text-blue-300 px-3 py-1 rounded text-sm font-medium">
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">📅 Date</p>
                          <p className="text-white">{booking.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">⏰ Time</p>
                          <p className="text-white">{booking.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">No bookings yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerDashboard