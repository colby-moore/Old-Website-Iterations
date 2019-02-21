	// create the module and name it scotchApp
	var scotchApp = angular.module('ColbyApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/colby.html',
				controller  : 'mainController'
			})

			// route for the home page
			.when('/whoami', {
				templateUrl : 'pages/whoami.html',
				controller  : 'whoamiController'
			})

			// route for the skills page
			.when('/skills', {
				templateUrl : 'pages/skills.html',
				controller  : 'skillsController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});

	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.quote2 = "Sometimes science is a lot more art than science. A lot of people don't get that.";
		$scope.quoteSig2 = " -Rick Sanchez"
		$scope.quote1 = "Humans fancy that there's something special about the way we perceive the world, and yet we live in loops as tight and as closed as the hosts do, seldom questioning our choices, content, for the most part, to be told what to do next. No, my friend, you're not missing anything at all."
		$scope.quoteSig1 = " -Dr. Robert Ford"
		$scope.colbyFooter = 'These are some of my favorite quotes. Last updated January 2017. Please have a look around and explore the rest of my site!'

	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('whoamiController', function($scope) {
		// create a message to display in our view
		$scope.school = 'Computer science student concentrating in software development. Currently I am a senior attending school at Marist College in Poughkeepsie, New York and will be graduating in Spring 2017!';
		$scope.minors = 'Along with the 4 year B.S. in computer science I am also minoring in Cybersecurity, Information Systems, and Information Technology.';
		$scope.frontEnd = 'I strive at creating simple, yet polished designs through using many different variations of design principles. There is no better way to learn than experience, and through trial and error I aim to broaden my knowledge each day.';
		$scope.intern = 'I have held two previous summer internships working in Enterprise Technology Departments for two healthcare providers. With the combination of my professional and academic careers, I have a very broad range of knowledge to offer.'
		$scope.whoamiFooter = 'Upon Graduating, I aspire to work for a company where I can further the extent of my knowledge through the challenges I am given.'

	});

	scotchApp.controller('skillsController', function($scope) {
		$scope.languages = 'AngularJS, C++, HTML5, CSS, PHP, MySQL, SQL, JavaScript, Haskell, Swift';
		$scope.frameworks = 'Bootstrap, Skeleton';
		$scope.mainframe = 'IBM Z Systems, z/OS, z/TPF, JCL, COBOL, JSON, MongoDB';
		$scope.technical = 'Network infrastructure, Wireshark, Nmap, OpenVAS, Oracle, Access, Hexadecimal, Binary, Hexadecimal-Binary conversions, Ceaser Cyphers, Word, Excel, PowerPoint, Photoshop';
		$scope.skillsFooter = 'At the moment I am in the process of building a compiler, which takes up much of my free time on top of applying to jobs.'

	});

	scotchApp.controller('contactController', function($scope) {
		$scope.facebook = 'My dead Facebook lies here. ';
		$scope.instagram = ' To see random pictures of me on Instagram.';
		$scope.spotify = 'Check out music I like on Spotify.';
		$scope.github = 'My new Github for my compiler.';
		$scope.email = 'Email me at colbydashmoore@gmail.com!';
		$scope.marist = "Marist College's wesbite.";
		$scope.programs = "See the computer science program at Marist here.";
		$scope.cybersecurity = 'Cybersecurity Minor.';
		$scope.itMinor = 'Information Technology Minor.';
		$scope.isMinor = 'Information Systems Minor.';
		$scope.contactFooter = "I'm not a very big poster on any sort of social media but feel free to contact me or add me on any of the following.";

	});
