import App from '@config/app'

const PORT = process.env.PORT || 8000;

App.app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})
