#!/usr/bin/env bash

rm -rf "${PWD}/.cache" "${PWD}/.build"
docker run --rm -p 127.0.0.1:8000:8000 -v "${PWD}:/docs" zensical/zensical
rm -rf "${PWD}/.cache" "${PWD}/.build"
