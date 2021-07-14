%main program to generate all echo and delay stimuli

%get locations
in_stim_filepath = uigetdir(pwd, ...
    'Select the folder containing the original stimulus .mp4 audio files');
in_stim_filenames = dir(fullfile(in_stim_filepath, '*.mp4'));

folder = 'C:\Users\aron\Google Drive\BA\stimuli\matlab_stim_gen\danielle_stimulus_generation';
IEM_filename = 'sub-202102239_task-check-initial-fit_run-1_IEMR_resamp.wav';
OEM_filename = 'sub-202102239_task-check-initial-fit_run-1_OEMR_resamp.wav';

[OEM, pinknoise_fs] = audioread(fullfile(folder,OEM_filename));
[IEM, ~] = audioread(fullfile(folder,IEM_filename));

for cond = 4
%set properties

if cond == 0
    delay_in_ms = 0;
    echo = 0;
end
if cond == 1
    delay_in_ms = 10;
    echo = 0;
end
if cond == 2
    delay_in_ms = 400;
    echo = 0;
end
if cond == 3
    delay_in_ms = 10;
    echo = 1;
end
if cond == 4
    delay_in_ms = 400;
    echo = 1;
end

show = 1; %only works with echo
compare = 1;

%generate filename
prefix_out_stim = '';

prefix_out_stim = append(int2str(cond) , '_');

out_stim_filepath = fullfile(pwd, 'output_files');

if isfolder(out_stim_filepath) == 0
    mkdir(out_stim_filepath)
end

%do the action
for i=1:length(in_stim_filenames)
    [in_stim, stim_fs] = audioread(fullfile(in_stim_filepath, ...
        in_stim_filenames(i).name));
    [out_stim, stim_fs] = add_delay(OEM,IEM,pinknoise_fs, ...
        in_stim,stim_fs,delay_in_ms,echo,show);
    [~,basename,~] = fileparts(in_stim_filenames(i).name);
    out_stim_filename = strcat(prefix_out_stim, basename, '.wav');
    audiowrite(fullfile(out_stim_filepath, out_stim_filename), ...
        out_stim, stim_fs);
end
end