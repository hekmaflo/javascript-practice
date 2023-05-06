# Intro to Responisve Web Design

Relative unitws for font-size include em and rem.

Relative to the viewport - vw, vh,vmin,vmax

## Percentages

Are relative to the parent element.

## min and max width

e.g max-width: 620px

this will lock the element to a max width of 620 pixels not streching it to a weird size if you where to use 90 %

min-width: 500px

would stop shriking at 500px

you can put them in any order.

## CSS Unit - em

Relative units are always relative either to a font-size, or the size of the viewport.

The em and rem are considered relative, because they are relative to the font-size of other elements.

defaults to body

"1em is the equivalent and match the font size of the parent "

em is a relative unit. it will adjust to the size of your font size in body.

one big problem with em: When we use them for the font-size of an element though, it can create a cascading effect. since its looking at the parent.

## REM

the solution: rems

The rem unit is short for Root Em.

That means it's always relative to the "root" of our document.

The root of an HTML page is always the html element.

the only diff is you have to set in the html tag

html {
font-size: 12px
}

or no html tag at all

general rule of thumb:

font-size = rem
pading and margin = rem
witdhs = em or percentage

not hard and fast rules

em when sset to a certain element will space according to the font-size not the parent. e.g.

button {
display: inline-block;
background: #FFE600;
color:
black;
padding: .5em 1.25em;
/_ em is relative to the font-size
of this element _/ text-align: center;
textedecoration: nones
margin-bottom: 50px;
}

.btn-big {
font-size: 1.5rem;
}

e.g.

h1 {
font-size: 24px;
margin-bottom: 1em; /_ 24 px _/
margin-bottom: 2em; /_ 48px _/
}

em is relative to the font-size

## Flexbox

Elements normally have a display: block or a display: inline as a default from the browser.

block elements : div,header,footer,main, h1 -> h6, p, list, list items

inline elements: a, strong,em, span

We can change this behavior by setting the display property to flex on the parent element.

## Adding backgrowund color

you can add aditional calsses to divs

e.g <div class='col col-bg'> </div>

## spacing out colums with flexbox

justify-content:
space-between;

woould be added to the parent element.

space-around would put space around each item. left, right, top, bottom.

space-evenly, wuld make all space even.

## control vertical position of items with flexbox

align-items:

flex-start would align items to the top of the div

center would vertically center

flex-end would align items to the end of the div.

stretch would strech vertically on the div.
