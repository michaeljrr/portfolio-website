export interface Certification {
  name: string;
  issuer: string;
  credentialId?: string;
  issuedDate?: string;
  logo: string;
  logoWidth?: number;
  logoHeight?: number;
  inProgress: boolean;
}

export const certifications: Certification[] = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    credentialId: "45e197f9200c4d3c86db45bb22778664",
    issuedDate: "March 2026",
    logo: "/comptia.png",
    logoWidth: 180,
    logoHeight: 128,
    inProgress: false,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    logo: "/aws.png",
    logoWidth: 80,
    logoHeight: 128,
    inProgress: true,
  },
];

export default certifications;
