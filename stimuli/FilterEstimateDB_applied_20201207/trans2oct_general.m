function [OCT_,fc] = trans2oct_general(dB,F,N)
%Permet de transformer un spectre d'amplitude en bande fine en spectre 1/1 octave.
%dB: amplitude	[dB]
%F  : fr?quence	[Hz]
%[OCT_,fc] = trans2oct(gain,F);
%N : 1/M (N=1 pour octave; N=3 pour tiers d'octave;N=12 pour douzieme d'octave;N=13 pour tiers octave au frequence centrales octave)
%[oct,fc] = fine2oct_general(SPL,F,N);


Avant=100*ones(size(F));
Apres=Avant-dB;
[Avt,fc]=fine2oct_general(Avant,F,N);
[Apr,fc]=fine2oct_general(Apres,F,N);
OCT_=Avt-Apr;
