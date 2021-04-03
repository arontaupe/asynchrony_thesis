/******************** 
 * Av_W_Filler Test *
 ********************/

import { PsychoJS } from './lib/core-2021.1.2.js';
import * as core from './lib/core-2021.1.2.js';
import { TrialHandler } from './lib/data-2021.1.2.js';
import { Scheduler } from './lib/util-2021.1.2.js';
import * as visual from './lib/visual-2021.1.2.js';
import * as sound from './lib/sound-2021.1.2.js';
import * as util from './lib/util-2021.1.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'av_w_filler';  // from the Builder filename that created this script
let expInfo = {'participant': '0'};

// Start code blocks for 'Before Experiment'
font_color = [0, 0, 0];

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(welcome_screenRoutineBegin());
flowScheduler.add(welcome_screenRoutineEachFrame());
flowScheduler.add(welcome_screenRoutineEnd());
flowScheduler.add(loadingRoutineBegin());
flowScheduler.add(loadingRoutineEachFrame());
flowScheduler.add(loadingRoutineEnd());
flowScheduler.add(ageRoutineBegin());
flowScheduler.add(ageRoutineEachFrame());
flowScheduler.add(ageRoutineEnd());
flowScheduler.add(languageRoutineBegin());
flowScheduler.add(languageRoutineEachFrame());
flowScheduler.add(languageRoutineEnd());
flowScheduler.add(hearingRoutineBegin());
flowScheduler.add(hearingRoutineEachFrame());
flowScheduler.add(hearingRoutineEnd());
flowScheduler.add(genderRoutineBegin());
flowScheduler.add(genderRoutineEachFrame());
flowScheduler.add(genderRoutineEnd());
flowScheduler.add(dom_handRoutineBegin());
flowScheduler.add(dom_handRoutineEachFrame());
flowScheduler.add(dom_handRoutineEnd());
flowScheduler.add(environmentRoutineBegin());
flowScheduler.add(environmentRoutineEachFrame());
flowScheduler.add(environmentRoutineEnd());
flowScheduler.add(visionRoutineBegin());
flowScheduler.add(visionRoutineEachFrame());
flowScheduler.add(visionRoutineEnd());
flowScheduler.add(asdRoutineBegin());
flowScheduler.add(asdRoutineEachFrame());
flowScheduler.add(asdRoutineEnd());
flowScheduler.add(psychRoutineBegin());
flowScheduler.add(psychRoutineEachFrame());
flowScheduler.add(psychRoutineEnd());
const s_adjustLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(s_adjustLoopBegin, s_adjustLoopScheduler);
flowScheduler.add(s_adjustLoopScheduler);
flowScheduler.add(s_adjustLoopEnd);
flowScheduler.add(notesRoutineBegin());
flowScheduler.add(notesRoutineEachFrame());
flowScheduler.add(notesRoutineEnd());
flowScheduler.add(choice_instrRoutineBegin());
flowScheduler.add(choice_instrRoutineEachFrame());
flowScheduler.add(choice_instrRoutineEnd());
flowScheduler.add(choice_instr_2RoutineBegin());
flowScheduler.add(choice_instr_2RoutineEachFrame());
flowScheduler.add(choice_instr_2RoutineEnd());
flowScheduler.add(choice_instr_3RoutineBegin());
flowScheduler.add(choice_instr_3RoutineEachFrame());
flowScheduler.add(choice_instr_3RoutineEnd());
const trainingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trainingLoopBegin, trainingLoopScheduler);
flowScheduler.add(trainingLoopScheduler);
flowScheduler.add(trainingLoopEnd);
flowScheduler.add(training_completeRoutineBegin());
flowScheduler.add(training_completeRoutineEachFrame());
flowScheduler.add(training_completeRoutineEnd());
flowScheduler.add(SJ_instrRoutineBegin());
flowScheduler.add(SJ_instrRoutineEachFrame());
flowScheduler.add(SJ_instrRoutineEnd());
const SJ_trials_beforeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SJ_trials_beforeLoopBegin, SJ_trials_beforeLoopScheduler);
flowScheduler.add(SJ_trials_beforeLoopScheduler);
flowScheduler.add(SJ_trials_beforeLoopEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(SJ_instrRoutineBegin());
flowScheduler.add(SJ_instrRoutineEachFrame());
flowScheduler.add(SJ_instrRoutineEnd());
const SJ_trials_afterLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SJ_trials_afterLoopBegin, SJ_trials_afterLoopScheduler);
flowScheduler.add(SJ_trials_afterLoopScheduler);
flowScheduler.add(SJ_trials_afterLoopEnd);
flowScheduler.add(closeRoutineBegin());
flowScheduler.add(closeRoutineEachFrame());
flowScheduler.add(closeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'SJ_vid/echo15ms_091.mp4', 'path': 'SJ_vid/echo15ms_091.mp4'},
    {'name': 'SJ_vid/echo200ms_093.mp4', 'path': 'SJ_vid/echo200ms_093.mp4'},
    {'name': 'images/riese.png', 'path': 'images/riese.png'},
    {'name': 'SJ_vid/200ms_093.mp4', 'path': 'SJ_vid/200ms_093.mp4'},
    {'name': 'merge_vid/200ms_072.mp4', 'path': 'merge_vid/200ms_072.mp4'},
    {'name': 'images/zwerg.png', 'path': 'images/zwerg.png'},
    {'name': 'images/löwe.png', 'path': 'images/löwe.png'},
    {'name': 'images/mönch.png', 'path': 'images/mönch.png'},
    {'name': 'SJ_vid/0ms_090.mp4', 'path': 'SJ_vid/0ms_090.mp4'},
    {'name': 'images/bär.png', 'path': 'images/bär.png'},
    {'name': 'images/nikolaus.png', 'path': 'images/nikolaus.png'},
    {'name': 'SJ_vid/echo200ms_086.mp4', 'path': 'SJ_vid/echo200ms_086.mp4'},
    {'name': 'SJ_vid/15ms_084.mp4', 'path': 'SJ_vid/15ms_084.mp4'},
    {'name': 'SJ_vid/echo15ms_087.mp4', 'path': 'SJ_vid/echo15ms_087.mp4'},
    {'name': 'SJ_vid/0ms_082.mp4', 'path': 'SJ_vid/0ms_082.mp4'},
    {'name': 'SJ_vid/echo200ms_096.mp4', 'path': 'SJ_vid/echo200ms_096.mp4'},
    {'name': 'images/postbote.png', 'path': 'images/postbote.png'},
    {'name': 'images/gespenst.png', 'path': 'images/gespenst.png'},
    {'name': 'SJ_vid/echo200ms_083.mp4', 'path': 'SJ_vid/echo200ms_083.mp4'},
    {'name': 'SJ_vid/15ms_083.mp4', 'path': 'SJ_vid/15ms_083.mp4'},
    {'name': 'images/kellner.png', 'path': 'images/kellner.png'},
    {'name': 'SJ_vid/200ms_100.mp4', 'path': 'SJ_vid/200ms_100.mp4'},
    {'name': 'SJ_vid/0ms_084.mp4', 'path': 'SJ_vid/0ms_084.mp4'},
    {'name': 'merge_vid/200ms_011.mp4', 'path': 'merge_vid/200ms_011.mp4'},
    {'name': 'SJ_vid/echo15ms_083.mp4', 'path': 'SJ_vid/echo15ms_083.mp4'},
    {'name': 'images/hexe.png', 'path': 'images/hexe.png'},
    {'name': 'merge_vid/15ms_011.mp4', 'path': 'merge_vid/15ms_011.mp4'},
    {'name': 'images/bauer.png', 'path': 'images/bauer.png'},
    {'name': 'images/metzger.png', 'path': 'images/metzger.png'},
    {'name': 'SJ_vid/0ms_088.mp4', 'path': 'SJ_vid/0ms_088.mp4'},
    {'name': 'SJ_vid/echo200ms_087.mp4', 'path': 'SJ_vid/echo200ms_087.mp4'},
    {'name': 'SJ_vid/echo15ms_084.mp4', 'path': 'SJ_vid/echo15ms_084.mp4'},
    {'name': 'SJ_vid/200ms_090.mp4', 'path': 'SJ_vid/200ms_090.mp4'},
    {'name': 'SJ_vid/echo200ms_091.mp4', 'path': 'SJ_vid/echo200ms_091.mp4'},
    {'name': 'SJ_vid/200ms_096.mp4', 'path': 'SJ_vid/200ms_096.mp4'},
    {'name': 'SJ_vid/echo200ms_085.mp4', 'path': 'SJ_vid/echo200ms_085.mp4'},
    {'name': 'images/könig.png', 'path': 'images/könig.png'},
    {'name': 'merge_vid/echo15ms_072.mp4', 'path': 'merge_vid/echo15ms_072.mp4'},
    {'name': 'merge_vid/0ms_011.mp4', 'path': 'merge_vid/0ms_011.mp4'},
    {'name': 'SJ_vid/200ms_087.mp4', 'path': 'SJ_vid/200ms_087.mp4'},
    {'name': 'merge_vid/15ms_055.mp4', 'path': 'merge_vid/15ms_055.mp4'},
    {'name': 'SJ_vid/200ms_081.mp4', 'path': 'SJ_vid/200ms_081.mp4'},
    {'name': 'SJ_vid/0ms_091.mp4', 'path': 'SJ_vid/0ms_091.mp4'},
    {'name': 'SJ_vid/200ms_098.mp4', 'path': 'SJ_vid/200ms_098.mp4'},
    {'name': 'SJ_vid/echo15ms_085.mp4', 'path': 'SJ_vid/echo15ms_085.mp4'},
    {'name': 'SJ_vid/200ms_095.mp4', 'path': 'SJ_vid/200ms_095.mp4'},
    {'name': 'SJ_vid/echo15ms_081.mp4', 'path': 'SJ_vid/echo15ms_081.mp4'},
    {'name': 'SJ_vid/echo15ms_096.mp4', 'path': 'SJ_vid/echo15ms_096.mp4'},
    {'name': 'images/prinz.png', 'path': 'images/prinz.png'},
    {'name': 'SJ_vid/0ms_098.mp4', 'path': 'SJ_vid/0ms_098.mp4'},
    {'name': 'SJ_vid/echo15ms_092.mp4', 'path': 'SJ_vid/echo15ms_092.mp4'},
    {'name': 'group_4.xlsx', 'path': 'group_4.xlsx'},
    {'name': 'images/elefant.png', 'path': 'images/elefant.png'},
    {'name': 'images/engel.png', 'path': 'images/engel.png'},
    {'name': 'SJ_vid/15ms_092.mp4', 'path': 'SJ_vid/15ms_092.mp4'},
    {'name': 'SJ_2.xlsx', 'path': 'SJ_2.xlsx'},
    {'name': 'images/angler.png', 'path': 'images/angler.png'},
    {'name': 'images/papagei.png', 'path': 'images/papagei.png'},
    {'name': 'merge_vid/15ms_072.mp4', 'path': 'merge_vid/15ms_072.mp4'},
    {'name': 'images/königin.png', 'path': 'images/königin.png'},
    {'name': 'merge_vid/echo200ms_011.mp4', 'path': 'merge_vid/echo200ms_011.mp4'},
    {'name': 'images/frosch.png', 'path': 'images/frosch.png'},
    {'name': 'images/pinguin.png', 'path': 'images/pinguin.png'},
    {'name': 'images/fee.png', 'path': 'images/fee.png'},
    {'name': 'images/punker.png', 'path': 'images/punker.png'},
    {'name': 'SJ_vid/15ms_095.mp4', 'path': 'SJ_vid/15ms_095.mp4'},
    {'name': 'images/boxer.png', 'path': 'images/boxer.png'},
    {'name': 'SJ_vid/15ms_087.mp4', 'path': 'SJ_vid/15ms_087.mp4'},
    {'name': 'SJ_vid/200ms_097.mp4', 'path': 'SJ_vid/200ms_097.mp4'},
    {'name': 'images/panda.png', 'path': 'images/panda.png'},
    {'name': 'SJ_vid/200ms_088.mp4', 'path': 'SJ_vid/200ms_088.mp4'},
    {'name': 'images/pilot.png', 'path': 'images/pilot.png'},
    {'name': 'SJ_vid/15ms_090.mp4', 'path': 'SJ_vid/15ms_090.mp4'},
    {'name': 'images/kapitän.png', 'path': 'images/kapitän.png'},
    {'name': 'merge_vid/0ms_055.mp4', 'path': 'merge_vid/0ms_055.mp4'},
    {'name': 'images/affe.png', 'path': 'images/affe.png'},
    {'name': 'merge_vid/echo200ms_072.mp4', 'path': 'merge_vid/echo200ms_072.mp4'},
    {'name': 'SJ_vid/0ms_099.mp4', 'path': 'SJ_vid/0ms_099.mp4'},
    {'name': 'images/frisör.png', 'path': 'images/frisör.png'},
    {'name': 'images/roboter.png', 'path': 'images/roboter.png'},
    {'name': 'SJ_vid/echo200ms_098.mp4', 'path': 'SJ_vid/echo200ms_098.mp4'},
    {'name': 'SJ_1.xlsx', 'path': 'SJ_1.xlsx'},
    {'name': 'SJ_vid/echo200ms_097.mp4', 'path': 'SJ_vid/echo200ms_097.mp4'},
    {'name': 'SJ_vid/echo15ms_082.mp4', 'path': 'SJ_vid/echo15ms_082.mp4'},
    {'name': 'SJ_vid/echo15ms_089.mp4', 'path': 'SJ_vid/echo15ms_089.mp4'},
    {'name': 'images/matrose.png', 'path': 'images/matrose.png'},
    {'name': 'SJ_vid/echo200ms_094.mp4', 'path': 'SJ_vid/echo200ms_094.mp4'},
    {'name': 'SJ_vid/0ms_095.mp4', 'path': 'SJ_vid/0ms_095.mp4'},
    {'name': 'images/pfarrer.png', 'path': 'images/pfarrer.png'},
    {'name': 'images/wikinger.png', 'path': 'images/wikinger.png'},
    {'name': 'SJ_vid/200ms_089.mp4', 'path': 'SJ_vid/200ms_089.mp4'},
    {'name': 'SJ_vid/15ms_100.mp4', 'path': 'SJ_vid/15ms_100.mp4'},
    {'name': 'SJ_vid/0ms_089.mp4', 'path': 'SJ_vid/0ms_089.mp4'},
    {'name': 'images/soldat.png', 'path': 'images/soldat.png'},
    {'name': 'SJ_vid/0ms_097.mp4', 'path': 'SJ_vid/0ms_097.mp4'},
    {'name': 'images/gärtner.png', 'path': 'images/gärtner.png'},
    {'name': 'images/lehrer.png', 'path': 'images/lehrer.png'},
    {'name': 'SJ_vid/200ms_084.mp4', 'path': 'SJ_vid/200ms_084.mp4'},
    {'name': 'SJ_vid/echo15ms_088.mp4', 'path': 'SJ_vid/echo15ms_088.mp4'},
    {'name': 'SJ_vid/echo200ms_082.mp4', 'path': 'SJ_vid/echo200ms_082.mp4'},
    {'name': 'SJ_vid/15ms_081.mp4', 'path': 'SJ_vid/15ms_081.mp4'},
    {'name': 'SJ_vid/0ms_100.mp4', 'path': 'SJ_vid/0ms_100.mp4'},
    {'name': 'images/büffel.png', 'path': 'images/büffel.png'},
    {'name': 'SJ_vid/15ms_091.mp4', 'path': 'SJ_vid/15ms_091.mp4'},
    {'name': 'SJ_vid/15ms_093.mp4', 'path': 'SJ_vid/15ms_093.mp4'},
    {'name': 'SJ_vid/0ms_083.mp4', 'path': 'SJ_vid/0ms_083.mp4'},
    {'name': 'SJ_vid/15ms_097.mp4', 'path': 'SJ_vid/15ms_097.mp4'},
    {'name': 'images/right.png', 'path': 'images/right.png'},
    {'name': 'SJ_vid/200ms_094.mp4', 'path': 'SJ_vid/200ms_094.mp4'},
    {'name': 'images/koala.png', 'path': 'images/koala.png'},
    {'name': 'SJ_vid/0ms_094.mp4', 'path': 'SJ_vid/0ms_094.mp4'},
    {'name': 'SJ_vid/15ms_096.mp4', 'path': 'SJ_vid/15ms_096.mp4'},
    {'name': 'SJ_vid/200ms_092.mp4', 'path': 'SJ_vid/200ms_092.mp4'},
    {'name': 'images/mann.png', 'path': 'images/mann.png'},
    {'name': 'images/tourist.png', 'path': 'images/tourist.png'},
    {'name': 'merge_vid/echo200ms_055.mp4', 'path': 'merge_vid/echo200ms_055.mp4'},
    {'name': 'images/hund.png', 'path': 'images/hund.png'},
    {'name': 'merge_vid/echo15ms_011.mp4', 'path': 'merge_vid/echo15ms_011.mp4'},
    {'name': 'images/pirat.png', 'path': 'images/pirat.png'},
    {'name': 'images/radfahrer.png', 'path': 'images/radfahrer.png'},
    {'name': 'merge_vid/0ms_072.mp4', 'path': 'merge_vid/0ms_072.mp4'},
    {'name': 'SJ_vid/echo15ms_095.mp4', 'path': 'SJ_vid/echo15ms_095.mp4'},
    {'name': 'merge_vid/0ms_016.mp4', 'path': 'merge_vid/0ms_016.mp4'},
    {'name': 'SJ_vid/200ms_083.mp4', 'path': 'SJ_vid/200ms_083.mp4'},
    {'name': 'images/elch.png', 'path': 'images/elch.png'},
    {'name': 'SJ_vid/15ms_086.mp4', 'path': 'SJ_vid/15ms_086.mp4'},
    {'name': 'SJ_vid/200ms_099.mp4', 'path': 'SJ_vid/200ms_099.mp4'},
    {'name': 'images/jäger.png', 'path': 'images/jäger.png'},
    {'name': 'SJ_vid/15ms_098.mp4', 'path': 'SJ_vid/15ms_098.mp4'},
    {'name': 'images/junge.png', 'path': 'images/junge.png'},
    {'name': 'images/ritter.png', 'path': 'images/ritter.png'},
    {'name': 'images/cowboy.png', 'path': 'images/cowboy.png'},
    {'name': 'SJ_vid/0ms_093.mp4', 'path': 'SJ_vid/0ms_093.mp4'},
    {'name': 'SJ_vid/15ms_094.mp4', 'path': 'SJ_vid/15ms_094.mp4'},
    {'name': 'SJ_vid/echo200ms_099.mp4', 'path': 'SJ_vid/echo200ms_099.mp4'},
    {'name': 'SJ_vid/echo15ms_099.mp4', 'path': 'SJ_vid/echo15ms_099.mp4'},
    {'name': 'images/richter.png', 'path': 'images/richter.png'},
    {'name': 'SJ_vid/echo200ms_090.mp4', 'path': 'SJ_vid/echo200ms_090.mp4'},
    {'name': 'images/maulwurf.png', 'path': 'images/maulwurf.png'},
    {'name': 'images/arzt.png', 'path': 'images/arzt.png'},
    {'name': 'SJ_vid/0ms_081.mp4', 'path': 'SJ_vid/0ms_081.mp4'},
    {'name': 'SJ_vid/echo200ms_089.mp4', 'path': 'SJ_vid/echo200ms_089.mp4'},
    {'name': 'group_1.xlsx', 'path': 'group_1.xlsx'},
    {'name': 'merge_vid/echo15ms_055.mp4', 'path': 'merge_vid/echo15ms_055.mp4'},
    {'name': 'images/clown.png', 'path': 'images/clown.png'},
    {'name': 'SJ_vid/200ms_086.mp4', 'path': 'SJ_vid/200ms_086.mp4'},
    {'name': 'merge_vid/200ms_016.mp4', 'path': 'merge_vid/200ms_016.mp4'},
    {'name': 'images/lehrerin.png', 'path': 'images/lehrerin.png'},
    {'name': 'SJ_vid/200ms_085.mp4', 'path': 'SJ_vid/200ms_085.mp4'},
    {'name': 'images/kasper.png', 'path': 'images/kasper.png'},
    {'name': 'SJ_vid/echo15ms_098.mp4', 'path': 'SJ_vid/echo15ms_098.mp4'},
    {'name': 'images/left.png', 'path': 'images/left.png'},
    {'name': 'images/esel.png', 'path': 'images/esel.png'},
    {'name': 'images/bräutigam.png', 'path': 'images/bräutigam.png'},
    {'name': 'images/ente.png', 'path': 'images/ente.png'},
    {'name': 'SJ_vid/15ms_082.mp4', 'path': 'SJ_vid/15ms_082.mp4'},
    {'name': 'merge_vid/echo200ms_016.mp4', 'path': 'merge_vid/echo200ms_016.mp4'},
    {'name': 'images/vater.png', 'path': 'images/vater.png'},
    {'name': 'group_2.xlsx', 'path': 'group_2.xlsx'},
    {'name': 'images/polizist.png', 'path': 'images/polizist.png'},
    {'name': 'images/dieb.png', 'path': 'images/dieb.png'},
    {'name': 'images/hase.png', 'path': 'images/hase.png'},
    {'name': 'SJ_vid/0ms_086.mp4', 'path': 'SJ_vid/0ms_086.mp4'},
    {'name': 'merge_vid/200ms_055.mp4', 'path': 'merge_vid/200ms_055.mp4'},
    {'name': 'images/kobold.png', 'path': 'images/kobold.png'},
    {'name': 'images/nashorn.png', 'path': 'images/nashorn.png'},
    {'name': 'merge_vid/15ms_016.mp4', 'path': 'merge_vid/15ms_016.mp4'},
    {'name': 'SJ_vid/echo15ms_100.mp4', 'path': 'SJ_vid/echo15ms_100.mp4'},
    {'name': 'SJ_vid/echo15ms_094.mp4', 'path': 'SJ_vid/echo15ms_094.mp4'},
    {'name': 'SJ_vid/15ms_099.mp4', 'path': 'SJ_vid/15ms_099.mp4'},
    {'name': 'SJ_vid/0ms_092.mp4', 'path': 'SJ_vid/0ms_092.mp4'},
    {'name': 'SJ_0.xlsx', 'path': 'SJ_0.xlsx'},
    {'name': 'group_0.xlsx', 'path': 'group_0.xlsx'},
    {'name': 'SJ_vid/echo15ms_090.mp4', 'path': 'SJ_vid/echo15ms_090.mp4'},
    {'name': 'SJ_vid/200ms_082.mp4', 'path': 'SJ_vid/200ms_082.mp4'},
    {'name': 'SJ_vid/echo200ms_095.mp4', 'path': 'SJ_vid/echo200ms_095.mp4'},
    {'name': 'merge_vid/0ms_081.mp4', 'path': 'merge_vid/0ms_081.mp4'},
    {'name': 'SJ_vid/200ms_091.mp4', 'path': 'SJ_vid/200ms_091.mp4'},
    {'name': 'images/tiger.png', 'path': 'images/tiger.png'},
    {'name': 'SJ_vid/15ms_085.mp4', 'path': 'SJ_vid/15ms_085.mp4'},
    {'name': 'images/papst.png', 'path': 'images/papst.png'},
    {'name': 'merge_vid/echo15ms_016.mp4', 'path': 'merge_vid/echo15ms_016.mp4'},
    {'name': 'SJ_vid/echo15ms_097.mp4', 'path': 'SJ_vid/echo15ms_097.mp4'},
    {'name': 'SJ_vid/echo200ms_081.mp4', 'path': 'SJ_vid/echo200ms_081.mp4'},
    {'name': 'SJ_vid/echo200ms_092.mp4', 'path': 'SJ_vid/echo200ms_092.mp4'},
    {'name': 'SJ_vid/15ms_089.mp4', 'path': 'SJ_vid/15ms_089.mp4'},
    {'name': 'images/zauberer.png', 'path': 'images/zauberer.png'},
    {'name': 'group_3.xlsx', 'path': 'group_3.xlsx'},
    {'name': 'SJ_vid/0ms_096.mp4', 'path': 'SJ_vid/0ms_096.mp4'},
    {'name': 'resources_0.xlsx', 'path': 'resources_0.xlsx'},
    {'name': 'images/koch.png', 'path': 'images/koch.png'},
    {'name': 'images/räuber.png', 'path': 'images/räuber.png'},
    {'name': 'SJ_vid/15ms_088.mp4', 'path': 'SJ_vid/15ms_088.mp4'},
    {'name': 'images/drache.png', 'path': 'images/drache.png'},
    {'name': 'images/maler.png', 'path': 'images/maler.png'},
    {'name': 'training.xlsx', 'path': 'training.xlsx'},
    {'name': 'SJ_vid/echo15ms_093.mp4', 'path': 'SJ_vid/echo15ms_093.mp4'},
    {'name': 'SJ_vid/0ms_085.mp4', 'path': 'SJ_vid/0ms_085.mp4'},
    {'name': 'SJ_vid/echo200ms_088.mp4', 'path': 'SJ_vid/echo200ms_088.mp4'},
    {'name': 'images/astronaut.png', 'path': 'images/astronaut.png'},
    {'name': 'images/bäcker.png', 'path': 'images/bäcker.png'},
    {'name': 'images/up.png', 'path': 'images/up.png'},
    {'name': 'SJ_vid/echo200ms_100.mp4', 'path': 'SJ_vid/echo200ms_100.mp4'},
    {'name': 'SJ_vid/0ms_087.mp4', 'path': 'SJ_vid/0ms_087.mp4'},
    {'name': 'SJ_vid/echo200ms_084.mp4', 'path': 'SJ_vid/echo200ms_084.mp4'},
    {'name': 'SJ_vid/echo15ms_086.mp4', 'path': 'SJ_vid/echo15ms_086.mp4'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://spellout.net/ibexexps/BA_Aron/feedback_form/experiment.html', '');

  return Scheduler.Event.NEXT;
}


