# Declaring the data for the board-viewer

The graphic representing a board is provided as an SVG. Within the SVG there
can be many elements that will be surfaced in the board-viewer as interactive
items. To indicate an item should be surfaced, it's `id` should be set to the
pattern `BV_{component}(Pin{pin#})` for example:

  BV_J2Pin5 or BV_ACCEL

The set of id's declared with the above naming convention determines which
areas of the graphic the user will be able to interact with. When the user
interacts with an item, additional meta data is made available through
declarations in the `boards.json` data file.

## boards.json schema

A board contains zero or more Items.

All Items are uniquely identifiable via a reference designator, or `refdes`. The
refdes property is typically constructed programmatically, although it can be
explicitly specified in the board data.

There are two types of Items. Components and Pins.

A Component can contain one or more Pins.

A Pin can have one or more Names. If there is more than one name, the component
holding it must define a context for when each name is used.

A pin can have one or more functions. If there is more than one function, the
component holding it must define a context for when each function is used.

As an example of the above, the Quark D2000 Development Kit has a component
