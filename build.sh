#!/bin/bash

buildForMac(){
    # -s 去掉符号信息， -w 去掉DWARF调试信息，得到的程序就不能用gdb调试了
    CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build -ldflags "-s -w" -o sqldo main.go
}

buildForLinux(){
    CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags "-s -w" -o sqldo main.go
}

buildForWindows(){
    CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -ldflags "-s -w" -o sqldo main.go
}

os=$1

if [$os == '']
then
    osType=`uname|awk '{print $1}'`
    case $osType in
        "Darwin")
            buildForMac
            exit
        ;;
        "Linux")
            buildForLinux
            exit
        ;;
    esac
fi

case $os in
    "mac")
        buildForMac
    ;;
    "linux")
        buildForLinux
    ;;
    "windows")
        buildForWindows
    ;;
    *)
        echo "Usage: ./build.sh {mac|linux|windows}"
        exit
    ;;
esac
