latency = 0.2 % in seconds
file = '001.wav'

[y,Fs] = audioread(file);
merged = [zeros(Fs * latency, size(y, 2));y];

audiowrite('200ms_001.wav',merged,Fs);