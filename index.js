import express from "express"
import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js"
const app = express()
const port = 3000

//lit le fichier env
dotenv.config()



// on utilise le moteur de template EJS
app.set("view engine","ejs")

// mes assets et mon style sont dans le dossier public
app.use(express.static('public'))


//permet de lire correctement le contenu des données envoyé par le formulaire
app.use(express.urlencoded({extended:true}))



//base de donné
const supabase =createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)





app.get('/', async(req, res) => {
    const { data, error } = await supabase
    .from("TODOlist")
    .select("*");

console.log(data)
  res.render("home.ejs")
})

//route qui affiche le formulaire pour créer une tache
app.get("/ajouter",(req,res)=>{
    res.render("ajouter")
})


// route qui reçoit les données du formulaire 
app.post("/ajouter", async(req,res)=>{
    console.log([req.body])


    // console log ( req.body)
await supabase.from('TODOlist').insert(req.body)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})