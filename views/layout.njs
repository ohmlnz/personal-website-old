<!DOCTYPE html>
<html>
<head>
  <link rel='stylesheet' href='/stylesheets/style.css'>
  <link href='https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
  <title>{{title}}</title>
</head>
<body>
  {% block content %}
  {% endblock %}

  {% include "partials/scripts.njs" %}
</body>
</html>
