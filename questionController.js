function questionController($scope, $http, $interval){
	
	$scope.totalScore = 0;      		// total score of the test
	$scope.indexPage = true;			// introduction page	
	$scope.questionPage = false;		// question block display true/false			
	$scope.questionResult = false;		// question result block display true/false
	$scope.ResultText = "";				// question result text
	$scope.nextPageDisplay = false;		// question next button display true/false
	$scope.countDown = 60;
	$scope.timer = null;

	// get education level
	$scope.startQuestion = function(){
		
		$scope.indexPage = false;
		$scope.questionPage = true;
		$scope.totalScore = 0;
		$scope.countDown = 60;

		$scope.timer = $interval(function(){
			
			$scope.countDown--;

			if ($scope.countDown == 0){
				$scope.gameOver();
			}

		}, 1000); 

	}

	//get question data
	$http.get('data.php').success(function(response){

		var i = 0;
		var data = response;
		$scope.showQuestion = data[i]; 


		// score button function
		$scope.page = function(option){

			if ($scope.showQuestion['key'] == option){
				$scope.totalScore += 1;
			}
			else {
				$scope.gameOver();
			}

			if (data[i + 1] != undefined){

				$scope.showQuestion = data[++i];

				$scope.getContent();

			}
			else if (data[i + 1] == undefined){

				$scope.gameOver();
			}
			
		}

		//onmouseover effect
		$scope.effect = function(){
			
			var li = event.target;

			li.style.backgroundColor = "#E6E6E6";
			li.style.opacity = 0.5;
			var radio = li.children[0];
			radio.setAttribute('checked', 'true');

		}

		//onmouseout effect
		$scope.reverseEffect = function(){
			
			var li = event.target;

			li.style.backgroundColor = "white";
			li.style.opacity = 1;
			var radio = li.children[0];
			radio.setAttribute('checked', 'false');
		}

		//reusage part of score button and go back button
		$scope.getContent = function(){

			if ($scope.showQuestion['img'] != undefined){
					$scope.figure = $scope.showQuestion['img'][0];
			}

			if ($scope.showQuestion['hint'] != undefined){
					$scope.hint = $scope.showQuestion['instruction'][0];
			}

			if ($scope.showQuestion['type'] != undefined){
				$scope.nextPageDisplay = true;
				$scope.pointsLen = [];
			}
			else {
				$scope.btn();
				$scope.nextPageDisplay = false;
			}
		}

		$scope.gameOver = function(){

			$scope.questionPage = false;
			$scope.getResult();
			$scope.questionResult = true;

			if (angular.isDefined($scope.timer)) {
			    $interval.cancel($scope.timer);
			    $scope.timer = undefined;
		    }
		}

		//display question result
		$scope.getResult = function(){
			
			$scope.ResultText = "你答对了"+$scope.totalScore+"题";
			
		}

		//restart game
		$scope.restart = function(){
			
			i = 0;
			$scope.showQuestion = data[i]; 
			$scope.questionResult = false;

			$scope.startQuestion();

		}

		//follow us
		$scope.follow = function(){
			window.document.location = "http://mp.weixin.qq.com/s?__biz=MjM5MTA0NzU1NQ==&mid=200749859&idx=1&sn=41893ee9ad1221ec9a79d7a9c3e49f2a&scene=1#rd";
		}

	});


}