const AboutPage = () => {
  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-zinc-800 dark:text-white">
          About <span className="text-indigo-600">MockAI</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 text-center mb-8">
          MockAI is an AI-powered platform designed to simulate real-world technical interviews.
          Whether you're preparing for a job switch or your first role, MockAI helps you improve with
          intelligent sessions and personalized feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "AI-Powered Mock Interviews",
              desc: "Simulates realistic interview scenarios with advanced speech-to-text and NLP capabilities.",
            },
            {
              title: "Performance Analytics",
              desc: "Get detailed feedback on your communication, clarity, and problem-solving abilities.",
            },
            {
              title: "Real-Time Feedback",
              desc: "Get instant responses and correction suggestions while practicing.",
            },
            {
              title: "Customizable Sessions",
              desc: "Tailor your practice sessions based on job roles, domains, and difficulty levels.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
