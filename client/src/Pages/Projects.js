import React from 'react';
import { projects } from '../data';

export default function Projects() {
    return (
      <section id="projects">
        <div>
          <div>
            <h1>
              My Work
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </p>
          </div>
          <div>
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                >
                <div>
                  <img
                    alt="image alt text"
                    src={project.image}
                  />
                  <div>
                    <h2>
                    {project.title}
                    </h2>
                    <h3>
                    {project.subtitle}
                    </h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }