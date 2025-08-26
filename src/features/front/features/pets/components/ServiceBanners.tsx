export function ServiceBanners() {
  const banners = [
    {
      bg: "bg-orange-500",
      icon: "📊",
      title: "we heal pets",
      desc: "quick veterinary services",
    },
    {
      bg: "bg-yellow-500",
      icon: "🛡️",
      title: "we care pets",
      desc: "pet sheltering & adoption",
    },
    {
      bg: "bg-purple-600",
      icon: "❤️",
      title: "we love pets",
      desc: "show love & donate us",
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {banners.map((b, i) => (
            <div
              key={i}
              className={`${b.bg} text-white p-6 rounded-lg flex items-center gap-4`}
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">{b.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm opacity-90">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
