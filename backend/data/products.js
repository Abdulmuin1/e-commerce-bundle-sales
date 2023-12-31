const products = [
    {
        name: 'Sofa',
        category: 'Living Room',
        price: 799.99,
        countInStock: 5,
        rating: 4.5,
        numReviews: 10,
        image: '/images/image1.jpg',
        brand: 'brand name',
        tagNumber: 't-1',
        description: 'A comfortable and stylish sofa for your living room.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Dining Table and Chairs',
        category: 'Dining Room',
        price: 499.99,
        countInStock: 3,
        rating: 4.2,
        numReviews: 8,
        image: '/images/image2.jpg',
        brand: 'brand name',
        tagNumber: 't-2',
        description:
            'A modern dining table and chairs set for your dining area.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Bedframe and Mattress',
        category: 'Bedroom',
        price: 899.99,
        countInStock: 2,
        rating: 4.8,
        numReviews: 12,
        image: '/images/image3.jpg',
        brand: 'brand name',
        tagNumber: 't-3',
        description:
            "A comfortable bedframe and mattress for a good night's sleep.",
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Wardrobe',
        category: 'Bedroom',
        price: 599.99,
        countInStock: 4,
        rating: 4.4,
        numReviews: 9,
        image: '/images/image4.jpg',
        brand: 'brand name',
        tagNumber: 't-4',
        description: 'A spacious wardrobe to keep your clothes organized.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Coffee Table',
        category: 'Living Room',
        price: 199.99,
        countInStock: 6,
        rating: 4.3,
        numReviews: 7,
        image: '/images/image5.jpg',
        brand: 'brand name',
        tagNumber: 't-5',
        description: 'A stylish coffee table for your living room.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Bookshelf',
        category: 'Living Room',
        price: 299.99,
        countInStock: 3,
        rating: 4.6,
        numReviews: 10,
        image: '/images/image6.jpg',
        brand: 'brand name',
        tagNumber: 't-6',
        description:
            'A functional bookshelf to display your favorite books and decorations.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'TV Stand',
        category: 'Living Room',
        price: 349.99,
        countInStock: 5,
        rating: 4.2,
        numReviews: 8,
        image: '/images/image7.jpg',
        brand: 'brand name',
        tagNumber: 't-7',
        description:
            'A sturdy TV stand to hold your television and media devices.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Desk and Chair',
        category: 'Home Office',
        price: 299.99,
        countInStock: 4,
        rating: 4.5,
        numReviews: 12,
        image: '/images/image8.jpg',
        brand: 'brand name',
        tagNumber: 't-8',
        description: 'A comfortable desk and chair set for your home office.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Kitchen Table and Chairs',
        category: 'Kitchen',
        price: 449.99,
        countInStock: 3,
        rating: 4.3,
        numReviews: 9,
        image: '/images/image9.jpg',
        brand: 'brand name',
        tagNumber: 't-9',
        description:
            'A practical kitchen table and chairs set for your kitchen area.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Recliner Chair',
        category: 'Living Room',
        price: 399.99,
        countInStock: 2,
        rating: 4.7,
        numReviews: 11,
        image: '/images/image10.jpg',
        brand: 'brand name',
        tagNumber: 't-10',
        description:
            'A comfortable recliner chair to relax in your living room.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Bathroom Vanity',
        category: 'Bathroom',
        price: 599.99,
        countInStock: 3,
        rating: 4.4,
        numReviews: 7,
        image: '/images/image11.jpg',
        brand: 'brand name',
        tagNumber: 't-11',
        description: 'A stylish bathroom vanity for your bathroom.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Dresser',
        category: 'Bedroom',
        price: 349.99,
        countInStock: 5,
        rating: 4.2,
        numReviews: 8,
        image: '/images/image12.jpg',
        brand: 'brand name',
        tagNumber: 't-12',
        description:
            'A functional dresser to store your clothes and accessories.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Outdoor Dining Set',
        category: 'Outdoor Space',
        price: 799.99,
        countInStock: 4,
        rating: 4.6,
        numReviews: 10,
        image: '/images/image13.jpg',
        brand: 'brand name',
        tagNumber: 't-13',
        description: 'An outdoor dining set for your patio or garden.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Couch',
        category: 'Living Room',
        price: 699.99,
        countInStock: 5,
        rating: 4.3,
        numReviews: 9,
        image: '/images/image14.jpg',
        brand: 'brand name',
        tagNumber: 't-14',
        description: 'A stylish couch for your living room.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Office Chair',
        category: 'Home Office',
        price: 249.99,
        countInStock: 3,
        rating: 4.5,
        numReviews: 11,
        image: '/images/image15.jpg',
        brand: 'brand name',
        tagNumber: 't-15',
        description: 'A comfortable office chair for your home office.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Side Table',
        category: 'Living Room',
        price: 149.99,
        countInStock: 6,
        rating: 4.2,
        numReviews: 8,
        image: '/images/image16.jpg',
        brand: 'brand name',
        tagNumber: 't-16',
        description: 'A small and functional side table for your living room.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Nightstand',
        category: 'Bedroom',
        price: 99.99,
        countInStock: 4,
        rating: 4.4,
        numReviews: 7,
        image: '/images/image17.jpg',
        brand: 'brand name',
        tagNumber: 't-17',
        description: 'A nightstand to keep your essentials within reach.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Patio Set',
        category: 'Outdoor Space',
        price: 999.99,
        countInStock: 3,
        rating: 4.7,
        numReviews: 12,
        image: '/images/image18.jpg',
        brand: 'brand name',
        tagNumber: 't-18',
        description: 'A comfortable patio set for your outdoor space.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Bar Stools',
        category: 'Kitchen',
        price: 199.99,
        countInStock: 5,
        rating: 4.3,
        numReviews: 10,
        image: '/images/image19.jpg',
        brand: 'brand name',
        tagNumber: 't-19',
        description: 'Stylish bar stools for your kitchen counter or bar area.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Rocking Chair',
        category: 'Living Room',
        price: 179.99,
        countInStock: 2,
        rating: 4.5,
        numReviews: 8,
        image: '/images/image20.jpg',
        brand: 'brand name',
        tagNumber: 't-20',
        description:
            'A comfortable rocking chair for your living room or nursery.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Storage Bench',
        category: 'Living Room',
        price: 249.99,
        countInStock: 4,
        rating: 4.2,
        numReviews: 9,
        image: '/images/image21.jpg',
        brand: 'brand name',
        tagNumber: 't-21',
        description: 'A storage bench to keep your living room tidy.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Console Table',
        category: 'Living Room',
        price: 299.99,
        countInStock: 5,
        rating: 4.4,
        numReviews: 7,
        image: '/images/image22.jpg',
        brand: 'brand name',
        tagNumber: 't-22',
        description: 'A stylish console table for your living room or hallway.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Bunk Bed',
        category: 'Bedroom',
        price: 699.99,
        countInStock: 3,
        rating: 4.6,
        numReviews: 11,
        image: '/images/image23.jpg',
        brand: 'brand name',
        tagNumber: 't-23',
        description: 'A practical and space-saving bunk bed for your kids.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Filing Cabinet',
        category: 'Home Office',
        price: 199.99,
        countInStock: 2,
        rating: 4.3,
        numReviews: 9,
        image: '/images/image24.jpg',
        brand: 'brand name',
        tagNumber: 't-24',
        description:
            'A filing cabinet to keep your documents organized in your home office.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Dressing Table',
        category: 'Bedroom',
        price: 349.99,
        countInStock: 4,
        rating: 4.7,
        numReviews: 10,
        image: '/images/image25.jpg',
        brand: 'brand name',
        tagNumber: 't-25',
        description:
            'A dressing table with a mirror for your bedroom or dressing area.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Outdoor Lounge Chairs',
        category: 'Outdoor Space',
        price: 399.99,
        countInStock: 5,
        rating: 4.2,
        numReviews: 8,
        image: '/images/image26.jpg',
        brand: 'brand name',
        tagNumber: 't-26',
        description:
            'Comfortable outdoor lounge chairs for relaxing in your outdoor space.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Buffet Cabinet',
        category: 'Dining Room',
        price: 599.99,
        countInStock: 4,
        rating: 4.4,
        numReviews: 7,
        image: '/images/image27.jpg',
        brand: 'brand name',
        tagNumber: 't-27',
        description:
            'A buffet cabinet to store your dining essentials and display decorations.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Bar Cart',
        category: 'Living Room',
        price: 299.99,
        countInStock: 3,
        rating: 4.6,
        numReviews: 10,
        image: '/images/image28.jpg',
        brand: 'brand name',
        tagNumber: 't-28',
        description:
            'A stylish bar cart for serving drinks and storing barware.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Accent Chair',
        category: 'Living Room',
        price: 249.99,
        countInStock: 5,
        rating: 4.3,
        numReviews: 9,
        image: '/images/image29.jpg',
        brand: 'brand name',
        tagNumber: 't-29',
        description:
            'A stylish accent chair to add a pop of color to your living room.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Shoe Rack',
        category: 'Others',
        price: 149.99,
        countInStock: 6,
        rating: 4.5,
        numReviews: 11,
        image: '/images/image30.jpg',
        brand: 'brand name',
        tagNumber: 't-30',
        description: 'A shoe rack to keep your entryway organized.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Kids Desk and Chair',
        category: 'Bedroom',
        price: 199.99,
        countInStock: 4,
        rating: 4.2,
        numReviews: 8,
        image: '/images/image1.jpg',
        brand: 'brand name',
        tagNumber: 't-31',
        description: 'A desk and chair set designed for kids.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Crib',
        category: 'Bedroom',
        price: 399.99,
        countInStock: 3,
        rating: 4.4,
        numReviews: 7,
        image: '/images/image2.jpg',
        brand: 'brand name',
        tagNumber: 't-32',
        description: 'A comfortable and safe crib for your baby.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Bean Bag Chair',
        category: 'Living Room',
        price: 129.99,
        countInStock: 5,
        rating: 4.3,
        numReviews: 10,
        image: '/images/image3.jpg',
        brand: 'brand name',
        tagNumber: 't-33',
        description: 'A cozy bean bag chair for lounging in your living room.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Vanity Mirror',
        category: 'Bedroom',
        price: 99.99,
        countInStock: 4,
        rating: 4.5,
        numReviews: 9,
        image: '/images/image4.jpg',
        brand: 'brand name',
        tagNumber: 't-34',
        description: 'A vanity mirror for your makeup and grooming routine.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Pouf',
        category: 'Living Room',
        price: 79.99,
        countInStock: 6,
        rating: 4.2,
        numReviews: 8,
        image: '/images/image5.jpg',
        brand: 'brand name',
        tagNumber: 't-35',
        description:
            'A versatile pouf that can be used as a footrest or extra seating.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Floating Shelves',
        category: 'Living Room',
        price: 49.99,
        countInStock: 5,
        rating: 4.4,
        numReviews: 7,
        image: '/images/image6.jpg',
        brand: 'brand name',
        tagNumber: 't-36',
        description:
            'Floating shelves to display your favorite items on the wall.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Wall Clock',
        category: 'Living Room',
        price: 29.99,
        countInStock: 4,
        rating: 4.6,
        numReviews: 11,
        image: '/images/image7.jpg',
        brand: 'brand name',
        tagNumber: 't-37',
        description:
            'A decorative wall clock to add style to your living room.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Rug',
        category: 'Living Room',
        price: 99.99,
        countInStock: 3,
        rating: 4.3,
        numReviews: 9,
        image: '/images/image8.jpg',
        brand: 'brand name',
        tagNumber: 't-38',
        description: 'A soft and stylish rug to enhance your living room.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Bookshelf',
        category: 'Living Room',
        price: 299.99,
        countInStock: 5,
        rating: 4.5,
        numReviews: 10,
        image: '/images/image9.jpg',
        brand: 'brand name',
        tagNumber: 't-39',
        description: 'A bookshelf to display and organize your favorite books.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'TV Stand',
        category: 'Living Room',
        price: 199.99,
        countInStock: 6,
        rating: 4.2,
        numReviews: 8,
        image: '/images/image10.jpg',
        brand: 'brand name',
        tagNumber: 't-40',
        description: 'A stylish TV stand for your entertainment center.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Plant Stand',
        category: 'Living Room',
        price: 59.99,
        countInStock: 4,
        rating: 4.4,
        numReviews: 7,
        image: '/images/image11.jpg',
        brand: 'brand name',
        tagNumber: 't-41',
        description: 'A plant stand to display your favorite indoor plants.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Barbecue Grill',
        category: 'Outdoor Space',
        price: 499.99,
        countInStock: 3,
        rating: 4.6,
        numReviews: 11,
        image: '/images/image12.jpg',
        brand: 'brand name',
        tagNumber: 't-42',
        description: 'A barbecue grill for outdoor cooking and entertaining.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Chaise Lounge',
        category: 'Outdoor Space',
        price: 299.99,
        countInStock: 5,
        rating: 4.3,
        numReviews: 9,
        image: '/images/image13.jpg',
        brand: 'brand name',
        tagNumber: 't-43',
        description:
            'A comfortable chaise lounge for lounging by the pool or in the backyard.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Picnic Table',
        category: 'Outdoor Space',
        price: 199.99,
        countInStock: 6,
        rating: 4.5,
        numReviews: 10,
        image: '/images/image14.jpg',
        brand: 'brand name',
        tagNumber: 't-44',
        description: 'A picnic table for outdoor dining and gatherings.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Fire Pit',
        category: 'Outdoor Space',
        price: 249.99,
        countInStock: 4,
        rating: 4.2,
        numReviews: 8,
        image: '/images/image15.jpg',
        brand: 'brand name',
        tagNumber: 't-45',
        description:
            'A fire pit for creating a cozy and warm outdoor ambiance.',
        providerEmail: 'anesru@example.com',
    },
    {
        name: 'Garden Bench',
        category: 'Outdoor Space',
        price: 149.99,
        countInStock: 5,
        rating: 4.4,
        numReviews: 7,
        image: '/images/image16.jpg',
        brand: 'brand name',
        tagNumber: 't-46',
        description:
            'A garden bench for relaxing and enjoying your outdoor space.',
        providerEmail: 'kabebe@example.com',
    },
    {
        name: 'Desk Lamp',
        category: 'Home Office',
        price: 49.99,
        countInStock: 3,
        rating: 4.6,
        numReviews: 11,
        image: '/images/image17.jpg',
        brand: 'brand name',
        tagNumber: 't-47',
        description:
            'A desk lamp to provide task lighting in your home office.',
        providerEmail: 'anesru@example.com',
    },
];

export default products;
