Add resume header and summary
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10 text-gray-900">
      <section className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
        <header className="border-b border-gray-200 pb-6 text-center">
          <h1 className="text-4xl font-bold">Sohil Desai</h1>
          <p className="mt-2 text-gray-600">Tampa, FL • LinkedIn</p>
          <p className="mt-4 text-gray-700">
            Information Assurance & Cybersecurity Management student with experience in customer service,
            automotive sales, motorsports operations, and technology-driven environments.
          </p>
        </header>
        <section className="mt-6">
  <h2 className="text-xl font-semibold uppercase tracking-wide">Education</h2>

  <div className="mt-3 space-y-3">
    <div>
      <h3 className="font-semibold">University of South Florida</h3>
      <p className="text-gray-700">
        Pursuing Bachelor of Science in Information Assurance & Cybersecurity Management
      </p>
      <p className="text-sm text-gray-500">Tampa, FL • 08/25–Present</p>
    </div>

    <div>
      <h3 className="font-semibold">Hillsborough Community College</h3>
      <p className="text-gray-700">
        Associate of Arts concentrating in Information Technology
      </p>
      <p className="text-sm text-gray-500">Brandon, FL • 08/23–05/25</p>
    </div>
  </div>
</section>
      </section>
    </main>
  );
}
