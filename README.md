# ECVWorkShop-AnimateSVG
This project is dedicated to serve as background during the ecv workshop (2020).
It tends to facilitate the use of SVG animations, native or through CSS.

## How to use
Declare an element svg in html file.
Create a first path, rect, polygon or any shape and asign it an id.
Then, after this shape, create a g (group) element and asign it a data-name attribute.
Inside this group, declare your first animation an set the begin attribute to indefinite.
The js script linked will automatically create a button and a new click event wich begin this animation.

You can reitarate :
New group -> New button

You can declare several animation inside the same group, they all will be played on the click if begin attribute is set to indefinite.

You can use multiple shapes and link animation to them.

You can play with the begin attribute and sync your animation as your want.

Each click set the body class as de data-name attribute animation value, so your can use CSS transition and animation too.

