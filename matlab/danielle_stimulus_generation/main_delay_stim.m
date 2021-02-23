%main program to generate all echo and delay stimuli

%get locations
in_stim_filepath = uigetdir(pwd, ...
    'Select the folder containing the original stimulus .mp4 audio files');
in_stim_filenames = dir(fullfile(in_stim_filepath, '*.mp4'));

[OEM_filename, OEM_filepath] = uigetfile(pwd, ...
    'Select the outer-ear microphone recording', '*.wav');
[IEM_filename, IEM_filepath] = uigetfile(pwd, ...
    'Select the in-ear microphone recording', '*.wav');

[OEM, pinknoise_fs] = audioread(fullfile(OEM_filepath,OEM_filename));
[IEM, ~] = audioread(fullfile(IEM_filepath,IEM_filename));

%set properties
delay_in_ms = 15;
echo = 0;
show = 0;

%generate filename
prefix_out_stim = '';
if echo == 1
    prefix_out_stim = append('echo');
end
prefix_out_stim = append(prefix_out_stim , int2str(delay_in_ms) , 'ms_');
%prefix_out_stim = 'echo400ms_';

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