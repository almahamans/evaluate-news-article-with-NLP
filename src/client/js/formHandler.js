port = process.env.PORT

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('url').value
    if(Client.checkForName(formText)){
        Client.postUrl(`http://localhost:${port}/analyze`, {url:formText})
    .then((data) =>
          Client.updateUI(data)
        )
    } else {
        document.getElementById('error').innerHTML = `Invalid Input : Please enter a valid url or article`
    }

    console.log("::: Form Submitted :::")
}

export { handleSubmit }