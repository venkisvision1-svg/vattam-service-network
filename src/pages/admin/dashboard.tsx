import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'

const AdminDashboard: NextPage = () => {
  const [bookings, setBookings] = useState([
    {
      id: '1',
      service: 'AC Service',
      customer: 'Rajesh Kumar',
      date: '2025-06-01',
      status: 'pending',
    },
    {
      id: '2',
      service: 'Plumbing',
      customer: 'Priya Singh',
      date: '2025-06-02',
      status: 'accepted',
    },
  ])

  const handleStatusChange = (id: string, newStatus: string) => {
    setBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, status: newStatus } : b))
    )
  }

  const stats = {
    totalBookings: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    completed: bookings.filter(b => b.status === 'completed').length,
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard | VATTAM</title>
      </Head>

      <div className="min-h-screen bg-darker">
        {/* Header */}
        <div className="bg-dark border-b border-accent/20 p-6">
          <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm">Total Bookings</p>
            <p className="text-4xl font-bold text-primary mt-2">{stats.totalBookings}</p>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm">Pending</p>
            <p className="text-4xl font-bold text-yellow-500 mt-2">{stats.pending}</p>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm">Completed</p>
            <p className="text-4xl font-bold text-green-500 mt-2">{stats.completed}</p>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="max-w-7xl mx-auto p-6">
          <div className="bg-surface rounded-lg border border-gray-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-dark border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-300">Service</th>
                  <th className="px-6 py-4 text-left text-gray-300">Customer</th>
                  <th className="px-6 py-4 text-left text-gray-300">Date</th>
                  <th className="px-6 py-4 text-left text-gray-300">Status</th>
                  <th className="px-6 py-4 text-left text-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr key={booking.id} className="border-b border-gray-700 hover:bg-dark/50">
                    <td className="px-6 py-4 text-white">{booking.service}</td>
                    <td className="px-6 py-4 text-white">{booking.customer}</td>
                    <td className="px-6 py-4 text-gray-300">{booking.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded text-sm font-medium ${
                        booking.status === 'pending' ? 'bg-yellow-900/20 text-yellow-300' :
                        booking.status === 'accepted' ? 'bg-blue-900/20 text-blue-300' :
                        'bg-green-900/20 text-green-300'
                      }`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={booking.status}
                        onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                        className="bg-dark border border-gray-600 text-white px-3 py-1 rounded text-sm"
                      >
                        <option value="pending">Pending</option>
                        <option value="accepted">Accepted</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard