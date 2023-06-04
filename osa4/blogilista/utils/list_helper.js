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
  const reducer = (previous, current) => {
    return (previous.likes > current.likes) ?
      { title : previous.title, author : previous.author, likes : previous.likes } :
      { title : current.title, author : current.author, likes : current.likes }
  }

  return blogs.reduce(reducer)
}

module.exports = {
  dummy, totalLikes, favoriteBlog
}