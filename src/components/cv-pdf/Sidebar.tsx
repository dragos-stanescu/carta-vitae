import { View, Image, StyleSheet } from "@react-pdf/renderer";
import { PdfText } from "./PdfText";
import { SidebarPanel } from "./SidebarPanel";
import { SkillItem } from "./SkillItem";
import { ContactItem } from "./ContactItem";
import {
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  LinkedInIcon,
} from "./ContactIcons";
import type { CvData } from "../../data/types";

interface SidebarProps {
  contact: CvData["contact"];
  skills: CvData["skills"];
  education: CvData["education"];
}

export function Sidebar({ contact, skills, education }: SidebarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} src="/images/profile-1.jpg" />
      </View>

      <SidebarPanel title="Contact">
        <ContactItem
          icon={<PhoneIcon />}
          text={contact.phone}
          link={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
        />
        <ContactItem
          icon={<EmailIcon />}
          text={contact.email}
          link={`mailto:${contact.email}`}
        />
        <ContactItem icon={<LocationIcon />} text={contact.location} />
        <ContactItem
          icon={<LinkedInIcon />}
          text={contact.linkedin.label}
          link={contact.linkedin.url}
        />
      </SidebarPanel>

      <SidebarPanel title="Skills">
        {skills.map((skill) => (
          <SkillItem key={skill.category} category={skill.category} skills={skill.skills} />
        ))}
      </SidebarPanel>

      <SidebarPanel title="Education">
        <PdfText contrast bold>
          {education.institution}
        </PdfText>
        <PdfText contrast>{education.degree}</PdfText>
        <PdfText contrast>
          {education.location}, {education.period}
        </PdfText>
      </SidebarPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202A44",
    width: "35%",
  },
  profilePictureContainer: {
    width: "93%",
    marginHorizontal: "auto",
    marginBottom: 15,
  },
  profilePicture: {
    borderRadius: 9999,
  },
});
