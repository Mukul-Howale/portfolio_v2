import Image from 'next/image';

const educations = [
  {
    institution: 'Masai School',
    degree: 'Backed Developer',
    period: '2021 - 2022',
    logo: '/images/masai.png'
  },
  {
    institution: 'A.G.High School',
    degree: "Higher Secondary",
    period: '2016 - 2017',
    logo: '/images/a.g.high.png'
  }
];

export default function Education() {
  return (
    <section className="mt-14 bg-background-light dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-text-light dark:text-text-dark">Education</h2>
        <div className="space-y-8">
          {educations.map((edu, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={60}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">{edu.institution}</h3>
                <p className="text-text-darkGrey dark:text-text-lightGrey">{edu.degree}</p>
              </div>
              <div className="text-right text-text-darkGrey dark:text-text-lightGrey">
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}