export interface Project {
    slug: string;
    title: string;
    company: string;
    companyLogo: string;
    companyLogoClass: string;
    featured: boolean;
    heroImage: string;
    heroImageClass: string;

    references?: {
        text: string;
        url: string;
    }[];
}

export const projects: Project[] = [
    {
        slug: "integrated-pneumatic-module",
        title: "Integrated Pneumatic Module",
        company: "Flowserve",
        companyLogo: "/images/logos/flowserve.png",
        companyLogoClass: "project-flowserve-logo",
        featured: true,
        heroImage: "/images/projects/integrated-pneumatic-module/hero.jpg",
        heroImageClass: "hero-ipm",

                references: [
    {
        text: "Flowserve",
        url: "https://www.flowserve.com/"
    },
    {
        text: "BASF",
        url: "https://www.basf.com/global/en"
    },
    {
        text: "BASF's IPM: Simplifying automated valves",
        url: "https://valve-world.net/wp-content/uploads/sites/21/2022/04/BASF-IPM-simplifying-automated-valves.pdf"
    },
    {
        text: "Digitalization of automated valves",
        url: "https://valve-world-americas.com/basf-digitalization-of-automated-valves-is-progressing/"
    },
        ],
    },

    {
        slug: "ultrasonic-welding",
        title: "Implementation of Ultrasonic Welding",
        company: "Dekobo",
        companyLogo: "/images/logos/dekobo.png",
        companyLogoClass: "project-dekobo-logo",
        featured: true,
        heroImage: "/images/projects/ultrasonic-welding/hero.jpg",
        heroImageClass: "hero-ultrasonic",

        references: [
    {
        text: "Dekobo",
        url: "https://www.dekobo.es/en"
    },
    {
        text: "Sonic Italia",
        url: "https://sonicitalia.com/en/"
    },
    {
        text: "Fabotex",
        url: "https://fabotexitalia.com/en/"
    },
    {
        text: "Protolabs",
        url: "https://www.protolabs.com/"
    },
        ],
    },

    {
        slug: "scan-and-go-self-checkout-machine",
        title: "Scan & Go Self-Checkout Machine",
        company: "Matic",
        companyLogo: "/images/logos/matic.png",
        companyLogoClass: "project-matic-logo",
        featured: true,
        heroImage: "/images/projects/scan-and-go-self-checkout-machine/hero.jpg",
        heroImageClass: "hero-scan-go",

        references: [
    {
        text: "Matic",
        url: "https://matic.hu/"
    },
    {
        text: "Bizerba Supersmart S3",
        url: "https://www.bizerba.com/int/en/products/supersmart-s3"
    },
    {
        text: "Bizerba Supersmart S3 - Promotional video 1",
        url: "https://www.youtube.com/watch?v=frMWBfgVNb8"
    },
    {
        text: "Bizerba Supersmart S3 - Promotional video 2",
        url: "https://www.youtube.com/watch?v=1VREDGhUMtY"
    },
    {
        text: "Bizerba Supersmart S3 - Demonstration",
        url: "https://www.youtube.com/watch?v=uTpmb0ECRpM"
    }
        ],
    },

    {
        slug: "impeller-geometry-validation",
        title: "Impeller Geometry Validation",
        company: "Flowserve",
        companyLogo: "/images/logos/flowserve.png",
        companyLogoClass: "project-flowserve-logo",
        featured: false,
        heroImage: "/images/projects/impeller-geometry-validation/hero.jpg",
        heroImageClass: "hero-impeller-geometry",
    }, 

    {
        slug: "trunnion-mounted-ball-valve",
        title: "Trunnion Mounted Ball Valve",
        company: "Flowserve",
        companyLogo: "/images/logos/flowserve.png",
        companyLogoClass: "project-flowserve-logo",
        featured: false,
        heroImage: "/images/projects/trunnion-mounted-ball-valve/hero.jpg",
        heroImageClass: "hero-ball-valve",
    },

    {
        slug: "rack-and-pinion-pneumatic-actuator",
        title: "Rack & Pinion Pneumatic Actuator",
        company: "Flowserve",
        companyLogo: "/images/logos/flowserve.png",
        companyLogoClass: "project-flowserve-logo",
        featured: false,
        heroImage: "/images/projects/rack-and-pinion-pneumatic-actuator/hero.jpg",
        heroImageClass: "hero-rack-pinion",
    },

    {
        slug: "end-suction-water-pump",
        title: "End-Suction Water Pump",
        company: "Flowserve",
        companyLogo: "/images/logos/flowserve.png",
        companyLogoClass: "project-flowserve-logo",
        featured: false,
        heroImage: "/images/projects/end-suction-water-pump/hero.jpg",
        heroImageClass: "hero-end-suction",
    },

    {
        slug: "tube-laser-cutting-machine",
        title: "Tube Laser Cutting Machine",
        company: "Dekobo",
        companyLogo: "/images/logos/dekobo.png",
        companyLogoClass: "project-dekobo-logo",
        featured: false,
        heroImage: "/images/projects/tube-laser-cutting-machine/hero.jpg",
        heroImageClass: "hero-tube-laser",
    },

    {
        slug: "retractable-pool-cover",
        title: "Retractable Pool Cover",
        company: "Dekobo",
        companyLogo: "/images/logos/dekobo.png",
        companyLogoClass: "project-dekobo-logo",
        featured: false,
        heroImage: "/images/projects/retractable-pool-cover/hero.jpg",
        heroImageClass: "hero-pool-cover",
    },

    {
        slug: "exhibition-pool",
        title: "Exhibition Pool",
        company: "Dekobo",
        companyLogo: "/images/logos/dekobo.png",
        companyLogoClass: "project-dekobo-logo",
        featured: false,
        heroImage: "/images/projects/exhibition-pool/hero.jpg",
        heroImageClass: "hero-exhibition-pool",
    },

];