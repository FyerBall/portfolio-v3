export const addhttp = (link) => {
  if (!/^(?:f|ht)tps?\:\/\//.test(link)) {
    link = 'http://' + link
  }

  return link
}
