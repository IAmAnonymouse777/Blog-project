document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload
    console.log('Form submitted without page refresh!');
});
 // Apply formatting commands
 function format(command, value = null) {
    document.execCommand(command, false, value);
}

// Apply heading
function applyHeading(tag) {
    if (tag) {
        format('formatBlock', tag);
    }
}

// Apply font color
function applyColor(color) {
    format('foreColor', color);
}

// Apply font size
function applyFontSize(size) {
    if (size) {
        format('fontSize', size);
    }
}

// Apply custom font size in px
function applyCustomFontSize(pxSize) {
    if (pxSize) {
        const span = document.createElement('span');
        span.style.fontSize = pxSize + 'px';
        span.textContent = window.getSelection().toString();
        document.execCommand('insertHTML', false, span.outerHTML);
    }
}

// Apply font family
function applyFontName(fontName) {
    if (fontName) {
        format('fontName', fontName);
    }
}

// Apply background color
function applyBackgroundColor(color) {
    format('backColor', color);
}

// Highlight text
function highlightText() {
    const color = prompt("Enter highlight color (e.g., yellow):", "yellow");
    if (color) {
        applyBackgroundColor(color);
    }
}

// Insert hyperlink
function insertLink() {
    const url = prompt("Enter URL:", "https://");
    if (url) {
        format('createLink', url);
    }
}

// Insert image
function insertImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = `<img src="${e.target.result}" alt="Image" style="max-width: 100%;">`;
            document.execCommand('insertHTML', false, img);
        };
        reader.readAsDataURL(file);
    }
}

// Insert emoji
function insertEmoji() {
    const emoji = prompt("Enter emoji (e.g., 😀):", "😀");
    if (emoji) {
        document.execCommand('insertText', false, emoji);
    }
}

// Save content as file
function saveAsFile() {
    const content = document.querySelector('.editor').innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'document.html';
    a.click();
}