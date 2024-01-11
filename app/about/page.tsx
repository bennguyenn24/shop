import Head from "next/head";

const page = () => {
  return (
    <div className="p-4 text-center">
      <div className="max-w-4xl p-4 bg-white rounded-lg shadow-lg mx-4 mb-8 sm:mr-8 sm:mb-0">
        <Head>
          <title>Steakhouse Society</title>
        </Head>
        <div className="max-w-4xl p-4 mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6">
            The Story of Steakhouse Society
          </h1>
          <div className="text-left mx-48">
          <p className="text-base sm:text-lg mb-4">
            Once upon a time, in the tranquil countryside of a small town, there
            lived a man named Philip the Doug. Born and raised on a sprawling
            farm, Philip developed a deep connection with the land and the
            bounties it offered. His childhood was filled with the fragrance of
            freshly plowed fields and the soothing sounds of babbling brooks.
            Growing up amidst the picturesque landscapes, he found solace in the
            simplicity of rural life. </p>
            <p className="text-base sm:text-lg mb-4">
            From a young age, Philip displayed an innate talent for agricultural
            pursuits and fishing. His days were spent cultivating the finest
            crops and nurturing the healthiest livestock. The farm&apos;s success was
            not only a testament to his hard work but also a reflection of his
            passion for providing people with the finest, most delectable
            produce.  </p>
            <p className="text-base sm:text-lg mb-4">
            As Philip matured, so did his ambitions. He envisioned a world where
            people from all corners could savor exceptional delicacies, each
            dish crafted with the utmost care and attention to detail. His dream
            was to bring the essence of the countryside to the plates of
            cosmopolitan diners. Philip aspired to share the treasures of his
            farm, from the succulent Dry Aged Ribeye to the luxurious Caviar and
            the marbled perfection of Japanese A5 Wagyu and many more. 
            </p>
            <p className="text-base sm:text-lg mb-4">
            The Steakhouse Society was born out of Philip&apos;s determination to
            transcend geographical boundaries and offer a unique culinary
            experience. He worked tirelessly to curate a menu that celebrated
            the richness of his farm&apos;s produce, bringing together flavors that
            captivated the taste buds and left a lasting impression on those
            fortunate enough to indulge. 
            </p>
            <p className="text-base sm:text-lg mb-4">
            But Philip knew that to truly share his vision with the world, he
            needed a digital presence that matched the excellence of his
            offerings. Enter Ben the Doug, Philip&apos;s tech-savvy brother, who had
            a knack for turning ideas into captivating online experiences.
            Recognizing the potential to showcase their culinary creations to a
            global audience, Ben set out to create a website that would not only
            mirror the rustic charm of the farm but also seamlessly facilitate
            e-commerce transactions. 
            </p>
            <p className="text-base sm:text-lg mb-4">
            For the Steakhouse Society&apos;s online platform, Ben chose Next.js 13
            as the foundation. Its flexibility and speed were crucial in
            delivering a smooth and immersive user experience. To handle the
            database, he opted for Supabase, leveraging its scalability and
            real-time capabilities. Prisma ORM extension was integrated to
            streamline database interactions, ensuring optimal performance and
            data integrity.
            </p>
            <p className="text-base sm:text-lg mb-4">
            
            The E-Commerce Store boasted a range of features that made it a
            gastronomic haven for online shoppers. Robust user authentication,
            detailed product pages, a user-friendly shopping cart, and a
            seamless checkout process with Stripe integration made the website a
            joy to navigate. 
            </p>
            <p className="text-base sm:text-lg mb-4">
            In the end, the collaboration between Philip the Doug&apos;s agricultural
            prowess and Ben the Doug&apos;s tech wizardry birthed an online haven for
            culinary enthusiasts. The Steakhouse Society&apos;s website became a
            gateway for patrons worldwide to embark on a gastronomic journey,
            experiencing the unparalleled flavors of the countryside, delivered
            to their doorstep with just a click. <br />
          </p>
          </div>
        </div>
        {/* E-Commerce Features */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-6">E-Commerce Features</h1>
        <ul className="list-disc ml-6 text-base mb-4">
          <p className="text-base sm:text-lg mb-4">• Robust user authentication for secure interactions.</p>
          <p className="text-base sm:text-lg mb-4">• Detailed product pages to showcase the culinary creations.</p>
          <p className="text-base sm:text-lg mb-4">
          • User-friendly shopping cart for a seamless shopping experience.
          </p>
          <p className="text-base sm:text-lg mb-4">
           • Checkout process with Stripe integration for smooth transactions.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default page;
