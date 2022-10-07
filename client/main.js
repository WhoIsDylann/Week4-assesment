const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data)
    });
};

fortuneBtn.addEventListener('click', getFortune)

const locationSubmit = document.getElementById ("submitBtn")

sendData = evt => {
    evt.preventDefault()
    alert(document.getElementById("submitText").value + ' submitted')
}


let data = { locationInputData }

locationSubmit.addEventListener('click' , sendData)

