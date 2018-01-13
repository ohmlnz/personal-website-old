{% extends "layout.njs" %}

{% block content %}

<section id='intro'>
	 <nav>
		 <ul class='menu-desktop'>
		  	<li><a href='#intro'>home</a></li>
		  	<li><a href='#about'>about</a></li>
			 	<li><a href='#portfolio'>portfolio</a></li>
			 	<li><a href='#skills'>skills</a></li>
		  	<li id='contact-menu'><a href='#contact'>contact</a></li>
		</ul>
		<ul class='menu-mobile'>
			<li><a href='#intro'>home</a><i class="fa fa-bars" aria-hidden="true"></i></li>
	  	<li><a href='#about'>about</a></li>
		 	<li><a href='#portfolio'>portfolio</a></li>
		 	<li><a href='#skills'>skills</a></li>
	  	<li><a href='#contact'>contact</a></li>
		</ul>

	 </nav>
	 <article>
		 <h1>{{title}}</h1>
		 <div id='buttons'>
		 	<span><a href="mailto:othman.lanizi@gmail.com">contact</a></span>
		 	<span><a href='#'>Resume</a></span>
		 </div>
	</article>
</section>
<section id='about'>
 	<header>
 		<h1>About me</h1>
 	</header>
 	<article>
 		<p>Born and reared in Montpellier, in the South of France, Othman first became interested in computer programming when, at the age of 12, he started to handle and tweak private servers, build websites using PHP and MySQL, and develop video games in Lua. His passion for programming never faltered and he has since continued to work on side projects while dedicating his studies to understanding the mechanics of the corporate world.</p>
 		<p>Othman Lanizi received his BA in Business Administration from La Trobe University in Australia and his MBA from Montpellier Business School in France. His expertise lies in digital marketing, and how to interact and customize user interfaces to positively affect customers’ behavior. </p>
 		<p>As a Front-End Developer, Othman combines his marketing knowledge with his programming skills to address issues in a creative way. Othman is an avid learner and his self-taught repertoire of technologies includes the latest stacks. </p>
 		<p>Othman’s mother is French, and his father is Moroccan; he speaks French and basic Arabic and Japanese. He has chaired a French chapter of a youth mentoring program and during his free time he enjoys playing tennis and biking.</p>
 	</article>
</section>
<section id='portfolio'>
	<header>
 		<h1>Portfolio</h1>
	</header>
 	<article>
 		<ul class="slider">
 			{% for p in portfolio %}
	   		<li>
					<figure>
						<a href="{{p.href}}" target="_blank"><img src="{{p.image}}"></a>
						<figcaption>{{p.caption}}</figcaption>
					</figure>
				</li>
				{% endfor %}
		</section>
 	</article>
</section>
<section id='skills'>
	<header>
		<h1>Skills</h1>
	</header>
 	<article>
	 	<ul>
	     	<li><strong>Tech stack</strong></li>
	        <li>Vanilla JS / jQuery</li>
	        <li>React / React Native</li>
	        <li>Express / Ember / Node</li>
	        <li>SASS / WordPress</li>
	    </ul>
	    <ul>
	        <li><strong>Tools</strong></li>
	        <li>Git</li>
	        <li>Sublime / Atom</li>
	        <li>Photoshop</li>
	        <li>Xcode</li>
	    </ul>
	 </article>
</section>
<section id='contact'>
	<header>
		<h1>Contact</h1>
	</header>
	<article>
		<p>Interested in collaborating or hiring me? Let's get in touch!</p>
	 	<ul>
	 		<li><strong>Email:</strong>&nbsp;<a href="mailto:othman.lanizi@gmail.com"> othman.lanizi@gmail.com</a></li>
	 		<li><strong>LinkedIn:</strong>&nbsp;<a href="https://linkedin.com/in/othmanlanizi" target='_blank'> https://linkedin.com/in/othmanlanizi</a></li>
	 		<li><strong>GitHub:</strong>&nbsp;<a href="https://github.com/OthmanLan" target='_blank'> https://github.com/OthmanLan</a></li>
	 		<li><strong>Phone:</strong>&nbsp;<a href="tel:+9148265280"> (914) 826-5280</a></li>
	 	</ul>
	  <div id='social-media'></div>
 </article>
</section>
<span id='bottom'><a href='#intro'><img src='images/arrow.png' alt='upward arrow'/></a></span>

{% endblock %}
