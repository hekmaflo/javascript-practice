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
