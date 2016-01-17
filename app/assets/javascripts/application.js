// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require materialize-sprockets
//= require_tree .

$(document).ready(function(){
var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
		menuRight = document.getElementById( 'cbp-spmenu-s2' ),
		menuTop = document.getElementById( 'cbp-spmenu-s3' ),
		menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
		//showLeft = document.getElementById( 'showLeft' ),
		//showRight = document.getElementById( 'showRight' ),
		showLeftPush = document.getElementById( 'showLeftPush' ),
		showRightPush = document.getElementById( 'showRightPush' ),
		body = document.body;

/*showLeft.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
	disableOther( 'showLeft' );
};
showRight.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRight' );
};*/

showLeftPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toright' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
	disableOther( 'showLeftPush' );
};
showRightPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toleft' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRightPush' );
};

function disableOther( button ) {
	if( button !== 'showLeftPush' ) {
		classie.toggle( showLeftPush, 'disabled' );
	}
	if( button !== 'showRightPush' ) {
		classie.toggle( showRightPush, 'disabled' );
	}
}

})
