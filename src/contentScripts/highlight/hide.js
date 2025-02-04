import { HIGHLIGHT_CLASS, DELETED_CLASS } from './highlight/index.js';

import { removeHighlightEventListeners } from '../hoverTools/index.js';

function remove(highlightId) {
    const highlights = $(`.highlighter--highlighted[data-highlight-id='${highlightId}']`);
    $('.highlighter--hovered').removeClass('highlighter--hovered');

    highlights.css('backgroundColor', 'inherit'); // Change the background color attribute
    highlights.css('color', 'inherit'); // Also change the text color
    highlights.removeClass(HIGHLIGHT_CLASS).addClass(DELETED_CLASS); // Change the class name to the 'deleted' version

    highlights.each((_, el) => { // Finally, remove the event listeners that were attached to this highlight element
        removeHighlightEventListeners(el);
    });
}

export default remove;
