const shakespeareApi = "https://api.graph.cool/simple/v1/shakespeare"

let options = () => { // check syntax
    method: "POST"
    headers: {
        "Content-Type" = "application/json"
    }
    body: JSON.stringify({
        // will be written later
    })
}

function randomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min +1)) + min
}