const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`//这一段代码会将日期格式化为形如xxxx/xx/xx xx:xx:xx的格式
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`       //当字符串n仅一位时在前面补0
}                                 //这一段代码表示日期自动补0

module.exports = {
  formatTime//这一段代码表示，在引入该js文件时，传递到外界的变量
}
