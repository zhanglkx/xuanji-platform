/**
 * 封装一个函数：获取当前时间
 */
export const getHourTime = () => {
  let message = ''
  //   通过内置的构造函数data获取小时
  const hours = new Date().getHours()
  if (hours <= 9) {
    message = '早上！'
  } else if (hours <= 12) {
    message = '上午'
  } else if (hours < 14) {
    message = '中午'
  } else if (hours < 18) {
    message = '下午'
  } else if (hours < 18) {
    message = '晚上'
  } else {
    message = '凌晨'
  }
  return message
}
