{% extends "layout.njs" %}

{% block content %}

<section id = 'intro'>
		 <nav>
			 <ul>
			  	<li><a href = '#intro'>home</a></li> <!-- highlight each section of the menu + reduce opacity -->
			  	<li><a href = '#about'>about</a></li>
			 	<li><a href = '#portfolio'>portfolio</a></li>
			 	<li><a href = '#skills'>skills</a></li>
			  	<li id = 'contact-menu'><a href = '#contact'>contact</a></li>
			</ul>
		 </nav>
		 <article>
			 <h1>front-end web developer / Digital Marketing Specialist</h1>
			 <div id = 'buttons'><span><a href="mailto:othman.lanizi@gmail.com">contact</a></span><span><a href = 'files/resume2016.pdf'>Resume</a></span></div>
		</article>
		</section>
		<section id = 'about'>
		 	<header>
		 		<h1>About me</h1>
		 	</header>
		 	<article>
		 		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		 	</article>
		</section>
		<section id = 'portfolio'>
			<header>
		 		<h1>Portfolio</h1>
			</header>
		 	<article>
		 		<figure>
				</figure>
				<figure>
				</figure>
				<figure>
				</figure>
		 	</article>
		</section>
		<section id = 'skills'>
			<header>
				<h1>Skills</h1>
			</header>
		 	<article>
			 	<ul>
			     	<li><strong>Lorem ipsum</strong></li>
			        <li>Consectetur adipiscing elit</li>
			        <li>Consectetur adipiscing elit</li>
			        <li>Consectetur adipiscing elit</li>
			    </ul>
			    <ul>
			        <li><strong>Lorem ipsum</strong></li>
			        <li>Duis aute irure dolor in reprehenderit</li>
			        <li>Duis aute irure dolor in reprehenderit</li>
			        <li>Duis aute irure dolor in reprehenderit</li>
			    </ul> <!-- include certifications somewhere -->
			 </article>
		</section>
		<section id = 'contact'>
			<header>
				<h1>Contact</h1>
			</header>
			<article>
			 	<ul>
			 		<li><strong>Email:</strong> othman.lanizi@gmail.com</li>
			 		<li><strong>LinkedIn:</strong> https://linkedin.com/in/othmanlanizi</li>
			 		<li><strong>GitHub:</strong> https://github.com/OthmanLan</li>
			 	</ul>
			  <div id = 'social-media'></div> <!-- social media icons, perhaps taken from the Huffington? -->
		 </article>
		</section>
	 	<span id = 'bottom'><a href = '#intro'><img src = 'images/arrow.png' alt = 'upward arrow'/></a></span> <!-- use the image of an arrow -->

{% endblock %}
