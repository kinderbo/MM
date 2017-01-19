#!/bin/bash
python manage.py collectstatic
gsutil rsync -R static/ gs://wordsbucket/static
gcloud app deploy
