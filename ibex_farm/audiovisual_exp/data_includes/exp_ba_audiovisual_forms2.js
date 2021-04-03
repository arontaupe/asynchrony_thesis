var progressBarText = "Ihr aktueller Fortschritt";

var manualSendResults=true;

PennController.ResetPrefix(null);
PennController.Sequence = ("setcounter","intro1","intro2","audio_volume","sendresults","exit");

//PennController.DebugOff();
PennController.SetCounter();

PennController("intro1",
    newHtml("subjinfo", "intro_German.html")
        .print()
    ,
    newButton("continue", "Weiter")
        .print()
        .wait(
            getHtml("subjinfo").test.complete()
                .failure( getHtml("subjinfo").warn() )
        )
);

PennController("intro2",
    newHtml("consent", "consent_German.html")
        .print()
    ,
    newButton("continue", "Weiter")
        .print()
        .wait(
            getHtml("consent").test.complete()
                .failure( getHtml("consent").warn() )
        )
);


PennController("audio_volume",
    defaultText
        .settings.center()
        .print() // Any text element will be printed upon creation
    ,
    newText("headphones", "In diesem Experiment werden Ihnen deutsche Sätze vorgespielt.<br> Um sicherzustellen, dass Sie diese gut hören können, <b>nutzen Sie für die Dauer des Experiments bitte Kopfhörer.</b>")
	,
	newCanvas("empty canvas", 1, 20)
				.print()
	,
	newText("level", "Damit Sie alle Sätze gut hören, <b>passen Sie die Lautstärke Ihrer Kopfhörer nun bitte so an, dass Sie die folgende Aufnahme gut hören.<br></b> Der Satz sollte sich ungefähr so anhören, als ob Ihnen jemand gegenüber steht und auf Zimmerlautstärke mit Ihnen spricht.<br>")
    ,
	newCanvas("empty canvas1", 1, 20)
				.print()
			,
    newAudio("example_audio", "https://www.dropbox.com/s/qi7uh94ea42qp34/159.mp4?raw=1")
				.settings.center()
				.print()
				.wait()
	,
	newCanvas("empty canvas2", 1, 40)
				.print()
			,
	newText("question1", "Haben Sie Kopfhörer aufgesetzt?")
        //.settings.bold()
        //.print()
    ,
	newScale("answer1","Ja","Nein")
			// .settings.before(newText("answer1",row.Answer1))
			// .settings.after(newText("answer2",row.Answer2))
			.settings.labelsPosition("bottom")  // Position the labels
			.settings.center()
			.settings.vertical()
			.settings.log()
			.print()
			.wait()
	,
	newCanvas("empty canvas3", 1, 40)
				.print()
			,
    newText("question2", "Haben Sie die Lautstärke angepasst?")
        //.settings.italic()
        //.print()
    ,
    newScale("answer2","Ja","Nein")
			// .settings.before(newText("answer1",row.Answer1))
			// .settings.after(newText("answer2",row.Answer2))
			.settings.labelsPosition("bottom")  // Position the labels
			.settings.center()
			.settings.vertical()
			.settings.log()
			.print()
			.wait()
			,
	newCanvas("empty canvas4", 1, 15)
			.print()
	,
	newButton("continue2", "Weiter")
			.settings.center()
			.print()
			.wait()
);

PennController.SendResults("sendresults");

PennController("exit",
    newHtml("exit", "exit_redirect.html")
        .print()
        ,
        newTimer("forever", 1)
        .wait()            // Timer never started: will wait forever
);
