{% extends "layout.njs" %}

{% block content %}

<section id='intro'>
		 <nav>
			 <ul>
			  	<li><a href='#intro'>home</a></li>
			  	<li><a href='#about'>about</a></li>
				 	<li><a href='#portfolio'>portfolio</a></li>
				 	<li><a href='#skills'>skills</a></li>
			  	<li id='contact-menu'><a href='#contact'>contact</a></li>
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
		 		<p>Lorem ippsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		 	</article>
		</section>
		<section id='portfolio'>
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
		<section id='skills'>
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
			        <li><strong>Lorem ipsumm</strong></li>
			        <li>Duis aute irure dolor in reprehenderit</li>
			        <li>Duis aute irure dolor in reprehenderit</li>
			        <li>Duis aute irure dolor in reprehenderit</li>
			    </ul>
			 </article>
		</section>
		<section id='contact'>
			<header>
				<h1>Contact</h1>
			</header>
			<article>
			 	<ul>
			 		<li><strong>Email:</strong> <a href="mailto:othman.lanizi@gmail.com">othman.lanizi@gmail.com</a></li>
			 		<li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/othmanlanizi" target='_blank'>https://linkedin.com/in/othmanlanizi</a></li>
			 		<li><strong>GitHub:</strong> <a href="https://github.com/OthmanLan" target='_blank'>https://github.com/OthmanLan</a></li>
			 	</ul>
			  <div id='social-media'></div>
		 </article>
		</section>
	 	<span id='bottom'><a href='#intro'><img src='images/arrow.png' alt='upward arrow'/></a></span>

{% endblock %}
