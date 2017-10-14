import React from 'react';


export default class HTML extends React.Component{

  render(){

        const {title, deck, author, body} = this.props.info;
        
;
   
        let htmlBody = body;
        //focus on the <body> forget the <head>
        htmlBody = htmlBody.substring(htmlBody.indexOf("<body>")+6,htmlBody.lastIndexOf("</body>"));
        //get rid of all class="pDIGIT"
        htmlBody = htmlBody.replace(/ class="p\d+"/g, '');
        //add newlines to clean it up
        htmlBody = htmlBody.replace(/<\/p>/g, '</p>\n\n');
        //get rid of all spans with class s1, s2..., but keep the inner html
        htmlBody = htmlBody.replace(/<span class="s\d+">/g, '');
        htmlBody = htmlBody.replace(/<\/span>/g, '');
        //get rid of this type of span
        htmlBody = htmlBody.replace(/<span class="Apple-converted-space">/g, '');
        //give all the paragraphs the proper class
        htmlBody = htmlBody.replace(/<p>/g, '<p class="body">');

        let htmlTitle = `<h1 class="headline">${title}</h1>\n\n`;
        let htmlDeck = '';
        let htmlAuthor = '';
        //decks and authors don't exist in every article
        if(deck){htmlDeck = `<p class="deck">${deck}</p>\n\n`}
        if(author){htmlAuthor = `<p class="body">${author}</body>\n\n`}

        let html =`${htmlTitle}${htmlDeck}${htmlAuthor}${htmlBody}`
    
        return(
            <div className="copyHtml" >
            HTML:<br />
            <textarea value={html} readOnly={true} className="html-textarea" />
          </div>
        )
    }
}
