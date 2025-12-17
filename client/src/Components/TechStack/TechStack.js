import React, { useEffect, useRef, useState } from "react";
import "./TechStack.css";
import { motion } from "framer-motion";
import { FiCopy, FiCheck } from "react-icons/fi";

const TechStack = () => {
  const [showMoreTechStack, setShowMoreTechStack] = useState(9);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const canvasRef = useRef(null);

  const data = [
    {
      name: "Git",
      url: "https://git-scm.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      snippet: "git commit -m 'feat: add'",
      description: "Version control system",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      snippet: "db.collection.find({})",
      description: "NoSQL database",
    },
    {
      name: "Express.js",
      url: "https://expressjs.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
      logoClass: "logo-white",
      snippet: "app.get('/api', (req, res) => {})",
      description: "Fast web framework",
    },
    {
      name: "React",
      url: "https://react.dev",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      snippet: "useState() & useEffect()",
      description: "UI component library",
    },
    {
      name: "Node.js",
      url: "https://nodejs.org",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      snippet: "const server = require('http')",
      description: "JavaScript runtime",
    },
    {
      name: "Java",
      url: "https://www.java.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      snippet: 'System.out.println("Hello");',
      description: "Enterprise-grade OOP",
    },
    {
      name: "Spring Boot",
      url: "https://spring.io/projects/spring-boot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      snippet: "@SpringBootApplication",
      description: "Production-ready apps",
    },
    {
      name: "Angular",
      url: "https://angular.io",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      snippet: "@Component({ })",
      description: "Full-featured framework",
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      snippet: "const data = await fetch(url)",
      description: "Web programming language",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      snippet: "interface User { id: number }",
      description: "Typed JavaScript",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      snippet: 'className="flex items-center"',
      description: "Utility-first CSS",
    },
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      snippet: 'className="container row"',
      description: "Popular CSS framework",
    },
    {
      name: "SQL",
      url: "https://www.mysql.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      snippet: "SELECT * FROM users WHERE",
      description: "Relational database",
    },
    {
      name: "Docker",
      url: "https://www.docker.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      snippet: "docker run -p 8080:80",
      description: "Containerization platform",
    },
    {
      name: "AWS",
      url: "https://aws.amazon.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      snippet: "aws s3 ls",
      description: "Cloud infrastructure",
    },
    {
      name: "Azure",
      url: "https://azure.microsoft.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      snippet: "az webapp create",
      description: "Microsoft cloud platform",
    },
    {
      name: "Vercel",
      url: "https://vercel.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
      logoClass: "logo-white",
      snippet: "vercel --prod",
      description: "Instant deployment",
    },
    {
      name: "Postman",
      url: "https://www.postman.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      snippet: "pm.test('Status 200')",
      description: "API testing tool",
    },
    {
      name: "Sentry",
      url: "https://sentry.io",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg",
      logoClass: "logo-white",
      snippet: "Sentry.captureException(err)",
      description: "Error tracking",
    },
    {
      name: "REST APIs",
      url: "https://restfulapi.net",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      snippet: "GET /api/users/:id",
      description: "Web service architecture",
    },
    {
      name: "Microservices",
      url: "https://microservices.io",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
      logoClass: "logo-white",
      snippet: "service.register('user')",
      description: "Distributed architecture",
    },
    {
      name: "VS Code",
      url: "https://code.visualstudio.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      snippet: "Ctrl+Shift+P",
      description: "Code editor",
    },
    {
      name: "IntelliJ IDEA",
      url: "https://www.jetbrains.com/idea/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      logoClass: "logo-white",
      snippet: "Alt+Enter // Quick Fix",
      description: "Java IDE",
    },
    {
      name: "GitHub",
      url: "https://github.com",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      logoClass: "logo-white",
      snippet: "git push origin main",
      description: "Code collaboration",
    },
  ];

  const colors = [
    "#F05032",
    "#47A248",
    "#10b981",
    "#61DAFB",
    "#68A063",
    "#FF6C37",
    "#6DB33F",
    "#DD0031",
    "#F7DF1E",
    "#3178C6",
    "#06B6D4",
    "#7952B3",
    "#4479A1",
    "#2496ED",
    "#FF9900",
    "#0078D4",
    "#f97316",
    "#FF6C37",
    "#362D59",
    "#f97316",
    "#8B5CF6",
    "#007ACC",
    "#000000",
    "#333333",
  ];

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  const copyToClipboard = async (text, index, e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // subtle particles in background, like Home/About
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();

    const particles = [];
    const count = 60;

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = Math.random() * 2 + 0.5;
        this.sx = (Math.random() - 0.5) * 0.2;
        this.sy = (Math.random() - 0.5) * 0.2;
        this.a = Math.random() * 0.4 + 0.15;
      }
      update() {
        this.x += this.sx;
        this.y += this.sy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(249, 115, 22, ${this.a})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) particles.push(new Particle());

    let id;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      id = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(id);
    };
  }, []);

  // code rain snippets (like home/about)
  const codeRainSnippets = [
    "const stack = ['Git','React'];",
    "while(true){ learn(); }",
    "app.listen(8080);",
    "SELECT * FROM skills;",
    "docker run dev-portfolio",
    "kubectl get pods",
  ];

  return (
    <section className="techstack-wrapper" id="techstack">
      {/* particles */}
      <canvas ref={canvasRef} className="techstack-particle-canvas" />

      {/* code rain left side */}
      <div className="techstack-code-rain">
        {codeRainSnippets.map((c, i) => (
          <div
            key={i}
            className="techstack-code-snippet"
            style={{
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${14 + i * 2}s`,
            }}
          >
            {c}
          </div>
        ))}
      </div>

      <div className="container techstack-section">
        <div className="section-title techstack-title">
          <h5>Tech Stack</h5>
          <span className="line" />
        </div>

        <div className="row">
          {data.slice(0, showMoreTechStack).map((item, index) => (
            <motion.div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-link"
              >
                <div className="tech-card-container">
                  {/* FRONT */}
                  <div className="tech-content tech-content-front">
                    <div className="tech-logo-bg">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className={`tech-logo-image ${item.logoClass || ""}`}
                        onError={(e) => {
                          e.target.style.opacity = "0.05";
                        }}
                      />
                    </div>

                    <span
                      className="tech-number"
                      style={{ backgroundColor: colors[index] }}
                    >
                      {index + 1}
                    </span>
                    <p className="tech-name">{item.name}</p>
                    <p className="tech-description">{item.description}</p>
                  </div>

                  {/* BACK */}
                  <div className="tech-content tech-content-back">
                    <div className="code-snippet-container">
                      <div className="code-header">
                        <div className="code-dots">
                          <span className="code-dot" />
                          <span className="code-dot" />
                          <span className="code-dot" />
                        </div>
                        <button
                          className="copy-button"
                          onClick={(e) => copyToClipboard(item.snippet, index, e)}
                          title="Copy code"
                        >
                          {copiedIndex === index ? (
                            <>
                              <FiCheck size={16} />
                              <span className="copy-text">Copied!</span>
                            </>
                          ) : (
                            <>
                              <FiCopy size={16} />
                              <span className="copy-text">Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="code-snippet-box">
                        <code>{item.snippet}</code>
                      </pre>

                      <p className="tech-name-back">{item.name}</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {showMoreTechStack < data.length && (
          <motion.span
            className="load-more-tech-stack"
            onClick={loadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More ({data.length - showMoreTechStack} more)
          </motion.span>
        )}
      </div>
    </section>
  );
};

export default TechStack;
