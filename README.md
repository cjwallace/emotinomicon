# emotinomicon 

## Combobox

### A11y notes:

- editable combobox
- popup hidden by default (collapsed state)
  - activates on DownArrow
  - activates on input
- list autocomplete autocomplete with automatic selection of top element (which will be found by fuzzy search with fuse.js)
  - possibly add inline autocomplete (complete the word in the text input area)?
- if no matching selection, display a message rather than fully close popup

## Background:

- starfield - some pixels coming "towards" the screen, on canvas (whole page canvas background), or css (with randomization from js via css variables).
- occasionally send a "pulse" of delaunay tringulation through them, with soft lines? Or otherwise use the triangulation to occasionally draw soft lines between them. Perhaps randomly, with line color fainter (closer to background) further away.