var setupClock;
var group;
var group_file;
var white;
var grey;
var yellow;
var green;
var black;
var red;
var font_color;
var imagePos;
var thisExp;
var win;
var event;
var shuffle;
var trial_counter;
var welcome_screenClock;
var cont;
var welcome;
var loadingClock;
var loading_text;
var key_resp_3;
var ageClock;
var age_q;
var age_resp;
var languageClock;
var respons;
var left_arrow;
var right_arrow;
var ja;
var nein;
var question;
var hearingClock;
var respons_2;
var left_arrow_2;
var right_arrow_2;
var ja_2;
var nein_2;
var question_2;
var genderClock;
var respons_3;
var left_arrow_3;
var right_arrow_3;
var maennlich;
var weiblich;
var question_3;
var dom_handClock;
var respons_4;
var left_arrow_4;
var right_arrow_4;
var ja_3;
var nein_3;
var question_4;
var environmentClock;
var respons_5;
var left_arrow_5;
var right_arrow_5;
var ja_4;
var nein_4;
var question_5;
var visionClock;
var respons_6;
var left_arrow_6;
var right_arrow_6;
var ja_5;
var nein_5;
var question_6;
var asdClock;
var respons_7;
var left_arrow_7;
var right_arrow_7;
var ja_6;
var nein_6;
var question_7;
var psychClock;
var respons_8;
var left_arrow_8;
var right_arrow_8;
var ja_7;
var nein_7;
var question_8;
var adjust_soundClock;
var done;
var text_3;
var notesClock;
var text;
var instruction;
var choice_instrClock;
var key_resp_4;
var text_5;
var choice_instr_2Clock;
var key_resp_5;
var text_7;
var choice_instr_3Clock;
var key_resp_6;
var text_8;
var show_targetClock;
var target;
var quest;
var stimulus_choiceClock;
var response_2;
var fix_cross_2;
var stimulus_2;
var stimulus_3;
var left_arrow_9;
var right_arrow_9;
var up_arrow;
var training_completeClock;
var feedback;
var key_resp_2;
var SJ_instrClock;
var sync;
var key_resp_7;
var SJ_stim_presentationClock;
var fix_cross_3;
var SJ_question_sychronicityClock;
var response_sync;
var right_arrow_11;
var left_arrow_11;
var ja_9;
var nein_9;
var question_synchronicity;
var SJ_question_distortionClock;
var response_distortion;
var right_arrow_12;
var left_arrow_12;
var ja_10;
var nein_10;
var question_distortion;
var skipperClock;
var pauseClock;
var pause_msg;
var key_resp;
var progress;
var closeClock;
var vp_hours;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  group = (Number.parseInt(expInfo["participant"]) % 5);
  expInfo["group"] = group;
  group_file = "";
  if ((group === 0)) {
      group_file = "group_0.xlsx";
  }
  if ((group === 1)) {
      group_file = "group_1.xlsx";
  }
  if ((group === 2)) {
      group_file = "group_2.xlsx";
  }
  if ((group === 3)) {
      group_file = "group_3.xlsx";
  }
  if ((group === 4)) {
      group_file = "group_4.xlsx";
  }
  console.log(("set group to " + group.toString()));
  
  if (group == 4 ) {
    psychoJS.downloadResources([
  { name: ("merge_vid/echo200ms_002.mp4"), path: ("merge_vid/echo200ms_002.mp4") },
  { name: ("merge_vid/0ms_002.mp4"), path: ("merge_vid/0ms_002.mp4") },
  { name: ("merge_vid/15ms_003.mp4"), path: ("merge_vid/15ms_003.mp4") },
  { name: ("merge_vid/200ms_003.mp4"), path: ("merge_vid/200ms_003.mp4") },
  { name: ("merge_vid/echo15ms_004.mp4"), path: ("merge_vid/echo15ms_004.mp4") },
  { name: ("merge_vid/echo200ms_004.mp4"), path: ("merge_vid/echo200ms_004.mp4") },
  { name: ("merge_vid/0ms_005.mp4"), path: ("merge_vid/0ms_005.mp4") },
  { name: ("merge_vid/15ms_005.mp4"), path: ("merge_vid/15ms_005.mp4") },
  { name: ("merge_vid/200ms_006.mp4"), path: ("merge_vid/200ms_006.mp4") },
  { name: ("merge_vid/echo15ms_006.mp4"), path: ("merge_vid/echo15ms_006.mp4") },
  { name: ("merge_vid/echo200ms_007.mp4"), path: ("merge_vid/echo200ms_007.mp4") },
  { name: ("merge_vid/0ms_007.mp4"), path: ("merge_vid/0ms_007.mp4") },
  { name: ("merge_vid/15ms_008.mp4"), path: ("merge_vid/15ms_008.mp4") },
  { name: ("merge_vid/200ms_008.mp4"), path: ("merge_vid/200ms_008.mp4") },
  { name: ("merge_vid/echo15ms_009.mp4"), path: ("merge_vid/echo15ms_009.mp4") },
  { name: ("merge_vid/echo200ms_009.mp4"), path: ("merge_vid/echo200ms_009.mp4") },
  { name: ("merge_vid/0ms_010.mp4"), path: ("merge_vid/0ms_010.mp4") },
  { name: ("merge_vid/15ms_010.mp4"), path: ("merge_vid/15ms_010.mp4") },
  { name: ("merge_vid/200ms_012.mp4"), path: ("merge_vid/200ms_012.mp4") },
  { name: ("merge_vid/echo15ms_012.mp4"), path: ("merge_vid/echo15ms_012.mp4") },
  { name: ("merge_vid/echo200ms_013.mp4"), path: ("merge_vid/echo200ms_013.mp4") },
  { name: ("merge_vid/0ms_013.mp4"), path: ("merge_vid/0ms_013.mp4") },
  { name: ("merge_vid/15ms_014.mp4"), path: ("merge_vid/15ms_014.mp4") },
  { name: ("merge_vid/200ms_014.mp4"), path: ("merge_vid/200ms_014.mp4") },
  { name: ("merge_vid/echo15ms_015.mp4"), path: ("merge_vid/echo15ms_015.mp4") },
  { name: ("merge_vid/echo200ms_015.mp4"), path: ("merge_vid/echo200ms_015.mp4") },
  { name: ("merge_vid/0ms_017.mp4"), path: ("merge_vid/0ms_017.mp4") },
  { name: ("merge_vid/15ms_017.mp4"), path: ("merge_vid/15ms_017.mp4") },
  { name: ("merge_vid/200ms_019.mp4"), path: ("merge_vid/200ms_019.mp4") },
  { name: ("merge_vid/echo15ms_019.mp4"), path: ("merge_vid/echo15ms_019.mp4") },
  { name: ("merge_vid/echo200ms_020.mp4"), path: ("merge_vid/echo200ms_020.mp4") },
  { name: ("merge_vid/0ms_020.mp4"), path: ("merge_vid/0ms_020.mp4") },
  { name: ("merge_vid/15ms_021.mp4"), path: ("merge_vid/15ms_021.mp4") },
  { name: ("merge_vid/200ms_021.mp4"), path: ("merge_vid/200ms_021.mp4") },
  { name: ("merge_vid/echo15ms_022.mp4"), path: ("merge_vid/echo15ms_022.mp4") },
  { name: ("merge_vid/echo200ms_022.mp4"), path: ("merge_vid/echo200ms_022.mp4") },
  { name: ("merge_vid/0ms_023.mp4"), path: ("merge_vid/0ms_023.mp4") },
  { name: ("merge_vid/15ms_023.mp4"), path: ("merge_vid/15ms_023.mp4") },
  { name: ("merge_vid/200ms_024.mp4"), path: ("merge_vid/200ms_024.mp4") },
  { name: ("merge_vid/echo15ms_024.mp4"), path: ("merge_vid/echo15ms_024.mp4") },
  { name: ("merge_vid/echo200ms_025.mp4"), path: ("merge_vid/echo200ms_025.mp4") },
  { name: ("merge_vid/0ms_025.mp4"), path: ("merge_vid/0ms_025.mp4") },
  { name: ("merge_vid/15ms_026.mp4"), path: ("merge_vid/15ms_026.mp4") },
  { name: ("merge_vid/200ms_026.mp4"), path: ("merge_vid/200ms_026.mp4") },
  { name: ("merge_vid/echo15ms_027.mp4"), path: ("merge_vid/echo15ms_027.mp4") },
  { name: ("merge_vid/echo200ms_027.mp4"), path: ("merge_vid/echo200ms_027.mp4") },
  { name: ("merge_vid/0ms_028.mp4"), path: ("merge_vid/0ms_028.mp4") },
  { name: ("merge_vid/15ms_028.mp4"), path: ("merge_vid/15ms_028.mp4") },
  { name: ("merge_vid/200ms_029.mp4"), path: ("merge_vid/200ms_029.mp4") },
  { name: ("merge_vid/echo15ms_029.mp4"), path: ("merge_vid/echo15ms_029.mp4") },
  { name: ("merge_vid/echo200ms_030.mp4"), path: ("merge_vid/echo200ms_030.mp4") },
  { name: ("merge_vid/0ms_030.mp4"), path: ("merge_vid/0ms_030.mp4") },
  { name: ("merge_vid/15ms_031.mp4"), path: ("merge_vid/15ms_031.mp4") },
  { name: ("merge_vid/200ms_031.mp4"), path: ("merge_vid/200ms_031.mp4") },
  { name: ("merge_vid/echo15ms_033.mp4"), path: ("merge_vid/echo15ms_033.mp4") },
  { name: ("merge_vid/echo200ms_033.mp4"), path: ("merge_vid/echo200ms_033.mp4") },
  { name: ("merge_vid/0ms_034.mp4"), path: ("merge_vid/0ms_034.mp4") },
  { name: ("merge_vid/15ms_034.mp4"), path: ("merge_vid/15ms_034.mp4") },
  { name: ("merge_vid/200ms_035.mp4"), path: ("merge_vid/200ms_035.mp4") },
  { name: ("merge_vid/echo15ms_035.mp4"), path: ("merge_vid/echo15ms_035.mp4") },
  { name: ("merge_vid/echo200ms_036.mp4"), path: ("merge_vid/echo200ms_036.mp4") },
  { name: ("merge_vid/0ms_036.mp4"), path: ("merge_vid/0ms_036.mp4") },
  { name: ("merge_vid/15ms_037.mp4"), path: ("merge_vid/15ms_037.mp4") },
  { name: ("merge_vid/200ms_037.mp4"), path: ("merge_vid/200ms_037.mp4") },
  { name: ("merge_vid/echo15ms_038.mp4"), path: ("merge_vid/echo15ms_038.mp4") },
  { name: ("merge_vid/echo200ms_038.mp4"), path: ("merge_vid/echo200ms_038.mp4") },
  { name: ("merge_vid/0ms_039.mp4"), path: ("merge_vid/0ms_039.mp4") },
  { name: ("merge_vid/15ms_039.mp4"), path: ("merge_vid/15ms_039.mp4") },
  { name: ("merge_vid/200ms_040.mp4"), path: ("merge_vid/200ms_040.mp4") },
  { name: ("merge_vid/echo15ms_040.mp4"), path: ("merge_vid/echo15ms_040.mp4") },
  { name: ("merge_vid/echo200ms_041.mp4"), path: ("merge_vid/echo200ms_041.mp4") },
  { name: ("merge_vid/0ms_041.mp4"), path: ("merge_vid/0ms_041.mp4") },
  { name: ("merge_vid/15ms_042.mp4"), path: ("merge_vid/15ms_042.mp4") },
  { name: ("merge_vid/200ms_042.mp4"), path: ("merge_vid/200ms_042.mp4") },
  { name: ("merge_vid/echo15ms_043.mp4"), path: ("merge_vid/echo15ms_043.mp4") },
  { name: ("merge_vid/echo200ms_043.mp4"), path: ("merge_vid/echo200ms_043.mp4") },
  { name: ("merge_vid/0ms_044.mp4"), path: ("merge_vid/0ms_044.mp4") },
  { name: ("merge_vid/15ms_044.mp4"), path: ("merge_vid/15ms_044.mp4") },
  { name: ("merge_vid/200ms_045.mp4"), path: ("merge_vid/200ms_045.mp4") },
  { name: ("merge_vid/echo15ms_045.mp4"), path: ("merge_vid/echo15ms_045.mp4") },
  { name: ("merge_vid/echo200ms_046.mp4"), path: ("merge_vid/echo200ms_046.mp4") },
  { name: ("merge_vid/0ms_046.mp4"), path: ("merge_vid/0ms_046.mp4") },
  { name: ("merge_vid/15ms_047.mp4"), path: ("merge_vid/15ms_047.mp4") },
  { name: ("merge_vid/200ms_047.mp4"), path: ("merge_vid/200ms_047.mp4") },
  { name: ("merge_vid/echo15ms_048.mp4"), path: ("merge_vid/echo15ms_048.mp4") },
  { name: ("merge_vid/echo200ms_048.mp4"), path: ("merge_vid/echo200ms_048.mp4") },
  { name: ("merge_vid/0ms_049.mp4"), path: ("merge_vid/0ms_049.mp4") },
  { name: ("merge_vid/15ms_049.mp4"), path: ("merge_vid/15ms_049.mp4") },
  { name: ("merge_vid/200ms_050.mp4"), path: ("merge_vid/200ms_050.mp4") },
  { name: ("merge_vid/echo15ms_050.mp4"), path: ("merge_vid/echo15ms_050.mp4") },
  { name: ("merge_vid/echo200ms_051.mp4"), path: ("merge_vid/echo200ms_051.mp4") },
  { name: ("merge_vid/0ms_051.mp4"), path: ("merge_vid/0ms_051.mp4") },
  { name: ("merge_vid/15ms_052.mp4"), path: ("merge_vid/15ms_052.mp4") },
  { name: ("merge_vid/200ms_052.mp4"), path: ("merge_vid/200ms_052.mp4") },
  { name: ("merge_vid/echo15ms_053.mp4"), path: ("merge_vid/echo15ms_053.mp4") },
  { name: ("merge_vid/echo200ms_053.mp4"), path: ("merge_vid/echo200ms_053.mp4") },
  { name: ("merge_vid/0ms_054.mp4"), path: ("merge_vid/0ms_054.mp4") },
  { name: ("merge_vid/15ms_054.mp4"), path: ("merge_vid/15ms_054.mp4") },
  { name: ("merge_vid/200ms_055.mp4"), path: ("merge_vid/200ms_055.mp4") },
  { name: ("merge_vid/echo15ms_055.mp4"), path: ("merge_vid/echo15ms_055.mp4") },
  { name: ("merge_vid/echo200ms_056.mp4"), path: ("merge_vid/echo200ms_056.mp4") },
  { name: ("merge_vid/0ms_056.mp4"), path: ("merge_vid/0ms_056.mp4") },
  { name: ("merge_vid/15ms_058.mp4"), path: ("merge_vid/15ms_058.mp4") },
  { name: ("merge_vid/200ms_058.mp4"), path: ("merge_vid/200ms_058.mp4") },
  { name: ("merge_vid/echo15ms_059.mp4"), path: ("merge_vid/echo15ms_059.mp4") },
  { name: ("merge_vid/echo200ms_059.mp4"), path: ("merge_vid/echo200ms_059.mp4") },
  { name: ("merge_vid/0ms_060.mp4"), path: ("merge_vid/0ms_060.mp4") },
  { name: ("merge_vid/15ms_060.mp4"), path: ("merge_vid/15ms_060.mp4") },
  { name: ("merge_vid/200ms_061.mp4"), path: ("merge_vid/200ms_061.mp4") },
  { name: ("merge_vid/echo15ms_061.mp4"), path: ("merge_vid/echo15ms_061.mp4") },
  { name: ("merge_vid/echo200ms_062.mp4"), path: ("merge_vid/echo200ms_062.mp4") },
  { name: ("merge_vid/0ms_062.mp4"), path: ("merge_vid/0ms_062.mp4") },
  { name: ("merge_vid/15ms_063.mp4"), path: ("merge_vid/15ms_063.mp4") },
  { name: ("merge_vid/200ms_063.mp4"), path: ("merge_vid/200ms_063.mp4") },
  { name: ("merge_vid/echo15ms_064.mp4"), path: ("merge_vid/echo15ms_064.mp4") },
  { name: ("merge_vid/echo200ms_064.mp4"), path: ("merge_vid/echo200ms_064.mp4") },
  { name: ("merge_vid/0ms_066.mp4"), path: ("merge_vid/0ms_066.mp4") },
  { name: ("merge_vid/15ms_066.mp4"), path: ("merge_vid/15ms_066.mp4") },
  { name: ("merge_vid/200ms_067.mp4"), path: ("merge_vid/200ms_067.mp4") },
  { name: ("merge_vid/echo15ms_067.mp4"), path: ("merge_vid/echo15ms_067.mp4") },
  { name: ("merge_vid/echo200ms_069.mp4"), path: ("merge_vid/echo200ms_069.mp4") },
  { name: ("merge_vid/0ms_069.mp4"), path: ("merge_vid/0ms_069.mp4") },
  { name: ("merge_vid/15ms_070.mp4"), path: ("merge_vid/15ms_070.mp4") },
  { name: ("merge_vid/200ms_070.mp4"), path: ("merge_vid/200ms_070.mp4") },
  { name: ("merge_vid/echo15ms_071.mp4"), path: ("merge_vid/echo15ms_071.mp4") },
  { name: ("merge_vid/echo200ms_071.mp4"), path: ("merge_vid/echo200ms_071.mp4") },
  { name: ("merge_vid/0ms_073.mp4"), path: ("merge_vid/0ms_073.mp4") },
  { name: ("merge_vid/15ms_073.mp4"), path: ("merge_vid/15ms_073.mp4") },
  { name: ("merge_vid/200ms_074.mp4"), path: ("merge_vid/200ms_074.mp4") },
  { name: ("merge_vid/echo15ms_074.mp4"), path: ("merge_vid/echo15ms_074.mp4") },
  { name: ("merge_vid/echo200ms_075.mp4"), path: ("merge_vid/echo200ms_075.mp4") },
  { name: ("merge_vid/0ms_075.mp4"), path: ("merge_vid/0ms_075.mp4") },
  { name: ("merge_vid/15ms_076.mp4"), path: ("merge_vid/15ms_076.mp4") },
  { name: ("merge_vid/200ms_076.mp4"), path: ("merge_vid/200ms_076.mp4") },
  { name: ("merge_vid/echo15ms_077.mp4"), path: ("merge_vid/echo15ms_077.mp4") },
  { name: ("merge_vid/echo200ms_077.mp4"), path: ("merge_vid/echo200ms_077.mp4") },
  { name: ("merge_vid/0ms_078.mp4"), path: ("merge_vid/0ms_078.mp4") },
  { name: ("merge_vid/15ms_078.mp4"), path: ("merge_vid/15ms_078.mp4") },
  { name: ("merge_vid/200ms_079.mp4"), path: ("merge_vid/200ms_079.mp4") },
  { name: ("merge_vid/echo15ms_079.mp4"), path: ("merge_vid/echo15ms_079.mp4") },
  { name: ("merge_vid/echo200ms_001.mp4"), path: ("merge_vid/echo200ms_001.mp4") },
  { name: ("merge_vid/0ms_001.mp4"), path: ("merge_vid/0ms_001.mp4") },
  { name: ("merge_vid/15ms_011.mp4"), path: ("merge_vid/15ms_011.mp4") },
  { name: ("merge_vid/200ms_011.mp4"), path: ("merge_vid/200ms_011.mp4") },
  { name: ("merge_vid/echo15ms_016.mp4"), path: ("merge_vid/echo15ms_016.mp4") },
  { name: ("merge_vid/echo200ms_016.mp4"), path: ("merge_vid/echo200ms_016.mp4") },
  { name: ("merge_vid/0ms_018.mp4"), path: ("merge_vid/0ms_018.mp4") },
  { name: ("merge_vid/15ms_018.mp4"), path: ("merge_vid/15ms_018.mp4") },
  { name: ("merge_vid/200ms_032.mp4"), path: ("merge_vid/200ms_032.mp4") },
  { name: ("merge_vid/echo15ms_032.mp4"), path: ("merge_vid/echo15ms_032.mp4") },
  { name: ("merge_vid/echo200ms_055.mp4"), path: ("merge_vid/echo200ms_055.mp4") },
  { name: ("merge_vid/0ms_055.mp4"), path: ("merge_vid/0ms_055.mp4") },
  { name: ("merge_vid/15ms_057.mp4"), path: ("merge_vid/15ms_057.mp4") },
  { name: ("merge_vid/200ms_057.mp4"), path: ("merge_vid/200ms_057.mp4") },
  { name: ("merge_vid/echo15ms_065.mp4"), path: ("merge_vid/echo15ms_065.mp4") },
  { name: ("merge_vid/echo200ms_065.mp4"), path: ("merge_vid/echo200ms_065.mp4") },
  { name: ("merge_vid/0ms_068.mp4"), path: ("merge_vid/0ms_068.mp4") },
  { name: ("merge_vid/15ms_068.mp4"), path: ("merge_vid/15ms_068.mp4") },
  { name: ("merge_vid/200ms_072.mp4"), path: ("merge_vid/200ms_072.mp4") },
  { name: ("merge_vid/echo15ms_072.mp4"), path: ("merge_vid/echo15ms_072.mp4") },
  { name: ("dummy"), path: ("dummy.xlsx") }]);
  console.log("started loading resources");
  }
  
  if (group == 3 ) {
    psychoJS.downloadResources([
  { name: ("merge_vid/echo15ms_002.mp4"), path: ("merge_vid/echo15ms_002.mp4") },
  { name: ("merge_vid/echo200ms_002.mp4"), path: ("merge_vid/echo200ms_002.mp4") },
  { name: ("merge_vid/0ms_003.mp4"), path: ("merge_vid/0ms_003.mp4") },
  { name: ("merge_vid/15ms_003.mp4"), path: ("merge_vid/15ms_003.mp4") },
  { name: ("merge_vid/200ms_004.mp4"), path: ("merge_vid/200ms_004.mp4") },
  { name: ("merge_vid/echo15ms_004.mp4"), path: ("merge_vid/echo15ms_004.mp4") },
  { name: ("merge_vid/echo200ms_005.mp4"), path: ("merge_vid/echo200ms_005.mp4") },
  { name: ("merge_vid/0ms_005.mp4"), path: ("merge_vid/0ms_005.mp4") },
  { name: ("merge_vid/15ms_006.mp4"), path: ("merge_vid/15ms_006.mp4") },
  { name: ("merge_vid/200ms_006.mp4"), path: ("merge_vid/200ms_006.mp4") },
  { name: ("merge_vid/echo15ms_007.mp4"), path: ("merge_vid/echo15ms_007.mp4") },
  { name: ("merge_vid/echo200ms_007.mp4"), path: ("merge_vid/echo200ms_007.mp4") },
  { name: ("merge_vid/0ms_008.mp4"), path: ("merge_vid/0ms_008.mp4") },
  { name: ("merge_vid/15ms_008.mp4"), path: ("merge_vid/15ms_008.mp4") },
  { name: ("merge_vid/200ms_009.mp4"), path: ("merge_vid/200ms_009.mp4") },
  { name: ("merge_vid/echo15ms_009.mp4"), path: ("merge_vid/echo15ms_009.mp4") },
  { name: ("merge_vid/echo200ms_010.mp4"), path: ("merge_vid/echo200ms_010.mp4") },
  { name: ("merge_vid/0ms_010.mp4"), path: ("merge_vid/0ms_010.mp4") },
  { name: ("merge_vid/15ms_012.mp4"), path: ("merge_vid/15ms_012.mp4") },
  { name: ("merge_vid/200ms_012.mp4"), path: ("merge_vid/200ms_012.mp4") },
  { name: ("merge_vid/echo15ms_013.mp4"), path: ("merge_vid/echo15ms_013.mp4") },
  { name: ("merge_vid/echo200ms_013.mp4"), path: ("merge_vid/echo200ms_013.mp4") },
  { name: ("merge_vid/0ms_014.mp4"), path: ("merge_vid/0ms_014.mp4") },
  { name: ("merge_vid/15ms_014.mp4"), path: ("merge_vid/15ms_014.mp4") },
  { name: ("merge_vid/200ms_015.mp4"), path: ("merge_vid/200ms_015.mp4") },
  { name: ("merge_vid/echo15ms_015.mp4"), path: ("merge_vid/echo15ms_015.mp4") },
  { name: ("merge_vid/echo200ms_017.mp4"), path: ("merge_vid/echo200ms_017.mp4") },
  { name: ("merge_vid/0ms_017.mp4"), path: ("merge_vid/0ms_017.mp4") },
  { name: ("merge_vid/15ms_019.mp4"), path: ("merge_vid/15ms_019.mp4") },
  { name: ("merge_vid/200ms_019.mp4"), path: ("merge_vid/200ms_019.mp4") },
  { name: ("merge_vid/echo15ms_020.mp4"), path: ("merge_vid/echo15ms_020.mp4") },
  { name: ("merge_vid/echo200ms_020.mp4"), path: ("merge_vid/echo200ms_020.mp4") },
  { name: ("merge_vid/0ms_021.mp4"), path: ("merge_vid/0ms_021.mp4") },
  { name: ("merge_vid/15ms_021.mp4"), path: ("merge_vid/15ms_021.mp4") },
  { name: ("merge_vid/200ms_022.mp4"), path: ("merge_vid/200ms_022.mp4") },
  { name: ("merge_vid/echo15ms_022.mp4"), path: ("merge_vid/echo15ms_022.mp4") },
  { name: ("merge_vid/echo200ms_023.mp4"), path: ("merge_vid/echo200ms_023.mp4") },
  { name: ("merge_vid/0ms_023.mp4"), path: ("merge_vid/0ms_023.mp4") },
  { name: ("merge_vid/15ms_024.mp4"), path: ("merge_vid/15ms_024.mp4") },
  { name: ("merge_vid/200ms_024.mp4"), path: ("merge_vid/200ms_024.mp4") },
  { name: ("merge_vid/echo15ms_025.mp4"), path: ("merge_vid/echo15ms_025.mp4") },
  { name: ("merge_vid/echo200ms_025.mp4"), path: ("merge_vid/echo200ms_025.mp4") },
  { name: ("merge_vid/0ms_026.mp4"), path: ("merge_vid/0ms_026.mp4") },
  { name: ("merge_vid/15ms_026.mp4"), path: ("merge_vid/15ms_026.mp4") },
  { name: ("merge_vid/200ms_027.mp4"), path: ("merge_vid/200ms_027.mp4") },
  { name: ("merge_vid/echo15ms_027.mp4"), path: ("merge_vid/echo15ms_027.mp4") },
  { name: ("merge_vid/echo200ms_028.mp4"), path: ("merge_vid/echo200ms_028.mp4") },
  { name: ("merge_vid/0ms_028.mp4"), path: ("merge_vid/0ms_028.mp4") },
  { name: ("merge_vid/15ms_029.mp4"), path: ("merge_vid/15ms_029.mp4") },
  { name: ("merge_vid/200ms_029.mp4"), path: ("merge_vid/200ms_029.mp4") },
  { name: ("merge_vid/echo15ms_030.mp4"), path: ("merge_vid/echo15ms_030.mp4") },
  { name: ("merge_vid/echo200ms_030.mp4"), path: ("merge_vid/echo200ms_030.mp4") },
  { name: ("merge_vid/0ms_031.mp4"), path: ("merge_vid/0ms_031.mp4") },
  { name: ("merge_vid/15ms_031.mp4"), path: ("merge_vid/15ms_031.mp4") },
  { name: ("merge_vid/200ms_033.mp4"), path: ("merge_vid/200ms_033.mp4") },
  { name: ("merge_vid/echo15ms_033.mp4"), path: ("merge_vid/echo15ms_033.mp4") },
  { name: ("merge_vid/echo200ms_034.mp4"), path: ("merge_vid/echo200ms_034.mp4") },
  { name: ("merge_vid/0ms_034.mp4"), path: ("merge_vid/0ms_034.mp4") },
  { name: ("merge_vid/15ms_035.mp4"), path: ("merge_vid/15ms_035.mp4") },
  { name: ("merge_vid/200ms_035.mp4"), path: ("merge_vid/200ms_035.mp4") },
  { name: ("merge_vid/echo15ms_036.mp4"), path: ("merge_vid/echo15ms_036.mp4") },
  { name: ("merge_vid/echo200ms_036.mp4"), path: ("merge_vid/echo200ms_036.mp4") },
  { name: ("merge_vid/0ms_037.mp4"), path: ("merge_vid/0ms_037.mp4") },
  { name: ("merge_vid/15ms_037.mp4"), path: ("merge_vid/15ms_037.mp4") },
  { name: ("merge_vid/200ms_038.mp4"), path: ("merge_vid/200ms_038.mp4") },
  { name: ("merge_vid/echo15ms_038.mp4"), path: ("merge_vid/echo15ms_038.mp4") },
  { name: ("merge_vid/echo200ms_039.mp4"), path: ("merge_vid/echo200ms_039.mp4") },
  { name: ("merge_vid/0ms_039.mp4"), path: ("merge_vid/0ms_039.mp4") },
  { name: ("merge_vid/15ms_040.mp4"), path: ("merge_vid/15ms_040.mp4") },
  { name: ("merge_vid/200ms_040.mp4"), path: ("merge_vid/200ms_040.mp4") },
  { name: ("merge_vid/echo15ms_041.mp4"), path: ("merge_vid/echo15ms_041.mp4") },
  { name: ("merge_vid/echo200ms_041.mp4"), path: ("merge_vid/echo200ms_041.mp4") },
  { name: ("merge_vid/0ms_042.mp4"), path: ("merge_vid/0ms_042.mp4") },
  { name: ("merge_vid/15ms_042.mp4"), path: ("merge_vid/15ms_042.mp4") },
  { name: ("merge_vid/200ms_043.mp4"), path: ("merge_vid/200ms_043.mp4") },
  { name: ("merge_vid/echo15ms_043.mp4"), path: ("merge_vid/echo15ms_043.mp4") },
  { name: ("merge_vid/echo200ms_044.mp4"), path: ("merge_vid/echo200ms_044.mp4") },
  { name: ("merge_vid/0ms_044.mp4"), path: ("merge_vid/0ms_044.mp4") },
  { name: ("merge_vid/15ms_045.mp4"), path: ("merge_vid/15ms_045.mp4") },
  { name: ("merge_vid/200ms_045.mp4"), path: ("merge_vid/200ms_045.mp4") },
  { name: ("merge_vid/echo15ms_046.mp4"), path: ("merge_vid/echo15ms_046.mp4") },
  { name: ("merge_vid/echo200ms_046.mp4"), path: ("merge_vid/echo200ms_046.mp4") },
  { name: ("merge_vid/0ms_047.mp4"), path: ("merge_vid/0ms_047.mp4") },
  { name: ("merge_vid/15ms_047.mp4"), path: ("merge_vid/15ms_047.mp4") },
  { name: ("merge_vid/200ms_048.mp4"), path: ("merge_vid/200ms_048.mp4") },
  { name: ("merge_vid/echo15ms_048.mp4"), path: ("merge_vid/echo15ms_048.mp4") },
  { name: ("merge_vid/echo200ms_049.mp4"), path: ("merge_vid/echo200ms_049.mp4") },
  { name: ("merge_vid/0ms_049.mp4"), path: ("merge_vid/0ms_049.mp4") },
  { name: ("merge_vid/15ms_050.mp4"), path: ("merge_vid/15ms_050.mp4") },
  { name: ("merge_vid/200ms_050.mp4"), path: ("merge_vid/200ms_050.mp4") },
  { name: ("merge_vid/echo15ms_051.mp4"), path: ("merge_vid/echo15ms_051.mp4") },
  { name: ("merge_vid/echo200ms_051.mp4"), path: ("merge_vid/echo200ms_051.mp4") },
  { name: ("merge_vid/0ms_052.mp4"), path: ("merge_vid/0ms_052.mp4") },
  { name: ("merge_vid/15ms_052.mp4"), path: ("merge_vid/15ms_052.mp4") },
  { name: ("merge_vid/200ms_053.mp4"), path: ("merge_vid/200ms_053.mp4") },
  { name: ("merge_vid/echo15ms_053.mp4"), path: ("merge_vid/echo15ms_053.mp4") },
  { name: ("merge_vid/echo200ms_054.mp4"), path: ("merge_vid/echo200ms_054.mp4") },
  { name: ("merge_vid/0ms_054.mp4"), path: ("merge_vid/0ms_054.mp4") },
  { name: ("merge_vid/15ms_055.mp4"), path: ("merge_vid/15ms_055.mp4") },
  { name: ("merge_vid/200ms_055.mp4"), path: ("merge_vid/200ms_055.mp4") },
  { name: ("merge_vid/echo15ms_056.mp4"), path: ("merge_vid/echo15ms_056.mp4") },
  { name: ("merge_vid/echo200ms_056.mp4"), path: ("merge_vid/echo200ms_056.mp4") },
  { name: ("merge_vid/0ms_058.mp4"), path: ("merge_vid/0ms_058.mp4") },
  { name: ("merge_vid/15ms_058.mp4"), path: ("merge_vid/15ms_058.mp4") },
  { name: ("merge_vid/200ms_059.mp4"), path: ("merge_vid/200ms_059.mp4") },
  { name: ("merge_vid/echo15ms_059.mp4"), path: ("merge_vid/echo15ms_059.mp4") },
  { name: ("merge_vid/echo200ms_060.mp4"), path: ("merge_vid/echo200ms_060.mp4") },
  { name: ("merge_vid/0ms_060.mp4"), path: ("merge_vid/0ms_060.mp4") },
  { name: ("merge_vid/15ms_061.mp4"), path: ("merge_vid/15ms_061.mp4") },
  { name: ("merge_vid/200ms_061.mp4"), path: ("merge_vid/200ms_061.mp4") },
  { name: ("merge_vid/echo15ms_062.mp4"), path: ("merge_vid/echo15ms_062.mp4") },
  { name: ("merge_vid/echo200ms_062.mp4"), path: ("merge_vid/echo200ms_062.mp4") },
  { name: ("merge_vid/0ms_063.mp4"), path: ("merge_vid/0ms_063.mp4") },
  { name: ("merge_vid/15ms_063.mp4"), path: ("merge_vid/15ms_063.mp4") },
  { name: ("merge_vid/200ms_064.mp4"), path: ("merge_vid/200ms_064.mp4") },
  { name: ("merge_vid/echo15ms_064.mp4"), path: ("merge_vid/echo15ms_064.mp4") },
  { name: ("merge_vid/echo200ms_066.mp4"), path: ("merge_vid/echo200ms_066.mp4") },
  { name: ("merge_vid/0ms_066.mp4"), path: ("merge_vid/0ms_066.mp4") },
  { name: ("merge_vid/15ms_067.mp4"), path: ("merge_vid/15ms_067.mp4") },
  { name: ("merge_vid/200ms_067.mp4"), path: ("merge_vid/200ms_067.mp4") },
  { name: ("merge_vid/echo15ms_069.mp4"), path: ("merge_vid/echo15ms_069.mp4") },
  { name: ("merge_vid/echo200ms_069.mp4"), path: ("merge_vid/echo200ms_069.mp4") },
  { name: ("merge_vid/0ms_070.mp4"), path: ("merge_vid/0ms_070.mp4") },
  { name: ("merge_vid/15ms_070.mp4"), path: ("merge_vid/15ms_070.mp4") },
  { name: ("merge_vid/200ms_071.mp4"), path: ("merge_vid/200ms_071.mp4") },
  { name: ("merge_vid/echo15ms_071.mp4"), path: ("merge_vid/echo15ms_071.mp4") },
  { name: ("merge_vid/echo200ms_073.mp4"), path: ("merge_vid/echo200ms_073.mp4") },
  { name: ("merge_vid/0ms_073.mp4"), path: ("merge_vid/0ms_073.mp4") },
  { name: ("merge_vid/15ms_074.mp4"), path: ("merge_vid/15ms_074.mp4") },
  { name: ("merge_vid/200ms_074.mp4"), path: ("merge_vid/200ms_074.mp4") },
  { name: ("merge_vid/echo15ms_075.mp4"), path: ("merge_vid/echo15ms_075.mp4") },
  { name: ("merge_vid/echo200ms_075.mp4"), path: ("merge_vid/echo200ms_075.mp4") },
  { name: ("merge_vid/0ms_076.mp4"), path: ("merge_vid/0ms_076.mp4") },
  { name: ("merge_vid/15ms_076.mp4"), path: ("merge_vid/15ms_076.mp4") },
  { name: ("merge_vid/200ms_077.mp4"), path: ("merge_vid/200ms_077.mp4") },
  { name: ("merge_vid/echo15ms_077.mp4"), path: ("merge_vid/echo15ms_077.mp4") },
  { name: ("merge_vid/echo200ms_078.mp4"), path: ("merge_vid/echo200ms_078.mp4") },
  { name: ("merge_vid/0ms_078.mp4"), path: ("merge_vid/0ms_078.mp4") },
  { name: ("merge_vid/15ms_079.mp4"), path: ("merge_vid/15ms_079.mp4") },
  { name: ("merge_vid/200ms_079.mp4"), path: ("merge_vid/200ms_079.mp4") },
  { name: ("merge_vid/echo15ms_001.mp4"), path: ("merge_vid/echo15ms_001.mp4") },
  { name: ("merge_vid/echo200ms_001.mp4"), path: ("merge_vid/echo200ms_001.mp4") },
  { name: ("merge_vid/0ms_011.mp4"), path: ("merge_vid/0ms_011.mp4") },
  { name: ("merge_vid/15ms_011.mp4"), path: ("merge_vid/15ms_011.mp4") },
  { name: ("merge_vid/200ms_016.mp4"), path: ("merge_vid/200ms_016.mp4") },
  { name: ("merge_vid/echo15ms_016.mp4"), path: ("merge_vid/echo15ms_016.mp4") },
  { name: ("merge_vid/echo200ms_018.mp4"), path: ("merge_vid/echo200ms_018.mp4") },
  { name: ("merge_vid/0ms_018.mp4"), path: ("merge_vid/0ms_018.mp4") },
  { name: ("merge_vid/15ms_032.mp4"), path: ("merge_vid/15ms_032.mp4") },
  { name: ("merge_vid/200ms_032.mp4"), path: ("merge_vid/200ms_032.mp4") },
  { name: ("merge_vid/echo15ms_055.mp4"), path: ("merge_vid/echo15ms_055.mp4") },
  { name: ("merge_vid/echo200ms_055.mp4"), path: ("merge_vid/echo200ms_055.mp4") },
  { name: ("merge_vid/0ms_057.mp4"), path: ("merge_vid/0ms_057.mp4") },
  { name: ("merge_vid/15ms_057.mp4"), path: ("merge_vid/15ms_057.mp4") },
  { name: ("merge_vid/200ms_065.mp4"), path: ("merge_vid/200ms_065.mp4") },
  { name: ("merge_vid/echo15ms_065.mp4"), path: ("merge_vid/echo15ms_065.mp4") },
  { name: ("merge_vid/echo200ms_068.mp4"), path: ("merge_vid/echo200ms_068.mp4") },
  { name: ("merge_vid/0ms_068.mp4"), path: ("merge_vid/0ms_068.mp4") },
  { name: ("merge_vid/15ms_072.mp4"), path: ("merge_vid/15ms_072.mp4") },
  { name: ("merge_vid/200ms_072.mp4"), path: ("merge_vid/200ms_072.mp4") },
  { name: ("dummy"), path: ("dummy.xlsx") }]);
  console.log("started loading resources");
  }
  
  if (group == 2 ) {
    psychoJS.downloadResources([
  { name: ("merge_vid/200ms_002.mp4"), path: ("merge_vid/200ms_002.mp4") },
  { name: ("merge_vid/echo15ms_002.mp4"), path: ("merge_vid/echo15ms_002.mp4") },
  { name: ("merge_vid/echo200ms_003.mp4"), path: ("merge_vid/echo200ms_003.mp4") },
  { name: ("merge_vid/0ms_003.mp4"), path: ("merge_vid/0ms_003.mp4") },
  { name: ("merge_vid/15ms_004.mp4"), path: ("merge_vid/15ms_004.mp4") },
  { name: ("merge_vid/200ms_004.mp4"), path: ("merge_vid/200ms_004.mp4") },
  { name: ("merge_vid/echo15ms_005.mp4"), path: ("merge_vid/echo15ms_005.mp4") },
  { name: ("merge_vid/echo200ms_005.mp4"), path: ("merge_vid/echo200ms_005.mp4") },
  { name: ("merge_vid/0ms_006.mp4"), path: ("merge_vid/0ms_006.mp4") },
  { name: ("merge_vid/15ms_006.mp4"), path: ("merge_vid/15ms_006.mp4") },
  { name: ("merge_vid/200ms_007.mp4"), path: ("merge_vid/200ms_007.mp4") },
  { name: ("merge_vid/echo15ms_007.mp4"), path: ("merge_vid/echo15ms_007.mp4") },
  { name: ("merge_vid/echo200ms_008.mp4"), path: ("merge_vid/echo200ms_008.mp4") },
  { name: ("merge_vid/0ms_008.mp4"), path: ("merge_vid/0ms_008.mp4") },
  { name: ("merge_vid/15ms_009.mp4"), path: ("merge_vid/15ms_009.mp4") },
  { name: ("merge_vid/200ms_009.mp4"), path: ("merge_vid/200ms_009.mp4") },
  { name: ("merge_vid/echo15ms_010.mp4"), path: ("merge_vid/echo15ms_010.mp4") },
  { name: ("merge_vid/echo200ms_010.mp4"), path: ("merge_vid/echo200ms_010.mp4") },
  { name: ("merge_vid/0ms_012.mp4"), path: ("merge_vid/0ms_012.mp4") },
  { name: ("merge_vid/15ms_012.mp4"), path: ("merge_vid/15ms_012.mp4") },
  { name: ("merge_vid/200ms_013.mp4"), path: ("merge_vid/200ms_013.mp4") },
  { name: ("merge_vid/echo15ms_013.mp4"), path: ("merge_vid/echo15ms_013.mp4") },
  { name: ("merge_vid/echo200ms_014.mp4"), path: ("merge_vid/echo200ms_014.mp4") },
  { name: ("merge_vid/0ms_014.mp4"), path: ("merge_vid/0ms_014.mp4") },
  { name: ("merge_vid/15ms_015.mp4"), path: ("merge_vid/15ms_015.mp4") },
  { name: ("merge_vid/200ms_015.mp4"), path: ("merge_vid/200ms_015.mp4") },
  { name: ("merge_vid/echo15ms_017.mp4"), path: ("merge_vid/echo15ms_017.mp4") },
  { name: ("merge_vid/echo200ms_017.mp4"), path: ("merge_vid/echo200ms_017.mp4") },
  { name: ("merge_vid/0ms_019.mp4"), path: ("merge_vid/0ms_019.mp4") },
  { name: ("merge_vid/15ms_019.mp4"), path: ("merge_vid/15ms_019.mp4") },
  { name: ("merge_vid/200ms_020.mp4"), path: ("merge_vid/200ms_020.mp4") },
  { name: ("merge_vid/echo15ms_020.mp4"), path: ("merge_vid/echo15ms_020.mp4") },
  { name: ("merge_vid/echo200ms_021.mp4"), path: ("merge_vid/echo200ms_021.mp4") },
  { name: ("merge_vid/0ms_021.mp4"), path: ("merge_vid/0ms_021.mp4") },
  { name: ("merge_vid/15ms_022.mp4"), path: ("merge_vid/15ms_022.mp4") },
  { name: ("merge_vid/200ms_022.mp4"), path: ("merge_vid/200ms_022.mp4") },
  { name: ("merge_vid/echo15ms_023.mp4"), path: ("merge_vid/echo15ms_023.mp4") },
  { name: ("merge_vid/echo200ms_023.mp4"), path: ("merge_vid/echo200ms_023.mp4") },
  { name: ("merge_vid/0ms_024.mp4"), path: ("merge_vid/0ms_024.mp4") },
  { name: ("merge_vid/15ms_024.mp4"), path: ("merge_vid/15ms_024.mp4") },
  { name: ("merge_vid/200ms_025.mp4"), path: ("merge_vid/200ms_025.mp4") },
  { name: ("merge_vid/echo15ms_025.mp4"), path: ("merge_vid/echo15ms_025.mp4") },
  { name: ("merge_vid/echo200ms_026.mp4"), path: ("merge_vid/echo200ms_026.mp4") },
  { name: ("merge_vid/0ms_026.mp4"), path: ("merge_vid/0ms_026.mp4") },
  { name: ("merge_vid/15ms_027.mp4"), path: ("merge_vid/15ms_027.mp4") },
  { name: ("merge_vid/200ms_027.mp4"), path: ("merge_vid/200ms_027.mp4") },
  { name: ("merge_vid/echo15ms_028.mp4"), path: ("merge_vid/echo15ms_028.mp4") },
  { name: ("merge_vid/echo200ms_028.mp4"), path: ("merge_vid/echo200ms_028.mp4") },
  { name: ("merge_vid/0ms_029.mp4"), path: ("merge_vid/0ms_029.mp4") },
  { name: ("merge_vid/15ms_029.mp4"), path: ("merge_vid/15ms_029.mp4") },
  { name: ("merge_vid/200ms_030.mp4"), path: ("merge_vid/200ms_030.mp4") },
  { name: ("merge_vid/echo15ms_030.mp4"), path: ("merge_vid/echo15ms_030.mp4") },
  { name: ("merge_vid/echo200ms_031.mp4"), path: ("merge_vid/echo200ms_031.mp4") },
  { name: ("merge_vid/0ms_031.mp4"), path: ("merge_vid/0ms_031.mp4") },
  { name: ("merge_vid/15ms_033.mp4"), path: ("merge_vid/15ms_033.mp4") },
  { name: ("merge_vid/200ms_033.mp4"), path: ("merge_vid/200ms_033.mp4") },
  { name: ("merge_vid/echo15ms_034.mp4"), path: ("merge_vid/echo15ms_034.mp4") },
  { name: ("merge_vid/echo200ms_034.mp4"), path: ("merge_vid/echo200ms_034.mp4") },
  { name: ("merge_vid/0ms_035.mp4"), path: ("merge_vid/0ms_035.mp4") },
  { name: ("merge_vid/15ms_035.mp4"), path: ("merge_vid/15ms_035.mp4") },
  { name: ("merge_vid/200ms_036.mp4"), path: ("merge_vid/200ms_036.mp4") },
  { name: ("merge_vid/echo15ms_036.mp4"), path: ("merge_vid/echo15ms_036.mp4") },
  { name: ("merge_vid/echo200ms_037.mp4"), path: ("merge_vid/echo200ms_037.mp4") },
  { name: ("merge_vid/0ms_037.mp4"), path: ("merge_vid/0ms_037.mp4") },
  { name: ("merge_vid/15ms_038.mp4"), path: ("merge_vid/15ms_038.mp4") },
  { name: ("merge_vid/200ms_038.mp4"), path: ("merge_vid/200ms_038.mp4") },
  { name: ("merge_vid/echo15ms_039.mp4"), path: ("merge_vid/echo15ms_039.mp4") },
  { name: ("merge_vid/echo200ms_039.mp4"), path: ("merge_vid/echo200ms_039.mp4") },
  { name: ("merge_vid/0ms_040.mp4"), path: ("merge_vid/0ms_040.mp4") },
  { name: ("merge_vid/15ms_040.mp4"), path: ("merge_vid/15ms_040.mp4") },
  { name: ("merge_vid/200ms_041.mp4"), path: ("merge_vid/200ms_041.mp4") },
  { name: ("merge_vid/echo15ms_041.mp4"), path: ("merge_vid/echo15ms_041.mp4") },
  { name: ("merge_vid/echo200ms_042.mp4"), path: ("merge_vid/echo200ms_042.mp4") },
  { name: ("merge_vid/0ms_042.mp4"), path: ("merge_vid/0ms_042.mp4") },
  { name: ("merge_vid/15ms_043.mp4"), path: ("merge_vid/15ms_043.mp4") },
  { name: ("merge_vid/200ms_043.mp4"), path: ("merge_vid/200ms_043.mp4") },
  { name: ("merge_vid/echo15ms_044.mp4"), path: ("merge_vid/echo15ms_044.mp4") },
  { name: ("merge_vid/echo200ms_044.mp4"), path: ("merge_vid/echo200ms_044.mp4") },
  { name: ("merge_vid/0ms_045.mp4"), path: ("merge_vid/0ms_045.mp4") },
  { name: ("merge_vid/15ms_045.mp4"), path: ("merge_vid/15ms_045.mp4") },
  { name: ("merge_vid/200ms_046.mp4"), path: ("merge_vid/200ms_046.mp4") },
  { name: ("merge_vid/echo15ms_046.mp4"), path: ("merge_vid/echo15ms_046.mp4") },
  { name: ("merge_vid/echo200ms_047.mp4"), path: ("merge_vid/echo200ms_047.mp4") },
  { name: ("merge_vid/0ms_047.mp4"), path: ("merge_vid/0ms_047.mp4") },
  { name: ("merge_vid/15ms_048.mp4"), path: ("merge_vid/15ms_048.mp4") },
  { name: ("merge_vid/200ms_048.mp4"), path: ("merge_vid/200ms_048.mp4") },
  { name: ("merge_vid/echo15ms_049.mp4"), path: ("merge_vid/echo15ms_049.mp4") },
  { name: ("merge_vid/echo200ms_049.mp4"), path: ("merge_vid/echo200ms_049.mp4") },
  { name: ("merge_vid/0ms_050.mp4"), path: ("merge_vid/0ms_050.mp4") },
  { name: ("merge_vid/15ms_050.mp4"), path: ("merge_vid/15ms_050.mp4") },
  { name: ("merge_vid/200ms_051.mp4"), path: ("merge_vid/200ms_051.mp4") },
  { name: ("merge_vid/echo15ms_051.mp4"), path: ("merge_vid/echo15ms_051.mp4") },
  { name: ("merge_vid/echo200ms_052.mp4"), path: ("merge_vid/echo200ms_052.mp4") },
  { name: ("merge_vid/0ms_052.mp4"), path: ("merge_vid/0ms_052.mp4") },
  { name: ("merge_vid/15ms_053.mp4"), path: ("merge_vid/15ms_053.mp4") },
  { name: ("merge_vid/200ms_053.mp4"), path: ("merge_vid/200ms_053.mp4") },
  { name: ("merge_vid/echo15ms_054.mp4"), path: ("merge_vid/echo15ms_054.mp4") },
  { name: ("merge_vid/echo200ms_054.mp4"), path: ("merge_vid/echo200ms_054.mp4") },
  { name: ("merge_vid/0ms_055.mp4"), path: ("merge_vid/0ms_055.mp4") },
  { name: ("merge_vid/15ms_055.mp4"), path: ("merge_vid/15ms_055.mp4") },
  { name: ("merge_vid/200ms_056.mp4"), path: ("merge_vid/200ms_056.mp4") },
  { name: ("merge_vid/echo15ms_056.mp4"), path: ("merge_vid/echo15ms_056.mp4") },
  { name: ("merge_vid/echo200ms_058.mp4"), path: ("merge_vid/echo200ms_058.mp4") },
  { name: ("merge_vid/0ms_058.mp4"), path: ("merge_vid/0ms_058.mp4") },
  { name: ("merge_vid/15ms_059.mp4"), path: ("merge_vid/15ms_059.mp4") },
  { name: ("merge_vid/200ms_059.mp4"), path: ("merge_vid/200ms_059.mp4") },
  { name: ("merge_vid/echo15ms_060.mp4"), path: ("merge_vid/echo15ms_060.mp4") },
  { name: ("merge_vid/echo200ms_060.mp4"), path: ("merge_vid/echo200ms_060.mp4") },
  { name: ("merge_vid/0ms_061.mp4"), path: ("merge_vid/0ms_061.mp4") },
  { name: ("merge_vid/15ms_061.mp4"), path: ("merge_vid/15ms_061.mp4") },
  { name: ("merge_vid/200ms_062.mp4"), path: ("merge_vid/200ms_062.mp4") },
  { name: ("merge_vid/echo15ms_062.mp4"), path: ("merge_vid/echo15ms_062.mp4") },
  { name: ("merge_vid/echo200ms_063.mp4"), path: ("merge_vid/echo200ms_063.mp4") },
  { name: ("merge_vid/0ms_063.mp4"), path: ("merge_vid/0ms_063.mp4") },
  { name: ("merge_vid/15ms_064.mp4"), path: ("merge_vid/15ms_064.mp4") },
  { name: ("merge_vid/200ms_064.mp4"), path: ("merge_vid/200ms_064.mp4") },
  { name: ("merge_vid/echo15ms_066.mp4"), path: ("merge_vid/echo15ms_066.mp4") },
  { name: ("merge_vid/echo200ms_066.mp4"), path: ("merge_vid/echo200ms_066.mp4") },
  { name: ("merge_vid/0ms_067.mp4"), path: ("merge_vid/0ms_067.mp4") },
  { name: ("merge_vid/15ms_067.mp4"), path: ("merge_vid/15ms_067.mp4") },
  { name: ("merge_vid/200ms_069.mp4"), path: ("merge_vid/200ms_069.mp4") },
  { name: ("merge_vid/echo15ms_069.mp4"), path: ("merge_vid/echo15ms_069.mp4") },
  { name: ("merge_vid/echo200ms_070.mp4"), path: ("merge_vid/echo200ms_070.mp4") },
  { name: ("merge_vid/0ms_070.mp4"), path: ("merge_vid/0ms_070.mp4") },
  { name: ("merge_vid/15ms_071.mp4"), path: ("merge_vid/15ms_071.mp4") },
  { name: ("merge_vid/200ms_071.mp4"), path: ("merge_vid/200ms_071.mp4") },
  { name: ("merge_vid/echo15ms_073.mp4"), path: ("merge_vid/echo15ms_073.mp4") },
  { name: ("merge_vid/echo200ms_073.mp4"), path: ("merge_vid/echo200ms_073.mp4") },
  { name: ("merge_vid/0ms_074.mp4"), path: ("merge_vid/0ms_074.mp4") },
  { name: ("merge_vid/15ms_074.mp4"), path: ("merge_vid/15ms_074.mp4") },
  { name: ("merge_vid/200ms_075.mp4"), path: ("merge_vid/200ms_075.mp4") },
  { name: ("merge_vid/echo15ms_075.mp4"), path: ("merge_vid/echo15ms_075.mp4") },
  { name: ("merge_vid/echo200ms_076.mp4"), path: ("merge_vid/echo200ms_076.mp4") },
  { name: ("merge_vid/0ms_076.mp4"), path: ("merge_vid/0ms_076.mp4") },
  { name: ("merge_vid/15ms_077.mp4"), path: ("merge_vid/15ms_077.mp4") },
  { name: ("merge_vid/200ms_077.mp4"), path: ("merge_vid/200ms_077.mp4") },
  { name: ("merge_vid/echo15ms_078.mp4"), path: ("merge_vid/echo15ms_078.mp4") },
  { name: ("merge_vid/echo200ms_078.mp4"), path: ("merge_vid/echo200ms_078.mp4") },
  { name: ("merge_vid/0ms_079.mp4"), path: ("merge_vid/0ms_079.mp4") },
  { name: ("merge_vid/15ms_079.mp4"), path: ("merge_vid/15ms_079.mp4") },
  { name: ("merge_vid/200ms_001.mp4"), path: ("merge_vid/200ms_001.mp4") },
  { name: ("merge_vid/echo15ms_001.mp4"), path: ("merge_vid/echo15ms_001.mp4") },
  { name: ("merge_vid/echo200ms_011.mp4"), path: ("merge_vid/echo200ms_011.mp4") },
  { name: ("merge_vid/0ms_011.mp4"), path: ("merge_vid/0ms_011.mp4") },
  { name: ("merge_vid/15ms_016.mp4"), path: ("merge_vid/15ms_016.mp4") },
  { name: ("merge_vid/200ms_016.mp4"), path: ("merge_vid/200ms_016.mp4") },
  { name: ("merge_vid/echo15ms_018.mp4"), path: ("merge_vid/echo15ms_018.mp4") },
  { name: ("merge_vid/echo200ms_018.mp4"), path: ("merge_vid/echo200ms_018.mp4") },
  { name: ("merge_vid/0ms_032.mp4"), path: ("merge_vid/0ms_032.mp4") },
  { name: ("merge_vid/15ms_032.mp4"), path: ("merge_vid/15ms_032.mp4") },
  { name: ("merge_vid/200ms_055.mp4"), path: ("merge_vid/200ms_055.mp4") },
  { name: ("merge_vid/echo15ms_055.mp4"), path: ("merge_vid/echo15ms_055.mp4") },
  { name: ("merge_vid/echo200ms_057.mp4"), path: ("merge_vid/echo200ms_057.mp4") },
  { name: ("merge_vid/0ms_057.mp4"), path: ("merge_vid/0ms_057.mp4") },
  { name: ("merge_vid/15ms_065.mp4"), path: ("merge_vid/15ms_065.mp4") },
  { name: ("merge_vid/200ms_065.mp4"), path: ("merge_vid/200ms_065.mp4") },
  { name: ("merge_vid/echo15ms_068.mp4"), path: ("merge_vid/echo15ms_068.mp4") },
  { name: ("merge_vid/echo200ms_068.mp4"), path: ("merge_vid/echo200ms_068.mp4") },
  { name: ("merge_vid/0ms_072.mp4"), path: ("merge_vid/0ms_072.mp4") },
  { name: ("merge_vid/15ms_072.mp4"), path: ("merge_vid/15ms_072.mp4") },
  { name: ("dummy"), path: ("dummy.xlsx") }]);
  console.log("started loading resources");
  }
  if (group == 1 ) {
    psychoJS.downloadResources([
  { name: ("merge_vid/15ms_002.mp4"), path: ("merge_vid/15ms_002.mp4") },
  { name: ("merge_vid/200ms_002.mp4"), path: ("merge_vid/200ms_002.mp4") },
  { name: ("merge_vid/echo15ms_003.mp4"), path: ("merge_vid/echo15ms_003.mp4") },
  { name: ("merge_vid/echo200ms_003.mp4"), path: ("merge_vid/echo200ms_003.mp4") },
  { name: ("merge_vid/0ms_004.mp4"), path: ("merge_vid/0ms_004.mp4") },
  { name: ("merge_vid/15ms_004.mp4"), path: ("merge_vid/15ms_004.mp4") },
  { name: ("merge_vid/200ms_005.mp4"), path: ("merge_vid/200ms_005.mp4") },
  { name: ("merge_vid/echo15ms_005.mp4"), path: ("merge_vid/echo15ms_005.mp4") },
  { name: ("merge_vid/echo200ms_006.mp4"), path: ("merge_vid/echo200ms_006.mp4") },
  { name: ("merge_vid/0ms_006.mp4"), path: ("merge_vid/0ms_006.mp4") },
  { name: ("merge_vid/15ms_007.mp4"), path: ("merge_vid/15ms_007.mp4") },
  { name: ("merge_vid/200ms_007.mp4"), path: ("merge_vid/200ms_007.mp4") },
  { name: ("merge_vid/echo15ms_008.mp4"), path: ("merge_vid/echo15ms_008.mp4") },
  { name: ("merge_vid/echo200ms_008.mp4"), path: ("merge_vid/echo200ms_008.mp4") },
  { name: ("merge_vid/0ms_009.mp4"), path: ("merge_vid/0ms_009.mp4") },
  { name: ("merge_vid/15ms_009.mp4"), path: ("merge_vid/15ms_009.mp4") },
  { name: ("merge_vid/200ms_010.mp4"), path: ("merge_vid/200ms_010.mp4") },
  { name: ("merge_vid/echo15ms_010.mp4"), path: ("merge_vid/echo15ms_010.mp4") },
  { name: ("merge_vid/echo200ms_012.mp4"), path: ("merge_vid/echo200ms_012.mp4") },
  { name: ("merge_vid/0ms_012.mp4"), path: ("merge_vid/0ms_012.mp4") },
  { name: ("merge_vid/15ms_013.mp4"), path: ("merge_vid/15ms_013.mp4") },
  { name: ("merge_vid/200ms_013.mp4"), path: ("merge_vid/200ms_013.mp4") },
  { name: ("merge_vid/echo15ms_014.mp4"), path: ("merge_vid/echo15ms_014.mp4") },
  { name: ("merge_vid/echo200ms_014.mp4"), path: ("merge_vid/echo200ms_014.mp4") },
  { name: ("merge_vid/0ms_015.mp4"), path: ("merge_vid/0ms_015.mp4") },
  { name: ("merge_vid/15ms_015.mp4"), path: ("merge_vid/15ms_015.mp4") },
  { name: ("merge_vid/200ms_017.mp4"), path: ("merge_vid/200ms_017.mp4") },
  { name: ("merge_vid/echo15ms_017.mp4"), path: ("merge_vid/echo15ms_017.mp4") },
  { name: ("merge_vid/echo200ms_019.mp4"), path: ("merge_vid/echo200ms_019.mp4") },
  { name: ("merge_vid/0ms_019.mp4"), path: ("merge_vid/0ms_019.mp4") },
  { name: ("merge_vid/15ms_020.mp4"), path: ("merge_vid/15ms_020.mp4") },
  { name: ("merge_vid/200ms_020.mp4"), path: ("merge_vid/200ms_020.mp4") },
  { name: ("merge_vid/echo15ms_021.mp4"), path: ("merge_vid/echo15ms_021.mp4") },
  { name: ("merge_vid/echo200ms_021.mp4"), path: ("merge_vid/echo200ms_021.mp4") },
  { name: ("merge_vid/0ms_022.mp4"), path: ("merge_vid/0ms_022.mp4") },
  { name: ("merge_vid/15ms_022.mp4"), path: ("merge_vid/15ms_022.mp4") },
  { name: ("merge_vid/200ms_023.mp4"), path: ("merge_vid/200ms_023.mp4") },
  { name: ("merge_vid/echo15ms_023.mp4"), path: ("merge_vid/echo15ms_023.mp4") },
  { name: ("merge_vid/echo200ms_024.mp4"), path: ("merge_vid/echo200ms_024.mp4") },
  { name: ("merge_vid/0ms_024.mp4"), path: ("merge_vid/0ms_024.mp4") },
  { name: ("merge_vid/15ms_025.mp4"), path: ("merge_vid/15ms_025.mp4") },
  { name: ("merge_vid/200ms_025.mp4"), path: ("merge_vid/200ms_025.mp4") },
  { name: ("merge_vid/echo15ms_026.mp4"), path: ("merge_vid/echo15ms_026.mp4") },
  { name: ("merge_vid/echo200ms_026.mp4"), path: ("merge_vid/echo200ms_026.mp4") },
  { name: ("merge_vid/0ms_027.mp4"), path: ("merge_vid/0ms_027.mp4") },
  { name: ("merge_vid/15ms_027.mp4"), path: ("merge_vid/15ms_027.mp4") },
  { name: ("merge_vid/200ms_028.mp4"), path: ("merge_vid/200ms_028.mp4") },
  { name: ("merge_vid/echo15ms_028.mp4"), path: ("merge_vid/echo15ms_028.mp4") },
  { name: ("merge_vid/echo200ms_029.mp4"), path: ("merge_vid/echo200ms_029.mp4") },
  { name: ("merge_vid/0ms_029.mp4"), path: ("merge_vid/0ms_029.mp4") },
  { name: ("merge_vid/15ms_030.mp4"), path: ("merge_vid/15ms_030.mp4") },
  { name: ("merge_vid/200ms_030.mp4"), path: ("merge_vid/200ms_030.mp4") },
  { name: ("merge_vid/echo15ms_031.mp4"), path: ("merge_vid/echo15ms_031.mp4") },
  { name: ("merge_vid/echo200ms_031.mp4"), path: ("merge_vid/echo200ms_031.mp4") },
  { name: ("merge_vid/0ms_033.mp4"), path: ("merge_vid/0ms_033.mp4") },
  { name: ("merge_vid/15ms_033.mp4"), path: ("merge_vid/15ms_033.mp4") },
  { name: ("merge_vid/200ms_034.mp4"), path: ("merge_vid/200ms_034.mp4") },
  { name: ("merge_vid/echo15ms_034.mp4"), path: ("merge_vid/echo15ms_034.mp4") },
  { name: ("merge_vid/echo200ms_035.mp4"), path: ("merge_vid/echo200ms_035.mp4") },
  { name: ("merge_vid/0ms_035.mp4"), path: ("merge_vid/0ms_035.mp4") },
  { name: ("merge_vid/15ms_036.mp4"), path: ("merge_vid/15ms_036.mp4") },
  { name: ("merge_vid/200ms_036.mp4"), path: ("merge_vid/200ms_036.mp4") },
  { name: ("merge_vid/echo15ms_037.mp4"), path: ("merge_vid/echo15ms_037.mp4") },
  { name: ("merge_vid/echo200ms_037.mp4"), path: ("merge_vid/echo200ms_037.mp4") },
  { name: ("merge_vid/0ms_038.mp4"), path: ("merge_vid/0ms_038.mp4") },
  { name: ("merge_vid/15ms_038.mp4"), path: ("merge_vid/15ms_038.mp4") },
  { name: ("merge_vid/200ms_039.mp4"), path: ("merge_vid/200ms_039.mp4") },
  { name: ("merge_vid/echo15ms_039.mp4"), path: ("merge_vid/echo15ms_039.mp4") },
  { name: ("merge_vid/echo200ms_040.mp4"), path: ("merge_vid/echo200ms_040.mp4") },
  { name: ("merge_vid/0ms_040.mp4"), path: ("merge_vid/0ms_040.mp4") },
  { name: ("merge_vid/15ms_041.mp4"), path: ("merge_vid/15ms_041.mp4") },
  { name: ("merge_vid/200ms_041.mp4"), path: ("merge_vid/200ms_041.mp4") },
  { name: ("merge_vid/echo15ms_042.mp4"), path: ("merge_vid/echo15ms_042.mp4") },
  { name: ("merge_vid/echo200ms_042.mp4"), path: ("merge_vid/echo200ms_042.mp4") },
  { name: ("merge_vid/0ms_043.mp4"), path: ("merge_vid/0ms_043.mp4") },
  { name: ("merge_vid/15ms_043.mp4"), path: ("merge_vid/15ms_043.mp4") },
  { name: ("merge_vid/200ms_044.mp4"), path: ("merge_vid/200ms_044.mp4") },
  { name: ("merge_vid/echo15ms_044.mp4"), path: ("merge_vid/echo15ms_044.mp4") },
  { name: ("merge_vid/echo200ms_045.mp4"), path: ("merge_vid/echo200ms_045.mp4") },
  { name: ("merge_vid/0ms_045.mp4"), path: ("merge_vid/0ms_045.mp4") },
  { name: ("merge_vid/15ms_046.mp4"), path: ("merge_vid/15ms_046.mp4") },
  { name: ("merge_vid/200ms_046.mp4"), path: ("merge_vid/200ms_046.mp4") },
  { name: ("merge_vid/echo15ms_047.mp4"), path: ("merge_vid/echo15ms_047.mp4") },
  { name: ("merge_vid/echo200ms_047.mp4"), path: ("merge_vid/echo200ms_047.mp4") },
  { name: ("merge_vid/0ms_048.mp4"), path: ("merge_vid/0ms_048.mp4") },
  { name: ("merge_vid/15ms_048.mp4"), path: ("merge_vid/15ms_048.mp4") },
  { name: ("merge_vid/200ms_049.mp4"), path: ("merge_vid/200ms_049.mp4") },
  { name: ("merge_vid/echo15ms_049.mp4"), path: ("merge_vid/echo15ms_049.mp4") },
  { name: ("merge_vid/echo200ms_050.mp4"), path: ("merge_vid/echo200ms_050.mp4") },
  { name: ("merge_vid/0ms_050.mp4"), path: ("merge_vid/0ms_050.mp4") },
  { name: ("merge_vid/15ms_051.mp4"), path: ("merge_vid/15ms_051.mp4") },
  { name: ("merge_vid/200ms_051.mp4"), path: ("merge_vid/200ms_051.mp4") },
  { name: ("merge_vid/echo15ms_052.mp4"), path: ("merge_vid/echo15ms_052.mp4") },
  { name: ("merge_vid/echo200ms_052.mp4"), path: ("merge_vid/echo200ms_052.mp4") },
  { name: ("merge_vid/0ms_053.mp4"), path: ("merge_vid/0ms_053.mp4") },
  { name: ("merge_vid/15ms_053.mp4"), path: ("merge_vid/15ms_053.mp4") },
  { name: ("merge_vid/200ms_054.mp4"), path: ("merge_vid/200ms_054.mp4") },
  { name: ("merge_vid/echo15ms_054.mp4"), path: ("merge_vid/echo15ms_054.mp4") },
  { name: ("merge_vid/echo200ms_055.mp4"), path: ("merge_vid/echo200ms_055.mp4") },
  { name: ("merge_vid/0ms_055.mp4"), path: ("merge_vid/0ms_055.mp4") },
  { name: ("merge_vid/15ms_056.mp4"), path: ("merge_vid/15ms_056.mp4") },
  { name: ("merge_vid/200ms_056.mp4"), path: ("merge_vid/200ms_056.mp4") },
  { name: ("merge_vid/echo15ms_058.mp4"), path: ("merge_vid/echo15ms_058.mp4") },
  { name: ("merge_vid/echo200ms_058.mp4"), path: ("merge_vid/echo200ms_058.mp4") },
  { name: ("merge_vid/0ms_059.mp4"), path: ("merge_vid/0ms_059.mp4") },
  { name: ("merge_vid/15ms_059.mp4"), path: ("merge_vid/15ms_059.mp4") },
  { name: ("merge_vid/200ms_060.mp4"), path: ("merge_vid/200ms_060.mp4") },
  { name: ("merge_vid/echo15ms_060.mp4"), path: ("merge_vid/echo15ms_060.mp4") },
  { name: ("merge_vid/echo200ms_061.mp4"), path: ("merge_vid/echo200ms_061.mp4") },
  { name: ("merge_vid/0ms_061.mp4"), path: ("merge_vid/0ms_061.mp4") },
  { name: ("merge_vid/15ms_062.mp4"), path: ("merge_vid/15ms_062.mp4") },
  { name: ("merge_vid/200ms_062.mp4"), path: ("merge_vid/200ms_062.mp4") },
  { name: ("merge_vid/echo15ms_063.mp4"), path: ("merge_vid/echo15ms_063.mp4") },
  { name: ("merge_vid/echo200ms_063.mp4"), path: ("merge_vid/echo200ms_063.mp4") },
  { name: ("merge_vid/0ms_064.mp4"), path: ("merge_vid/0ms_064.mp4") },
  { name: ("merge_vid/15ms_064.mp4"), path: ("merge_vid/15ms_064.mp4") },
  { name: ("merge_vid/200ms_066.mp4"), path: ("merge_vid/200ms_066.mp4") },
  { name: ("merge_vid/echo15ms_066.mp4"), path: ("merge_vid/echo15ms_066.mp4") },
  { name: ("merge_vid/echo200ms_067.mp4"), path: ("merge_vid/echo200ms_067.mp4") },
  { name: ("merge_vid/0ms_067.mp4"), path: ("merge_vid/0ms_067.mp4") },
  { name: ("merge_vid/15ms_069.mp4"), path: ("merge_vid/15ms_069.mp4") },
  { name: ("merge_vid/200ms_069.mp4"), path: ("merge_vid/200ms_069.mp4") },
  { name: ("merge_vid/echo15ms_070.mp4"), path: ("merge_vid/echo15ms_070.mp4") },
  { name: ("merge_vid/echo200ms_070.mp4"), path: ("merge_vid/echo200ms_070.mp4") },
  { name: ("merge_vid/0ms_071.mp4"), path: ("merge_vid/0ms_071.mp4") },
  { name: ("merge_vid/15ms_071.mp4"), path: ("merge_vid/15ms_071.mp4") },
  { name: ("merge_vid/200ms_073.mp4"), path: ("merge_vid/200ms_073.mp4") },
  { name: ("merge_vid/echo15ms_073.mp4"), path: ("merge_vid/echo15ms_073.mp4") },
  { name: ("merge_vid/echo200ms_074.mp4"), path: ("merge_vid/echo200ms_074.mp4") },
  { name: ("merge_vid/0ms_074.mp4"), path: ("merge_vid/0ms_074.mp4") },
  { name: ("merge_vid/15ms_075.mp4"), path: ("merge_vid/15ms_075.mp4") },
  { name: ("merge_vid/200ms_075.mp4"), path: ("merge_vid/200ms_075.mp4") },
  { name: ("merge_vid/echo15ms_076.mp4"), path: ("merge_vid/echo15ms_076.mp4") },
  { name: ("merge_vid/echo200ms_076.mp4"), path: ("merge_vid/echo200ms_076.mp4") },
  { name: ("merge_vid/0ms_077.mp4"), path: ("merge_vid/0ms_077.mp4") },
  { name: ("merge_vid/15ms_077.mp4"), path: ("merge_vid/15ms_077.mp4") },
  { name: ("merge_vid/200ms_078.mp4"), path: ("merge_vid/200ms_078.mp4") },
  { name: ("merge_vid/echo15ms_078.mp4"), path: ("merge_vid/echo15ms_078.mp4") },
  { name: ("merge_vid/echo200ms_079.mp4"), path: ("merge_vid/echo200ms_079.mp4") },
  { name: ("merge_vid/0ms_079.mp4"), path: ("merge_vid/0ms_079.mp4") },
  { name: ("merge_vid/15ms_001.mp4"), path: ("merge_vid/15ms_001.mp4") },
  { name: ("merge_vid/200ms_001.mp4"), path: ("merge_vid/200ms_001.mp4") },
  { name: ("merge_vid/echo15ms_011.mp4"), path: ("merge_vid/echo15ms_011.mp4") },
  { name: ("merge_vid/echo200ms_011.mp4"), path: ("merge_vid/echo200ms_011.mp4") },
  { name: ("merge_vid/0ms_016.mp4"), path: ("merge_vid/0ms_016.mp4") },
  { name: ("merge_vid/15ms_016.mp4"), path: ("merge_vid/15ms_016.mp4") },
  { name: ("merge_vid/200ms_018.mp4"), path: ("merge_vid/200ms_018.mp4") },
  { name: ("merge_vid/echo15ms_018.mp4"), path: ("merge_vid/echo15ms_018.mp4") },
  { name: ("merge_vid/echo200ms_032.mp4"), path: ("merge_vid/echo200ms_032.mp4") },
  { name: ("merge_vid/0ms_032.mp4"), path: ("merge_vid/0ms_032.mp4") },
  { name: ("merge_vid/15ms_055.mp4"), path: ("merge_vid/15ms_055.mp4") },
  { name: ("merge_vid/200ms_055.mp4"), path: ("merge_vid/200ms_055.mp4") },
  { name: ("merge_vid/echo15ms_057.mp4"), path: ("merge_vid/echo15ms_057.mp4") },
  { name: ("merge_vid/echo200ms_057.mp4"), path: ("merge_vid/echo200ms_057.mp4") },
  { name: ("merge_vid/0ms_065.mp4"), path: ("merge_vid/0ms_065.mp4") },
  { name: ("merge_vid/15ms_065.mp4"), path: ("merge_vid/15ms_065.mp4") },
  { name: ("merge_vid/200ms_068.mp4"), path: ("merge_vid/200ms_068.mp4") },
  { name: ("merge_vid/echo15ms_068.mp4"), path: ("merge_vid/echo15ms_068.mp4") },
  { name: ("merge_vid/echo200ms_072.mp4"), path: ("merge_vid/echo200ms_072.mp4") },
  { name: ("merge_vid/0ms_072.mp4"), path: ("merge_vid/0ms_072.mp4") },
  { name: ("dummy"), path: ("dummy.xlsx") }]);
  console.log("started loading resources");
  }
  if (group == 0 ) {
    psychoJS.downloadResources([
  { name: ("merge_vid/0ms_002.mp4"), path: ("merge_vid/0ms_002.mp4") },
  { name: ("merge_vid/15ms_002.mp4"), path: ("merge_vid/15ms_002.mp4") },
  { name: ("merge_vid/200ms_003.mp4"), path: ("merge_vid/200ms_003.mp4") },
  { name: ("merge_vid/echo15ms_003.mp4"), path: ("merge_vid/echo15ms_003.mp4") },
  { name: ("merge_vid/echo200ms_004.mp4"), path: ("merge_vid/echo200ms_004.mp4") },
  { name: ("merge_vid/0ms_004.mp4"), path: ("merge_vid/0ms_004.mp4") },
  { name: ("merge_vid/15ms_005.mp4"), path: ("merge_vid/15ms_005.mp4") },
  { name: ("merge_vid/200ms_005.mp4"), path: ("merge_vid/200ms_005.mp4") },
  { name: ("merge_vid/echo15ms_006.mp4"), path: ("merge_vid/echo15ms_006.mp4") },
  { name: ("merge_vid/echo200ms_006.mp4"), path: ("merge_vid/echo200ms_006.mp4") },
  { name: ("merge_vid/0ms_007.mp4"), path: ("merge_vid/0ms_007.mp4") },
  { name: ("merge_vid/15ms_007.mp4"), path: ("merge_vid/15ms_007.mp4") },
  { name: ("merge_vid/200ms_008.mp4"), path: ("merge_vid/200ms_008.mp4") },
  { name: ("merge_vid/echo15ms_008.mp4"), path: ("merge_vid/echo15ms_008.mp4") },
  { name: ("merge_vid/echo200ms_009.mp4"), path: ("merge_vid/echo200ms_009.mp4") },
  { name: ("merge_vid/0ms_009.mp4"), path: ("merge_vid/0ms_009.mp4") },
  { name: ("merge_vid/15ms_010.mp4"), path: ("merge_vid/15ms_010.mp4") },
  { name: ("merge_vid/200ms_010.mp4"), path: ("merge_vid/200ms_010.mp4") },
  { name: ("merge_vid/echo15ms_012.mp4"), path: ("merge_vid/echo15ms_012.mp4") },
  { name: ("merge_vid/echo200ms_012.mp4"), path: ("merge_vid/echo200ms_012.mp4") },
  { name: ("merge_vid/0ms_013.mp4"), path: ("merge_vid/0ms_013.mp4") },
  { name: ("merge_vid/15ms_013.mp4"), path: ("merge_vid/15ms_013.mp4") },
  { name: ("merge_vid/200ms_014.mp4"), path: ("merge_vid/200ms_014.mp4") },
  { name: ("merge_vid/echo15ms_014.mp4"), path: ("merge_vid/echo15ms_014.mp4") },
  { name: ("merge_vid/echo200ms_015.mp4"), path: ("merge_vid/echo200ms_015.mp4") },
  { name: ("merge_vid/0ms_015.mp4"), path: ("merge_vid/0ms_015.mp4") },
  { name: ("merge_vid/15ms_017.mp4"), path: ("merge_vid/15ms_017.mp4") },
  { name: ("merge_vid/200ms_017.mp4"), path: ("merge_vid/200ms_017.mp4") },
  { name: ("merge_vid/echo15ms_019.mp4"), path: ("merge_vid/echo15ms_019.mp4") },
  { name: ("merge_vid/echo200ms_019.mp4"), path: ("merge_vid/echo200ms_019.mp4") },
  { name: ("merge_vid/0ms_020.mp4"), path: ("merge_vid/0ms_020.mp4") },
  { name: ("merge_vid/15ms_020.mp4"), path: ("merge_vid/15ms_020.mp4") },
  { name: ("merge_vid/200ms_021.mp4"), path: ("merge_vid/200ms_021.mp4") },
  { name: ("merge_vid/echo15ms_021.mp4"), path: ("merge_vid/echo15ms_021.mp4") },
  { name: ("merge_vid/echo200ms_022.mp4"), path: ("merge_vid/echo200ms_022.mp4") },
  { name: ("merge_vid/0ms_022.mp4"), path: ("merge_vid/0ms_022.mp4") },
  { name: ("merge_vid/15ms_023.mp4"), path: ("merge_vid/15ms_023.mp4") },
  { name: ("merge_vid/200ms_023.mp4"), path: ("merge_vid/200ms_023.mp4") },
  { name: ("merge_vid/echo15ms_024.mp4"), path: ("merge_vid/echo15ms_024.mp4") },
  { name: ("merge_vid/echo200ms_024.mp4"), path: ("merge_vid/echo200ms_024.mp4") },
  { name: ("merge_vid/0ms_025.mp4"), path: ("merge_vid/0ms_025.mp4") },
  { name: ("merge_vid/15ms_025.mp4"), path: ("merge_vid/15ms_025.mp4") },
  { name: ("merge_vid/200ms_026.mp4"), path: ("merge_vid/200ms_026.mp4") },
  { name: ("merge_vid/echo15ms_026.mp4"), path: ("merge_vid/echo15ms_026.mp4") },
  { name: ("merge_vid/echo200ms_027.mp4"), path: ("merge_vid/echo200ms_027.mp4") },
  { name: ("merge_vid/0ms_027.mp4"), path: ("merge_vid/0ms_027.mp4") },
  { name: ("merge_vid/15ms_028.mp4"), path: ("merge_vid/15ms_028.mp4") },
  { name: ("merge_vid/200ms_028.mp4"), path: ("merge_vid/200ms_028.mp4") },
  { name: ("merge_vid/echo15ms_029.mp4"), path: ("merge_vid/echo15ms_029.mp4") },
  { name: ("merge_vid/echo200ms_029.mp4"), path: ("merge_vid/echo200ms_029.mp4") },
  { name: ("merge_vid/0ms_030.mp4"), path: ("merge_vid/0ms_030.mp4") },
  { name: ("merge_vid/15ms_030.mp4"), path: ("merge_vid/15ms_030.mp4") },
  { name: ("merge_vid/200ms_031.mp4"), path: ("merge_vid/200ms_031.mp4") },
  { name: ("merge_vid/echo15ms_031.mp4"), path: ("merge_vid/echo15ms_031.mp4") },
  { name: ("merge_vid/echo200ms_033.mp4"), path: ("merge_vid/echo200ms_033.mp4") },
  { name: ("merge_vid/0ms_033.mp4"), path: ("merge_vid/0ms_033.mp4") },
  { name: ("merge_vid/15ms_034.mp4"), path: ("merge_vid/15ms_034.mp4") },
  { name: ("merge_vid/200ms_034.mp4"), path: ("merge_vid/200ms_034.mp4") },
  { name: ("merge_vid/echo15ms_035.mp4"), path: ("merge_vid/echo15ms_035.mp4") },
  { name: ("merge_vid/echo200ms_035.mp4"), path: ("merge_vid/echo200ms_035.mp4") },
  { name: ("merge_vid/0ms_036.mp4"), path: ("merge_vid/0ms_036.mp4") },
  { name: ("merge_vid/15ms_036.mp4"), path: ("merge_vid/15ms_036.mp4") },
  { name: ("merge_vid/200ms_037.mp4"), path: ("merge_vid/200ms_037.mp4") },
  { name: ("merge_vid/echo15ms_037.mp4"), path: ("merge_vid/echo15ms_037.mp4") },
  { name: ("merge_vid/echo200ms_038.mp4"), path: ("merge_vid/echo200ms_038.mp4") },
  { name: ("merge_vid/0ms_038.mp4"), path: ("merge_vid/0ms_038.mp4") },
  { name: ("merge_vid/15ms_039.mp4"), path: ("merge_vid/15ms_039.mp4") },
  { name: ("merge_vid/200ms_039.mp4"), path: ("merge_vid/200ms_039.mp4") },
  { name: ("merge_vid/echo15ms_040.mp4"), path: ("merge_vid/echo15ms_040.mp4") },
  { name: ("merge_vid/echo200ms_040.mp4"), path: ("merge_vid/echo200ms_040.mp4") },
  { name: ("merge_vid/0ms_041.mp4"), path: ("merge_vid/0ms_041.mp4") },
  { name: ("merge_vid/15ms_041.mp4"), path: ("merge_vid/15ms_041.mp4") },
  { name: ("merge_vid/200ms_042.mp4"), path: ("merge_vid/200ms_042.mp4") },
  { name: ("merge_vid/echo15ms_042.mp4"), path: ("merge_vid/echo15ms_042.mp4") },
  { name: ("merge_vid/echo200ms_043.mp4"), path: ("merge_vid/echo200ms_043.mp4") },
  { name: ("merge_vid/0ms_043.mp4"), path: ("merge_vid/0ms_043.mp4") },
  { name: ("merge_vid/15ms_044.mp4"), path: ("merge_vid/15ms_044.mp4") },
  { name: ("merge_vid/200ms_044.mp4"), path: ("merge_vid/200ms_044.mp4") },
  { name: ("merge_vid/echo15ms_045.mp4"), path: ("merge_vid/echo15ms_045.mp4") },
  { name: ("merge_vid/echo200ms_045.mp4"), path: ("merge_vid/echo200ms_045.mp4") },
  { name: ("merge_vid/0ms_046.mp4"), path: ("merge_vid/0ms_046.mp4") },
  { name: ("merge_vid/15ms_046.mp4"), path: ("merge_vid/15ms_046.mp4") },
  { name: ("merge_vid/200ms_047.mp4"), path: ("merge_vid/200ms_047.mp4") },
  { name: ("merge_vid/echo15ms_047.mp4"), path: ("merge_vid/echo15ms_047.mp4") },
  { name: ("merge_vid/echo200ms_048.mp4"), path: ("merge_vid/echo200ms_048.mp4") },
  { name: ("merge_vid/0ms_048.mp4"), path: ("merge_vid/0ms_048.mp4") },
  { name: ("merge_vid/15ms_049.mp4"), path: ("merge_vid/15ms_049.mp4") },
  { name: ("merge_vid/200ms_049.mp4"), path: ("merge_vid/200ms_049.mp4") },
  { name: ("merge_vid/echo15ms_050.mp4"), path: ("merge_vid/echo15ms_050.mp4") },
  { name: ("merge_vid/echo200ms_050.mp4"), path: ("merge_vid/echo200ms_050.mp4") },
  { name: ("merge_vid/0ms_051.mp4"), path: ("merge_vid/0ms_051.mp4") },
  { name: ("merge_vid/15ms_051.mp4"), path: ("merge_vid/15ms_051.mp4") },
  { name: ("merge_vid/200ms_052.mp4"), path: ("merge_vid/200ms_052.mp4") },
  { name: ("merge_vid/echo15ms_052.mp4"), path: ("merge_vid/echo15ms_052.mp4") },
  { name: ("merge_vid/echo200ms_053.mp4"), path: ("merge_vid/echo200ms_053.mp4") },
  { name: ("merge_vid/0ms_053.mp4"), path: ("merge_vid/0ms_053.mp4") },
  { name: ("merge_vid/15ms_054.mp4"), path: ("merge_vid/15ms_054.mp4") },
  { name: ("merge_vid/200ms_054.mp4"), path: ("merge_vid/200ms_054.mp4") },
  { name: ("merge_vid/echo15ms_055.mp4"), path: ("merge_vid/echo15ms_055.mp4") },
  { name: ("merge_vid/echo200ms_055.mp4"), path: ("merge_vid/echo200ms_055.mp4") },
  { name: ("merge_vid/0ms_056.mp4"), path: ("merge_vid/0ms_056.mp4") },
  { name: ("merge_vid/15ms_056.mp4"), path: ("merge_vid/15ms_056.mp4") },
  { name: ("merge_vid/200ms_058.mp4"), path: ("merge_vid/200ms_058.mp4") },
  { name: ("merge_vid/echo15ms_058.mp4"), path: ("merge_vid/echo15ms_058.mp4") },
  { name: ("merge_vid/echo200ms_059.mp4"), path: ("merge_vid/echo200ms_059.mp4") },
  { name: ("merge_vid/0ms_059.mp4"), path: ("merge_vid/0ms_059.mp4") },
  { name: ("merge_vid/15ms_060.mp4"), path: ("merge_vid/15ms_060.mp4") },
  { name: ("merge_vid/200ms_060.mp4"), path: ("merge_vid/200ms_060.mp4") },
  { name: ("merge_vid/echo15ms_061.mp4"), path: ("merge_vid/echo15ms_061.mp4") },
  { name: ("merge_vid/echo200ms_061.mp4"), path: ("merge_vid/echo200ms_061.mp4") },
  { name: ("merge_vid/0ms_062.mp4"), path: ("merge_vid/0ms_062.mp4") },
  { name: ("merge_vid/15ms_062.mp4"), path: ("merge_vid/15ms_062.mp4") },
  { name: ("merge_vid/200ms_063.mp4"), path: ("merge_vid/200ms_063.mp4") },
  { name: ("merge_vid/echo15ms_063.mp4"), path: ("merge_vid/echo15ms_063.mp4") },
  { name: ("merge_vid/echo200ms_064.mp4"), path: ("merge_vid/echo200ms_064.mp4") },
  { name: ("merge_vid/0ms_064.mp4"), path: ("merge_vid/0ms_064.mp4") },
  { name: ("merge_vid/15ms_066.mp4"), path: ("merge_vid/15ms_066.mp4") },
  { name: ("merge_vid/200ms_066.mp4"), path: ("merge_vid/200ms_066.mp4") },
  { name: ("merge_vid/echo15ms_067.mp4"), path: ("merge_vid/echo15ms_067.mp4") },
  { name: ("merge_vid/echo200ms_067.mp4"), path: ("merge_vid/echo200ms_067.mp4") },
  { name: ("merge_vid/0ms_069.mp4"), path: ("merge_vid/0ms_069.mp4") },
  { name: ("merge_vid/15ms_069.mp4"), path: ("merge_vid/15ms_069.mp4") },
  { name: ("merge_vid/200ms_070.mp4"), path: ("merge_vid/200ms_070.mp4") },
  { name: ("merge_vid/echo15ms_070.mp4"), path: ("merge_vid/echo15ms_070.mp4") },
  { name: ("merge_vid/echo200ms_071.mp4"), path: ("merge_vid/echo200ms_071.mp4") },
  { name: ("merge_vid/0ms_071.mp4"), path: ("merge_vid/0ms_071.mp4") },
  { name: ("merge_vid/15ms_073.mp4"), path: ("merge_vid/15ms_073.mp4") },
  { name: ("merge_vid/200ms_073.mp4"), path: ("merge_vid/200ms_073.mp4") },
  { name: ("merge_vid/echo15ms_074.mp4"), path: ("merge_vid/echo15ms_074.mp4") },
  { name: ("merge_vid/echo200ms_074.mp4"), path: ("merge_vid/echo200ms_074.mp4") },
  { name: ("merge_vid/0ms_075.mp4"), path: ("merge_vid/0ms_075.mp4") },
  { name: ("merge_vid/15ms_075.mp4"), path: ("merge_vid/15ms_075.mp4") },
  { name: ("merge_vid/200ms_076.mp4"), path: ("merge_vid/200ms_076.mp4") },
  { name: ("merge_vid/echo15ms_076.mp4"), path: ("merge_vid/echo15ms_076.mp4") },
  { name: ("merge_vid/echo200ms_077.mp4"), path: ("merge_vid/echo200ms_077.mp4") },
  { name: ("merge_vid/0ms_077.mp4"), path: ("merge_vid/0ms_077.mp4") },
  { name: ("merge_vid/15ms_078.mp4"), path: ("merge_vid/15ms_078.mp4") },
  { name: ("merge_vid/200ms_078.mp4"), path: ("merge_vid/200ms_078.mp4") },
  { name: ("merge_vid/echo15ms_079.mp4"), path: ("merge_vid/echo15ms_079.mp4") },
  { name: ("merge_vid/echo200ms_079.mp4"), path: ("merge_vid/echo200ms_079.mp4") },
  { name: ("merge_vid/15ms_001.mp4"), path: ("merge_vid/15ms_001.mp4") },
  { name: ("merge_vid/200ms_001.mp4"), path: ("merge_vid/200ms_001.mp4") },
  { name: ("merge_vid/echo15ms_011.mp4"), path: ("merge_vid/echo15ms_011.mp4") },
  { name: ("merge_vid/echo200ms_011.mp4"), path: ("merge_vid/echo200ms_011.mp4") },
  { name: ("merge_vid/0ms_016.mp4"), path: ("merge_vid/0ms_016.mp4") },
  { name: ("merge_vid/15ms_016.mp4"), path: ("merge_vid/15ms_016.mp4") },
  { name: ("merge_vid/200ms_018.mp4"), path: ("merge_vid/200ms_018.mp4") },
  { name: ("merge_vid/echo15ms_018.mp4"), path: ("merge_vid/echo15ms_018.mp4") },
  { name: ("merge_vid/echo200ms_032.mp4"), path: ("merge_vid/echo200ms_032.mp4") },
  { name: ("merge_vid/0ms_032.mp4"), path: ("merge_vid/0ms_032.mp4") },
  { name: ("merge_vid/15ms_055.mp4"), path: ("merge_vid/15ms_055.mp4") },
  { name: ("merge_vid/200ms_055.mp4"), path: ("merge_vid/200ms_055.mp4") },
  { name: ("merge_vid/echo15ms_057.mp4"), path: ("merge_vid/echo15ms_057.mp4") },
  { name: ("merge_vid/echo200ms_057.mp4"), path: ("merge_vid/echo200ms_057.mp4") },
  { name: ("merge_vid/0ms_065.mp4"), path: ("merge_vid/0ms_065.mp4") },
  { name: ("merge_vid/15ms_065.mp4"), path: ("merge_vid/15ms_065.mp4") },
  { name: ("merge_vid/200ms_068.mp4"), path: ("merge_vid/200ms_068.mp4") },
  { name: ("merge_vid/echo15ms_068.mp4"), path: ("merge_vid/echo15ms_068.mp4") },
  { name: ("merge_vid/echo200ms_072.mp4"), path: ("merge_vid/echo200ms_072.mp4") },
  { name: ("merge_vid/0ms_072.mp4"), path: ("merge_vid/0ms_072.mp4") },
  { name: ("dummy"), path: ("dummy.xlsx") }]);
  console.log("started loading resources");
  }
  white = new util.Color([1, 1, 1]);
  grey = new util.Color([.2, .2, .2]);
  yellow = new util.Color([1, 1, 0]);
  green = new util.Color([-1, 0, -1]);
  black = new util.Color([-1, -1, -1]);
  red = new util.Color([1, 0, 0]);
  var sUsrAg;
  var nIdx;
  function getBrowserId () {
   var browsers = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"];
   sUsrAg = window.navigator.userAgent,
   nIdx = browsers.length - 1;
   for (nIdx; nIdx > -1 && sUsrAg.indexOf(browsers [nIdx]) === -1; nIdx--);
    return browsers[nIdx];
  }
  expInfo['OS'] = window.navigator.platform;
  expInfo['browser'] = getBrowserId();
  expInfo['xResolution'] = screen.width;
  expInfo['yResolution'] = screen.height;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    quitPsychoJS('Mobiles Endgerät gefunden. bitte benutzen sie einen Computer oder Laptop mit Tastatur für dieses Experiment', false)
  }
  
  document.body.style.cursor='none';
  //You need to add the following code when you want to un-hide it:
  //document.body.style.cursor='auto';
  
  font_color = black;
  
  imagePos = (Number.parseInt(expInfo["participant"]) % 2);
  console.log(("imagePos = " + imagePos.toString()));
  
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  shuffle = util.shuffle;
  Array.prototype.append = [].push;
  
  trial_counter = 0;
  
  // Initialize components for Routine "welcome_screen"
  welcome_screenClock = new util.Clock();
  cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: 'Willkommen zum Experiment!\n\nWir bitten Sie nun zunächst, einige Fragen zu beantworten.\nLassen Sie sich dabei Zeit, denn Sie haben keine Möglichkeit zur Korrektur. \n\n[Fortfahren mit Enter]\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "loading"
  loadingClock = new util.Clock();
  loading_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'loading_text',
    text: 'Wir müssen noch einige letzte Dateien laden. Dies dauert ca. 2 Minuten. \nNutzen Sie die Gelegenheit, sich ein Getränk zu holen, Kopfhörer anzuschließen und die Computerlautstärke passend einzustellen. Sorgen Sie gerne auch für angenehme Lichtverhältnisse im Raum etc. \n\n[Weiter mit Enter]\n[Just skippable for now, Will get deactivated]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "age"
  ageClock = new util.Clock();
  age_q = new visual.TextStim({
    win: psychoJS.window,
    name: 'age_q',
    text: 'Wie alt sind Sie?\n\n[Numerisch eintippen, senden mit Enter]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: 0.0 
  });
  
  age_resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'age_resp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "language"
  languageClock = new util.Clock();
  respons = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_arrow = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  right_arrow = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  ja = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja',
    text: 'ja',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -3.0 
  });
  
  nein = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein',
    text: 'nein',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  question = new visual.TextStim({
    win: psychoJS.window,
    name: 'question',
    text: 'Sprechen sie Deutsch als Muttersprache?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "hearing"
  hearingClock = new util.Clock();
  respons_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_arrow_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_2', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  right_arrow_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_2', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  ja_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja_2',
    text: 'ja',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -3.0 
  });
  
  nein_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein_2',
    text: 'nein',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  question_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_2',
    text: 'Haben Sie ein eingeschränktes Hörvermögen?\n(z.B. aufgrund akuter oder chronischer Hörstörungen).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "gender"
  genderClock = new util.Clock();
  respons_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_arrow_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_3', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  right_arrow_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_3', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  maennlich = new visual.TextStim({
    win: psychoJS.window,
    name: 'maennlich',
    text: 'männlich',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -3.0 
  });
  
  weiblich = new visual.TextStim({
    win: psychoJS.window,
    name: 'weiblich',
    text: 'weiblich',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  question_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_3',
    text: 'Was ist Ihr Geschlecht?\n\n[Leertaste: Divers]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "dom_hand"
  dom_handClock = new util.Clock();
  respons_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_arrow_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_4', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  right_arrow_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_4', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  ja_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja_3',
    text: 'links',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -3.0 
  });
  
  nein_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein_3',
    text: 'rechts',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  question_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_4',
    text: 'Welche ist Ihre dominante Hand?\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "environment"
  environmentClock = new util.Clock();
  respons_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_arrow_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_5', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  right_arrow_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_5', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  ja_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja_4',
    text: 'ja',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -3.0 
  });
  
  nein_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein_4',
    text: 'nein',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  question_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_5',
    text: 'Haben Sie Kopfhörer auf?\nAchtung! Bluetooth-Kopfhörer sind unbedingt zu vermeiden, nutzen Sie bitte kabelgebundene Kopfhörer.\nSitzen SIe in  angenehmer Entfernung zum Bildschirm?\nIdeal wären ca. 60 cm Distanz.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "vision"
  visionClock = new util.Clock();
  respons_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_arrow_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_6', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  right_arrow_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_6', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  ja_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja_5',
    text: 'ja',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -3.0 
  });
  
  nein_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein_5',
    text: 'nein',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  question_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_6',
    text: 'Haben Sie auf einem oder beiden Augen eine Sehschwäche?\n\n[Leertaste: Ja, aber Ich trage eine Brille oder Kontaktlinsen]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "asd"
  asdClock = new util.Clock();
  respons_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_arrow_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_7', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  right_arrow_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_7', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  ja_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja_6',
    text: 'ja',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -3.0 
  });
  
  nein_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein_6',
    text: 'nein',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  question_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_7',
    text: 'Wurden Sie jemals mit einer Autismus-Spektrum-Störung  diagnostiziert?\n\n[Leertaste: keine Antwort]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "psych"
  psychClock = new util.Clock();
  respons_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_arrow_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_8', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  right_arrow_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_8', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.2)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  ja_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja_7',
    text: 'ja',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -3.0 
  });
  
  nein_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein_7',
    text: 'nein',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  question_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_8',
    text: 'Leiden Sie an einer neurologischen Erkrankung?\n\n[Leertaste: keine Antwort]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "adjust_sound"
  adjust_soundClock = new util.Clock();
  done = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Bitte stellen sie Ihre Computerlautstärke so ein, dass Sie den Satz klar und deutlich verstehen können.\n\n[Wiederholen mit Leertaste]\n[Fortfahren mit Entertaste]',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "notes"
  notesClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -1.0 
  });
  
  instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction',
    text: 'Wenn Sie noch Anmerkungen haben, \nlassen Sie uns dies bitte wissen:\n\n[Einfach tippen, senden und weiter mit Enter]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "choice_instr"
  choice_instrClock = new util.Clock();
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'In diesem Experiment werden Sie in jedem Durchgang zunächst ein Adjektiv auf dem Bildschirm sehen, welches eine Eigenschaft wiedergibt, (z.B. "tapfer").\nBitte merken Sie sich dann diese Eigenschaft.\n\n[Fortfahren mit Enter]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "choice_instr_2"
  choice_instr_2Clock = new util.Clock();
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Im Anschluss erscheinen dann zwei Bilder von Tieren oder Personen auf der linken und rechten Seite des Bildschirms. \nSie haben kurz Zeit, um sich diese Bilder anzuschauen, bevor Ihnen ein Videoclip gezeigt wird. \nIn diesem sagt ein Mann einen deutschen Satz über die angezeigten Bilder. \n\n[Weiter mit Enter]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "choice_instr_3"
  choice_instr_3Clock = new util.Clock();
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Ihre Aufgabe ist es, dem Satz zu entnehmen, welche der beiden Personen oder Tiere die zuvor gezeigte Eigenschaft (z.B. "tapfer") besitzt, und dann schnellstmöglichst zu antworten. \nNutzen Sie die linke Pfeiltaste für das linke Bild, \nund die rechte Pfeiltaste für das Rechte. \nAber Achtung! \nManchmal passt keines der Bilder zu der gezeigten Eigenschaft. \nIn diesem Fall drücken Sie bitte die Pfeiltaste nach oben.\n\nNutzen Sie bitte zum Antworten immer nur eine und auch immer dieselbe Hand, auch wenn es vielleicht mit zwei Händen schneller geht. \n\n[Bestätigen mit Enter und mit Probedurchläufen beginnen]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 70, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "show_target"
  show_targetClock = new util.Clock();
  target = new visual.TextStim({
    win: psychoJS.window,
    name: 'target',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -1.0 
  });
  
  quest = new visual.TextStim({
    win: psychoJS.window,
    name: 'quest',
    text: 'Welches Bild ist:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "stimulus_choice"
  stimulus_choiceClock = new util.Clock();
  response_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fix_cross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_cross_2', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0.25],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(font_color),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  stimulus_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.5), (- 0.25)], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  stimulus_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.5, (- 0.25)], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  left_arrow_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_9', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  right_arrow_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_9', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  up_arrow = new visual.ImageStim({
    win : psychoJS.window,
    name : 'up_arrow', units : undefined, 
    image : 'images/up.png', mask : undefined,
    ori : 0, pos : [0, (- 0.15)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "training_complete"
  training_completeClock = new util.Clock();
  feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback',
    text: 'Sie haben das Training erfolgreich abgeschlossen.\nZwischendurch gibt es immer wieder kleine Pausen (insgesamt 10), die Sie nach Belieben annehmen dürfen.\nDas gesamte Experiment dauert ca. 25 Minuten ohne Pausen.\n\nZur Erinnerung: Sie können das Experiment jederzeit vorzeitig abbrechen, indem Sie ESC drücken.\n\n[Fortfahren mit Enter und das Experiment starten]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SJ_instr"
  SJ_instrClock = new util.Clock();
  sync = new visual.TextStim({
    win: psychoJS.window,
    name: 'sync',
    text: 'Im folgenden Block sollen Sie beantworten, ob in den Clips, die Ihnen gezeigt werden, Audio und Video synchron sind, oder nicht.\n\nSie können nur JA oder NEIN antworten.\n\nDie linke Pfeiltaste entspricht JA, die rechte Pfeiltaste NEIN.\n\n[Fortfahren mit Enter]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SJ_stim_presentation"
  SJ_stim_presentationClock = new util.Clock();
  fix_cross_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_cross_3', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0.25],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(font_color),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "SJ_question_sychronicity"
  SJ_question_sychronicityClock = new util.Clock();
  response_sync = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  right_arrow_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_11', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  left_arrow_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_11', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  ja_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja_9',
    text: 'ja',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  nein_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein_9',
    text: 'nein',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  question_synchronicity = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_synchronicity',
    text: 'Erscheinen Ihnen Audio und Video zeitversetzt?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "SJ_question_distortion"
  SJ_question_distortionClock = new util.Clock();
  response_distortion = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  right_arrow_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_12', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  left_arrow_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_12', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  ja_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja_10',
    text: 'ja',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  nein_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein_10',
    text: 'nein',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  question_distortion = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_distortion',
    text: 'Ist im Clip ein Echo zu hören?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "skipper"
  skipperClock = new util.Clock();
  // Initialize components for Routine "SJ_instr"
  SJ_instrClock = new util.Clock();
  sync = new visual.TextStim({
    win: psychoJS.window,
    name: 'sync',
    text: 'Im folgenden Block sollen Sie beantworten, ob in den Clips, die Ihnen gezeigt werden, Audio und Video synchron sind, oder nicht.\n\nSie können nur JA oder NEIN antworten.\n\nDie linke Pfeiltaste entspricht JA, die rechte Pfeiltaste NEIN.\n\n[Fortfahren mit Enter]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SJ_stim_presentation"
  SJ_stim_presentationClock = new util.Clock();
  fix_cross_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_cross_3', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0.25],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(font_color),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "SJ_question_sychronicity"
  SJ_question_sychronicityClock = new util.Clock();
  response_sync = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  right_arrow_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_11', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  left_arrow_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_11', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  ja_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ja_9',
    text: 'ja',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.25), (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -4.0 
  });
  
  nein_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nein_9',
    text: 'nein',
    font: 'Arial',
    units: undefined, 
    pos: [0.25, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -5.0 
  });
  
  question_synchronicity = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_synchronicity',
    text: 'Erscheinen Ihnen Audio und Video zeitversetzt?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "show_target"
  show_targetClock = new util.Clock();
  target = new visual.TextStim({
    win: psychoJS.window,
    name: 'target',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -1.0 
  });
  
  quest = new visual.TextStim({
    win: psychoJS.window,
    name: 'quest',
    text: 'Welches Bild ist:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "stimulus_choice"
  stimulus_choiceClock = new util.Clock();
  response_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fix_cross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_cross_2', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0.25],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(font_color),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  stimulus_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.5), (- 0.25)], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  stimulus_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.5, (- 0.25)], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  left_arrow_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_arrow_9', units : undefined, 
    image : 'images/left.png', mask : undefined,
    ori : 0, pos : [(- 0.25), (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  right_arrow_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_arrow_9', units : undefined, 
    image : 'images/right.png', mask : undefined,
    ori : 0, pos : [0.25, (- 0.25)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  up_arrow = new visual.ImageStim({
    win : psychoJS.window,
    name : 'up_arrow', units : undefined, 
    image : 'images/up.png', mask : undefined,
    ori : 0, pos : [0, (- 0.15)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  pause_msg = new visual.TextStim({
    win: psychoJS.window,
    name: 'pause_msg',
    text: 'Sie haben eine Pause erreicht. \n\nZur Erinnerung: Sie können das Experiment jederzeit vorzeitig abbrechen, indem Sie ESC drücken.\n\n[Drücken sie Enter um fortzufahren]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  progress = new visual.TextStim({
    win: psychoJS.window,
    name: 'progress',
    text: (("Sie haben " + trial_counter.toString()) + "  von 160 geschafft."),
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.5], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "SJ_instr"
  SJ_instrClock = new util.Clock();
  sync = new visual.TextStim({
    win: psychoJS.window,
    name: 'sync',
    text: 'Im folgenden Block sollen Sie beantworten, ob in den Clips, die Ihnen gezeigt werden, Audio und Video synchron sind, oder nicht.\n\nSie können nur JA oder NEIN antworten.\n\nDie linke Pfeiltaste entspricht JA, die rechte Pfeiltaste NEIN.\n\n[Fortfahren mit Enter]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SJ_stim_presentation"
  SJ_stim_presentationClock = new util.Clock();
  fix_cross_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_cross_3', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0, pos: [0, 0.25],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(font_color),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "close"
  closeClock = new util.Clock();
  vp_hours = new visual.TextStim({
    win: psychoJS.window,
    name: 'vp_hours',
    text: 'Alles Geschafft!\nVielen Dank fürs Mitmachen!\nSie werden nun auf eine externe Seite geleitet, auf der Sie einige Fragen zum Verlauf des Experimentes beantworten können.\n\n[Drücken Sie Enter, um das Experiment zu verlassen und ein neues Tab zu öffnen]\n\n(Deactivated, so it doesnt cost money) ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color(font_color),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var setupComponents;
function setupRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setupRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _cont_allKeys;
var welcome_screenComponents;
function welcome_screenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'welcome_screen'-------
    t = 0;
    welcome_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    cont.keys = undefined;
    cont.rt = undefined;
    _cont_allKeys = [];
    // keep track of which components have finished
    welcome_screenComponents = [];
    welcome_screenComponents.push(cont);
    welcome_screenComponents.push(welcome);
    
    for (const thisComponent of welcome_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcome_screenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'welcome_screen'-------
    // get current time
    t = welcome_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cont* updates
    if (t >= 0.0 && cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont.tStart = t;  // (not accounting for frame time here)
      cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { cont.clearEvents(); });
    }

    if (cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = cont.getKeys({keyList: ['return'], waitRelease: false});
      _cont_allKeys = _cont_allKeys.concat(theseKeys);
      if (_cont_allKeys.length > 0) {
        cont.keys = _cont_allKeys[_cont_allKeys.length - 1].name;  // just the last key pressed
        cont.rt = _cont_allKeys[_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *welcome* updates
    if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome.tStart = t;  // (not accounting for frame time here)
      welcome.frameNStart = frameN;  // exact frame index
      
      welcome.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcome_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_screenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'welcome_screen'-------
    for (const thisComponent of welcome_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('cont.keys', cont.keys);
    if (typeof cont.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('cont.rt', cont.rt);
        routineTimer.reset();
        }
    
    cont.stop();
    // the Routine "welcome_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var loadingComponents;
function loadingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'loading'-------
    t = 0;
    loadingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    loadingComponents = [];
    loadingComponents.push(loading_text);
    loadingComponents.push(key_resp_3);
    
    for (const thisComponent of loadingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function loadingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'loading'-------
    // get current time
    t = loadingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *loading_text* updates
    if (t >= 0.0 && loading_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      loading_text.tStart = t;  // (not accounting for frame time here)
      loading_text.frameNStart = frameN;  // exact frame index
      
      loading_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (loading_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      loading_text.setAutoDraw(false);
    }
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['return', 'none'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[0].name;  // just the first key pressed
        key_resp_3.rt = _key_resp_3_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of loadingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loadingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'loading'-------
    for (const thisComponent of loadingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "loading" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var modify;
var ageComponents;
function ageRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'age'-------
    t = 0;
    ageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    age_resp.text = "";
    psychoJS.eventManager.clearEvents("keyboard");
    
    // keep track of which components have finished
    ageComponents = [];
    ageComponents.push(age_q);
    ageComponents.push(age_resp);
    
    for (const thisComponent of ageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
function ageRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'age'-------
    // get current time
    t = ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *age_q* updates
    if (t >= 0.0 && age_q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_q.tStart = t;  // (not accounting for frame time here)
      age_q.frameNStart = frameN;  // exact frame index
      
      age_q.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys({"keyList": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "return"]});
    if (keys.length) {
        if (_pj.in_es6("space", keys)) {
            age_resp.text = (age_resp.text + " ");
        } else {
            if (_pj.in_es6("backspace", keys)) {
                age_resp.text = age_resp.text.slice(0, (- 1));
            } else {
                if ((_pj.in_es6("lshift", keys) || _pj.in_es6("rshift", keys))) {
                    modify = true;
                } else {
                    if (_pj.in_es6("return", keys)) {
                        continueRoutine = false;
                    } else {
                        if (modify) {
                            age_resp.text = (age_resp.text + keys[0].upper());
                            modify = false;
                        } else {
                            age_resp.text = (age_resp.text + keys[0]);
                        }
                    }
                }
            }
        }
    }
    
    
    // *age_resp* updates
    if (t >= 0.0 && age_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_resp.tStart = t;  // (not accounting for frame time here)
      age_resp.frameNStart = frameN;  // exact frame index
      
      age_resp.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ageRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'age'-------
    for (const thisComponent of ageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("ageResp", age_resp.text);
    
    // the Routine "age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _respons_allKeys;
var languageComponents;
function languageRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'language'-------
    t = 0;
    languageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respons.keys = undefined;
    respons.rt = undefined;
    _respons_allKeys = [];
    // keep track of which components have finished
    languageComponents = [];
    languageComponents.push(respons);
    languageComponents.push(left_arrow);
    languageComponents.push(right_arrow);
    languageComponents.push(ja);
    languageComponents.push(nein);
    languageComponents.push(question);
    
    for (const thisComponent of languageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function languageRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'language'-------
    // get current time
    t = languageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respons* updates
    if (t >= 0.0 && respons.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respons.tStart = t;  // (not accounting for frame time here)
      respons.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { respons.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { respons.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { respons.clearEvents(); });
    }

    if (respons.status === PsychoJS.Status.STARTED) {
      let theseKeys = respons.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _respons_allKeys = _respons_allKeys.concat(theseKeys);
      if (_respons_allKeys.length > 0) {
        respons.keys = _respons_allKeys[_respons_allKeys.length - 1].name;  // just the last key pressed
        respons.rt = _respons_allKeys[_respons_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_arrow* updates
    if (t >= 0.0 && left_arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow.tStart = t;  // (not accounting for frame time here)
      left_arrow.frameNStart = frameN;  // exact frame index
      
      left_arrow.setAutoDraw(true);
    }

    
    // *right_arrow* updates
    if (t >= 0.0 && right_arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow.tStart = t;  // (not accounting for frame time here)
      right_arrow.frameNStart = frameN;  // exact frame index
      
      right_arrow.setAutoDraw(true);
    }

    
    // *ja* updates
    if (t >= 0.0 && ja.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ja.tStart = t;  // (not accounting for frame time here)
      ja.frameNStart = frameN;  // exact frame index
      
      ja.setAutoDraw(true);
    }

    
    // *nein* updates
    if (t >= 0.0 && nein.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nein.tStart = t;  // (not accounting for frame time here)
      nein.frameNStart = frameN;  // exact frame index
      
      nein.setAutoDraw(true);
    }

    
    // *question* updates
    if (t >= 0.0 && question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question.tStart = t;  // (not accounting for frame time here)
      question.frameNStart = frameN;  // exact frame index
      
      question.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of languageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function languageRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'language'-------
    for (const thisComponent of languageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respons.keys', respons.keys);
    if (typeof respons.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('respons.rt', respons.rt);
        routineTimer.reset();
        }
    
    respons.stop();
    // the Routine "language" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _respons_2_allKeys;
var hearingComponents;
function hearingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'hearing'-------
    t = 0;
    hearingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respons_2.keys = undefined;
    respons_2.rt = undefined;
    _respons_2_allKeys = [];
    // keep track of which components have finished
    hearingComponents = [];
    hearingComponents.push(respons_2);
    hearingComponents.push(left_arrow_2);
    hearingComponents.push(right_arrow_2);
    hearingComponents.push(ja_2);
    hearingComponents.push(nein_2);
    hearingComponents.push(question_2);
    
    for (const thisComponent of hearingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function hearingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'hearing'-------
    // get current time
    t = hearingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respons_2* updates
    if (t >= 0.0 && respons_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respons_2.tStart = t;  // (not accounting for frame time here)
      respons_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { respons_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { respons_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { respons_2.clearEvents(); });
    }

    if (respons_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = respons_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _respons_2_allKeys = _respons_2_allKeys.concat(theseKeys);
      if (_respons_2_allKeys.length > 0) {
        respons_2.keys = _respons_2_allKeys[_respons_2_allKeys.length - 1].name;  // just the last key pressed
        respons_2.rt = _respons_2_allKeys[_respons_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_arrow_2* updates
    if (t >= 0.0 && left_arrow_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_2.tStart = t;  // (not accounting for frame time here)
      left_arrow_2.frameNStart = frameN;  // exact frame index
      
      left_arrow_2.setAutoDraw(true);
    }

    
    // *right_arrow_2* updates
    if (t >= 0.0 && right_arrow_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_2.tStart = t;  // (not accounting for frame time here)
      right_arrow_2.frameNStart = frameN;  // exact frame index
      
      right_arrow_2.setAutoDraw(true);
    }

    
    // *ja_2* updates
    if (t >= 0.0 && ja_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ja_2.tStart = t;  // (not accounting for frame time here)
      ja_2.frameNStart = frameN;  // exact frame index
      
      ja_2.setAutoDraw(true);
    }

    
    // *nein_2* updates
    if (t >= 0.0 && nein_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nein_2.tStart = t;  // (not accounting for frame time here)
      nein_2.frameNStart = frameN;  // exact frame index
      
      nein_2.setAutoDraw(true);
    }

    
    // *question_2* updates
    if (t >= 0.0 && question_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_2.tStart = t;  // (not accounting for frame time here)
      question_2.frameNStart = frameN;  // exact frame index
      
      question_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of hearingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function hearingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'hearing'-------
    for (const thisComponent of hearingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respons_2.keys', respons_2.keys);
    if (typeof respons_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('respons_2.rt', respons_2.rt);
        routineTimer.reset();
        }
    
    respons_2.stop();
    // the Routine "hearing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _respons_3_allKeys;
var genderComponents;
function genderRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'gender'-------
    t = 0;
    genderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respons_3.keys = undefined;
    respons_3.rt = undefined;
    _respons_3_allKeys = [];
    // keep track of which components have finished
    genderComponents = [];
    genderComponents.push(respons_3);
    genderComponents.push(left_arrow_3);
    genderComponents.push(right_arrow_3);
    genderComponents.push(maennlich);
    genderComponents.push(weiblich);
    genderComponents.push(question_3);
    
    for (const thisComponent of genderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function genderRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'gender'-------
    // get current time
    t = genderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respons_3* updates
    if (t >= 0.0 && respons_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respons_3.tStart = t;  // (not accounting for frame time here)
      respons_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { respons_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { respons_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { respons_3.clearEvents(); });
    }

    if (respons_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = respons_3.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _respons_3_allKeys = _respons_3_allKeys.concat(theseKeys);
      if (_respons_3_allKeys.length > 0) {
        respons_3.keys = _respons_3_allKeys[_respons_3_allKeys.length - 1].name;  // just the last key pressed
        respons_3.rt = _respons_3_allKeys[_respons_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_arrow_3* updates
    if (t >= 0.0 && left_arrow_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_3.tStart = t;  // (not accounting for frame time here)
      left_arrow_3.frameNStart = frameN;  // exact frame index
      
      left_arrow_3.setAutoDraw(true);
    }

    
    // *right_arrow_3* updates
    if (t >= 0.0 && right_arrow_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_3.tStart = t;  // (not accounting for frame time here)
      right_arrow_3.frameNStart = frameN;  // exact frame index
      
      right_arrow_3.setAutoDraw(true);
    }

    
    // *maennlich* updates
    if (t >= 0.0 && maennlich.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      maennlich.tStart = t;  // (not accounting for frame time here)
      maennlich.frameNStart = frameN;  // exact frame index
      
      maennlich.setAutoDraw(true);
    }

    
    // *weiblich* updates
    if (t >= 0.0 && weiblich.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      weiblich.tStart = t;  // (not accounting for frame time here)
      weiblich.frameNStart = frameN;  // exact frame index
      
      weiblich.setAutoDraw(true);
    }

    
    // *question_3* updates
    if (t >= 0.0 && question_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_3.tStart = t;  // (not accounting for frame time here)
      question_3.frameNStart = frameN;  // exact frame index
      
      question_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of genderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function genderRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'gender'-------
    for (const thisComponent of genderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respons_3.keys', respons_3.keys);
    if (typeof respons_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('respons_3.rt', respons_3.rt);
        routineTimer.reset();
        }
    
    respons_3.stop();
    // the Routine "gender" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _respons_4_allKeys;
var dom_handComponents;
function dom_handRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'dom_hand'-------
    t = 0;
    dom_handClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respons_4.keys = undefined;
    respons_4.rt = undefined;
    _respons_4_allKeys = [];
    // keep track of which components have finished
    dom_handComponents = [];
    dom_handComponents.push(respons_4);
    dom_handComponents.push(left_arrow_4);
    dom_handComponents.push(right_arrow_4);
    dom_handComponents.push(ja_3);
    dom_handComponents.push(nein_3);
    dom_handComponents.push(question_4);
    
    for (const thisComponent of dom_handComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function dom_handRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'dom_hand'-------
    // get current time
    t = dom_handClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respons_4* updates
    if (t >= 0.0 && respons_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respons_4.tStart = t;  // (not accounting for frame time here)
      respons_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { respons_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { respons_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { respons_4.clearEvents(); });
    }

    if (respons_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = respons_4.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _respons_4_allKeys = _respons_4_allKeys.concat(theseKeys);
      if (_respons_4_allKeys.length > 0) {
        respons_4.keys = _respons_4_allKeys[_respons_4_allKeys.length - 1].name;  // just the last key pressed
        respons_4.rt = _respons_4_allKeys[_respons_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_arrow_4* updates
    if (t >= 0.0 && left_arrow_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_4.tStart = t;  // (not accounting for frame time here)
      left_arrow_4.frameNStart = frameN;  // exact frame index
      
      left_arrow_4.setAutoDraw(true);
    }

    
    // *right_arrow_4* updates
    if (t >= 0.0 && right_arrow_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_4.tStart = t;  // (not accounting for frame time here)
      right_arrow_4.frameNStart = frameN;  // exact frame index
      
      right_arrow_4.setAutoDraw(true);
    }

    
    // *ja_3* updates
    if (t >= 0.0 && ja_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ja_3.tStart = t;  // (not accounting for frame time here)
      ja_3.frameNStart = frameN;  // exact frame index
      
      ja_3.setAutoDraw(true);
    }

    
    // *nein_3* updates
    if (t >= 0.0 && nein_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nein_3.tStart = t;  // (not accounting for frame time here)
      nein_3.frameNStart = frameN;  // exact frame index
      
      nein_3.setAutoDraw(true);
    }

    
    // *question_4* updates
    if (t >= 0.0 && question_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_4.tStart = t;  // (not accounting for frame time here)
      question_4.frameNStart = frameN;  // exact frame index
      
      question_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of dom_handComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dom_handRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'dom_hand'-------
    for (const thisComponent of dom_handComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respons_4.keys', respons_4.keys);
    if (typeof respons_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('respons_4.rt', respons_4.rt);
        routineTimer.reset();
        }
    
    respons_4.stop();
    // the Routine "dom_hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _respons_5_allKeys;
var environmentComponents;
function environmentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'environment'-------
    t = 0;
    environmentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respons_5.keys = undefined;
    respons_5.rt = undefined;
    _respons_5_allKeys = [];
    // keep track of which components have finished
    environmentComponents = [];
    environmentComponents.push(respons_5);
    environmentComponents.push(left_arrow_5);
    environmentComponents.push(right_arrow_5);
    environmentComponents.push(ja_4);
    environmentComponents.push(nein_4);
    environmentComponents.push(question_5);
    
    for (const thisComponent of environmentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function environmentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'environment'-------
    // get current time
    t = environmentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respons_5* updates
    if (t >= 0.0 && respons_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respons_5.tStart = t;  // (not accounting for frame time here)
      respons_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { respons_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { respons_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { respons_5.clearEvents(); });
    }

    if (respons_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = respons_5.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _respons_5_allKeys = _respons_5_allKeys.concat(theseKeys);
      if (_respons_5_allKeys.length > 0) {
        respons_5.keys = _respons_5_allKeys[_respons_5_allKeys.length - 1].name;  // just the last key pressed
        respons_5.rt = _respons_5_allKeys[_respons_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_arrow_5* updates
    if (t >= 0.0 && left_arrow_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_5.tStart = t;  // (not accounting for frame time here)
      left_arrow_5.frameNStart = frameN;  // exact frame index
      
      left_arrow_5.setAutoDraw(true);
    }

    
    // *right_arrow_5* updates
    if (t >= 0.0 && right_arrow_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_5.tStart = t;  // (not accounting for frame time here)
      right_arrow_5.frameNStart = frameN;  // exact frame index
      
      right_arrow_5.setAutoDraw(true);
    }

    
    // *ja_4* updates
    if (t >= 0.0 && ja_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ja_4.tStart = t;  // (not accounting for frame time here)
      ja_4.frameNStart = frameN;  // exact frame index
      
      ja_4.setAutoDraw(true);
    }

    
    // *nein_4* updates
    if (t >= 0.0 && nein_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nein_4.tStart = t;  // (not accounting for frame time here)
      nein_4.frameNStart = frameN;  // exact frame index
      
      nein_4.setAutoDraw(true);
    }

    
    // *question_5* updates
    if (t >= 0.0 && question_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_5.tStart = t;  // (not accounting for frame time here)
      question_5.frameNStart = frameN;  // exact frame index
      
      question_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of environmentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function environmentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'environment'-------
    for (const thisComponent of environmentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respons_5.keys', respons_5.keys);
    if (typeof respons_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('respons_5.rt', respons_5.rt);
        routineTimer.reset();
        }
    
    respons_5.stop();
    // the Routine "environment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _respons_6_allKeys;
var visionComponents;
function visionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'vision'-------
    t = 0;
    visionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respons_6.keys = undefined;
    respons_6.rt = undefined;
    _respons_6_allKeys = [];
    // keep track of which components have finished
    visionComponents = [];
    visionComponents.push(respons_6);
    visionComponents.push(left_arrow_6);
    visionComponents.push(right_arrow_6);
    visionComponents.push(ja_5);
    visionComponents.push(nein_5);
    visionComponents.push(question_6);
    
    for (const thisComponent of visionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function visionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'vision'-------
    // get current time
    t = visionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respons_6* updates
    if (t >= 0.0 && respons_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respons_6.tStart = t;  // (not accounting for frame time here)
      respons_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { respons_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { respons_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { respons_6.clearEvents(); });
    }

    if (respons_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = respons_6.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _respons_6_allKeys = _respons_6_allKeys.concat(theseKeys);
      if (_respons_6_allKeys.length > 0) {
        respons_6.keys = _respons_6_allKeys[_respons_6_allKeys.length - 1].name;  // just the last key pressed
        respons_6.rt = _respons_6_allKeys[_respons_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_arrow_6* updates
    if (t >= 0.0 && left_arrow_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_6.tStart = t;  // (not accounting for frame time here)
      left_arrow_6.frameNStart = frameN;  // exact frame index
      
      left_arrow_6.setAutoDraw(true);
    }

    
    // *right_arrow_6* updates
    if (t >= 0.0 && right_arrow_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_6.tStart = t;  // (not accounting for frame time here)
      right_arrow_6.frameNStart = frameN;  // exact frame index
      
      right_arrow_6.setAutoDraw(true);
    }

    
    // *ja_5* updates
    if (t >= 0.0 && ja_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ja_5.tStart = t;  // (not accounting for frame time here)
      ja_5.frameNStart = frameN;  // exact frame index
      
      ja_5.setAutoDraw(true);
    }

    
    // *nein_5* updates
    if (t >= 0.0 && nein_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nein_5.tStart = t;  // (not accounting for frame time here)
      nein_5.frameNStart = frameN;  // exact frame index
      
      nein_5.setAutoDraw(true);
    }

    
    // *question_6* updates
    if (t >= 0.0 && question_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_6.tStart = t;  // (not accounting for frame time here)
      question_6.frameNStart = frameN;  // exact frame index
      
      question_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of visionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function visionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'vision'-------
    for (const thisComponent of visionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respons_6.keys', respons_6.keys);
    if (typeof respons_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('respons_6.rt', respons_6.rt);
        routineTimer.reset();
        }
    
    respons_6.stop();
    // the Routine "vision" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _respons_7_allKeys;
var asdComponents;
function asdRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'asd'-------
    t = 0;
    asdClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respons_7.keys = undefined;
    respons_7.rt = undefined;
    _respons_7_allKeys = [];
    // keep track of which components have finished
    asdComponents = [];
    asdComponents.push(respons_7);
    asdComponents.push(left_arrow_7);
    asdComponents.push(right_arrow_7);
    asdComponents.push(ja_6);
    asdComponents.push(nein_6);
    asdComponents.push(question_7);
    
    for (const thisComponent of asdComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function asdRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'asd'-------
    // get current time
    t = asdClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respons_7* updates
    if (t >= 0.0 && respons_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respons_7.tStart = t;  // (not accounting for frame time here)
      respons_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { respons_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { respons_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { respons_7.clearEvents(); });
    }

    if (respons_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = respons_7.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _respons_7_allKeys = _respons_7_allKeys.concat(theseKeys);
      if (_respons_7_allKeys.length > 0) {
        respons_7.keys = _respons_7_allKeys[_respons_7_allKeys.length - 1].name;  // just the last key pressed
        respons_7.rt = _respons_7_allKeys[_respons_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_arrow_7* updates
    if (t >= 0.0 && left_arrow_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_7.tStart = t;  // (not accounting for frame time here)
      left_arrow_7.frameNStart = frameN;  // exact frame index
      
      left_arrow_7.setAutoDraw(true);
    }

    
    // *right_arrow_7* updates
    if (t >= 0.0 && right_arrow_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_7.tStart = t;  // (not accounting for frame time here)
      right_arrow_7.frameNStart = frameN;  // exact frame index
      
      right_arrow_7.setAutoDraw(true);
    }

    
    // *ja_6* updates
    if (t >= 0.0 && ja_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ja_6.tStart = t;  // (not accounting for frame time here)
      ja_6.frameNStart = frameN;  // exact frame index
      
      ja_6.setAutoDraw(true);
    }

    
    // *nein_6* updates
    if (t >= 0.0 && nein_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nein_6.tStart = t;  // (not accounting for frame time here)
      nein_6.frameNStart = frameN;  // exact frame index
      
      nein_6.setAutoDraw(true);
    }

    
    // *question_7* updates
    if (t >= 0.0 && question_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_7.tStart = t;  // (not accounting for frame time here)
      question_7.frameNStart = frameN;  // exact frame index
      
      question_7.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of asdComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function asdRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'asd'-------
    for (const thisComponent of asdComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respons_7.keys', respons_7.keys);
    if (typeof respons_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('respons_7.rt', respons_7.rt);
        routineTimer.reset();
        }
    
    respons_7.stop();
    // the Routine "asd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _respons_8_allKeys;
var psychComponents;
function psychRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'psych'-------
    t = 0;
    psychClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respons_8.keys = undefined;
    respons_8.rt = undefined;
    _respons_8_allKeys = [];
    // keep track of which components have finished
    psychComponents = [];
    psychComponents.push(respons_8);
    psychComponents.push(left_arrow_8);
    psychComponents.push(right_arrow_8);
    psychComponents.push(ja_7);
    psychComponents.push(nein_7);
    psychComponents.push(question_8);
    
    for (const thisComponent of psychComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function psychRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'psych'-------
    // get current time
    t = psychClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respons_8* updates
    if (t >= 0.0 && respons_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respons_8.tStart = t;  // (not accounting for frame time here)
      respons_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { respons_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { respons_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { respons_8.clearEvents(); });
    }

    if (respons_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = respons_8.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _respons_8_allKeys = _respons_8_allKeys.concat(theseKeys);
      if (_respons_8_allKeys.length > 0) {
        respons_8.keys = _respons_8_allKeys[_respons_8_allKeys.length - 1].name;  // just the last key pressed
        respons_8.rt = _respons_8_allKeys[_respons_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_arrow_8* updates
    if (t >= 0.0 && left_arrow_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_8.tStart = t;  // (not accounting for frame time here)
      left_arrow_8.frameNStart = frameN;  // exact frame index
      
      left_arrow_8.setAutoDraw(true);
    }

    
    // *right_arrow_8* updates
    if (t >= 0.0 && right_arrow_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_8.tStart = t;  // (not accounting for frame time here)
      right_arrow_8.frameNStart = frameN;  // exact frame index
      
      right_arrow_8.setAutoDraw(true);
    }

    
    // *ja_7* updates
    if (t >= 0.0 && ja_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ja_7.tStart = t;  // (not accounting for frame time here)
      ja_7.frameNStart = frameN;  // exact frame index
      
      ja_7.setAutoDraw(true);
    }

    
    // *nein_7* updates
    if (t >= 0.0 && nein_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nein_7.tStart = t;  // (not accounting for frame time here)
      nein_7.frameNStart = frameN;  // exact frame index
      
      nein_7.setAutoDraw(true);
    }

    
    // *question_8* updates
    if (t >= 0.0 && question_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_8.tStart = t;  // (not accounting for frame time here)
      question_8.frameNStart = frameN;  // exact frame index
      
      question_8.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of psychComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function psychRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'psych'-------
    for (const thisComponent of psychComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respons_8.keys', respons_8.keys);
    if (typeof respons_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('respons_8.rt', respons_8.rt);
        routineTimer.reset();
        }
    
    respons_8.stop();
    // the Routine "psych" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var s_adjust;
var currentLoop;
function s_adjustLoopBegin(s_adjustLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  s_adjust = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 10, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 's_adjust'
  });
  psychoJS.experiment.addLoop(s_adjust); // add the loop to the experiment
  currentLoop = s_adjust;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisS_adjust of s_adjust) {
    const snapshot = s_adjust.getSnapshot();
    s_adjustLoopScheduler.add(importConditions(snapshot));
    s_adjustLoopScheduler.add(adjust_soundRoutineBegin(snapshot));
    s_adjustLoopScheduler.add(adjust_soundRoutineEachFrame(snapshot));
    s_adjustLoopScheduler.add(adjust_soundRoutineEnd(snapshot));
    s_adjustLoopScheduler.add(endLoopIteration(s_adjustLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function s_adjustLoopEnd() {
  psychoJS.experiment.removeLoop(s_adjust);

  return Scheduler.Event.NEXT;
}


var training;
function trainingLoopBegin(trainingLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  training = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'training.xlsx',
    seed: undefined, name: 'training'
  });
  psychoJS.experiment.addLoop(training); // add the loop to the experiment
  currentLoop = training;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTraining of training) {
    const snapshot = training.getSnapshot();
    trainingLoopScheduler.add(importConditions(snapshot));
    trainingLoopScheduler.add(show_targetRoutineBegin(snapshot));
    trainingLoopScheduler.add(show_targetRoutineEachFrame(snapshot));
    trainingLoopScheduler.add(show_targetRoutineEnd(snapshot));
    trainingLoopScheduler.add(stimulus_choiceRoutineBegin(snapshot));
    trainingLoopScheduler.add(stimulus_choiceRoutineEachFrame(snapshot));
    trainingLoopScheduler.add(stimulus_choiceRoutineEnd(snapshot));
    trainingLoopScheduler.add(endLoopIteration(trainingLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trainingLoopEnd() {
  psychoJS.experiment.removeLoop(training);

  return Scheduler.Event.NEXT;
}


var SJ_trials_before;
function SJ_trials_beforeLoopBegin(SJ_trials_beforeLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  SJ_trials_before = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'SJ_0.xlsx',
    seed: undefined, name: 'SJ_trials_before'
  });
  psychoJS.experiment.addLoop(SJ_trials_before); // add the loop to the experiment
  currentLoop = SJ_trials_before;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSJ_trials_before of SJ_trials_before) {
    const snapshot = SJ_trials_before.getSnapshot();
    SJ_trials_beforeLoopScheduler.add(importConditions(snapshot));
    SJ_trials_beforeLoopScheduler.add(SJ_stim_presentationRoutineBegin(snapshot));
    SJ_trials_beforeLoopScheduler.add(SJ_stim_presentationRoutineEachFrame(snapshot));
    SJ_trials_beforeLoopScheduler.add(SJ_stim_presentationRoutineEnd(snapshot));
    SJ_trials_beforeLoopScheduler.add(SJ_question_sychronicityRoutineBegin(snapshot));
    SJ_trials_beforeLoopScheduler.add(SJ_question_sychronicityRoutineEachFrame(snapshot));
    SJ_trials_beforeLoopScheduler.add(SJ_question_sychronicityRoutineEnd(snapshot));
    SJ_trials_beforeLoopScheduler.add(SJ_question_distortionRoutineBegin(snapshot));
    SJ_trials_beforeLoopScheduler.add(SJ_question_distortionRoutineEachFrame(snapshot));
    SJ_trials_beforeLoopScheduler.add(SJ_question_distortionRoutineEnd(snapshot));
    SJ_trials_beforeLoopScheduler.add(endLoopIteration(SJ_trials_beforeLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function SJ_trials_beforeLoopEnd() {
  psychoJS.experiment.removeLoop(SJ_trials_before);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: group_file,
    seed: undefined, name: 'trials'
  });

  ///////////////////////////////////////////////// insert custom trialHandler

  var choices, condRep, last, newElement, remaining, shuffle;

  choices = trials.getTrialList()  //list of dictionairies containing all stimuli

  shuffle=[];
  last= {"item":0}; //dictionary, stores last used item;
  condRep=[];
  
  var cust_trialList=[]; ///initialize empty triallist
  
  while(cust_trialList.length==0) { //while the triallist is empty (for instance because inner loop broke without valid solution), repeat search for solution

  loop1: while(choices.length > 0) { ///////////////J: I named this loop
    function determineRemaining(arr2,obj) { //generate list of remaining options for the next stimulus by
      var _pj_a = [];
      for (var j = 0, k = arr2.length; (j < k); j += 1) { //iterating through the list of stimuli
        var x = arr2[j];						          //with x being the current entry in the list
        if (obj.cond === 0 || 		//J orig: condition        //if the last stimulus has no condition assigned to it
            (arr2[j]["cond"] !== obj["cond"]) &&          //or if the current item condition is not the same as the last item condition
            (arr2[j]["imagePath"] !== obj["imagePath"]) && //and does not use the same image
            (arr2[j]["imagePath"] !== obj["imagePath2"]) && //(either left or right image)
            (arr2[j]["imagePath2"] !== obj["imagePath"]))
        {
          _pj_a.push(x); //add this as available choice to the list
        }
      }
      return _pj_a;                                         //return list of possible candidates for next stimulus choice
    }
    remaining=choices;
    if (last.item != 0) {
      remaining=determineRemaining(choices,last)              //determine list of candidate items (see above)
    }

    if ((remaining.length==0)) {                              //if no choices remain, break
		cust_trialList=[];                                     //if no choices remain, break, return empty array
		shuffle=[];                                             //reset randomized list that was created so far
		choices = trials.getTrialList();                         //reset stimuli choices
      break loop1;                                              //break inner loop, restart with reset variables
    }

    function randomChoice(arr) {								//random choice function
      return arr[Math.floor(arr.length * Math.random())];
    }
    newElement = randomChoice(remaining);						//select random element from remaining options

    last = newElement;											//store it as the last chosen element
    shuffle.push(last);												//add it to randmized order stimuli list
    condRep.push(last["cond"]);	//orig: condition							//store its condition number in the condRep list
    choices = choices.filter(function(e) { return e !== newElement })		// Remove item from list for further use (no item repetitions)

    if (choices.length==0) {
      var cust_trialList = shuffle; //once we are done, use the randomized stimulus order as the trialList for the experiment
    /////J: removed this bracket}				

    if (imagePos==0){					      	//for even subject numbers, reverse the order of the pictures
      cust_trialList = cust_trialList.map(item => {
        return {item:item.item,
          cond:item.cond,
          id:item.id,
          videoPath:item.videoPath,
          imagePath:item.imagePath2,
          imagePath2:item.imagePath,
          latency:item.latency,
          echo:item.echo,
          attribute1:item.attribute1,
          attribute2:item.attribute2,
          target_loc:item.target_loc,
          entity1:item.entity1,
          entity2:item.entity2,
          verb:item.verb,
          sentence:item.sentence,
          cond_0ms:item.cond_0ms,
          cond_15ms:item.cond_15ms,
          cond_200ms:item.cond_200ms,
          cond_echo15ms:item.cond_echo15ms,
          cond_echo200ms:item.cond_echo200ms,
          fill_attribute:item.fill_attribute};
      });
      break;
    }
  } //////J: added this bracket
  }///////J: added this bracket for outer while loop
}
  //overwrite trials with newly generated list
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: cust_trialList,								//use the newly created trial list as input to the main trial handler
    seed: undefined, name: 'trials'
  });
  ////////////////////////////////////////////////end of custom code


  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(skipperRoutineBegin(snapshot));
    trialsLoopScheduler.add(skipperRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(skipperRoutineEnd(snapshot));
    const SJ_trials_skipLoopScheduler = new Scheduler(psychoJS);
    trialsLoopScheduler.add(SJ_trials_skipLoopBegin, SJ_trials_skipLoopScheduler);
    trialsLoopScheduler.add(SJ_trials_skipLoopScheduler);
    trialsLoopScheduler.add(SJ_trials_skipLoopEnd);
    trialsLoopScheduler.add(show_targetRoutineBegin(snapshot));
    trialsLoopScheduler.add(show_targetRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(show_targetRoutineEnd(snapshot));
    trialsLoopScheduler.add(stimulus_choiceRoutineBegin(snapshot));
    trialsLoopScheduler.add(stimulus_choiceRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(stimulus_choiceRoutineEnd(snapshot));
    trialsLoopScheduler.add(pauseRoutineBegin(snapshot));
    trialsLoopScheduler.add(pauseRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(pauseRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var SJ_trials_skip;
function SJ_trials_skipLoopBegin(SJ_trials_skipLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  SJ_trials_skip = new TrialHandler({
    psychoJS: psychoJS,
    nReps: do_sj, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'SJ_trials_skip'
  });
  psychoJS.experiment.addLoop(SJ_trials_skip); // add the loop to the experiment
  currentLoop = SJ_trials_skip;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSJ_trials_skip of SJ_trials_skip) {
    const snapshot = SJ_trials_skip.getSnapshot();
    SJ_trials_skipLoopScheduler.add(importConditions(snapshot));
    SJ_trials_skipLoopScheduler.add(SJ_instrRoutineBegin(snapshot));
    SJ_trials_skipLoopScheduler.add(SJ_instrRoutineEachFrame(snapshot));
    SJ_trials_skipLoopScheduler.add(SJ_instrRoutineEnd(snapshot));
    const SJ_trials_betweenLoopScheduler = new Scheduler(psychoJS);
    SJ_trials_skipLoopScheduler.add(SJ_trials_betweenLoopBegin, SJ_trials_betweenLoopScheduler);
    SJ_trials_skipLoopScheduler.add(SJ_trials_betweenLoopScheduler);
    SJ_trials_skipLoopScheduler.add(SJ_trials_betweenLoopEnd);
    SJ_trials_skipLoopScheduler.add(endLoopIteration(SJ_trials_skipLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var SJ_trials_between;
function SJ_trials_betweenLoopBegin(SJ_trials_betweenLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  SJ_trials_between = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'SJ_1.xlsx',
    seed: undefined, name: 'SJ_trials_between'
  });
  psychoJS.experiment.addLoop(SJ_trials_between); // add the loop to the experiment
  currentLoop = SJ_trials_between;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSJ_trials_between of SJ_trials_between) {
    const snapshot = SJ_trials_between.getSnapshot();
    SJ_trials_betweenLoopScheduler.add(importConditions(snapshot));
    SJ_trials_betweenLoopScheduler.add(SJ_stim_presentationRoutineBegin(snapshot));
    SJ_trials_betweenLoopScheduler.add(SJ_stim_presentationRoutineEachFrame(snapshot));
    SJ_trials_betweenLoopScheduler.add(SJ_stim_presentationRoutineEnd(snapshot));
    SJ_trials_betweenLoopScheduler.add(SJ_question_sychronicityRoutineBegin(snapshot));
    SJ_trials_betweenLoopScheduler.add(SJ_question_sychronicityRoutineEachFrame(snapshot));
    SJ_trials_betweenLoopScheduler.add(SJ_question_sychronicityRoutineEnd(snapshot));
    SJ_trials_betweenLoopScheduler.add(endLoopIteration(SJ_trials_betweenLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function SJ_trials_betweenLoopEnd() {
  psychoJS.experiment.removeLoop(SJ_trials_between);

  return Scheduler.Event.NEXT;
}


function SJ_trials_skipLoopEnd() {
  psychoJS.experiment.removeLoop(SJ_trials_skip);

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var SJ_trials_after;
function SJ_trials_afterLoopBegin(SJ_trials_afterLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  SJ_trials_after = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'SJ_2.xlsx',
    seed: undefined, name: 'SJ_trials_after'
  });
  psychoJS.experiment.addLoop(SJ_trials_after); // add the loop to the experiment
  currentLoop = SJ_trials_after;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSJ_trials_after of SJ_trials_after) {
    const snapshot = SJ_trials_after.getSnapshot();
    SJ_trials_afterLoopScheduler.add(importConditions(snapshot));
    SJ_trials_afterLoopScheduler.add(SJ_stim_presentationRoutineBegin(snapshot));
    SJ_trials_afterLoopScheduler.add(SJ_stim_presentationRoutineEachFrame(snapshot));
    SJ_trials_afterLoopScheduler.add(SJ_stim_presentationRoutineEnd(snapshot));
    SJ_trials_afterLoopScheduler.add(endLoopIteration(SJ_trials_afterLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function SJ_trials_afterLoopEnd() {
  psychoJS.experiment.removeLoop(SJ_trials_after);

  return Scheduler.Event.NEXT;
}


var _done_allKeys;
var test_movieClock;
var test_movie;
var adjust_soundComponents;
function adjust_soundRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'adjust_sound'-------
    t = 0;
    adjust_soundClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    done.keys = undefined;
    done.rt = undefined;
    _done_allKeys = [];
    test_movieClock = new util.Clock();
    test_movie = new visual.MovieStim({
      win: psychoJS.window,
      name: 'test_movie',
      units: 'norm',
      movie: 'merge_vid/0ms_081.mp4',
      pos: [0, 0.5],
      size: [1, 1],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: false,
      });
    // keep track of which components have finished
    adjust_soundComponents = [];
    adjust_soundComponents.push(done);
    adjust_soundComponents.push(test_movie);
    adjust_soundComponents.push(text_3);
    
    for (const thisComponent of adjust_soundComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function adjust_soundRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'adjust_sound'-------
    // get current time
    t = adjust_soundClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *done* updates
    if (t >= 0.0 && done.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      done.tStart = t;  // (not accounting for frame time here)
      done.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { done.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { done.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { done.clearEvents(); });
    }

    if (done.status === PsychoJS.Status.STARTED) {
      let theseKeys = done.getKeys({keyList: ['return', 'space'], waitRelease: false});
      _done_allKeys = _done_allKeys.concat(theseKeys);
      if (_done_allKeys.length > 0) {
        done.keys = _done_allKeys[0].name;  // just the first key pressed
        done.rt = _done_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *test_movie* updates
    if (t >= 0 && test_movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_movie.tStart = t;  // (not accounting for frame time here)
      test_movie.frameNStart = frameN;  // exact frame index
      
      test_movie.setAutoDraw(true);
      test_movie.play();
    }

    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of adjust_soundComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function adjust_soundRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'adjust_sound'-------
    for (const thisComponent of adjust_soundComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('done.keys', done.keys);
    if (typeof done.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('done.rt', done.rt);
        routineTimer.reset();
        }
    
    done.stop();
    test_movie.stop();
    if ((done.keys === "return")) {
        s_adjust.finished = true;
    }
    
    // the Routine "adjust_sound" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var notesComponents;
function notesRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'notes'-------
    t = 0;
    notesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    modify = false;
    text.text = "";
    psychoJS.eventManager.clearEvents("keyboard");
    
    // keep track of which components have finished
    notesComponents = [];
    notesComponents.push(text);
    notesComponents.push(instruction);
    
    for (const thisComponent of notesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function notesRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'notes'-------
    // get current time
    t = notesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    if (keys.length) {
        if (_pj.in_es6("space", keys)) {
            text.text = (text.text + " ");
        } else {
            if (_pj.in_es6("backspace", keys)) {
                text.text = text.text.slice(0, (- 1));
            } else {
                if ((_pj.in_es6("lshift", keys) || _pj.in_es6("rshift", keys))) {
                    modify = true;
                } else {
                    if (_pj.in_es6("return", keys)) {
                        continueRoutine = false;
                    } else {
                        if (modify) {
                            text.text = (text.text + keys[0].upper());
                            modify = false;
                        } else {
                            text.text = (text.text + keys[0]);
                        }
                    }
                }
            }
        }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *instruction* updates
    if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction.tStart = t;  // (not accounting for frame time here)
      instruction.frameNStart = frameN;  // exact frame index
      
      instruction.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of notesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function notesRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'notes'-------
    for (const thisComponent of notesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    thisExp.addData("notes_text", text.text);
    
    // the Routine "notes" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var choice_instrComponents;
function choice_instrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'choice_instr'-------
    t = 0;
    choice_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    choice_instrComponents = [];
    choice_instrComponents.push(key_resp_4);
    choice_instrComponents.push(text_5);
    
    for (const thisComponent of choice_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choice_instrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'choice_instr'-------
    // get current time
    t = choice_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choice_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choice_instrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'choice_instr'-------
    for (const thisComponent of choice_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "choice_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var choice_instr_2Components;
function choice_instr_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'choice_instr_2'-------
    t = 0;
    choice_instr_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    choice_instr_2Components = [];
    choice_instr_2Components.push(key_resp_5);
    choice_instr_2Components.push(text_7);
    
    for (const thisComponent of choice_instr_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choice_instr_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'choice_instr_2'-------
    // get current time
    t = choice_instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choice_instr_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choice_instr_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'choice_instr_2'-------
    for (const thisComponent of choice_instr_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "choice_instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var choice_instr_3Components;
function choice_instr_3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'choice_instr_3'-------
    t = 0;
    choice_instr_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    choice_instr_3Components = [];
    choice_instr_3Components.push(key_resp_6);
    choice_instr_3Components.push(text_8);
    
    for (const thisComponent of choice_instr_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choice_instr_3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'choice_instr_3'-------
    // get current time
    t = choice_instr_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choice_instr_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choice_instr_3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'choice_instr_3'-------
    for (const thisComponent of choice_instr_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "choice_instr_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var corrAns;
var show_targetComponents;
function show_targetRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_target'-------
    t = 0;
    show_targetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    if ((imagePos === 0)) {
        if ((target_loc === 0)) {
            target.text = attribute1;
            corrAns = "left";
        }
        if ((target_loc === 1)) {
            target.text = attribute2;
            corrAns = "right";
        }
    }
    if ((imagePos === 1)) {
        if ((target_loc === 0)) {
            target.text = attribute2;
            corrAns = "right";
        }
        if ((target_loc === 1)) {
            target.text = attribute1;
            corrAns = "left";
        }
    }
    if ((target_loc === 2)) {
        target.text = fill_attribute;
        corrAns = "up";
        console.log("this is a filler trial");
    }
    
    // keep track of which components have finished
    show_targetComponents = [];
    show_targetComponents.push(target);
    show_targetComponents.push(quest);
    
    for (const thisComponent of show_targetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function show_targetRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_target'-------
    // get current time
    t = show_targetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *target* updates
    if (t >= 0.0 && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target.setAutoDraw(false);
    }
    
    // *quest* updates
    if (t >= 0.0 && quest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quest.tStart = t;  // (not accounting for frame time here)
      quest.frameNStart = frameN;  // exact frame index
      
      quest.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (quest.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      quest.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of show_targetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function show_targetRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_target'-------
    for (const thisComponent of show_targetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var movie_2Clock;
var movie_2;
var _response_2_allKeys;
var stimulus_choiceComponents;
function stimulus_choiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'stimulus_choice'-------
    t = 0;
    stimulus_choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    movie_2Clock = new util.Clock();
    movie_2 = new visual.MovieStim({
      win: psychoJS.window,
      name: 'movie_2',
      units: 'norm',
      movie: videoPath,
      pos: [0, 0.5],
      size: [1, 1],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: false,
      });
    response_2.keys = undefined;
    response_2.rt = undefined;
    _response_2_allKeys = [];
    stimulus_2.setImage(imagePath);
    stimulus_3.setImage(imagePath2);
    // keep track of which components have finished
    stimulus_choiceComponents = [];
    stimulus_choiceComponents.push(movie_2);
    stimulus_choiceComponents.push(response_2);
    stimulus_choiceComponents.push(fix_cross_2);
    stimulus_choiceComponents.push(stimulus_2);
    stimulus_choiceComponents.push(stimulus_3);
    stimulus_choiceComponents.push(left_arrow_9);
    stimulus_choiceComponents.push(right_arrow_9);
    stimulus_choiceComponents.push(up_arrow);
    
    for (const thisComponent of stimulus_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimulus_choiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'stimulus_choice'-------
    // get current time
    t = stimulus_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_2* updates
    if (t >= 2.5 && movie_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_2.tStart = t;  // (not accounting for frame time here)
      movie_2.frameNStart = frameN;  // exact frame index
      
      movie_2.setAutoDraw(true);
      movie_2.play();
    }

    
    // *response_2* updates
    if (t >= 2.5 && response_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_2.tStart = t;  // (not accounting for frame time here)
      response_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_2.clearEvents(); });
    }

    if (response_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_2.getKeys({keyList: ['left', 'right', 'up'], waitRelease: false});
      _response_2_allKeys = _response_2_allKeys.concat(theseKeys);
      if (_response_2_allKeys.length > 0) {
        response_2.keys = _response_2_allKeys[0].name;  // just the first key pressed
        response_2.rt = _response_2_allKeys[0].rt;
        // was this correct?
        if (response_2.keys == corrAns) {
            response_2.corr = 1;
        } else {
            response_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fix_cross_2* updates
    if (t >= 1.5 && fix_cross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross_2.tStart = t;  // (not accounting for frame time here)
      fix_cross_2.frameNStart = frameN;  // exact frame index
      
      fix_cross_2.setAutoDraw(true);
    }

    frameRemains = 1.5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross_2.setAutoDraw(false);
    }
    
    // *stimulus_2* updates
    if (t >= 0.0 && stimulus_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_2.tStart = t;  // (not accounting for frame time here)
      stimulus_2.frameNStart = frameN;  // exact frame index
      
      stimulus_2.setAutoDraw(true);
    }

    
    // *stimulus_3* updates
    if (t >= 0.0 && stimulus_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_3.tStart = t;  // (not accounting for frame time here)
      stimulus_3.frameNStart = frameN;  // exact frame index
      
      stimulus_3.setAutoDraw(true);
    }

    
    // *left_arrow_9* updates
    if (t >= 0.0 && left_arrow_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_9.tStart = t;  // (not accounting for frame time here)
      left_arrow_9.frameNStart = frameN;  // exact frame index
      
      left_arrow_9.setAutoDraw(true);
    }

    
    // *right_arrow_9* updates
    if (t >= 0.0 && right_arrow_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_9.tStart = t;  // (not accounting for frame time here)
      right_arrow_9.frameNStart = frameN;  // exact frame index
      
      right_arrow_9.setAutoDraw(true);
    }

    
    // *up_arrow* updates
    if (t >= 0.0 && up_arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      up_arrow.tStart = t;  // (not accounting for frame time here)
      up_arrow.frameNStart = frameN;  // exact frame index
      
      up_arrow.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimulus_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulus_choiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'stimulus_choice'-------
    for (const thisComponent of stimulus_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    movie_2.stop();
    // was no response the correct answer?!
    if (response_2.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response_2.corr = 1;  // correct non-response
      } else {
         response_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('response_2.keys', response_2.keys);
    psychoJS.experiment.addData('response_2.corr', response_2.corr);
    if (typeof response_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_2.rt', response_2.rt);
        routineTimer.reset();
        }
    
    response_2.stop();
    // the Routine "stimulus_choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var training_completeComponents;
function training_completeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'training_complete'-------
    t = 0;
    training_completeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    training_completeComponents = [];
    training_completeComponents.push(feedback);
    training_completeComponents.push(key_resp_2);
    
    for (const thisComponent of training_completeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_completeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'training_complete'-------
    // get current time
    t = training_completeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback* updates
    if (t >= 0.0 && feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback.tStart = t;  // (not accounting for frame time here)
      feedback.frameNStart = frameN;  // exact frame index
      
      feedback.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_completeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_completeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'training_complete'-------
    for (const thisComponent of training_completeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "training_complete" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var SJ_instrComponents;
function SJ_instrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'SJ_instr'-------
    t = 0;
    SJ_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    SJ_instrComponents = [];
    SJ_instrComponents.push(sync);
    SJ_instrComponents.push(key_resp_7);
    
    for (const thisComponent of SJ_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SJ_instrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'SJ_instr'-------
    // get current time
    t = SJ_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sync* updates
    if (t >= 0.0 && sync.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sync.tStart = t;  // (not accounting for frame time here)
      sync.frameNStart = frameN;  // exact frame index
      
      sync.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SJ_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SJ_instrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'SJ_instr'-------
    for (const thisComponent of SJ_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "SJ_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var movie_3Clock;
var movie_3;
var SJ_stim_presentationComponents;
function SJ_stim_presentationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'SJ_stim_presentation'-------
    t = 0;
    SJ_stim_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    movie_3Clock = new util.Clock();
    movie_3 = new visual.MovieStim({
      win: psychoJS.window,
      name: 'movie_3',
      units: 'norm',
      movie: videoPath,
      pos: [0, 0.5],
      size: [1, 1],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: false,
      });
    // keep track of which components have finished
    SJ_stim_presentationComponents = [];
    SJ_stim_presentationComponents.push(movie_3);
    SJ_stim_presentationComponents.push(fix_cross_3);
    
    for (const thisComponent of SJ_stim_presentationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SJ_stim_presentationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'SJ_stim_presentation'-------
    // get current time
    t = SJ_stim_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_3* updates
    if (t >= 0.5 && movie_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_3.tStart = t;  // (not accounting for frame time here)
      movie_3.frameNStart = frameN;  // exact frame index
      
      movie_3.setAutoDraw(true);
      movie_3.play();
    }

    if (movie_3.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    
    // *fix_cross_3* updates
    if (t >= 0 && fix_cross_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross_3.tStart = t;  // (not accounting for frame time here)
      fix_cross_3.frameNStart = frameN;  // exact frame index
      
      fix_cross_3.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SJ_stim_presentationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SJ_stim_presentationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'SJ_stim_presentation'-------
    for (const thisComponent of SJ_stim_presentationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    movie_3.stop();
    // the Routine "SJ_stim_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _response_sync_allKeys;
var SJ_question_sychronicityComponents;
function SJ_question_sychronicityRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'SJ_question_sychronicity'-------
    t = 0;
    SJ_question_sychronicityClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((latency === 0)) {
        corrAns = "left";
    } else {
        corrAns = "right";
    }
    console.log(("corrAns = " + corrAns));
    
    response_sync.keys = undefined;
    response_sync.rt = undefined;
    _response_sync_allKeys = [];
    // keep track of which components have finished
    SJ_question_sychronicityComponents = [];
    SJ_question_sychronicityComponents.push(response_sync);
    SJ_question_sychronicityComponents.push(right_arrow_11);
    SJ_question_sychronicityComponents.push(left_arrow_11);
    SJ_question_sychronicityComponents.push(ja_9);
    SJ_question_sychronicityComponents.push(nein_9);
    SJ_question_sychronicityComponents.push(question_synchronicity);
    
    for (const thisComponent of SJ_question_sychronicityComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SJ_question_sychronicityRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'SJ_question_sychronicity'-------
    // get current time
    t = SJ_question_sychronicityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response_sync* updates
    if (t >= 0 && response_sync.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_sync.tStart = t;  // (not accounting for frame time here)
      response_sync.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_sync.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_sync.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_sync.clearEvents(); });
    }

    if (response_sync.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_sync.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _response_sync_allKeys = _response_sync_allKeys.concat(theseKeys);
      if (_response_sync_allKeys.length > 0) {
        response_sync.keys = _response_sync_allKeys[0].name;  // just the first key pressed
        response_sync.rt = _response_sync_allKeys[0].rt;
        // was this correct?
        if (response_sync.keys == corrAns) {
            response_sync.corr = 1;
        } else {
            response_sync.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *right_arrow_11* updates
    if (t >= 0.0 && right_arrow_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_11.tStart = t;  // (not accounting for frame time here)
      right_arrow_11.frameNStart = frameN;  // exact frame index
      
      right_arrow_11.setAutoDraw(true);
    }

    
    // *left_arrow_11* updates
    if (t >= 0.0 && left_arrow_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_11.tStart = t;  // (not accounting for frame time here)
      left_arrow_11.frameNStart = frameN;  // exact frame index
      
      left_arrow_11.setAutoDraw(true);
    }

    
    // *ja_9* updates
    if (t >= 0.0 && ja_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ja_9.tStart = t;  // (not accounting for frame time here)
      ja_9.frameNStart = frameN;  // exact frame index
      
      ja_9.setAutoDraw(true);
    }

    
    // *nein_9* updates
    if (t >= 0.0 && nein_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nein_9.tStart = t;  // (not accounting for frame time here)
      nein_9.frameNStart = frameN;  // exact frame index
      
      nein_9.setAutoDraw(true);
    }

    
    // *question_synchronicity* updates
    if (t >= 0.0 && question_synchronicity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_synchronicity.tStart = t;  // (not accounting for frame time here)
      question_synchronicity.frameNStart = frameN;  // exact frame index
      
      question_synchronicity.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SJ_question_sychronicityComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SJ_question_sychronicityRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'SJ_question_sychronicity'-------
    for (const thisComponent of SJ_question_sychronicityComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (response_sync.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response_sync.corr = 1;  // correct non-response
      } else {
         response_sync.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('response_sync.keys', response_sync.keys);
    psychoJS.experiment.addData('response_sync.corr', response_sync.corr);
    if (typeof response_sync.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_sync.rt', response_sync.rt);
        routineTimer.reset();
        }
    
    response_sync.stop();
    // the Routine "SJ_question_sychronicity" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _response_distortion_allKeys;
var SJ_question_distortionComponents;
function SJ_question_distortionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'SJ_question_distortion'-------
    t = 0;
    SJ_question_distortionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((echo === 0)) {
        corrAns = "left";
    } else {
        corrAns = "right";
    }
    console.log(("corrAns = " + corrAns));
    
    response_distortion.keys = undefined;
    response_distortion.rt = undefined;
    _response_distortion_allKeys = [];
    // keep track of which components have finished
    SJ_question_distortionComponents = [];
    SJ_question_distortionComponents.push(response_distortion);
    SJ_question_distortionComponents.push(right_arrow_12);
    SJ_question_distortionComponents.push(left_arrow_12);
    SJ_question_distortionComponents.push(ja_10);
    SJ_question_distortionComponents.push(nein_10);
    SJ_question_distortionComponents.push(question_distortion);
    
    for (const thisComponent of SJ_question_distortionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SJ_question_distortionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'SJ_question_distortion'-------
    // get current time
    t = SJ_question_distortionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response_distortion* updates
    if (t >= 0 && response_distortion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_distortion.tStart = t;  // (not accounting for frame time here)
      response_distortion.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_distortion.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_distortion.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_distortion.clearEvents(); });
    }

    if (response_distortion.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_distortion.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _response_distortion_allKeys = _response_distortion_allKeys.concat(theseKeys);
      if (_response_distortion_allKeys.length > 0) {
        response_distortion.keys = _response_distortion_allKeys[0].name;  // just the first key pressed
        response_distortion.rt = _response_distortion_allKeys[0].rt;
        // was this correct?
        if (response_distortion.keys == corrAns) {
            response_distortion.corr = 1;
        } else {
            response_distortion.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *right_arrow_12* updates
    if (t >= 0.0 && right_arrow_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_arrow_12.tStart = t;  // (not accounting for frame time here)
      right_arrow_12.frameNStart = frameN;  // exact frame index
      
      right_arrow_12.setAutoDraw(true);
    }

    
    // *left_arrow_12* updates
    if (t >= 0.0 && left_arrow_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_arrow_12.tStart = t;  // (not accounting for frame time here)
      left_arrow_12.frameNStart = frameN;  // exact frame index
      
      left_arrow_12.setAutoDraw(true);
    }

    
    // *ja_10* updates
    if (t >= 0.0 && ja_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ja_10.tStart = t;  // (not accounting for frame time here)
      ja_10.frameNStart = frameN;  // exact frame index
      
      ja_10.setAutoDraw(true);
    }

    
    // *nein_10* updates
    if (t >= 0.0 && nein_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nein_10.tStart = t;  // (not accounting for frame time here)
      nein_10.frameNStart = frameN;  // exact frame index
      
      nein_10.setAutoDraw(true);
    }

    
    // *question_distortion* updates
    if (t >= 0.0 && question_distortion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_distortion.tStart = t;  // (not accounting for frame time here)
      question_distortion.frameNStart = frameN;  // exact frame index
      
      question_distortion.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SJ_question_distortionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SJ_question_distortionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'SJ_question_distortion'-------
    for (const thisComponent of SJ_question_distortionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (response_distortion.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response_distortion.corr = 1;  // correct non-response
      } else {
         response_distortion.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('response_distortion.keys', response_distortion.keys);
    psychoJS.experiment.addData('response_distortion.corr', response_distortion.corr);
    if (typeof response_distortion.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_distortion.rt', response_distortion.rt);
        routineTimer.reset();
        }
    
    response_distortion.stop();
    // the Routine "SJ_question_distortion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var skipperComponents;
function skipperRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'skipper'-------
    t = 0;
    skipperClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    skipperComponents = [];
    
    for (const thisComponent of skipperComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var do_sj;
function skipperRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'skipper'-------
    // get current time
    t = skipperClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((trial_counter !== 80)) {
        do_sj = 0;
    } else {
        do_sj = 1;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of skipperComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function skipperRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'skipper'-------
    for (const thisComponent of skipperComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "skipper" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pause'-------
    t = 0;
    pauseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(pause_msg);
    pauseComponents.push(key_resp);
    pauseComponents.push(progress);
    
    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pauseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'pause'-------
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((trial_counter === 0) || ((trial_counter % 16) !== 0))) {
        continueRoutine = false;
    }
    
    
    // *pause_msg* updates
    if (t >= 0.0 && pause_msg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pause_msg.tStart = t;  // (not accounting for frame time here)
      pause_msg.frameNStart = frameN;  // exact frame index
      
      pause_msg.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *progress* updates
    if (t >= 0.0 && progress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      progress.tStart = t;  // (not accounting for frame time here)
      progress.frameNStart = frameN;  // exact frame index
      
      progress.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pause'-------
    for (const thisComponent of pauseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    trial_counter = (trial_counter + 1);
    console.log(("trials completed: " + trial_counter));
    
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var closeComponents;
function closeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'close'-------
    t = 0;
    closeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    closeComponents = [];
    closeComponents.push(vp_hours);
    
    for (const thisComponent of closeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function closeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'close'-------
    // get current time
    t = closeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vp_hours* updates
    if (t >= 0.0 && vp_hours.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vp_hours.tStart = t;  // (not accounting for frame time here)
      vp_hours.frameNStart = frameN;  // exact frame index
      
      vp_hours.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of closeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function closeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'close'-------
    for (const thisComponent of closeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "close" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
