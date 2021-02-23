function [oct,fc] = fine2oct_general(SPL,F,N)
%Permet de transformer un spectre de niveau de pression bande fine en spectre 1/N octave. Lorsque le spectre n'est 
%pas un niveau de pression mais un simple rapport (gain), utiliser cette fonction FINE2TIERS sur un spectre "avant" et un
%spectre "apr?s"; puis faire la diff?rence en 1/N octave entre "avant" et "apr?s".
%SPL : valeurs du niveau de pression (SPL)	[dB, ref 2e-5 Pa]
%F  : fr?quences discretes	[Hz]
%N : 1/M (N=1 pour octave; N=3 pour tiers d'octave;N=12 pour douzieme d'octave;N=13 pour tiers octave au frequence centrales octave)
%[oct,fc] = fine2oct_general(SPL,F,N);

%Modifier on 2007112 in order to initialize variable that are dynamically
%affected inside FOR loops.
%Modified on 20070116 to take into consideration CLC power summation
%Various fixes on 20070127

F=F(2:length(F));
SPL=SPL(2:length(SPL));
nF=length(F);

switch N
case 1
% fc=[31.5 63 125 250 500 1000 2000 4000 8000 16000];

i=-5:4;
fc=1000*2.^i;
f1=fc.*2^(-1/2);
f2=fc.*2^(+1/2);
p=(2e-5)*(10.^(SPL/20));


filtre=zeros(10,nF);
p_band=zeros(1,10);
for i=1:10 % Bandes standardis?es 
   filtre(i,:)=1./(1+((F.^2-fc(i)^2)./((f1(i)-f2(i))*F)).^6);
   p_filtre=p.*filtre(i,:);
   p_band(i)=sum(p_filtre.^2);
   oct(i)=10*log10(p_band(i)/((2e-5)^2));
end

case 13
% fc=[31.5 63 125 250 500 1000 2000 4000 8000 16000];

i=-5:4;
fc=1000*2.^i;
f1=fc.*2^(-1/6);
f2=fc.*2^(+1/6);
p=(2e-5)*(10.^(SPL/20));

filtre=zeros(10,nF);
p_band=zeros(1,10);
for i=1:10 % Bandes standardis?es 
   filtre(i,:)=1./(1+((F.^2-fc(i)^2)./((f1(i)-f2(i))*F)).^6);
   p_filtre=p.*filtre(i,:);
   p_band(i)=sum(p_filtre.^2);
   oct(i)=10*log10(p_band(i)/(2e-5)^2);
end   

case 3
%fc=[25 31.5 40 50 63 80 100 125 160 200 250 315 400 500 630 800 1000 1250 1600 2000 2500 3150 4000 5000 6300 8000 10000 12500 16000 20000];

j=-16:13;
fc=1000*2.^(j/3);
f1=fc.*2^(-1/6);
f2=fc.*2^(+1/6);
p=(2e-5)*(10.^(SPL/20));

filtre=zeros(30,nF);
p_band=zeros(1,30);
for i=1:30 % Bandes standardis?es 14 ? 43 (25 Hz ? 20 kHz) (Ici num?rot?es 1 ? 29)
       filtre(i,:)=1./(1+((F.^2-fc(i)^2)./((f1(i)-f2(i))*F)).^6);
   p_filtre=p.*filtre(i,:);
   p_band(i)=sum(p_filtre.^2);
   oct(i)=10*log10(p_band(i)/((2e-5)^2));
end


case 12   
k=-65:53;
fc=1000*2.^(k/12);
f1=fc.*2^(-1/24);
f2=fc.*2^(+1/24);
p=(2e-5)*(10.^(SPL/20));

filtre=zeros(119,nF);
p_band=zeros(1,119);
for i=1:119 % Bandes standardis?es
    
   filtre(i,:)=1./(1+((F.^2-fc(i)^2)./((f1(i)-f2(i))*F)).^6);
   p_filtre=p.*filtre(i,:);
   p_band(i)=sum(p_filtre.^2);
   oct(i)=10*log10(p_band(i)/(2e-5)^2);
end
case 24   
k=-152:104;
fc=1000*2.^(k/24);
f1=fc.*2^(-1/48);
f2=fc.*2^(+1/48);
p=(2e-5)*(10.^(SPL/20));

filtre=zeros(257,nF);
p_band=zeros(1,257);
for i=1:257 % Bandes standardis?es
    
   filtre(i,:)=1./(1+((F.^2-fc(i)^2)./((f1(i)-f2(i))*F)).^6);
   p_filtre=p.*filtre(i,:);
   p_band(i)=sum(p_filtre.^2);
   oct(i)=10*log10(p_band(i)/(2e-5)^2);
end



end

