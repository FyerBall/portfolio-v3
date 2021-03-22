export const openWindow = (link) => {
  console.log(link)
  // Open window in another tab using Link from RRD
  // ? If you do not include "http://" or "https://" before the link, the default behavior is to append the link onto the current domain, so if you're opening an external link, be sure to include the http/s.
  window.open(`http://${link}`, '_blank')
}
