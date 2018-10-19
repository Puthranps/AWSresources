const app = require('express')();

app.get('/:gurl', async (req, res) => {
  console.log(req.params.gurl)
})

throw new Error('wtv')
