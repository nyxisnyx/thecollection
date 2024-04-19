fetch('library.json').then((response) => response.json()).then((library) => {
    console.log(library)

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
            bookcover.setAttribute('src', library[i].cover);
            bookcover.setAttribute('alt', library[i].alt);

        const txtblock = createDiv('div', container, '', 'blocktxt');

        const booktitle = createDiv('h2', txtblock, library[i].title, 'booktitle');

        const bookauthor = createDiv('h3', txtblock, library[i].author, 'bookauthor');

        const booksynopsis = createDiv('p', txtblock, library[i].synopsis, 'booksynopsis');

        const booktags = createDiv('p', txtblock, '', 'booktags');
            for (b = 0; b > library[i].tags.length; b++) {
                const tagname = createDiv('p', booktags, library[i].tags[b], `${library[i].tags[b]}`);
            }
        const bookinfo = createDiv('div', txtblock, '', 'bookinfo');
        const bookrelease = createDiv('p', bookinfo, library[i].release, 'bookrelease');
        const booklink = createDiv('a', bookinfo, '', 'booklink');
            booklink.setAttribute('src', library[i].goodreads);
        const goodreadslogo = createDiv('img', booklink, '', 'goodreadslogo');
            goodreadslogo.setAttribute('src', 'assets/goodreadslogo.png');
            goodreadslogo.setAttribute('alt', 'the goodreads logo');
        const bookpublisher = createDiv('p', bookinfo, library[i].publisher, 'bookpublisher');
    }
})