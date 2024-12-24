const Services = () => {
  const services = [
    {
      title: 'Data Advisory Services',
      description: 'Unlock the power of your data with our expert advisory services. We help you make informed decisions and drive growth through data-driven strategies.'
    },
    {
      title: 'Community Evangelism Development',
      description: 'Build and nurture thriving communities around your brand. Our strategies help you engage, grow, and leverage your community for sustainable success.'
    },
    {
      title: 'AI & ML Advisory',
      description: 'Navigate the complex world of Artificial Intelligence and Machine Learning. We provide tailored advice to integrate cutting-edge AI/ML solutions into your business.'
    }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

