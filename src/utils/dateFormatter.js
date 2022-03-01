export const dateFormatter = (unixDate) => {
  const minutes = unixDate.getMinutes().toString().length < 2  ? `0${unixDate.getMinutes()}` : unixDate.getMinutes()
  let hours = unixDate.getHours() + unixDate.getTimezoneOffset() / 60
  hours = unixDate.getHours().toString().length < 2  ? `0${unixDate.getHours()}` : hours
  return `${hours}:${minutes}`
}
