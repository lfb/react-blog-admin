/**
 * 判断是否为对象
 *
 * @param obj
 * @returns {boolean}
 */
export const isObject = obj => {
  const isObj = Object.prototype.toString.call(obj) === '[object Object]'
  if (isObj) {
    return Object.keys(obj).length > 0
  }

  return isObj
}

/**
 * 判断是否为数组
 * @param arr
 * @returns {boolean}
 */
export const isArray = arr => {
  const isArr = Object.prototype.toString.call(arr) === '[object Array]'
  if (isArr) {
    return arr.length > 0
  }

  return isArr
}

// 只对键值对对象
export const cleanObject = object => {
  const result = Object.assign({}, object)

  function check(o) {
    Object.keys(o).forEach(key => {
      const value = o[key]
      if (isObject(value)) {
        check(value)
      }

      if (value == null || value === '' || Number.isNaN(value)) {
        delete o[key]
      }
    })
  }

  check(result)

  return result
}
