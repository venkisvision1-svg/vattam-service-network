import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VATTAM Service Network | Home</title>
        <meta name="description" content="Professional multi-service booking platform" />
      </Head>

      <main className="min-h-screen bg-darker">
        {/* Navigation */}
        <nav className="bg-dark border-b border-accent/20">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">VATTAM</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-white hover:text-primary transition">Login</button>
              <button className="px-4 py-2 bg-primary text-black rounded hover:bg-accent transition">Book Now</button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-dark to-darker py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-4">Professional Services at Your Doorstep</h2>
            <p className="text-xl text-gray-300 mb-8">AC Service • CCTV • Plumbing • Electrician & More</p>
            <button className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-accent transition text-lg">
              Browse Services
            </button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['AC Service', 'CCTV Installation', 'Plumbing', 'Electrician', 'Fridge Repair', 'Washing Machine'].map((service) => (
                <div key={service} className="bg-surface p-6 rounded-lg hover:border-primary border border-gray-700 transition cursor-pointer">
                  <h4 className="text-xl font-bold text-primary mb-2">{service}</h4>
                  <p className="text-gray-400">Professional {service.toLowerCase()} services</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home