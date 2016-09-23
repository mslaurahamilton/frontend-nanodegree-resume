

/* Create a bio object and add it to the page. Note that SKILLS is set up to only display four skills, so don't bother adding more. */
var bio = {
	"name": "Laura Hamilton",
	"role": "Designer/Developer",
	"welcomeMessage": "I like design, the scientific method, problem-solving, and tacos.",
	"pic": "",
	"contacts": {
		"mobile": "408.315.9431",
		"email": "mslaura@mslaurahamilton.com",
		"github": "mslaurahamilton",
		"location": "Saratoga, California",
		"twitter": "mslaura",
		"url": "www.mslaurahamilton.com",
		"linkedin": "www.linkedin.com/in/mslaura",
		"instagram": "mslaurahamilton"
	},
	"skills": ["UX/UI Design", "HTML/CSS/JavaScript", "e-commerce", "Word Press", "education", "prototyping"]
};

/* Set up the header with name and role */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

/* Prepend name and role to the header */
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Internationalize name
//removes whitespace at beginning and end of string, splits string at whitespace and returns an array of two names to the console
//changes last name to uppercase
//slices first name into 0 position letter and the rest. Changes the first position letter to uppercase, and converts the rest of the first name to lowercase.
function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " +name[1];
}

//$('#main').append(internationalizeButton);

// GOOGLE MAP
$("#mapDiv").append(googleMap);

// Display formatted bio info
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#header").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#header").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#header").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").append(formattedLocation);
var formattedUrl = HTMLurl.replace("%data%", bio.contacts.url);
	$("#header").append(formattedUrl);
//var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
//	$("#header").append(formattedTwitter);
var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	$("#header").append(formattedLinkedin);
var formattedInstagram = HTMLinstagram.replace("%data%", bio.contacts.instagram);
	$("#header").append(formattedInstagram);

//var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
//	$("#header").append(formattedPic);

// if object bio has skills, display them in the page header
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
}

/* Create a work object and add it to the page */
var work = {
	"jobs": [
		{
			"title": "Founder and President",
			"employer": "ThePortableBaby.com",
			"dates": "2005 - 2016",
			"location": "Saratoga CA",
			"description": "Retail of baby carriers and other smart gear for young families on the go.",
			"pic": "http://www.mslaurahamilton.com/myportablebaby/logos/logo_portable_baby_200pxH.gif"

		}, {
			"title": "UI Architect",
			"employer": "Yahoo!",
			"dates": "2001 – 2005",
			"location": "Sunnyvale CA",
			"description": "UI/UX Designer and Front End Developer for Yahoo! Resumix.",
			"pic": "http://www.mslaurahamilton.com/images/yahoo.png"
		}
	]
};


/* Write a for-in loop that iterates over all the jobs in your work object and appends a new HTMLworkStart elements for each one, formats each job's employer with HTMLworkEmployer and each job title with HTMLworkTitle, and appends a concatenation of employer and title to each element with class work-entry:last. */
function displayWork() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedPic = HTMLworkPic.replace("%data%", work.jobs[job].pic);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedWorkDescription);
		$(".work-entry:last").append(formattedPic);

	}
}

// Now initiate the function.
displayWork();

/* Create a projects object */
var projects = {
	"projects" : [
		{
			"title" : "Baby Gear Trader",
			"dates" : "February 2015 - current",
			"description" : "Designed and developed this online marketplace for gently used baby gear that features guided listings (just answer the questions provided) and customized PayPal payment processing that automatically deducts the 10% site commission from the Buyer's payment to the Seller",
			"images" : "http://www.mslaurahamilton.com/babygeartrader/images/babygeartrader_illustration.jpg"
		},
		{
			"title" : "Communications Consultant",
			"dates" : "July 2015",
			"description" : "Worked with a team at Stanford University to develop VC pitches for Sustainable Nepal's founder, Kashish Das Shreshta. Sustainable Nepal is a project to sustainably rebuild the country of Nepal post-earthquake by replacing unreliable hydropower and polluting diesel generators with distributed small-scale solar networks.",
			"images" : "http://lexlimbu.com/wp-content/uploads/Kashish-Das-Shrestha-TNM-Magazine.jpg"
		},
		{
			"title" : "Science Instructor &amp; Founding Task Force Member",
			"dates" : "August 2009 - June 2015",
			"description" : "Discovery Charter School, a progressive K-8 school in San Jose CA. Developed and taught lessons in the scientific method, chemistry, physics, cell biology and botany. Typical format: 20 minute lesson followed by group rotations through four 10 minute hands-on activity centers. Hands-on activities and real life scenarios make for very enthusiastic and engaged science students! Worked with administration and staff to allocate more resources to science education. Instituted lunchtime Science Club. Provided afterschool coaching for Science Fair. In the photo below, I am helping 5th graders look at their own stained cheek cells through a microscope.",
			//"images" : "http://static1.squarespace.com/static/52783d80e4b0e33e3923787f/t/528a748ee4b029435a5440e9/1464808950435/?format=1000w"
			"images": "http://www.mslaurahamilton.com/images/science_2015_01.jpg"
		},
		{
			"title" : "Hiring Gateway suite of online apps: Hiring Gateway Recruiter, Hiring Gateway Hiring Manager, Career Portal",
			"dates" : "2002 to 2003",
			"description" : "At Yahoo Resumix, our HR app suite was named a Top Product of 2003 by Human Resources Executive magazine, who called it 'an applicant tracking system so intuitively designed that an operating manual is unnecessary.'",
			"images" : "http://www.mslaurahamilton.com/images/hgr_640px.jpg"
		}
	]
};

// Encapsulate functions to display Projects
projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			//for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);

		}
	}
};

projects.display();



/* Create an education object and add it to the page */
var education = {
	"schools": [
		{
			"name": "Udacity.com",
			"location": "http://www.udacity.com",
			"degree": "Front End Web Development Nanodegree",
			"major": "HTML/CSS/JavaScript + responsive design",
			"dates": "in progress",
			"URL": "http://www.udacity.com"
		},
		{
			"name": "San Francisco State University",
			"location": "San Francisco CA",
			"degree": "Internet Design & Technology Certificate",
			"major": "Multimedia Studies",
			"dates": "1999",
			"URL": "http://www.sfsu.edu"
		},
		{
			"name": "San Francisco State University",
			"location": "San Francisco CA",
			"degree": "Master of Science",
			"major": "Evolutionary and Systematic Biology",
			"dates": "1997",
			"URL": "http://www.sfsu.edu"
		},
		{
			"name": "San Francisco State University",
			"location": "San Francisco CA",
			"degree": "Bachelor of Science - <i>cum laude</i>",
			"major": "Ecology (Botany)",
			"dates": "1995",
			"URL": "http://www.sfsu.edu"
		},

	]
};

// Encapsulate functions to display Education
education.display = function() {
	
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

/*	for (onlineClass in education.onlineClasses) {
		$("#education").append(HTMLonlineClasses);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
		$(".education-entry:last").append(formattedURL);

	}
*/
};

education.display();


// Log clicks to page
$(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;

   logClicks(x,y);
});




