const _ = require('lodash')

// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) =>  {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 1) {
    return { title : blogs[0].title, author : blogs[0].author, likes : blogs[0].likes }
  }
  const reducer = (previous, current) => {
    return (previous.likes > current.likes) ?
      { title : previous.title, author : previous.author, likes : previous.likes } :
      { title : current.title, author : current.author, likes : current.likes }
  }

  return blogs.reduce(reducer)
}


const mostBlogs = (blogs) => {
  return _(blogs)
    .groupBy('author')
    .mapValues(entries => entries.length) // Count the number of blogs by taking the length of the entries
    .map((blogs, author) => ({ author, blogs })) // Use 'blogsCount' instead of 'likes'
    .maxBy('blogs') // Compare by 'blogsCount' instead of 'likes'
}

const mostLikes = (blogs) => {
  return _(blogs)
    .groupBy('author')
    .mapValues(entries => _.sumBy(entries,'likes'))
    .map((likes, author) => ({ author, likes }))
    .maxBy('likes')
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}