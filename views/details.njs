{% extends "layout.njs" %}

{% block content %}

<h1>Details</h1>

<section class='portfolio-full'>
  <div class='wrapper'>
    {% for d in details %}
      <figure>
        <h3>{{d.title}}</h3>
        <img src={{d.image}} alt={{d.title}}>
        <figcaption>{{d.description}}
          <p><b>Stack:</b> {{d.stack}}</p>
          <p><b>Link:</b><a href="{{d.link}}" target="_blank"> {{d.link}}</a></p>
        </figcaption>
      </figure>
    {% endfor %}
  </div>
</section>

{% endblock %}
