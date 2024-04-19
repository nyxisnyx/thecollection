fetch('library.json').then((response) => response.json()).then((json) => {
    console.log(json)

//variables
    const main = document.querySelector('main');

    function createDiv(type,parent,content,className) {
        const newDiv=document.createElement(type);
        if (content!=null) {
        newDiv.innerHTML=content;
        }
        if (className!=null) {
        newDiv.classList.add(className);
        }
        parent.appendChild(newDiv);
        return newDiv;
        }

    const displayer = createDiv("section", main, "", "display");

    for (let i=0; i<library.length; i++) {
        const container = createDiv("article", displayer, "", "book");
        const bookcover = createDiv('img', container, '', '.bookcover');
            bookcover.setAttribute('src', library.cover);
            bookcover.setAttribute('alt', library.alt)
        const txtblock = createDiv('div', container, '', 'blocktxt');
        const booktitle = createDiv('h2', txtblock, '', 'booktitle');
            booktitle.innerHTML = library[i].title;
        const bookauthor = createDiv('h3', txtblock, '', 'bookauthor');
            bookauthor.innerHTML = library[i].author;
        const booksynopsis = createDiv('p', txtblock, '', 'booksynopsis');
            booksynopsis.innerHTML = library[i].synopsis;
        const booktags = createDiv('p', txtblock, '', 'booktags');
            booktags.innerHTML = library[i].tags
        const tagname = createDiv('p', booktags, '', 'tagname');
        const bookinfo = createDiv('div', txtblock, '', 'bookinfo');
        const bookrelease = createDiv('p', bookinfo, '', 'bookrelease');
            bookrelease.innerHTML = library[i].release;
        const booklink = createDiv('a', bookinfo, '', 'booklink');
            booklink.setAttribute('src', library[i].goodreads);
        const goodreadslogo = createDiv('img', booklink, '', 'goodreadslogo');
            goodreadslogo.setAttribute('src', 'assets/goodreadslogo.png');
            goodreadslogo.setAttribute('alt', 'the goodreads logo');
        const bookpublisher = createDiv('p', bookinfo, '', 'bookpublisher');
            bookpublisher.innerHTML = library[i].publisher;
    }
})