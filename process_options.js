const fs = require('fs')

const lines = fs.readFileSync('./options.txt').toString().split('\n')

let categories = {}
let category = ''


lines.forEach(line => {
  const segments = line.split(' ')
  console.log(segments)
  if (segments[0] === 'Category:') {
    category = segments[1]
    categories[category] = {}
    return
  } else if (segments === ['']) {
    return
  } else {
    if (segments[0] === '') return
    let instance = {}

    instance.cores = segments[1]
    instance.ecu = segments[2]
    instance.mem = segments[3]
    instance.munit = segments[4]
    instance.cost = segments[segments.length - 4]

    const storage = segments.slice(5, segments.length -4)
    let stype

    switch (storage[storage.length -1]) {
      case 'Only':
        stype = 'EBS'
        break
      case 'SSD':
        stype = 'SSD'
        break
      case 'HDD':
        stype = 'HDD'
        break
    }

    let snum

    switch (storage[1]) {
      case 'x':
        snum = Number(storage[0]) * Number(storage[2])
        break
      default:
        snum = null
    }

    instance.stype = stype
    instance.snum = snum

    if (['t', 'm'].includes(segments[0].split('')[0])) {
      instance.cost = segments[segments.length -3]
      instance.stype = 'EBS'
      instance.snum = null
    }

    categories[category][segments[0]] = instance
  }
})

console.log(categories)

fs.writeFileSync('./options.json', JSON.stringify(categories, null, 2))
