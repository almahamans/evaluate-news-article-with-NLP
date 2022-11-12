export const postUrl = async (url ='', data = {}) => {
    const req = await fetch(url, {
        method :'POST',
        credentials:'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    try {
        const newData = await req.json();
        return newData;
    } catch {
        alert('Please enter a valid URL');
    }
}

export const updateUI =  (resData) => { 
    if(!resData.error) {  
    document.getElementById('polarity').innerHTML = ` ${resData.ploarity}`;
    document.getElementById('confidence').innerHTML = ` ${resData.confidence}`;
    document.getElementById('subjective').innerHTML = ` ${resData.subjective}`;
    document.getElementById('agreement').innerHTML = ` ${resData.agreements}`;
    document.getElementById('ironic').innerHTML = `${resData.irony}`;
    document.getElementById('results').innerHTML = `${resData.text}`
        } else {
            document.getElementById('error').innerHTML = `ERROR`
        }
}
