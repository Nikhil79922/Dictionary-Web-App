const express = require('express')
var axios = require("axios").default;
const app = express()
const port = 3000;

app.get("/", (req, res) => {
res.sendfile("index.html",{root:__dirname})
})

app.get("/search", (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
        params: req.query ,
        headers: {
            'x-rapidapi-key': 'a055256908mshc34dfffd3bb4478p1ee935jsn9a1be4b4f326',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    async function dictionary(){
     const response = await axios.request(options);
        let data=await response.data;
        res.send(data);
    }
    dictionary();

    // let bright = {};
    // bright.data =
    // {
    //     "definition": "See Brite, v. i. 1. Radiating or reflecting light; shedding or having much light; shining; luminous; not dark. The sun was bright o'erhead. Longfellow. The earth was dark, but the heavens were bright. Drake. The public places were as bright as at noonday. Macaulay. 2. Transmitting light; clear; transparent. From the brightest wines He 'd turn abhorrent. Thomson. 3. Having qualities that render conspicuous or attractive, or that affect the mind as light does the eye; resplendent with charms; as, bright beauty. Bright as an angel new-dropped from the sky. Parnell. 4. Having a clear, quick intellect; intelligent. 5. Sparkling with wit; lively; vivacious; shedding cheerfulness and joy around; cheerful; cheery. Be bright and jovial among your guests. Shak. 6. Illustrious; glorious. In the brightest annals of a female reign. Cotton. 7. Manifest to the mind, as light is to the eyes; clear; evident; plain. That he may with more ease, with brighter evidence, and with surer success, draw the bearner on. I. Watts. 8. Of brilliant color; of lively hue or appearance. Here the bright crocus and blue violet grew. Pope. Note: Bright is used in composition in the sense of brilliant, clear, sunny, etc.; as, bright-eyed, bright-haired, bright-hued. Syn. -- Shining; splending; luminous; lustrous; brilliant; resplendent; effulgent; refulgent; radiant; sparkling; glittering; lucid; beamy; clear; transparent; illustrious; witty; clear; vivacious; sunny. Splendor; brightness. [Poetic] Dark with excessive bright thy skirts appear. Milton. Brightly. Chaucer. I say it is the moon that shines so bright. Shak. To be or become overripe, as wheat, barley, or hops. [Prov. Eng.]",
    //     "word": "bright",
    //     "valid": true
    // }
    // res.json(bright.data)

})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})


