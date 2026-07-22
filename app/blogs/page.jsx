"use client";

import Title from "@/components/common/Title";
import DetailCard from "@/components/cards/DetailCard";

import { blogs } from "@/constants/blogs";
import { cardVariants } from "@/constants/variants";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <section>
        <Title
          pretitle="Our Blogs"
          header="Latest insights and trends"
          align="center"
        />
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={idx}
              >
                <DetailCard
                  variant="blog"
                  img={blog.img}
                  title={blog.title}
                  author={blog.author}
                  date={blog.date}
                  desc={blog.desc}
                  href={blog.href}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
