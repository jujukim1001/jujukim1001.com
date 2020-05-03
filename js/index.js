const text = "Designing for ";
const accentText = "Impact";
var everMouseentered = false;
var mouseEnteredRecently = false;

$("#introductionTitle").ready(function (e) { 
    runTyping(1);
});

$("#arrowImage").mouseenter(function (e) {
    if (mouseEnteredRecently) {
        return;
    }
    everMouseentered = true;
    mouseEnteredRecently = true;
    
    $("#arrowImage").animate({
        'marginTop': "30px"
    });

    setTimeout(function() {
        mouseEnteredRecently = false;
    }, 1000);
});

$("#arrowImage").mouseleave(function (e) {
    $("#arrowImage").animate({
        'marginTop': "0px"
    });
});

function runTyping(index) {
    if (index > text.length + accentText.length) {
        if (!everMouseentered){
            console.log(everMouseentered);
            $("#arrowImage").toggleClass("bounce");
        }
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