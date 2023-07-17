import bundle from './bundles.js';

const bundleCatagories = [
    {
        name: 'Latest',
        description: 'The latest in our website that you need to see',
        bundleNames: [
            bundle[1].designerEmail + bundle[1].name,
            bundle[4].designerEmail + bundle[4].name,
            bundle[2].designerEmail + bundle[2].name,
            bundle[0].designerEmail + bundle[0].name,
        ],
    },
    {
        name: 'Rustic Retreat Collection',
        description:
            'Bundles that include cozy and natural elements for a rustic-themed home.',
        bundleNames: [
            bundle[1].designerEmail + bundle[1].name,
            bundle[2].designerEmail + bundle[2].name,
            bundle[3].designerEmail + bundle[3].name,
            bundle[4].designerEmail + bundle[4].name,
        ],
    },
    {
        name: 'Urban Oasis Packages',
        description:
            'Bundles with urban-inspired furniture and decor for a trendy city dwelling.',
        bundleNames: [
            bundle[5].designerEmail + bundle[5].name,
            bundle[6].designerEmail + bundle[6].name,
            bundle[7].designerEmail + bundle[7].name,
            bundle[8].designerEmail + bundle[8].name,
        ],
    },
    {
        name: 'Coastal Serenity Sets',
        description:
            'Bundles that capture the calming essence of coastal living with beach-themed decor and furnishings.',
        bundleNames: [
            bundle[9].designerEmail + bundle[9].name,
            bundle[10].designerEmail + bundle[10].name,
            bundle[11].designerEmail + bundle[11].name,
            bundle[12].designerEmail + bundle[12].name,
        ],
    },
    {
        name: 'Minimalist Living Solutions',
        description:
            'Bundles catering to those who prefer a minimalist aesthetic with clean lines and essential items.',
        bundleNames: [
            bundle[13].designerEmail + bundle[13].name,
            bundle[14].designerEmail + bundle[14].name,
            bundle[15].designerEmail + bundle[15].name,
            bundle[16].designerEmail + bundle[16].name,
        ],
    },
    {
        name: 'Elegant Traditional Ensembles',
        description:
            'Bundles that encompass classic furniture pieces and timeless decor for a traditional home theme.',
        bundleNames: [
            bundle[17].designerEmail + bundle[17].name,
            bundle[18].designerEmail + bundle[18].name,
            bundle[19].designerEmail + bundle[19].name,
            bundle[20].designerEmail + bundle[20].name,
        ],
    },
    {
        name: 'Eclectic Fusion Assortments',
        description:
            'Bundles that combine various design styles and elements for a unique and eclectic home theme.',
        bundleNames: [
            bundle[21].designerEmail + bundle[21].name,
            bundle[22].designerEmail + bundle[22].name,
            bundle[0].designerEmail + bundle[0].name,
            bundle[1].designerEmail + bundle[1].name,
        ],
    },
    {
        name: 'Family-Friendly Collections',
        description:
            'Bundles that prioritize practicality and durability with kid-friendly furniture and versatile storage solutions.',
        bundleNames: [
            bundle[2].designerEmail + bundle[2].name,
            bundle[3].designerEmail + bundle[3].name,
            bundle[4].designerEmail + bundle[4].name,
            bundle[5].designerEmail + bundle[5].name,
        ],
    },
    {
        name: 'Smart Home Innovations',
        description:
            'Bundles incorporating smart home technology and devices for a modern and efficient living environment.',
        bundleNames: [
            bundle[6].designerEmail + bundle[6].name,
            bundle[7].designerEmail + bundle[7].name,
            bundle[8].designerEmail + bundle[8].name,
            bundle[9].designerEmail + bundle[9].name,
        ],
    },
];

export default bundleCatagories;
