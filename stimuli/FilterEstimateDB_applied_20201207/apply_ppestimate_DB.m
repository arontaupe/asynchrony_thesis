% just based on the FFT resolution I saw used in the fit test code
L = 4096; 
% this was already defined in the ppestimate function
n = 160;

% reading my own fit test data
[IEM_R, fs] = audioread('sub-104_task-check-initial-fit_run-1_IEMR.wav');
OEM_R = audioread('sub-104_task-check-initial-fit_run-1_OEMR.wav');
IEM_L = audioread('sub-104_task-check-initial-fit_run-1_IEML.wav');
OEM_L = audioread('sub-104_task-check-initial-fit_run-1_OEML.wav');

% based on the following comment from the ppestimate function
%%% f= frequency needed to normalize (half of fs)
f = fs/2;

% getting the filter coefficients
[b_right, b_left] = ppestimate(IEM_R, OEM_R, IEM_L, OEM_L, fs, L,n,f);

% magnitude and phase response
freqz(b_right,1,[],fs)
ax = findall(gcf, 'Type', 'axes');
set(ax, 'XScale', 'log');

freqz(b_left,1,[],fs)
ax = findall(gcf, 'Type', 'axes');
set(ax, 'XScale', 'log');

% filtering a stimulus
[original_stimulus, stimulus_fs] = audioread('159.mp4');
passive_stimulus = filter(b_right, 1, original_stimulus);
audiowrite('159_passively_transmitted.wav', passive_stimulus, stimulus_fs);
% sounds plausible?

% simulate echo effect with the original and processed stimulus
delay_in_ms = 200;
delay_in_samples = round(stimulus_fs/(1000/delay_in_ms));
silence = zeros(delay_in_samples,2);
new_original_stimulus = [silence; original_stimulus];
new_passive_stimulus = [passive_stimulus; silence];
echo_stimulus = new_original_stimulus + new_passive_stimulus;
audiowrite('159_echo.wav', echo_stimulus, stimulus_fs);
