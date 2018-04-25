var fs = require('fs');



var great_app = (function(){	
		
	var _options = JSON.parse(fs.read('manifest.json'));
	var _tests = _options.tests;
	


	var _utils = {
		run: function(){
			
			var run_tests = function(){
				
				var casper = require('casper').create();
				casper.start().each(_tests, function(self, test_) {
					self.thenOpen(test_.open, function() {
						casper.echo("start: " + test_.open)
						//needs to search every key of property 'commands' recursively and
						//return the key and value,
						
						run_command("take_screenshot", test_.commands.take_screenshot, self)												
					});
				});
				
				casper.run()

			};

			var run_commands = function self (cmd, val){
				//iterate through test
			};

			var run_command = function(cmd, val, casper_){
				

				switch(cmd){
					case 'take_screenshot':
					//do stuff
					
					casper_.then(function() {
						this.capture(val, {
							top: 100,
							left: 100,
							width: 500,
							height: 400
						});
					});
					break;
					
				}
			};
			run_tests()			
		}
	}
	
	return {
		init: function(){
			//casper.echo(_tests[0])
			_utils.run()
		}
	}	
	
})()

great_app.init()



