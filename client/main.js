const complimentBtn = document.getElementById("complimentButton");
const postForm = document.querySelector('form');
const fortuneBtn = document.getElementById("fortuneButton");
const kendrickButton = document.getElementById("albumsButton");
const deleteButton = document.getElementById('deleteButton')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data)
    });
};

fortuneBtn.addEventListener('click', getFortune)



const getAlbums = () => {
    axios.get("http://localhost:4000/api/albums/")
    .then(res => {
        const data = res.data;
        console.log(data)
    })
};

kendrickButton.addEventListener('click', getAlbums)

const postAlbum = () => {
    axios.post("http://localhost:4000/api/albums/")
    .then(res => {
        const data = res.data;
        console.log(data)
    })
};

postForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let postName = document.getElementById('postName').value
    let postText = document.getElementById('postID').value
    let albums = {
        id: postText,
        set_name: postName
  }
    axios.post ("http://localhost:4000/api/albums/" , albums).then(res=> { console.log(res)})
    console.log(albums) 
},

deleteButton.addEventListener('click' , (evt) => {
    evt.preventDefault()
        let idToDelete = document.getElementById('deleteID').value
        let albums= {
            id: idToDelete,
        }

        axios.delete ("http://localhost:4000/api/albums/${id}" , albums).then(res=> { console.log(res)})
        console.log(albums)
})

)

