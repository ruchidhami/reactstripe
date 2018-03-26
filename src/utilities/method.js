/**
 * Merge multiple object and convert the resulting object to string
 * @param {*} baseObject
 *  eg: { name: 'Elephant', height: '', age: 23, district: 'Parsa' }
 * @param {*} others 
 *  eg: [{country: 'nepal'}, {forest: 'Shrubland'}, {district: 'Chitwan', areacode: ''}]
 * @returns String
 *  eg: "name=Elephant&age=23&district=Chitwan&country=nepal&forest=Shrubland"
 */
export const objectsToString = function (baseObject, others) {
  let object = baseObject
  others.forEach((other) => {
    object = Object.assign({}, object, other)
  })
  const keys = Object.keys(object)
  return keys.filter(key => object[key]).map(key => `${key}=${object[key]}`).join('&')
}