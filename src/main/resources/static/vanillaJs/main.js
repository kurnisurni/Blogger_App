console.log("Hello from main script!")

async function getAllArticles() {       //function must be async
    let response = await fetch('/rest/articles')        //for await to work
    response = await response.json()
    console.log(response)
}

getAllArticles()

async function createNewArticle(article) {
    let articleFromServer = await fetch('/rest/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    })
    articleFromServer = await articleFromServer.json()

    console.log(articleFromServer)
}

const article = {
    title: 'Finding Nemo',
    content: 'comedy',
    published: 21072020
}

//createNewArticle(article)