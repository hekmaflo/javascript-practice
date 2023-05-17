# The DOM

Document is the Rood DOM Node, provides access to elment quering,, DOM content etc.

window - the active browser window / tab, actas as a global storage for script, also provides acces s window spesific properties and methods.

### console.dir(document) willl give you info about the document.

### if you type window into the console it will give you all the api the browser has available. document is part of the window.

## Understading the DOM

Thh browser creates a tree of nodes with HTMl as the parent node and HEAD and BODY as the child nodes. and HEAD would be the parent of TITLE and the BODY is the parent of the HEADER, wehre the header can have a child node for e.g. a H1

## Query Elements

you can use:

querySelector(), getElementById()

These will return an single element.

Different ways of quering elements (by CSS selector, by id)

Direct reference to DOM elements is returned

querySelectorAll(), getElementsByTagName()

Return colectiuons of elements (array like objects): NodeList

Different ways of querying elements by CSS selector, by tag name, by CSS class.

querySelectorAll() return a non live NodeList, getXByY return live NodeLists

### Nodes and Elemnents

Nodes:

The objects that make up the DOM

HTML tages are "element nodes" (or just elements)

Text creates "text nodes"

Attributes create "attribute nodes"

Elements:

Nodes are really just nodes which are created off the HTML tags which where rendered, not the text inside

special propertie4s and methods to interact with elements.

Available methods and properties depend on the kind of element

can be selected om various different ways (via js)

con be created and removed via JS
