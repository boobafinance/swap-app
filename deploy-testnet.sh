#!/bin/bash
set -e
set -x
react-scripts build

rm -rf /home/ubuntu/Documents/bitdeep/swap-testnet/*
mv ./build/* /home/ubuntu/Documents/bitdeep/swap-testnet/
pushd /home/ubuntu/Documents/bitdeep/swap-testnet
mv CNAME-TESTNET CNAME
git add *
git commit -am "release deployment"
git push
