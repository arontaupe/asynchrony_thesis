function [b_right, b_left] = ppestimate(IEM_R, OEM_R, IEM_L, OEM_L, fs, L,n,f)

%%% fs= sampling frequency
%%% L= resolution of FFT 
%%% n=length of the FIR filter 
%%% f= frequency needed to normalize (half of fs)

[f_right,fbo_right,H1_right,H2_right,H3_right,H5_right,C3_right,C5_right] = wavtotrans(OEM_R, IEM_R, fs, L, 1);%Find the TF of Right Earplug
[f_left,fbo_left,H1_left,H2_left,H3_left,H5_left,C3_left,C5_left] = wavtotrans(OEM_L, IEM_L, fs, L, 1);%Find the TF of Left Earplug

n=160;
b_right=firls(n,f_right/f,abs(H3_right)); %Fit TF values to get filter coeff.
b_left=firls(n,f_left/f,abs(H3_left));
end 