const ExternalResumeBuilderPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 p-6">
      <div className="max-w-6xl mx-auto mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white">
          Build Your Professional Resume with <span className="text-indigo-600">MockAI</span>
        </h1>
        <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-300">
          Launch the intuitive resume builder and create your resume effortlessly – no login required.
        </p>
      </div>

      <div className="w-full max-w-6xl aspect-[4/3] md:aspect-video shadow-lg border rounded-2xl overflow-hidden mx-auto">
        <iframe
          src="https://jumboduck.github.io/CV-Builder/"
          title="External Resume Builder"
          className="w-full h-full border-0"
        />
      </div>
    </main>
  )
}

export default ExternalResumeBuilderPage
