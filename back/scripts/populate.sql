PRAGMA foreign_keys = ON;

CREATE TABLE users (
    name VARCHAR NOT NULL PRIMARY KEY,
    password VARCHAR NOT NULL,
    profile_pic VARCHAR NOT NULL,
    bank_number VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    country VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    night_mode BOOLEAN NOT NULL
);

CREATE TABLE categories (
    name VARCHAR NOT NULL PRIMARY KEY,
    icon VARCHAR NOT NULL
);

CREATE TABLE products (
    name VARCHAR NOT NULL PRIMARY KEY,
    price FLOAT NOT NULL,
    picture VARCHAR NOT NULL,
    brand VARCHAR NOT NULL,
    user_name VARCHAR NOT NULL REFERENCES users(name),
    category_name VARCHAR NOT NULL REFERENCES categories(name)
);

CREATE TABLE likes (
    user_name VARCHAR NOT NULL REFERENCES users(name),
    product_name VARCHAR NOT NULL REFERENCES products(name),
    PRIMARY KEY (user_name, product_name)
);

INSERT INTO users (
    name, 
    password, 
    profile_pic, 
    bank_number, 
    address, 
    country, 
    gender, 
    night_mode
) VALUES (
    'Ida Larsen',
    'hover',
    'https://randomuser.me/api/portraits/women/63.jpg',
    '2847384701',
    '1534 Syrenvaenget, Askeby',
    'Denmark',
    'F',
    FALSE
), (
    'Mirko Laue',
    'keller',
    'https://randomuser.me/api/portraits/men/28.jpg',
    '2309459754',
    '7840 Blumenstrasse, Floha',
    'Germany',
    'M',
    FALSE
), (
    'Montserrat Sanchez',
    'science',
    'https://randomuser.me/api/portraits/women/52.jpg',
    '8374637389',
    '7769, Calle Covadonga',
    'Spain',
    'F',
    FALSE
);

INSERT INTO categories (
    name,
    icon
) VALUES (
    'Clothes',
    'https://img.icons8.com/color/48/000000/t-shirt.png'
), (
    'Accessories',
    'https://img.icons8.com/color/48/000000/red-purse.png'
), (
    'Shoes',
    'https://img.icons8.com/color/48/000000/womens-shoe.png'
);

INSERT INTO products (
    name,
    price,
    picture,
    brand,
    user_name,
    category_name
) VALUES (
    'Robe poppeline stradivarius Doublée neuve étiquetée',
    15,
    'https://images.vinted.net/thumbs/f800/00_07383_gwNHheu55JZaZYBnrYdU4r3q.jpeg?1591453147-87c319bb97b32d8e94c945ef566e6675dd173351',
    'Stradivarius',
    'Ida Larsen',
    'Clothes'
), (
    'Robe longue zara jamais porté encore avec l''étiquette',
    10,
    'https://images.vinted.net/thumbs/f800/00_066cc_ZDjioBPtz6Ku3zstWKYS95gh.jpeg?1591453458-32716cc87fa62c623c64892447e9965fe7d9b359',
    'Zara',
    'Ida Larsen',
    'Clothes'
), (
    'Robe style desigual hiver',
    4,
    'https://images.vinted.net/thumbs/f800/027f9_tGd3DaLevbdMtgXKt2g1muLH.jpeg?1571578452-c8d49f623578be8004fd9917880823e857c926e0',
    'Frime Paris',
    'Montserrat Sanchez',
    'Clothes'
), (
    'Bottines cuir nubuck marine',
    13,
    'https://images.vinted.net/thumbs/f800/05c1f_gKgPmJ1BvMKH6Wdq2tQ419Gy.jpeg?1580839970-d96ea4cac8ff1e51f778322c285d85de70f79c77',
    'Eram',
    'Montserrat Sanchez',
    'Shoes'
), (
    'Adidas ZX 2K Boost',
    230,
    'https://images.vinted.net/thumbs/f800/00_05195_ktTKeeaxrCp8GMywiKcGXhKL.jpeg?1591279040-3099b78e7e53265a8b0b54e0a9a9fba5cb9402da',
    'Adidas',
    'Mirko Laue',
    'Shoes'
), (
    'Calvin Klein',
    74,
    'https://images.vinted.net/thumbs/f800/00_05242_F6SA2ZBA97WCHKUJ35yhHjAJ.jpeg?1591048276-d212ea0aed2efaaab7b980e463853cd6d819c43e',
    'Clavin Klein',
    'Mirko Laue',
    'Shoes'
), (
    'Magnifique porte monnaie Louis Vuitton',
    250,
    'https://images.vinted.net/thumbs/f800/00_05fc4_hHMgF3Uyu5RS8jBbFD5nhsjj.jpeg?1591449138-cb83538cd125b63024d1b33fabbc9e3e8901c1ba',
    'Louis Vuitton',
    'Ida Larsen',
    'Accessories'
), (
    'Bague en argent et turquoise cabochon t55 neuve',
    20,
    'https://images.vinted.net/thumbs/f800/00_06e12_p79u327gf4CeBQa6me7FvJ8s.jpeg?1591335513-0d179bc3347e232bf39f1eb7b0f1b86b2761f85b',
    'Independent',
    'Ida Larsen',
    'Accessories'
), (
    'Magnifique montre rings quartz femme pink gold',
    12,
    'https://images.vinted.net/thumbs/f800/00_05893_M2cUyzSC7Sw3PqNdQ4Sm6SYH.jpeg?1591366093-ec9187eaca3e5522a43861b58e0768f0feb98570',
    'Melody',
    'Montserrat Sanchez',
    'Accessories'
);

INSERT INTO likes (
    user_name,
    product_name
) VALUES (
    'Ida Larsen',
    'Magnifique montre rings quartz femme pink gold'
);
