#!/bin/bash
echo "Testing"
virtualenv env
source env/bin/activate
python manage.py makemigrations
python manage.py makemigrations funwithwords
python manage.py migrate
python manage.py runserver
