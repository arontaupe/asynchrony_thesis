
[filename, filepath] = uigetfile(pwd, ...
    'Select the Original  File', '*');
[y,Fs]  = audioread(fullfile(filepath,filename));

[filename2, filepath2] = uigetfile(pwd, ...
    'Select the modified  File', '*');
[y2,Fs2]  = audioread(fullfile(filepath2,filename2));

    dt = 1/Fs;
    t = 0:dt:(length(y)*dt)-dt;
    plot(t,y); xlabel('Seconds'); ylabel('Amplitude');
    title('before modification')
    figure
        
    dt2 = 1/Fs2;
    t2 = 0:dt2:(length(y2)*dt2)-dt2;
    plot(t2,y2); xlabel('Seconds'); ylabel('Amplitude');
    title('After modification')
    

    %plot(psd(spectrum.periodogram,y,'Fs',Fs,'NFFT',length(y)));
