let express = require('express')
app = express()
app.use(express.static('public'))
app.listen(80, () => console.log('::80'))
