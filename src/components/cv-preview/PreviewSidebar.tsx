import type { CvData } from "../../data/types";


interface PreviewSidebarProps {
  contact: CvData["contact"];
  skills: CvData["skills"];
  education: CvData["education"];
}

export function PreviewSidebar({
  contact,
  skills,
  education,
}: PreviewSidebarProps) {
  return (
    <aside className="w-[35%] bg-[#202A44] text-white p-6 flex flex-col gap-6">
      <img
        src="/images/profile-1.jpg"
        alt="Profile"
        className="w-full rounded-full"
      />
      <SidebarSection title="Contact">
        <ContactLine label={contact.phone} href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} />
        <ContactLine label={contact.email} href={`mailto:${contact.email}`} />
        <ContactLine label={contact.location} />
        <ContactLine label={contact.linkedin.label} href={contact.linkedin.url} />
      </SidebarSection>

      <SidebarSection title="Skills">
        {skills.map((skill) => (
          <div key={skill.category} className="mb-2">
            <p className="text-xs font-bold">{skill.category}</p>
            <p className="text-xs text-white/70">{skill.skills.join(", ")}</p>
          </div>
        ))}
      </SidebarSection>

      <SidebarSection title="Education">
        <p className="text-sm font-bold">{education.institution}</p>
        <p className="text-sm">{education.degree}</p>
        <p className="text-sm">{education.location}, {education.period}</p>
      </SidebarSection>
    </aside>
  );
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="uppercase text-sm font-bold tracking-wide pb-2 mb-3 border-b border-gray-500">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ContactLine({ label, href }: { label: string; href?: string }) {
  return (
    <p className="text-sm mb-1">
      {href ? (
        <a href={href} className="hover:underline">
          {label}
        </a>
      ) : (
        label
      )}
    </p>
  );
}
