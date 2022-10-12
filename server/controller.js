const kendrickAlbums = [
    {id: 1, set_name: 'To Pimp A Butterfly'},
    {id: 2, set_name: 'Good Kid Maad City'},
    {id: 3, set_name: 'Section 80'},    
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
     getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A friend is a present you give yourself.", "A hunch is creativity trying to tell you something.","A light heart carries you through all the hard times.","A smooth long journey! Great expectations."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    
    getAlbums: (req, res) => {
        res.status(200).send(kendrickAlbums)
    },

    postAlbum: (req, res) => {
        const albumToAdd = {
            id: req.body.id,
            set_name: req.body.set_name
        }
        kendrickAlbums.push(albumToAdd);
        res.status(200).send({message: 'album added', kendrickAlbums});
    },

    deleteAlbum: (req, res) => {
        const albumToDelete = kendrickAlbums.find( (set_obj) => set_obj.id === parseInt(req.params.id));
        kendrickAlbums.splice(req.params.id -1, 1);
        res.status(200).send({message: 'album deleted', kendrickAlbums});
    },

    editAlbum: (req, res) => {
        const { id } = req.params;
        const albumToEdit = kendrickAlbums.find((set_obj) => set_obj.id === parseInt(id))
        albumToEdit.set_name = req.body.set_name;
        res.status(200).send({message: 'album edited', kendrickAlbums});
    }

}

console.log(kendrickAlbums)