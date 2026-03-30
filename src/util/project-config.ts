
export type ProjectCategory = 'frontend' | 'automation';

export interface ProjectMapping {
    repoName: string;
    category: ProjectCategory;
    subcategory: string;
}

export const projectCategories = {
    automation: {
        title: 'Automation',
    },

    frontend: {
        title: 'Frontend',
    },
  
} as const;

export const projectMappings: ProjectMapping[] = [
    // Cypress
    { repoName: 'react_multistep_form', category: 'automation', subcategory: 'React + Cypress + CI/CD' },
    { repoName: 'cypress-intermediario-v2', category: 'automation', subcategory: 'Cypress' },
    { repoName: 'cypress-do-zero-a-nuvem', category: 'automation', subcategory: 'Cypress' },

    // Frontend
    { repoName: 'react_multistep_form', category: 'frontend', subcategory: 'React' },
    { repoName: 'react-imc-calculator', category: 'frontend', subcategory: 'React' },

    { repoName: 'box-shadow-generator', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'dev-notes-js', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'bmi-calculator-js', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'todo-list', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'lazy-load-js', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'iphone-page-clone', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'tabuada', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'qr-code-generator', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'newsletter-html-css', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'hdc-host-project', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' },
    { repoName: 'blog-semantico', category: 'frontend', subcategory: 'HTML + CSS + JavaScript' }

    //Postman
    
];
