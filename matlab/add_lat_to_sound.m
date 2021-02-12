function add_lat(latency, file)
    [AUDIO,Fs] = audioread(file);
    lat_in_s = latency/1000;
    merged = [zeros(Fs * lat_in_s, size(AUDIO, 2));AUDIO];
    audiowrite(latency + 'ms_' + file,merged,Fs);
end
