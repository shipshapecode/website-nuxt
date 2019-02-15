module.exports = {
  content: {
    anchorLevel: 0,
    isPost: false,
    page: '/blog/_post',
    permalink: '/blog/:slug',
    generate: [
      'get',
      'getAll'
    ]
  },

  api: function(isStatic) {
    return {
      baseURL: 'http://localhost:3000',
      browserBaseURL: isStatic ? 'https://nuxtent-example.netlify.com' : ''
    };
  }
};
