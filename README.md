To run the project :

1. clone the project
2. navigate to the repo by typing: cd everest_app
3. create a virutal env by typing: virtualenv venv
4. activate the virutalenv : source venv/bin/activate
5. execute pip install -r requirements.txt
6. execute python manage.py runserver
7. create super user python manage.py createsuperuser


The django app will run in port 8000

Now to run react app: 
1. Open new terminal and navigate to everest_app, execute: npm ci
2. execute: npm run build 

This will create a latest build of react app which will be served by django.
