const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description:
        "Identify the right blockchain solutions with a tailored strategy for implementation.",
    },
    {
      title: "Custom Development",
      description:
        "Build secure and scalable blockchain applications, including smart contracts and dApps.",
    },
    {
      title: "Security Audits",
      description:
        "Conduct rigorous audits to ensure the safety of your assets and data.",
    },
    {
      title: "System Integration",
      description:
        "Seamlessly integrate blockchain into your existing infrastructure with minimal disruption.",
    },
    {
      title: "Training & Education",
      description:
        "Equip your team with knowledge to manage and utilize blockchain solutions effectively.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/30 to-transparent blur-3xl opacity-50" />
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Unlock the Power of Blockchain
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide cutting-edge blockchain solutions designed to enhance
          security, efficiency, and scalability.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.05]"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
