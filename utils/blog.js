import fileNames from '~/posts.json';

export function getBlogData() {
  const authors = {};

  async function asyncImport(fileName) {
    const post = await import(`~/blog/posts/${fileName}.md`);
    await getAuthors(post.attributes);
    return post.attributes;
  }

  async function getAuthors(post) {
    // If we don't already have a reference to the author, add it to the authors
    if (!authors[post.authorId]) {
      const author = await import(`~/blog/authors/${post.authorId}.md`);

      authors[post.authorId] = author.attributes;
    }

    post.author = authors[post.authorId];
  }

  return Promise.all(fileNames.map((fileName) => asyncImport(fileName))).then(
    (posts) => {
      const sortedPosts = posts.sort((post1, post2) => {
        if (post1.date > post2.date) {
          return -1;
        }

        if (post1.date < post2.date) {
          return 1;
        }

        return 0;
      });

      return { posts: sortedPosts };
    }
  );
}
