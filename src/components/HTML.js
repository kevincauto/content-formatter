import React from 'react';
export default class HTML extends React.Component{

  render(){

        const {title, deck, author, body} = this.props.info;
   
        let htmlBody = body;

        //normally we paste everything and take what's inside the <body> tag.  
        //If we paste in code between the body tag, this will still work.
        if(htmlBody.includes('<body>') && htmlBody.includes('</body>')){
          //focus on the <body> forget the <head>, <html>
          htmlBody = htmlBody.substring(htmlBody.indexOf("<body>")+6,htmlBody.lastIndexOf("</body>"));
        }

        //get rid of all class="pDIGIT"
        htmlBody = htmlBody.replace(/ class="p\d+"/g, '');
        //add newlines to clean it up
        htmlBody = htmlBody.replace(/<\/p>/g, '</p>\n');
        //get rid of all spans with class s1, s2..., but keep the inner html
        htmlBody = htmlBody.replace(/<span class="s\d+">/g, '');
        htmlBody = htmlBody.replace(/<\/span>/g, '');
        //get rid of this type of span
        htmlBody = htmlBody.replace(/<span class="Apple-converted-space">/g, '');
        //give all the paragraphs the proper class
        htmlBody = htmlBody.replace(/<p>/g, '<p class="body">');
        //make ul tags <p>
        htmlBody = htmlBody.replace(/<ul class="ul\d+">/g, '<p class="body">');
        //make ul tags <p>
        htmlBody = htmlBody.replace(/<ul class="ul\d+">/g, '<p class="body">');
        //</ul> to </p>
        htmlBody = htmlBody.replace(/<\/ul>/g, '</p>');
        //make li tags &bull;
        htmlBody = htmlBody.replace(/<li class="li\d+">•<span class="Apple-tab-span">/g, '&bull; ');
        //make </li> to <br />
        htmlBody = htmlBody.replace(/<\/li>/g, '<br />');

        //make <i> tags <em>
        htmlBody = htmlBody.replace(/<i>/g, '<em>');
        htmlBody = htmlBody.replace(/<\/i>/g, '</em>');
        //make get rid of space before end tags.  Causing a strange symbol.
        htmlBody = htmlBody.replace(/\s<\//g, '</');
        //apostrophe glitch single quote 
        htmlBody = htmlBody.replace(/’/g, '\'');
        //make <b> tags <strong>
        htmlBody = htmlBody.replace(/<b>/g, '<strong>');
        htmlBody = htmlBody.replace(/<\/b>/g, '</strong>');
        //remove unnecessary empty paragraph break tag
        htmlBody = htmlBody.replace(/<p class="body"><br><\/p>/g, '');
        htmlBody = htmlBody.replace(/<p class="body"><strong><\/strong><br><\/p>/g, '');
        htmlBody = htmlBody.replace(/<p class="body"><sup><\/sup><br><\/p>/g, '');
        htmlBody = htmlBody.replace(/<p class="body"><em><\/em><br><\/p>/g, '');
        //h2 instead of all caps paragraphs
        htmlBody = htmlBody.replace(/<p class="body">REFERENCES<\/p>/g, '<h2 class="subhead">References</h2>');
        htmlBody = htmlBody.replace(/<p class="body">ABOUT THE AUTHORS<\/p>/g, '<h2 class="subhead">About the Authors</h2>');
        htmlBody = htmlBody.replace(/<p class="body">REFERENCES<\/p>/g, '<h2 class="subhead">References</h2>');
        htmlBody = htmlBody.replace(/<p class="body">ACKNOWLEDGMENT<\/p>/g, '<h2 class="subhead">Acknowledgment</h2>');
        
        
        

        //discover h2 tags
        htmlBody = htmlBody.replace(/<p class="body"><strong>(.+)<\/strong><\/p>/g, '<h2 class="subhead">$1</h2>' )

        let htmlTitle = `<h1 class="headline">${title}</h1>\n\n`;
        let htmlDeck = '';
        let htmlAuthor = '';
        //decks and authors don't exist in every article
        if(deck){htmlDeck = `<p class="deck">${deck}</p>\n\n`}
        if(author){htmlAuthor = `<p class="body">${author}</p>\n`}

        let html =`${htmlTitle}${htmlDeck}${htmlAuthor}${htmlBody}`
    
        return(
            <div className="copyHtml" >
            HTML:<br />
            <textarea value={html} readOnly={true} className="html-textarea" />
          </div>
        )
    }
}
