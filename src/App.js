import { useEffect } from 'react';
import { Briefcase, Wrench, GraduationCap, Download } from 'lucide-react';

export default function ResumeSite() {
  useEffect(() => {
    document.title = 'Vivek Karunamoorthy | DevOps & Middleware Engineer';
  }, []);

  return (
    <div className="bg-gray-950 text-white font-sans">
      <header className="text-center p-10 animate-fadeInUp">
        <h1 className="text-4xl font-bold">👨‍💻 Vivek Karunamoorthy</h1>
        <p className="text-gray-400 mt-2">DevOps & Middleware Specialist | Azure | Terraform | CI/CD</p>
        <p className="mt-4 text-sm text-gray-500">
          📧 Vivek.karunamoorthy@gmail.com | 📱 +91 9840673696
        </p>
        <a
          href="/Vivek_Resume.pdf"
          download
          className="mt-6 inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition"
        >
          <Download className="w-4 h-4 mr-2" /> Download Resume
        </a>
      </header>

      <main className="max-w-4xl mx-auto px-6 animate-fadeInUp">
        {/* Work Experience */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6 flex items-center">
            <Briefcase className="w-5 h-5 mr-2 text-blue-400" /> Work Experience
          </h2>
          <WorkExperience />
        </section>

        {/* Skills */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4 flex items-center">
            <Wrench className="w-5 h-5 mr-2 text-green-400" /> Technical Skills
          </h2>
          <Skills />
        </section>

        {/* Education */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-4 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2 text-yellow-400" /> Education & Certifications
          </h2>
          <Education />
        </section>

        <footer className="text-center text-sm text-gray-500 mt-16 mb-8">
          © 2025 Vivek Karunamoorthy ·{' '}
          <a href="mailto:Vivek.karunamoorthy@gmail.com" className="text-blue-400 hover:underline">Email</a>
        </footer>
      </main>
    </div>
  );
}

function WorkExperience() {
  const experiences = [
    {
      date: 'Jan 2022 – Present',
      role: 'Infra Technology Specialist @ Cognizant',
      items: [
        'CI/CD using Azure DevOps with Classic Editor',
        'Azure services: VMs, App Services, Key Vaults, VNETs',
        'S3 buckets, SSL renewal, Terraform-based IaC',
        'PowerShell scripting & GitHub integrations',
      ],
      color: 'blue',
    },
    {
      date: 'Jul 2018 – Dec 2021',
      role: 'Module Lead @ Mindtree Ltd',
      items: [
        'Automated Jenkins deployments with Ansible',
        '24x7 prod support for Apache Tomcat, WebSphere',
        'WCS migration, Clustering, Patch upgrades',
      ],
      color: 'green',
    },
  ];

  return experiences.map(({ date, role, items, color }, index) => (
    <div key={index} className="mb-10">
      <div className="flex items-center mb-1">
        <span className={`bg-${color}-600 text-sm px-2 py-1 rounded-full mr-3`}>{date}</span>
        <h3 className="text-xl font-bold">{role}</h3>
      </div>
      <ul className="list-disc ml-6 text-sm text-gray-300 mt-2 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  ));
}

function Skills() {
  const skills = [
    'Azure DevOps', 'Terraform', 'WebSphere', 'Tomcat',
    'Ansible', 'Jenkins', 'PowerShell', 'GitHub', 'AWS S3'
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-300">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-800 p-3 rounded-xl text-center">{skill}</div>
      ))}
    </div>
  );
}

function Education() {
  const items = [
    'MSc Computer Science – Madras University (2018–2020)',
    'BSc Computer Science – Madras University (2008–2011)',
    'Azure Administrator AZ-104, Azure DevOps AZ-400',
    'IBM WebSphere V8.5, IBM AIX 7.0, ITIL V3 Foundation'
  ];

  return (
    <ul className="list-disc ml-6 text-sm text-gray-300 space-y-1">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
