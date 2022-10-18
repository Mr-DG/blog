const initServer = async app => {
  return new Promise((resolve, reject) => {
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`)
      resolve()
    })
  })
}

module.exports = initServer