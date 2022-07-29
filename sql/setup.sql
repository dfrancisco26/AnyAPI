-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists games;

CREATE table games (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    genre VARCHAR NOT NULL,
    platform VARCHAR NOT NULL,
    year_released INT NOT NULL,
    review VARCHAR
);

INSERT INTO games (name, genre, platform, year_released, review) VALUES
('Stray', 'Cat Simulator', 'Multiplatform', 2022, 'If you want to be a cat, this has a dedicated meow button. 10/10'),
('Final Fantasy Tactics', 'Strategy Role-Playing Game', 'Playstation', 1997, 'A tale of politics, magic, and loyalty. Plenty of strategy and customization, difficult gameplay. Also a 10/10. Notice a pattern?'),
('Legend of Zelda: Ocarina of Time', 'Action/Adventure', 'Nintendo 64', 1998, 'A classic adventure game that follows young Link through time to save Hyrule from Ganondorf. 10/10'),
('Hades', 'Action/Roguelite', 'Multiplatform', 2018, 'Tight gameplay and extensive dialogue between a cast of unforgettable characters makes for an extremely replayable game. 10/10'),
('Halo 3: ODST', 'First-Person Shooter', 'Xbox 360', 2009, 'Great gunplay, a sense of being human versus the supersoldier Master Chief brings a lot more danger. Firefight is a joy to play with friends, 10/10.'),
('The Legend of Dragoon', 'Role-Playing Game', 'Playstation', 1999, 'The search for revenge becomes an epic quest to save the world. Long story, amazing worldbuilding. My favorite game, 100/10.')