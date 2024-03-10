interface CompanyInfo {
  name: string;
  website: string;
  stackUsed: string[];
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
  image: string;
  companyInfo: CompanyInfo;
  projectInfo: ProjectInfo;
}
