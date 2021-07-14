% script to generate figure 
        figure 
        freqz(b,1,[],pinknoise_fs)
        ax = findall(gcf, 'Type', 'axes');
        set(ax, 'XScale', 'log');