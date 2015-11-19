(function(){
	var induction = angular.module('induction', ['ngRoute', 'ui.router']);
	
	induction.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/lession-1");
  
		$stateProvider
			.state('lession-1', {
			url: '/lession-1',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-1/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-1/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-1/best-practice.html"
					}
				}			
			})
			.state('lession-2', {
			url: '/lession-2',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-2/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-2/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-2/best-practice.html"
					}
				}			
			})
			.state('lession-3', {
			url: '/lession-2',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-3/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-3/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-3/best-practice.html"
					}
				}			
			})
			.state('lession-4', {
			url: '/lession-4',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-4/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-4/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-4/best-practice.html"
					}
				}			
			})
			.state('lession-5', {
			url: '/lession-5',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-5/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-5/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-5/best-practice.html"
					}
				}			
			})
			.state('lession-6', {
			url: '/lession-6',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-6/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-6/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-6/best-practice.html"
					}
				}			
			})
			.state('lession-7', {
			url: '/lession-7',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-7/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-7/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-7/best-practice.html"
					}
				}			
			})
			.state('lession-8', {
			url: '/lession-8',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-8/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-8/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-8/best-practice.html"
					}
				}			
			})
			.state('lession-9', {
			url: '/lession-9',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-9/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-9/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-9/best-practice.html"
					}
				}			
			})
			.state('lession-10', {
			url: '/lession-10',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-10/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-10/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-10/best-practice.html"
					}
				}			
			})
			.state('lession-11', {
			url: '/lession-11',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-11/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-11/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-11/best-practice.html"
					}
				}			
			})
			.state('lession-12', {
			url: '/lession-12',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-12/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-12/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-12/best-practice.html"
					}
				}			
			})
			.state('lession-13', {
			url: '/lession-13',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-13/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-13/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-13/best-practice.html"
					}
				}			
			})
			.state('lession-14', {
			url: '/lession-14',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-14/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-14/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-14/best-practice.html"
					}
				}			
			})
			.state('lession-15', {
			url: '/lession-15',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-15/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-15/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-15/best-practice.html"
					}
				}			
			})
			.state('lession-16', {
			url: '/lession-16',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-16/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-16/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-16/best-practice.html"
					}
				}			
			})
			.state('lession-17', {
			url: '/lession-17',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-17/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-17/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-17/best-practice.html"
					}
				}			
			})
			.state('lession-18', {
			url: '/lession-18',
			views:
				{
					'wrapper-menu':{
						templateUrl: "shared/Menu.html"
					},
					'wrapper-description':{
						templateUrl: "lessions/Lession-18/description.html"
					},
					'wrapper-sample':{
						templateUrl: "lessions/Lession-18/sample.html"
					},
					'wrapper-best-practice':{
						templateUrl: "lessions/Lession-18/best-practice.html"
					}
				}			
			})
	});
	
	induction.run(function($rootScope){
		var currentApp = new Page();
		
		$rootScope.$on('$viewContentLoaded', function(event, toState, toParams, fromState, fromParams){ 
			currentApp.init();
 		});
	})
})();