import Image from 'next/image';

const experiences = [
    {
        company: 'Freelancing',
        role: 'Software Engineer',
        period: 'July 2022 - October 2024',
        logo: '/images/freelancing.png'
    },
    {
        company: 'Plaza Technologies',
        role: 'Backend Engineer',
        period: 'March 2022 - June 2022',
        logo: '/images/plaza.png'
    }
];

export default function Experience() {
  return (
    <section className="bg-background-light dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-text-light dark:text-text-dark">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={60}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">{exp.company}</h3>
                <p className="text-text-darkGrey dark:text-text-lightGrey">{exp.role}</p>
              </div>
              <div className="text-right text-text-darkGrey dark:text-text-lightGrey">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}