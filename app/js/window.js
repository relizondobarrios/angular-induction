'use strict';

var Page = function(){
	this.height = $(window).height();
};

Page.prototype = {
	init:function(){
		this.height = $(window).height() - $('#header-title').height() - 25;
		$('#lession-container').height(this.height);
		$('#lessions-menu').height(this.height);
	}
};
