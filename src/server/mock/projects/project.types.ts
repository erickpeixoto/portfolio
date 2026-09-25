interface CompanyInfo {
  name: string;
  website?: string;
}

interface ProjectInfo {
  achievements?: string[];
  role: string;
  technologiesUsed: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  companyInfo: CompanyInfo;
  projectInfo: ProjectInfo;
  /** Problem → role → stack & AI → result, shown on the card and detail page. */
  period?: string;
  problem?: string;
  ai?: string[];
  result?: string;
  tag?: "AI product" | "Client work";
  /** Shown under the images, e.g. when a screen is an illustration. */
  imageNote?: string;
}
