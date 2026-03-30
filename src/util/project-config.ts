export type ProjectCategory = 'frontend' | 'automation';

export interface ProjectMapping {
  repoName: string;
  category: ProjectCategory;
  subcategory: string;
}

export const projectCategories = {
  automation: {
    title: 'QA e Testes Automatizados',
  },

  frontend: {
    title: 'Frontend',
  },
} as const;

export const projectMappings: ProjectMapping[] = [
  // Cypress
  {
    repoName: 'react-multistep-form',
    category: 'automation',
    subcategory: 'Cypress • Testes E2E • CI/CD',
  },
  {
    repoName: 'cypress-intermediario-v2',
    category: 'automation',
    subcategory: 'Cypress • Testes E2E • CI/CD',
  },
  {
    repoName: 'cypress-do-zero-a-nuvem',
    category: 'automation',
    subcategory: 'Cypress • Testes E2E • CI/CD',
  },

  // Frontend
  {
    repoName: 'react-multistep-form',
    category: 'frontend',
    subcategory: 'React',
  },
  {
    repoName: 'react-imc-calculator',
    category: 'frontend',
    subcategory: 'React',
  },

  {
    repoName: 'box-shadow-generator',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'dev-notes-js',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'bmi-calculator-js',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'todo-list',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'lazy-load-js',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'iphone-page-clone',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'tabuada',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'qr-code-generator',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'newsletter-html-css',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'hdc-host-project',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },
  {
    repoName: 'blog-semantico',
    category: 'frontend',
    subcategory: 'HTML • CSS • JavaScript',
  },

  //Postman
];
