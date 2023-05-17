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

## Selecting Elements in the DOM

document.getElementById('main-title') <-- the argument will be the id of the element you want to choose.

can be stored in a variable:
const h1 = document.getElementById('main-ttle')

to search in the child nodes you can now use another selector. e.g

h1.querySelectorAll

document,getElementByClassName('list-item') will allow to choose elements by className which will be a collection if there is more than one item.

more common to use:

document.querySelector('.list-item')

document.querySelectorAll('.list-item')

you have to have either a . or a # to choose the corresponding class or id

e.g.

const ul = document.querySelector('ul')

ul.querySelector('li')

will give you the first element of the unordered list.

## make sure you place your JS script at the rigth place.

you need to either put the script at the very end of your HTML code or added to your HEAD after title and add defer like so:

<script src="app.js" defer></script>
