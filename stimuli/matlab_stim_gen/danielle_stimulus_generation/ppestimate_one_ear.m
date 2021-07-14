function [b] = ppestimate_one_ear(IEM, OEM, pinknoise_fs)
% Compute filter coeff. from transfer function estimate
%
% IN		OEM                     Outer-ear microphone pink noise data
%           IEM                     In-ear microphone pink noise data
%           pinknoise_fs            Sampling frequency of pink noise data

L = 4096; % resolution of FFT 
f = floor(pinknoise_fs/2); % frequency needed to normalize (half of fs)

[f_out,~,~,~,H3,~,~,~] = wavtotrans(OEM, IEM, ...
    pinknoise_fs, L, 1);% Find the transfer function of earplug

n=160; % n=length of the FIR filter 
b=firls(n,f_out/f,abs(H3)); %Fit TF values to get filter coeff.
end 