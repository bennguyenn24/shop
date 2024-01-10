import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div className="p-4 text-center">
      <div className="max-w-4xl p-4 bg-white rounded-lg shadow-lg mx-4 mb-8 sm:mr-8 sm:mb-0">
        <Head>
          <title>Steakhouse Society</title>
        </Head>
        <div className="max-w-4xl p-4 mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            The Story of Steakhouse Society
          </h1>
          <p className="text-base sm:text-lg mb-4">
            Once upon a time, in the tranquil countryside of a small town, there
            lived a man named Philip the Doug. Born and raised on a sprawling
            farm, Philip developed a deep connection with the land and the
            bounties it offered. His childhood was filled with the fragrance of
            freshly plowed fields and the soothing sounds of babbling brooks.
            Growing up amidst the picturesque landscapes, he found solace in the
            simplicity of rural life. <br />
            From a young age, Philip displayed an innate talent for agricultural
            pursuits and fishing. His days were spent cultivating the finest
            crops and nurturing the healthiest livestock. The farm's success was
            not only a testament to his hard work but also a reflection of his
            passion for providing people with the finest, most delectable
            produce. <br />
            As Philip matured, so did his ambitions. He envisioned a world where
            people from all corners could savor exceptional delicacies, each
            dish crafted with the utmost care and attention to detail. His dream
            was to bring the essence of the countryside to the plates of
            cosmopolitan diners. Philip aspired to share the treasures of his
            farm, from the succulent Dry Aged RibEye to the luxurious Caviar and
            the marbled perfection of Japanese A5 Wagyu. <br />
            The Steakhouse Society was born out of Philip's determination to
            transcend geographical boundaries and offer a unique culinary
            experience. He worked tirelessly to curate a menu that celebrated
            the richness of his farm's produce, bringing together flavors that
            captivated the taste buds and left a lasting impression on those
            fortunate enough to indulge. <br />
            But Philip knew that to truly share his vision with the world, he
            needed a digital presence that matched the excellence of his
            offerings. Enter Ben the Doug, Philip's tech-savvy brother, who had
            a knack for turning ideas into captivating online experiences.
            Recognizing the potential to showcase their culinary creations to a
            global audience, Ben set out to create a website that would not only
            mirror the rustic charm of the farm but also seamlessly facilitate
            e-commerce transactions. <br />
            For the Steakhouse Society's online platform, Ben chose Next.js 13
            as the foundation. Its flexibility and speed were crucial in
            delivering a smooth and immersive user experience. To handle the
            database, he opted for Supabase, leveraging its scalability and
            real-time capabilities. Prisma ORM extension was integrated to
            streamline database interactions, ensuring optimal performance and
            data integrity.
            <br />
            The E-Commerce Store boasted a range of features that made it a
            gastronomic haven for online shoppers. Robust user authentication,
            detailed product pages, a user-friendly shopping cart, and a
            seamless checkout process with Stripe integration made the website a
            joy to navigate. <br />
            In the end, the collaboration between Philip the Doug's agricultural
            prowess and Ben the Doug's tech wizardry birthed an online haven for
            culinary enthusiasts. The Steakhouse Society's website became a
            gateway for patrons worldwide to embark on a gastronomic journey,
            experiencing the unparalleled flavors of the countryside, delivered
            to their doorstep with just a click. <br />
          </p>
        </div>
        {/* E-Commerce Features */}
        <h2 className="text-xl font-bold mb-4">E-Commerce Features</h2>
        <ul className="list-disc ml-6 text-base mb-4">
          <li>Robust user authentication for secure interactions.</li>
          <li>Detailed product pages to showcase the culinary creations.</li>
          <li>
            User-friendly shopping cart for a seamless shopping experience.
          </li>
          <li>
            Checkout process with Stripe integration for smooth transactions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
