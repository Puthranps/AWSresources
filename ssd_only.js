const fs = require('fs')

const instances = JSON.parse(fs.readFileSync('./options.json'))

let result = [
  
]

for (const [key, value] of Object.entries(instances)) {
  for (const [k, v] of Object.entries(instances[key])) {
    if (v.stype === 'SSD') result.push({name: k, ...v, type: key})
  }
}

fs.writeFileSync('./ssd_options.json', JSON.stringify(result, null, 2))
