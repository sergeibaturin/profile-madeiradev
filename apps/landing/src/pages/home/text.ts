interface ProcessStep {
    id: number;
    title: string;
    description: string;
}

interface ProcessContent {
    sectionTitle: string;
    billingNote: string;
    steps: ProcessStep[];
}

export const text: ProcessContent = {
    sectionTitle: "[ How I Work ]",
    billingNote: "To ensure we are a perfect fit, the formal onboarding process and billing begin only after our initial discovery call.",
    steps: [
        {
            id: 1,
            title: "Discovery Call",
            description: "We kick off with a brief consultation to discuss your project, alignment, and goals. This is a no-obligation call to see how I can best support your business."
        },
        {
            id: 2,
            title: "Secure Infrastructure Onboarding",
            description: "Once we agree to move forward, you grant me secure access to your codebase and cloud infrastructure. I strictly follow industry best practices to ensure data privacy and security from day one."
        },
        {
            id: 3,
            title: "Codebase Audit",
            description: "I perform a deep dive into your existing repository to evaluate code quality, architecture, and technical debt, ensuring a solid foundation for future scaling."
        },
        {
            id: 4,
            title: "Security Assessment",
            description: "I conduct a thorough security audit to identify vulnerabilities, outdated dependencies, and potential risks in your current setup."
        },
        {
            id: 5,
            title: "Requirements Gathering & Refinement",
            description: "We work closely together to map out your technical needs. I clarify ambiguities and translate your business goals into precise, actionable technical requirements."
        },
        {
            id: 6,
            title: "Roadmap Creation",
            description: "I deliver a comprehensive project roadmap, complete with clear milestones, timelines, and deliverables, so you know exactly what to expect."
        },
        {
            id: 7,
            title: "Feature Development & Delivery",
            description: "I transition into full development mode, engineering robust features and delivering them in clean, well-tested, and iterative cycles."
        }
    ]
};