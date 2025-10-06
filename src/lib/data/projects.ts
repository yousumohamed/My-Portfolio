export interface Project {
    title: string;
    description: string;
    image: string; // Path to the image in the 'static' folder
    tags: string[];
    githubUrl?: string; // Optional link
    liveUrl?: string;   // Optional link
}

export const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description: 'The very website you are looking at. Built with SvelteKit, Tailwind CSS, and TypeScript. Deployed on Vercel.',
        image: '/ezgif-8735ea063a736b.png',
        tags: ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        githubUrl: '#',
        liveUrl: 'https://josevault.netlify.app/'
    },
    {
        title: 'E-commerce Platform',
        description: 'A modern, full-featured e-commerce site with product listings, a shopping cart, and a checkout process.',
        image: '/Shamala.jpg',
        tags: ['Next.js', 'Stripe', 'GraphQL', 'PostgreSQL'],
        githubUrl: '#',
        liveUrl: 'https://josevault.netlify.app/'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management tool with features like boards, lists, and cards, inspired by Trello.',
        image: '/PR shamil.jpg',
        tags: ['React', 'Firebase', 'Material UI'],
        githubUrl: '#',
        liveUrl: 'https://josevault.netlify.app/'
    }
];