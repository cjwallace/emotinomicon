# emotinomicon 

## Combobox

### A11y notes:

- if no matching selection, display a message rather than fully close popup
- automated test aria (playwright has some integrations)
- actually test aria (use a screenreader, eg)


## Background:

- starfield - some pixels coming "towards" the screen, on canvas (whole page canvas background), or css (with randomization from js via css variables).
- occasionally send a "pulse" of delaunay tringulation through them, with soft lines? Or otherwise use the triangulation to occasionally draw soft lines between them. Perhaps randomly, with line color fainter (closer to background) further away.