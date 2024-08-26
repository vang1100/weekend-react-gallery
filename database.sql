CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('books.jpg', 'Books', 'A book cafe'),
('food.jpg', 'Food!', 'What I ate in Vegas'),
('hawaii.jpg', 'Sunset', 'Aloha Maui');
  