import React from 'react';
import Header from '../components/Header';
import ImageCarousel from '../components/ImageCarousel';
const images = [
    '/images/chef2.jpg',
    '/images/chef1.jpg',
    '/images/chef3.jpg',
    '/images/chef4.jpg'
];
function AboutPage() {
    return (
        <>
            <Header />
            <div className="about-container">
                <h1>Welcome to Little Lemon Restaurant</h1>

                <section className="about-section">
                    <h2>The Journey Begins</h2>
                    <p>In the heart of Chicago, two Italian brothers, Marco and Luca, brought their dream to life with the opening of Little Lemon Restaurant. Inspired by their rich culinary heritage and the vibrant flavors of their homeland, the brothers embarked on a journey to share their passion for authentic Italian cuisine. Their story begins in the quaint, sun-drenched villages of Italy, where they spent their childhood learning the art of cooking from their Nonna. With her recipes in hand and a shared vision, Marco and Luca set out to create an unforgettable dining experience.</p>
                </section>

                <section className="about-section">
                    <h2>A Taste of Italy in Chicago</h2>
                    <p>At Little Lemon Restaurant, the brothers' philosophy is simple: authentic flavors, fresh ingredients, and a warm, inviting atmosphere. Their menu is a delightful ode to Italian classics, reinventing traditional dishes with a contemporary twist. Every meal is a journey through Italy's diverse regions, from the rich, creamy risottos of the north to the zesty, seafood-infused pastas of the Mediterranean coast. The brothers' commitment to authenticity extends to their carefully curated wine list, featuring a selection of Italy's finest, perfectly paired with each dish.</p>
                </section>

                <section className="about-section">
                    <h2>The Little Lemon Experience</h2>
                    <p>What sets Little Lemon apart is not just the food, but the experience. Marco and Luca believe in creating a space where every visit feels like a celebration, a place where families and friends can gather to share moments and create memories. Their warm hospitality and attention to detail are evident in every corner of the restaurant, from the cozy, rustic décor to the open kitchen where guests can watch the magic happen. At Little Lemon, every meal is more than just a meal - it's an experience, a piece of Italy right in the heart of Chicago.</p>
                </section>
            </div>
            <ImageCarousel images={images} />
        </>
    );
}

export default AboutPage;
