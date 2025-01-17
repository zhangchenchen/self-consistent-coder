#!/bin/bash
python -m pip install --upgrade pip
pip install -r requirements.txt
python -m mkdocs build -f mkdocs.yml -d site 