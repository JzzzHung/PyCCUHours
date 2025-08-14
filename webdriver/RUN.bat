@ECHO OFF

:: get chrome version
@REM wmic datafile where name="C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" get Version /value > version.txt

python main.py

@REM DEL /q version.txt

PAUSE