import React from 'react';

const Skill = ({ name }) => (
  <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold m-1 inline-block">
    {name}
  </span>
);

export default function Skills() {
  const skills = [
    'Java', 'Spring-Boot', 'HTML', 'CSS', 'Javascript', 'Postgres', 'Docker',
    'Kubernetes', 'kafka', 'Keycloak', 'Prometheus', 'Grafana', 'Loki',
    'Redis', 'MongoDB', 'Eureka', 'Zipkin', 'Resilience4j', 'Flyway', 'Git'
  ];

  return (
    <section className="bg-background-light dark:bg-background-dark max-w-2xl mx-auto mt-16">
      <div className="mx-auto px-4">
        <h2 className="text-xl font-bold mb-8 text-center text-text-light dark:text-text-dark">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <Skill key={index} name={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}