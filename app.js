let obj = {
    userId: 1,
    title: 'selam',
    body: 'evet selam'
}
async function get(url) {
    const response = await fetch(url)
    var data = await response.json()
    return data
}
async function post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    var data = response.json()
    return data
}
async function put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    var data = response.json()
    return data
}
async function deletee(url) {
    await fetch(url, {
        method: 'DELETE'
    })
    return "Veri başarıyla silindi"
}
// get("https://jsonplaceholder.typicode.com/posts")
// .then(data => console.log(data))
// .catch(err => console.log(err))



// post("https://jsonplaceholder.typicode.com/posts", obj)
//     .then(data => console.log(data))
// .catch(err => console.log(err))


// put("https://jsonplaceholder.typicode.com/posts/1",obj)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// deletee("https://jsonplaceholder.typicode.com/posts/1")
// .then(data => console.log(data))
// .catch(err => console.log(err))