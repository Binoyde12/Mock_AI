const services = [
  {
    title: "Mock Technical & HR Interviews",
    description:
      "Experience realistic mock interviews tailored to your desired job roles. Practice confidently with HR and technical formats.",
  },
  {
    title: "AI-Based Feedback & Scoring",
    description:
      "Leverage AI to get objective scores, actionable tips, and breakdowns of your performance across multiple dimensions.",
  },
  {
    title: "Role-Based Question Banks",
    description:
      "Access a growing library of questions categorized by roles, skills, and difficulty — from junior dev to senior engineer.",
  },
  {
    title: "Detailed Performance Insights",
    description:
      "Visualize your progress, identify strengths and gaps, and track improvements over time with comprehensive reports.",
  },
];

const ServicesPage = () => {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-8 rounded-3xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-zinc-900 dark:text-white">
          What <span className="text-indigo-600">MockAI</span> Offers
        </h1>
        <div className="relative border-l-4 ml-4 space-y-10">
           <div className="absolute -left-3.5 top-1 w-6 h-6 rounded-full bg-orange-500 border-4 border-white dark:border-zinc-900" />
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-1">
                  1 Interview Preparation
                      </h3>
            <div className="relative border-l-4 border-indigo-500 ml-4 space-y-10">
              {services.map((service, index) => (
                <div key={index} className="pl-6 relative">
                  <div className="absolute -left-3.5 top-1 w-6 h-6 rounded-full bg-indigo-500 border-4 border-white dark:border-zinc-900" />
                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-1">
                    {index + 1}. {service.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
      </div>
      
      <div className="relative border-l-4 ml-4 space-y-10">
        <div className="absolute -left-3.5 top-1 w-6 h-6 rounded-full bg-orange-500 border-4 border-white dark:border-zinc-900" />
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-1">
          2 AI Assistant
        </h3>
      </div>
      <div className="relative border-l-4 ml-4 space-y-10">
        <div className="absolute -left-3.5 top-1 w-6 h-6 rounded-full bg-orange-500 border-4 border-white dark:border-zinc-900" />
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-1">
           3 Resume Building
        </h3>
     </div>

      </div>
    </section>
  );
};

export default ServicesPage;
