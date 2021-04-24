var shuffleSequence = seq("intro");
var practiceItemTypes = ["practice"];
var sendingResultsMessage = "Daten werden an den Server gesendet. Bitte warten Sie...";
var completionMessage = "Vielen Dank, Sie können dieses Fenster nun schließen.";
var hideProgressBar = true;
var progressBarText = " ";
var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
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

    ["intro", "Form", {hideProgressBar: true, consentRequired: true, html:{include: "VP_hours_covid.html" }}],
];

    
