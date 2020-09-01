import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = React.useState([]);

  const addBlogPost = (newBlogPost) => {
    console.log(newBlogPost);

    setBlogPosts((prevValue) => {
      return [...prevValue, { title: newBlogPost }];
    });

    console.log(blogPosts);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {/* Buradaki children farklı bir react component i aslında. Custom bir component i böyle iki maddeli yazınca 
  ve arasına başka bir object koyunca. O objeyi o component a girdi olarak vermiş gibi oluyoruz.  */}
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
