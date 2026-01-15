export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center pt-16 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Definition-of-leadership-top-image.webp)',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            BOH4 Culminating: Leadership Portfolio
          </h1>
          <p className="text-2xl md:text-3xl text-white font-medium drop-shadow-lg">
            Ferdinand Zhang
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Entries Card */}
          <a
            href="/entries"
            id="entries"
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-mt-20 cursor-pointer block"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Entries</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Explore my leadership journey through detailed entries documenting key experiences, challenges, and insights.
            </p>
          </a>

          {/* Scrapbook Card */}
          <a
            href="/scrapbook"
            id="scrapbook"
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-mt-20 cursor-pointer block"
          >
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Scrapbook</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              A collection of resources for my leadership development and growth.
            </p>
          </a>

          {/* Growth Plan Card */}
          <a
            href="/growth-plan"
            id="growth-plan"
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-mt-20 cursor-pointer block"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Growth Plan</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My strategic roadmap for continued leadership development, goals, and aspirations for the future.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}

