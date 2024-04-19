document.addEventListener("DOMContentLoaded", (event) => {
//variables
    const main = document.querySelector('main');
    const display = document.querySelector('.display');
    const book = document.querySelector(".book");
    const cover = document.querySelector(".bookcover");
    const blocktxt = document.querySelector(".blocktxt");
    const title = document.querySelector(".booktitle");
    const author = document.querySelector(".bookauthor")
    const synopsis = document.querySelector(".booksynopsis");
    const tags = document.querySelector(".booktags");
    const singletag = document.querySelector(".tagname");
    const bookinfo = document.querySelector(".bookinfo");
    const release = document.querySelector(".bookrelease");
    const link = document.querySelector(".booklink");
    const logo = document.querySelector(".goodreadslogo");
    const publisher = document.querySelector(".bookpublisher");

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
        const txtblock = createDiv('div', container, '', 'blocktxt');
        const booktitle = createDiv('h2', txtblock, '', 'booktitle');
        const bookauthor = createDiv('h3', txtblock, '', 'bookauthor');
        const booksynopsis = createDiv('p', txtblock, '', 'booksynopsis');
        const booktags = createDiv('p', txtblock, '', 'booktags');
        const tagname = createDiv('p', booktags, '', 'tagname');
        const bookinfo = createDiv('div', txtblock, '', 'bookinfo');
        const bookrelease = createDiv('p', bookinfo, '', 'bookrelease');
        const booklink = createDiv('a', bookinfo, '', 'booklink');
        const goodreadslogo = createDiv('img', booklink, '', 'goodreadslogo');
        const bookpublisher = createDiv('p', bookinfo, '', 'bookpublisher');
    }
}
)

