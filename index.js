import express from "express"
const app = express()
const port = 3000

// on utilise le moteur de template EJS
app.set("view engine","ejs")

// mes assets et mon style sont dans le dossier public
app.use(express.static('public'))

app.get('/', (req, res) => {
    const user ={
        nom: "charles",
        prenom: "Romain"
    }
  res.render("home.ejs",{"user":user})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})