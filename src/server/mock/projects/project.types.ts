interface CompanyInfo {
  name: string;
  website: string;
}

interface ProjectInfo {
  achievements?: string[];
  role: string;
  technologiesUsed: string[];
  link: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  companyInfo: CompanyInfo;
  projectInfo: ProjectInfo;
}
