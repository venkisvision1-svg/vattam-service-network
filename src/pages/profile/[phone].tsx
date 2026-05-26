import type { NextPage } from 'next'
import Head from 'next/head'
import QRCode from 'qrcode.react'

const QRBusinessProfile: NextPage = () => {
  const profileData = {
    name: 'Arjun Singh',
    service: 'AC Service Specialist',
    phone: '9123456789',
    rating: 4.8,
    reviews: 156,
    yearsExperience: 8,
    completedJobs: 450,
  }

  const qrUrl = `https://vattam.app/profile/${profileData.phone}`

  return (
    <>
      <Head>
        <title>QR Business Profile | VATTAM</title>
      </Head>

      <div className="min-h-screen bg-darker">
        {/* Profile Section */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-surface rounded-lg border border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent h-32"></div>

            {/* Main Content */}
            <div className="px-6 py-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Profile Info */}
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-primary mb-2">{profileData.name}</h1>
                  <p className="text-gray-300 text-lg mb-4">{profileData.service}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-dark p-4 rounded">
                      <p className="text-gray-400 text-sm">Rating</p>
                      <p className="text-2xl font-bold text-yellow-500">⭐ {profileData.rating}</p>
                      <p className="text-gray-500 text-xs">{profileData.reviews} reviews</p>
                    </div>
                    <div className="bg-dark p-4 rounded">
                      <p className="text-gray-400 text-sm">Experience</p>
                      <p className="text-2xl font-bold text-primary">{profileData.yearsExperience} Years</p>
                    </div>
                    <div className="bg-dark p-4 rounded col-span-2">
                      <p className="text-gray-400 text-sm">Completed Jobs</p>
                      <p className="text-2xl font-bold text-green-500">{profileData.completedJobs}+</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="bg-dark p-4 rounded mb-6">
                    <p className="text-gray-400 text-sm mb-2">Contact</p>
                    <p className="text-white font-semibold">📞 {profileData.phone}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 bg-primary text-black font-bold py-3 rounded hover:bg-accent transition">
                      Book Service
                    </button>
                    <button className="flex-1 bg-dark text-primary border border-primary font-bold py-3 rounded hover:bg-primary/10 transition">
                      View Reviews
                    </button>
                  </div>
                </div>

                {/* Right: QR Code */}
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-white p-6 rounded-lg mb-4">
                    <QRCode value={qrUrl} size={256} level="H" />
                  </div>
                  <p className="text-gray-400 text-center text-sm">Scan to view full profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Services Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['AC Installation', 'AC Maintenance', 'AC Repair', 'Emergency Service'].map(service => (
                <div key={service} className="bg-surface p-4 rounded border border-gray-700 hover:border-primary transition">
                  <p className="text-white font-semibold">✓ {service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 bg-surface rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-primary mb-4">Share Your Profile</h3>
            <div className="flex gap-4">
              <button className="flex-1 bg-primary text-black font-bold py-2 rounded hover:bg-accent transition">
                📱 WhatsApp
              </button>
              <button className="flex-1 bg-primary text-black font-bold py-2 rounded hover:bg-accent transition">
                📧 Email
              </button>
              <button className="flex-1 bg-primary text-black font-bold py-2 rounded hover:bg-accent transition">
                🔗 Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QRBusinessProfile