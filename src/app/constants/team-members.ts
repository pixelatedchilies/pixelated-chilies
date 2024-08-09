export interface TeamMember {
  id: number;
  src: string;
  name: string;
  description: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    src: "https://pixelatedchilies.com/wp-content/uploads/2024/05/Gent-Gllareva.png",
    name: "Gent Gllareva",
    description: "Co-Founder 🚀",
  },
  {
    id: 2,
    src: "https://pixelatedchilies.com/wp-content/uploads/2024/05/Valdrin-Nishori.jpg",
    name: "Valdrin Nishori",
    description: "Co-Founder 🚀",
  },
  {
    id: 3,
    src: "https://pixelatedchilies.com/wp-content/uploads/2024/05/Plator-Gllareva-scaled.webp",
    name: "Plator Gllareva",
    description: "Co-Founder 🚀",
  },
];
