// src/components/Blog.js
import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="p-8 text-gray-100 bg-gray-900">
      <h2 className="text-2xl font-bold text-center">Blog</h2>
      <div className="mt-8 max-w-3xl mx-auto">
        {/* Blog Post 1 */}
        <article className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="/path-to-your-image1.jpg"
            alt="Blog Post 1"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Understanding React Hooks</h3>
          <p className="mt-2">
            Dive deep into the world of React Hooks and learn how they simplify state management and
            side effects in functional components.
          </p>
          <a href="/blog/react-hooks" className="text-blue-400 hover:underline">
            Read More
          </a>
        </article>

        {/* Blog Post 2 */}
        <article className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="/path-to-your-image2.jpg"
            alt="Blog Post 2"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4">CSS Grid vs Flexbox</h3>
          <p className="mt-2">
            Explore the differences between CSS Grid and Flexbox, and understand when to use each
            for responsive design and layout.
          </p>
          <a href="/blog/css-grid-vs-flexbox" className="text-blue-400 hover:underline">
            Read More
          </a>
        </article>

        {/* Blog Post 3 */}
        <article className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="/path-to-your-image3.jpg"
            alt="Blog Post 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Introduction to TypeScript</h3>
          <p className="mt-2">
            Discover the benefits of using TypeScript in your JavaScript projects and how it can
            improve your development workflow.
          </p>
          <a href="/blog/introduction-to-typescript" className="text-blue-400 hover:underline">
            Read More
          </a>
        </article>
      </div>
    </section>
  );
};

export default Blog;
