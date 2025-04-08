// src/routes/external-chatbot.tsx

const ExternalChatbotPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 px-4 py-10">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-white">
          Chat with <span className="text-indigo-600">MockAI Assistant</span>
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Get real-time support, insights, and answers powered by AI.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto h-[70vh] md:aspect-video shadow-lg border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
        <iframe
          src="https://aichat-assistant.netlify.app"
          title="AI Chat Assistant"
          className="w-full h-full border-0"
          allow="microphone; camera"
        />
      </div>
    </main>
  );
};

export default ExternalChatbotPage;
