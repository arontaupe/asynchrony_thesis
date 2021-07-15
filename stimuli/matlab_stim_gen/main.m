%generate list of filenames for audio
filelist = [];
length = 160;
for i = 1:length
    zeropad = '';
    if i < 10 
        zeropad = '00';
    elseif i < 100
        zeropad = '0';
    end
    new_elem = convertCharsToStrings(append(zeropad,int2str(i),'.wav'));
    filelist = [filelist new_elem];
end

%apply delay for all files
for file = filelist
    add_latency(0,file);
end


    