echo start 
FOR /L %%n in (0,1,5) do (
	FOR %%a in ("C:\Users\aron\Desktop\compression_test\video\*.mp4") do (
		ffmpeg -i "C:\Users\aron\Desktop\compression_test\video\%%~na.mp4" -i "C:\Users\aron\Desktop\compression_test\audio\%%n_%%~na.wav" -map 0:v:0 -map 1:a:0 -c:v libx264 -tune zerolatency -crf 25 -vf scale=-1:720  -preset veryslow -movflags +faststart "C:\Users\aron\Desktop\compression_test\merged\%%n_%%~na.mp4" 
)
echo trough loop
)
pause