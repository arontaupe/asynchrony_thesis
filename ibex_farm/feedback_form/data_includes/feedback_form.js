var shuffleSequence = seq("intro");

var practiceItemTypes = ["practice"];
var sendingResultsMessage = "Daten werden an den Server gesendet. Bitte warten Sie...";
var completionMessage = "Vielen Dank, Sie können dieses Fenster nun schließen.";

var hideProgressBar = true;

var progressBarText = " ";

var defaults = [
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
        continueMessage: "Weiter",
    }
];

var items = [

    ["intro", "Form", {hideProgressBar: true, consentRequired: true, html:{include: "pilot_feedback.html" }}],
];
