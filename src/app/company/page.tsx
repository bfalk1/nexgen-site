"use client";

import Image from "next/image";

const managementTeam = [
  { 
    name: "Leigh R. Curyer", 
    title: "Chief Executive Officer & Director", 
    image: "https://s28.q4cdn.com/891672792/files/images/exec/NexGenLeighCuryer089-WEB.jpg" 
  },
  { 
    name: "Travis G. McPherson", 
    title: "President", 
    image: "https://s28.q4cdn.com/891672792/files/images/management/nexgen-travismcpherson0011_websmall2.jpg" 
  },
  { 
    name: "Benjamin Salter", 
    title: "Chief Financial Officer", 
    image: "https://s28.q4cdn.com/891672792/files/images/project_leadership/BenSalter013-WEBsmall.jpg" 
  },
  { 
    name: "Graeme Johnson", 
    title: "VP, Project Development", 
    image: "https://s28.q4cdn.com/891672792/files/images/exec/Graeme-Johnson-2-1.jpg" 
  },
  { 
    name: "Luke Moger", 
    title: "VP, Exploration", 
    image: "https://s28.q4cdn.com/891672792/files/images/project/NexGenLukeMoger086-WEB.jpg" 
  },
  { 
    name: "Monica Kras", 
    title: "VP, Regulatory & Indigenous Affairs", 
    image: "https://s28.q4cdn.com/891672792/files/images/project_leadership/Monkia-Kras.jpg" 
  },
  { 
    name: "Mary Fraser", 
    title: "VP, Corporate Services", 
    image: "https://s28.q4cdn.com/891672792/files/images/exec/NexGenMaryFraser065-WEB.jpg" 
  },
  { 
    name: "Adam Engdahl", 
    title: "VP, Engineering", 
    image: "https://s28.q4cdn.com/891672792/files/images/project_leadership/Adam-Engdahl.jpg" 
  },
];

const projectLeadership = [
  { 
    name: "Michelle Cho", 
    title: "Director, Environment", 
    image: "https://s28.q4cdn.com/891672792/files/images/project_leadership/michellecho0008-print_web.jpg" 
  },
  { 
    name: "Dylan Smart", 
    title: "Director, Indigenous & Community Relations", 
    image: "https://s28.q4cdn.com/891672792/files/images/2023/06/Dylan-Smart-1.png" 
  },
  { 
    name: "Jason Craven", 
    title: "Director, Health & Safety", 
    image: "https://s28.q4cdn.com/891672792/files/images/project_leadership/Jason-Craven.jpg" 
  },
];

const boardMembers = [
  { 
    name: "Christopher McFadden", 
    title: "Chairman", 
    image: "https://s28.q4cdn.com/891672792/files/images/board/Update-Chris-McFadden.jpg" 
  },
  { 
    name: "Richard Patricio", 
    title: "Director", 
    image: "https://s28.q4cdn.com/891672792/files/images/board/Update-Richard.jpg" 
  },
  { 
    name: "Sharon Birkett", 
    title: "Director", 
    image: "https://s28.q4cdn.com/891672792/files/images/board/2025/Sharon-Birkett.jpeg" 
  },
  { 
    name: "Warren Gilman", 
    title: "Director", 
    image: "https://s28.q4cdn.com/891672792/files/images/board/Update-Warren-Gilman.jpg" 
  },
  { 
    name: "Sybil Veenman", 
    title: "Director", 
    image: "https://s28.q4cdn.com/891672792/files/images/board/181024_Nexgen_Sybil_0058-c_2_1-1.png" 
  },
  { 
    name: "Karri Howlett", 
    title: "Director", 
    image: "https://s28.q4cdn.com/891672792/files/images/board/181024_Nexgen-Karri_0040-c_2_1-1.png" 
  },
  { 
    name: "Brad Wall", 
    title: "Director", 
    image: "https://s28.q4cdn.com/891672792/files/images/board/brad-wall-website.jpg" 
  },
  { 
    name: "Ivan Mullany", 
    title: "Director", 
    image: "https://s28.q4cdn.com/891672792/files/images/board/Ivan-Mullany.jpg" 
  },
  { 
    name: "Simon Allard", 
    title: "Director", 
    image: "https://s28.q4cdn.com/891672792/files/images/board/SimAllard28.jpg" 
  },
];

function PersonCard({ person }: { person: { name: string; title: string; image: string } }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="aspect-square relative bg-gray-100">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-[#001F48] text-lg">{person.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{person.title}</p>
      </div>
    </div>
  );
}

export default function CompanyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#001F48] text-white py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-light mb-6">About NexGen</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            NexGen Energy Ltd. is a Canadian uranium development company focused on delivering 
            clean energy fuel for the future.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                NexGen Energy Ltd. is a Canadian company focused on delivering clean energy fuel through 
                the development and operation of the Rook I Project in the Athabasca Basin, Saskatchewan.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our flagship Rook I Project is home to Arrow, the largest development-stage high-grade 
                uranium deposit in the world. NexGen is committed to setting new standards in environmental 
                stewardship and community engagement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe nuclear energy is essential to the global clean energy transition, and we are 
                positioned to be a leading supplier of uranium to fuel this future.
              </p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-[#001F48] mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To develop world-class uranium projects that deliver lasting benefits for our stakeholders, 
                communities, and the environment while contributing to global clean energy goals.
              </p>
              <h3 className="text-xl font-semibold text-[#001F48] mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#77bc1f] mt-1">✓</span>
                  Environmental Excellence
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#77bc1f] mt-1">✓</span>
                  Community Partnership
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#77bc1f] mt-1">✓</span>
                  Safety First
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#77bc1f] mt-1">✓</span>
                  Transparency & Integrity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section id="management-team" className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-12 text-center">Management Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Leadership */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-12 text-center">Project Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
            {projectLeadership.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section id="board-of-directors" className="py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-12 text-center">Board of Directors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section id="corporate-governance" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-light text-[#001F48] mb-8">Corporate Governance</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            NexGen is committed to maintaining the highest standards of corporate governance. 
            Our governance framework ensures accountability, transparency, and ethical business practices.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] p-6 rounded-lg">
              <h3 className="font-semibold text-[#001F48] mb-3">Board Committees</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Audit Committee</li>
                <li>• Compensation Committee</li>
                <li>• Corporate Governance Committee</li>
                <li>• Health, Safety & Environment Committee</li>
              </ul>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-lg">
              <h3 className="font-semibold text-[#001F48] mb-3">Policies</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Code of Business Conduct</li>
                <li>• Anti-Corruption Policy</li>
                <li>• Whistleblower Policy</li>
                <li>• Diversity Policy</li>
              </ul>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-lg">
              <h3 className="font-semibold text-[#001F48] mb-3">Documents</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Articles of Incorporation</li>
                <li>• By-Laws</li>
                <li>• Board Mandate</li>
                <li>• Committee Charters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
