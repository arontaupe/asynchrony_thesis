var shuffleSequence = seq("intro","sendresults","exit");

var manualSendResults=true;
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
["sendresults", "__SendResults__", {sendingResultsMessage: "Ergebnisse werden an den Server gesendet. Bitte warten Sie..."}],

    ["intro", "Form", {hideProgressBar: true, consentRequired: true, html:{include: "pilot_feedback.html" }}],
    ["exit", "Form", {hideProgressBar: true, consentRequired: false, continueMessage: false, html:{include: "exit_VP_covid_German.html" }}],

];
