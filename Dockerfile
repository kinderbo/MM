FROM python:3.6
RUN pip install mod_wsgi-standalone

COPY . /src
WORKDIR /src
RUN pip install -r requirements.txt

USER 12345
CMD python manage.py runmodwsgi
