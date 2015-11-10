(function(){
	var induction = angular.module('induction', ['ngRoute', 'ui.router']);
	
	induction.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/lession-1");
  
		$stateProvider
			.state('lession-1', {
			url: "/lession-1",
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-container':{
						templateUrl: "lessions/Lession-1.html"
					}
				}			
			});
	});
	
	induction.run(function($rootScope){
		var currentApp = new Page();
		
		$rootScope.$on('$viewContentLoaded', function(event, toState, toParams, fromState, fromParams){ 
			currentApp.init();
 		});
	})
})();