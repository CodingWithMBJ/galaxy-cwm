const About = () => {
  return (
    <article className="content">
      <section
        title="A bit about me"
        className="max-sm:max-w-xl md:max-w-6xl mx-auto"
      >
        <h2 className={`text-2xl font-semibold py-2`}>About Me</h2>

        <p className={`mb-3 `}>
          I’m a front-end developer who specializes in building clean,
          responsive, and user-focused interfaces. I enjoy turning ideas and
          designs into polished, accessible experiences that feel fast and
          intuitive.
        </p>

        <p className={``}>
          Most of my work is centered around React, modern JavaScript, and tools
          like Vite and Tailwind CSS. I have working knowledge of backend
          systems with Node.js and APIs, which helps me collaborate effectively
          and build complete, real-world applications. I’m always refining my
          fundamentals and shipping projects that push my skills forward.
        </p>
      </section>
    </article>
  );
};

export default About;
