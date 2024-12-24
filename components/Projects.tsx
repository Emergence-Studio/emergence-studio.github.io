const Projects = () => {
  const projects = [
    {
      title: "Community-Driven Growth Platform",
      description: "A comprehensive platform for building and managing digital communities.",
      status: "In Development"
    },
    {
      title: "AI Advisory Framework",
      description: "Strategic framework for implementing AI solutions in enterprises.",
      status: "Active"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Custom analytics dashboard for community metrics tracking.",
      status: "Active"
    }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4 text-purple-200">{project.description}</p>
            <span className="inline-block px-3 py-1 rounded-full bg-purple-600 text-sm">
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

