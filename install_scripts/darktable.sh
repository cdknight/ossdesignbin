#!/bin/bash
case $( uname -s ) in
Linux*) 
   pkexec apt install -y darktable ;; #only debian-based for now
Darwin*) 
    
    cd ~/Downloads
    wget https://github.com/darktable-org/darktable/releases/download/release-2.2.5/darktable-2.2.5.dmg\
     xattr -d com.apple.quarantine ~/Downloads/darktable*.dmg
    /tmp/cocoasudo hdiutil attach ./darktable-2.2.5.dmg
    /tmp/cocoasudo cp -R /Volumes/darktable /Applications
    /tmp/cocoasudo hdiutil unmount /Volumes/darktable
     rm /tmp/cocoasudo
     rm ~/Downloads/darktable-2.2.5.dmg ;;
esac

