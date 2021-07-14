function [f,fbo,H1,H2,H3,H5,C3,C5] = wavtotrans(vector1, vector2, Fs, L, BO)

%Cette fonction prend en argument deux vecteurs ex(:,1) venant de WAV
%La fréquence d'échantillonage Fs=48000 (DVD) typique
%(L) La résolution des FFT L=4096 typique
%Et le "diviseur" de bande d'octave 12 typique
%Retourne: la fonction de transfert H1, H2, H3 estimée avec les autospectres
%Les fréquence f
%La fonction de transfert H5 en 1/12 bande d'octave
%Les fréquence en BO fbo
%La cohérence selon f

%paramètres typiques
%TL=30; %Longueur en seconde de l'échantillon à analyser

x=vector1;
y=vector2;

N = 2^nextpow2(L); %next puissance 2 : failsafe

if(length(y)>length(x))
        nd=floor(length(x)/N);
    else
        nd=floor(length(y)/N);
end
        
%nd=TL*Fs/N;     %nbr de points total
Sxx=zeros(N,1);    %initialisation des tableaux 
Syy=zeros(N,1);
Sxy=zeros(N,1);
Syx=zeros(N,1);
Xm=zeros(N,1);
Ym=zeros(N,1);
win = hann(N);    %hanning window

for k=1:nd
    
    xw = win(:).*x(N*k-N+1:N*k); %calcul des fft selon la fenêtre hann
    yw = win(:).*y(N*k-N+1:N*k); 
    
    X = fft(xw)*2/N;
    Y = fft(yw)*2/N;
    
    Sxx = Sxx+X'.'.*X; %autospectre et interspectre et moyenne
    Syy = Syy+Y'.'.*Y;
    
    Sxy = Sxy+X'.'.*Y;
    Syx = Syx+Y'.'.*X;
    
    Ym = Ym+Y;                  
    Xm = Xm+X;
    
end;

%nd=k;
Sxx=(1/nd)*Sxx*2;                  
Syy=(1/nd)*Syy*2;
Sxy=(1/nd)*Sxy*2;
Syx=(1/nd)*Syx*2;
Xm=Xm/nd;
Ym=Ym/nd;

f = Fs/2*linspace(0,1,N/2);

%H1,H2,H3
H0=Ym./Xm; 
H1=(Sxy./Sxx);
H2=(Syy./Syx);
H3=10.^((log10(H1)+log10(H2))/2);

C3=(abs(Sxy).^2)./(Sxx.*Syy);
C3=C3(1:N/2);
[C5,fbo] = trans2oct_general(C3.',f,BO);

H5=20*log10(abs(H3(1:N/2)));
[H5,fbo] = trans2oct_general(H5.',f,BO);
H3=H3(1:N/2);
H5=10.^(H5./20);
end

