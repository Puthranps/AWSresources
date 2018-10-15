const fs = require('fs')
const readline = require('readline');

const instances = JSON.parse(fs.readFileSync('./options.json'))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function askStorage(instances) {
  return await rl.question('Hard drive type [ (A)ll | (E)BS | (S)SD | (H)DD ]', (answer) => {
    let result
    switch (answer) {
      case 'A' || 'a':
        result = instances

      case 'E' || 'e':
        for (let [key, value] of Object.entries(instances)) {
          if (value.stype !== 'EBS') return
          result[key] = value
        }

      case 'S' || 's':
        for (let [key, value] of Object.entries(instances)) { 
          if (value.stype !== 'SSD') return
          result[key] = value
        }

      case 'H' || 'h':
        for (let [key, value] of Object.entries(instances)) { 
          if (value.stype !== 'HDD') return
          result[key] = value
        }

      default:
        result = false
    }

    return result
  })
}

async function askCores(instances) {
  rl.question('Number of cores [ (0|Any) | (N)umber; where 1 <= N <= 128 ]', answer => {
    switch (answer) {
      case 'A' || 'a' || 'Any' || 'any' || '0':
        return instances

      case 0 < Number(answer) < 129:
        let result = {}
        for (let [key, value] of Object.entries(instances)) {
          if (value.cores < Number(answer)) return
          result[key] = value
        }
        return result

      default:
        return false
    }
  })
}

async function askMemory(instances) {

}

async function askPrice(instances) {

}


async function compute(instances) {
  const storage = await askStorage(instances)
  console.log(storage)
  if (storage) {
    const cores = askCores(storage)
    if (cores) {
      console.log(cores)
      const memory = askMemory(cores)
      if (memory) {
        const price = askPrice(memory)
        if (price) {
          result = price
          return result
        }
      }
    }
  }

  return 'Invalid'
}

console.log(compute(instances))
