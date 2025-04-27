-- Use the database `uwb_acm_hackathon`
\c uwb_acm_hackathon;

-- Create the table for storing webpage data
CREATE TABLE IF NOT EXISTS webpage_data (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    explanation TEXT NOT NULL,
    google_trends_image TEXT NOT NULL,
    sample_image_1 TEXT NOT NULL,
    sample_image_2 TEXT NOT NULL,
    sample_image_3 TEXT NOT NULL,
    sample_image_4 TEXT NOT NULL,
    organization_link TEXT NOT NULL,
    sample_link_1 TEXT NOT NULL,
    sample_link_2 TEXT NOT NULL
);

-- Insert a sample entry into the table
INSERT INTO webpage_data (
    title, explanation, google_trends_image, sample_image_1, sample_image_2, sample_image_3, sample_image_4, organization_link, sample_link_1, sample_link_2
) VALUES (
    'Water Bucket Challenge',
    'A movement to raise awareness about water conservation.',
    './src/assets/istockphoto-112156275-612x612.jpg',
    './src/assets/Aurelytics Logo Light.png',
    './src/assets/Aurelytics Logo Dark.png',
    './src/assets/react.svg',
    './src/assets/picnic-group.webp',
    'https://example.com/organization',
    'https://example.com/sample-link-1',
    'https://example.com/sample-link-2'
);