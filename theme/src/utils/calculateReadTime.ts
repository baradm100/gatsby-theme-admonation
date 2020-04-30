const WORDS_PER_MINUTE = 265
const wordCount = (str: string) => {
  return str
    .replace(/<[^>]*>?/gm, "")
    .split(" ")
    .filter((n) => n != "").length
}

const calculateReadTime = (post: any) => {
  const numberOfWords = wordCount(post.html)
  const numberOfImages = (post.html.match(/<img/g) || []).length

  const totalCalculatedWords = numberOfWords + numberOfImages * 100
  return Math.ceil(totalCalculatedWords / WORDS_PER_MINUTE)
}

export default calculateReadTime
