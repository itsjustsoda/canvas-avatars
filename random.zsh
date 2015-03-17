#!/bin/zsh 

cd $(dirname $0)
cp avatar_$[RANDOM % 36].gif avatar.gif &> logs
