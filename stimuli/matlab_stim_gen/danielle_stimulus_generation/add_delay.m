function [out_stim, stim_fs] = add_delay(OEM,IEM,pinknoise_fs,...
    in_stim,stim_fs,delay_in_ms,echo,show)
% Add delay to auditory stimuli
%
% IN		OEM                     Outer-ear microphone pink noise data
%           IEM                     In-ear microphone pink noise data
%           pinknoise_fs            Sampling frequency of pink noise data
%           in_stim                 Original stimulus data
%           stim_fs                 Sampling frequency of stimulus data
%			delay_in_ms             Desired added delay in milliseonds
%           echo                    1 if simulating "echo effect"
%           show                    1 if plotting
%
%
% OUT		out_stim                The new stimulus data
%			stim_fs                 Sampling frequency of stimulus 

% 02-2021. @D. Benesch
% Please do not share this code, including the functions it calls,
% without explicit permission.

% add delay to input stimulus
delay_in_samples = round(stim_fs/(1000/delay_in_ms));
silence = zeros(delay_in_samples,2);
delayed_stim = [silence; in_stim];

% if simulating echo effect
if echo == 1
    % get the filter coefficients
    b = ppestimate_one_ear(IEM, OEM, pinknoise_fs);

    if show == 1
        % plot magnitude and phase response
        figure
        freqz(b,1,[],pinknoise_fs)
        ax = findall(gcf, 'Type', 'axes');
        set(ax, 'XScale', 'log');
    end
    

    % filter the input stimulus
    filtered_stim = filter(b, 1, in_stim);

    % simulate echo effect with the original and processed stimulus
    passive_stim = [filtered_stim; silence];
    echo_stim = delayed_stim + passive_stim;
    out_stim = echo_stim;
else
    % otherwise just return the delayed input stimulus
    out_stim = delayed_stim;
end
if compare == 1
        % plot comparison before/after
    dt_in = 1/stim_fs;
    dt_out = 1/pinknoise_fs;
    t_in = 0:dt_in:(length(in_stim)*dt_in)-dt_in;
    t_out = 0:dt_out:(length(out_stim)*dt_out)-dt_out;
    plot(t_in,in_stim); xlabel('ms'); ylabel('Amplitude');
    plot(t_out,out_stim); xlabel('ms'); ylabel('Amplitude');
    title('Attenuation comparison')
    figure
end
end
