const text = "Designing for ";
const accentText = "Impact";

$("#introductionTitle").ready(function (e) { 
    runTyping(0);
});

function runTyping(index) {
    if (index > text.length + accentText.length) {
        return;
    }
    var result = "";
    if (index <= text.length) {
        result = text.substring(0, index);
    } else {
        result = text + impactText(index - text.length);
    }
    
    $("#introductionTitle").html(result);
    
    setTimeout(function() {
        runTyping(index + 1);
    }, 100);
}

function impactText(index) {
    return `<span class="titleAccent">${accentText.substring(0, index)}</span>`;
}