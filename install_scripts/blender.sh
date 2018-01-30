#!/bin/bash
case $( uname -s ) in
Linux*) 
   wget https://blender.org/download/Blender2.79/
Darwin*) 
    
        cd /tmp
    wget https://raw.githubusercontent.com/performantdesign/cocoasudo/master/build/Release/cocoasudo
    chmod +x /tmp/cocoasudo

    cd ~/Downloads
    wget https://github.com/darktable-org/darktable/releases/download/release-2.2.5/darktable-2.2.5.dmg\
     xattr -d com.apple.quarantine ~/Downloads/darktable*.dmg
    /tmp/cocoasudo hdiutil attach ./darktable-2.2.5.dmg
    /tmp/cocoasudo cp -R /Volumes/darktable /Applications
    /tmp/cocoasudo hdiutil unmount /Volumes/darktable
        rm /tmp/cocoasudo
        rm ~/Downloads/darktable-2.2.5.dmg
 ;;
esac
