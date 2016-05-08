if (Meteor.isClient){
	var img_data = [
		{
			img_src: "unicorn.jpg",
			img_alt: "Unicorn"
		},
		{
			img_src: "kneading.jpg",
			img_alt: "Pusheen"
		},
		{
			img_src: "totoro.jpg",
			img_alt: "Totoro"
		}
	];
	Template.images.helpers({images:img_data});
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
	})
}
