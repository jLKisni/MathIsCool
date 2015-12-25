

function sum(x,y){
	var sum = x + y;
		return sum;
}//end of function sum

function subt(x,y){

		if(x>y){
			var sub = x-y;	
		}
		else{
			var sub = y-x;
		}
		
		return sub;
	}
	//end of function sub


function createusertable(){
		$(".create-header").show(function(){
			$(".create-header").append(
			
			    '<div class="create-nav">'+
                '<img src="../../img/text/select-user.png" alt="" height="80">'+
            '</div>'+
            
            '<div class="create-table">'+
                    '<table class="table table-hover">'+
                            '<tbody>'+
                            '<tr>'+
                              '<th class="active">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                             	'<th class="success">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="active">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="success">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="active">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="success">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="active">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="success">&nbsp;</th>'+
                            '</tr>'+
                            '</tbody>'+
                    '</table>'+
                    
            '</div>'+
            '<div class="create-icons">'+
                    '<div class="create-button-left">'+
                        '<a id="create_button"><img src="../../img/text/create.png" height="80" alt=""/></a>'+
                    '</div>'+
                    '<div class="create-button-right">'+
                        '<a href="../../start/index.html"><img src="../../img/text/exit.png" height="80" alt=""/></a>'+
                    '</div>'+
            '</div>'
			);
			


				$("#create_button").click(function(){
						$(".create-header").empty();
						$(".create-form").show();

						$(".create-form").append(
								 '<div class="create-nav">'+
					                '<img src="../../img/text/enter-name.png" alt="" height="80">'+
					            '</div>'+

					            '<form class="add-user">'+
					                '<input type="text" id="username" class="form-control">'+
					            '</form>'+

					               '<div class="create-icons">'+
					                    '<div class="create-button-left">'+
					                        '<a id="submit_form"><img src="../../img/text/create.png" height="80" alt=""/></a>'+
					                    '</div>'+
					                    '<div class="create-button-right">'+
					                        '<a href="../../start/index.html"><img src="../../img/text/exit.png"height="80" alt=""/></a>'+
					                    '</div>'+
					                '</div>'
						);

						
									$("#submit_form").click(function(){
										$(".create-form").hide();
										var val_user = $("#username").val();
										console.log(val_user);
										$(".create-header").empty();
										$(".create-header").show();
										$(".create-header").append(
						
														    '<div class="create-nav">'+
											                '<img src="../../img/text/select-user.png" alt="" height="80">'+
											            '</div>'+
											            
											            '<div class="create-table">'+
											                    '<table class="table table-hover">'+
											                            '<tbody>'+
											                            '<tr>'+
											                              '<th class="active"  id="userclick" style="font-weight:bold;">&nbsp;'+val_user+'</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                             	'<th class="success">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="active">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="success">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="active">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="success">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="active">&nbsp;</th>'+
											                            '</tr>'+
											                            '</tbody>'+
											                             '<tr>'+
											                              '<th class="success">&nbsp;</th>'+
											                            '</tr>'+
											                    '</table>'+
											                    
											            '</div>'+
											            '<div class="create-icons">'+
											                    '<div class="create-button-left" hidden>'+
											                        '<a id="create_button"><img src="../../img/text/create.png" height="80" alt=""/></a>'+
											                    '</div>'+
											                    '<div class="create-button-right" hidden>'+
											                        '<a href="../../start/play-add/addition-quiz.html"><img src="../../img/text/next.png" height="80" alt=""/></a>'+
											                    '</div>'+
											            '</div>'
													);
									
										

											$("#userclick").click(function(){
												$(".create-button-right").show("slow");
											});

								});//end of click submit form
						

				});//end of click create_button


		});//end of click create-header
		



}


function createusertableSub(){
		$(".create-header-sub").show(function(){
			$(".create-header-sub").append(
			
			    '<div class="create-nav">'+
                '<img src="../../img/text/select-user.png" alt="" height="80">'+
            '</div>'+
            
            '<div class="create-table">'+
                    '<table class="table table-hover">'+
                            '<tbody>'+
                            '<tr>'+
                              '<th class="active">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                             	'<th class="success">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="active">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="success">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="active">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="success">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="active">&nbsp;</th>'+
                            '</tr>'+
                            '<tr>'+
                              '<th class="success">&nbsp;</th>'+
                            '</tr>'+
                            '</tbody>'+
                    '</table>'+
                    
            '</div>'+
            '<div class="create-icons">'+
                    '<div class="create-button-left">'+
                        '<a id="create_button"><img src="../../img/text/create.png" height="80" alt=""/></a>'+
                    '</div>'+
                    '<div class="create-button-right">'+
                        '<a href="../../start/index.html"><img src="../../img/text/exit.png" height="80" alt=""/></a>'+
                    '</div>'+
            '</div>'
			);
			


				$("#create_button").click(function(){
						$(".create-header-sub").empty();
						$(".create-form-sub").show();

						$(".create-form-sub").append(
								 '<div class="create-nav">'+
					                '<img src="../../img/text/enter-name.png" alt="" height="80">'+
					            '</div>'+

					            '<form class="add-user">'+
					                '<input type="text" id="username" class="form-control">'+
					            '</form>'+

					               '<div class="create-icons">'+
					                    '<div class="create-button-left">'+
					                        '<a id="submit_form"><img src="../../img/text/create.png" height="80" alt=""/></a>'+
					                    '</div>'+
					                    '<div class="create-button-right">'+
					                        '<a href="../../start/index.html"><img src="../../img/text/exit.png"height="80" alt=""/></a>'+
					                    '</div>'+
					                '</div>'
						);

						
									$("#submit_form").click(function(){
										$(".create-form-sub").hide();
										var val_user = $("#username").val();
										console.log(val_user);
										$(".create-header-sub").empty();
										$(".create-header-sub").show();
										$(".create-header-sub").append(
						
														    '<div class="create-nav">'+
											                '<img src="../../img/text/select-user.png" alt="" height="80">'+
											            '</div>'+
											            
											            '<div class="create-table">'+
											                    '<table class="table table-hover">'+
											                            '<tbody>'+
											                            '<tr>'+
											                              '<th class="active"  id="userclick" style="font-weight:bold;">&nbsp;'+val_user+'</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                             	'<th class="success">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="active">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="success">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="active">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="success">&nbsp;</th>'+
											                            '</tr>'+
											                            '<tr>'+
											                              '<th class="active">&nbsp;</th>'+
											                            '</tr>'+
											                            '</tbody>'+
											                             '<tr>'+
											                              '<th class="success">&nbsp;</th>'+
											                            '</tr>'+
											                    '</table>'+
											                    
											            '</div>'+
											            '<div class="create-icons">'+
											                    '<div class="create-button-left" hidden>'+
											                        '<a id="create_button"><img src="../../img/text/create.png" height="80" alt=""/></a>'+
											                    '</div>'+
											                    '<div class="create-button-right" hidden>'+
											                        '<a href="../../start/play-sub/subtraction-quiz.html"><img src="../../img/text/next.png" height="80" alt=""/></a>'+
											                    '</div>'+
											            '</div>'
													);
									
										

											$("#userclick").click(function(){
												$(".create-button-right").show("slow");
											});

								});//end of click submit form
						

				});//end of click create_button


		});//end of click create-header
		


}
	
function addQuiz(){
	

	var multiAnimals = {
    'animal1' : [' ','../../img/animals/1dog.png', '../../img/animals/2dog.png','../../img/animals/3dog.png', '../../img/animals/4dog.png','../../img/animals/5dog.png'],
    'animal2' : [' ','../../img/animals/1cat.png', '../../img/animals/2cat.png','../../img/animals/3cat.png', '../../img/animals/4cat.png','../../img/animals/5cat.png'],
    'animal3' : [' ','../../img/animals/1fish.png', '../../img/animals/2fish.png','../../img/animals/3fish.png', '../../img/animals/4fish.png','../../img/animals/5fish.png']
};


	console.log(multiAnimals);

			var tempX = Array();
			var tempY = Array();
			var result = Array();
			var buttonvalue;
			 for(i=1; i<6; i++){
                        	var x = Math.floor((Math.random()*5-1+1)+1);
							var y = Math.floor((Math.random()*5-1+1)+1);

						tempX += x;
              			tempY += y;		



              }
              	console.log(tempX);
               console.log(tempY);
	$("#add-question1").show();

	$("#add-question1").append(

	  			'<img src="'+multiAnimals.animal1[tempX[1]]+'" alt="" height="120">'+
                '<img src="../../img/text/plus-sign.png" alt="" width ="80">'+
               '<img src="'+multiAnimals.animal1[tempY[1]]+'" alt="" height="120">'+
               '<img src="../../img/text/equals-sign.png" alt="" height="50">'+
             
                '<div class="dropdown">'+
                     '<form>'+
                           '<select id ="q1">'+
                                '<option >Choose Answer :</option>'+
                                '<option value="'+sum(parseInt(tempX[4]),parseInt(tempY[2]))+'">A.) '+sum(parseInt(tempX[4]),parseInt(tempY[2]))+'</option>'+
                                '<option value="'+sum(parseInt(tempX[1]),parseInt(tempY[3]))+'">B.) '+sum(parseInt(tempX[1]),parseInt(tempY[3]))+'</option>'+
                                '<option value="'+sum(parseInt(tempX[1]),parseInt(tempY[1]))+'">C.) '+sum(parseInt(tempX[1]),parseInt(tempY[1]))+'</option>'+
                                '<option value="'+sum(parseInt(tempX[1]),parseInt(tempY[4]))+'">D.) '+sum(parseInt(tempX[1]),parseInt(tempY[4]))+'</option>'+
                            '</select>'+
                     '</form>'+
                '</div>'+
                      '<div class="clear"></div> '+
                            '<div class="create-icons">'+
                                '<div class="create-button-left">'+
                                    '<a id="create_button" hidden><img src="../../img/text/create.png" height="80" alt=""/></a>'+
                                '</div>'+

                                '<div class="create-button-right">'+
                                    '<a id="submit_add1"><img src="../../img/text/next.png" height="80" alt=""/></a>'+
                                '</div>'+
                            '</div>'
	);



	$("#submit_add1").click(function(){
		var valueq1 = $("#q1").val();
		$("#add-question1").hide();
		$("#add-question1").empty();
			
			var result1 = sum(parseInt(tempX[1]),parseInt(tempY[1]));
			
			console.log("value q1 ", valueq1,"result",result1);

			$("#add-question2").show();
			$("#add-question2").append(

	  			'<img src="'+multiAnimals.animal2[tempX[2]]+'" alt="" height="120">'+
               '<img src="../../img/text/plus-sign.png" alt="" width ="80">'+
               '<img src="'+multiAnimals.animal2[tempY[2]]+'" alt="" height="120">'+
               '<img src="../../img/text/equals-sign.png" alt="" height="50">'+
             
                '<div class="dropdown">'+
                     '<form>'+
                     		
                           '<select id ="q2">'+
                                '<option >Choose Answer :</option>'+
                               
                                '<option value="'+sum(parseInt(tempX[4]),parseInt(tempY[2]))+'">A.) '+sum(parseInt(tempX[4]),parseInt(tempY[2]))+'</option>'+
                                '<option value="'+sum(parseInt(tempX[2]),parseInt(tempY[2]))+'">B.) '+sum(parseInt(tempX[2]),parseInt(tempY[2]))+'</option>'+
                                '<option value="'+sum(parseInt(tempX[1]),parseInt(tempY[4]))+'">C.) '+sum(parseInt(tempX[1]),parseInt(tempY[4]))+'</option>'+
                                '<option value="'+sum(parseInt(tempX[2]),parseInt(tempY[4]))+'">D.) '+sum(parseInt(tempX[2]),parseInt(tempY[4]))+'</option>'+
                            '</select>'+
                            '<button id="temp-val1" value="'+valueq1+'" hidden></button>'+
                            '<button id="temp-res1" value="'+result1+'" hidden></button>'+
                     '</form>'+
                '</div>'+
                      '<div class="clear"></div> '+
                            '<div class="create-icons">'+
                                '<div class="create-button-left">'+
                                    '<a id="create_button" hidden><img src="../../img/text/create.png" height="80" alt=""/></a>'+
                                '</div>'+

                                '<div class="create-button-right">'+
                                    '<a id="submit_add2"><img src="../../img/text/next.png" height="80" alt=""/></a>'+
                                '</div>'+
                            '</div>'
			);//append question2

				$("#submit_add2").click(function(){
						var temp_val1 = $("#temp-val1").val();
						var temp_res1 = $("#temp-res1").val();//value for q1
						var result2 = sum(parseInt(tempX[2]),parseInt(tempY[2]));
						var valueq2 = $("#q2").val();//value for q2

						console.log("val q1",temp_val1,"result q1",temp_res1,"val q2",valueq2,"result q2",result2);

						$("#add-question2").hide();
						$("#add-question3").show();

						$("#add-question3").append(
							'<img src="'+multiAnimals.animal3[tempX[3]]+'" alt="" height="120" width="150">'+
				               '<img src="../../img/text/plus-sign.png" alt="" width ="80">'+
				               '<img src="'+multiAnimals.animal3[tempY[3]]+'" alt="" height="120" width="150">'+
				               '<img src="../../img/text/equals-sign.png" alt="" height="50" >'+
				             
				                '<div class="dropdown">'+
				                     '<form>'+
				                     		
				                           '<select id ="q3">'+
				                                '<option >Choose Answer :</option>'+
				                               
				                                '<option value="'+sum(parseInt(tempX[3]),parseInt(tempY[3]))+'">A.) '+sum(parseInt(tempX[3]),parseInt(tempY[3]))+'</option>'+
				                                '<option value="'+sum(parseInt(tempX[4]),parseInt(tempY[2]))+'">B.) '+sum(parseInt(tempX[4]),parseInt(tempY[2]))+'</option>'+
				                                '<option value="'+sum(parseInt(tempX[1]),parseInt(tempY[4]))+'">C.) '+sum(parseInt(tempX[1]),parseInt(tempY[4]))+'</option>'+
				                                '<option value="'+sum(parseInt(tempX[4]),parseInt(tempY[3]))+'">D.) '+sum(parseInt(tempX[4]),parseInt(tempY[3]))+'</option>'+
				                            '</select>'+
				                            '<button id="temp-val1" value="'+temp_val1+'" hidden></button>'+
				                            '<button id="temp-res1" value="'+temp_res1+'" hidden></button>'+
				                            '<button id="temp-val2" value="'+valueq2+'" hidden></button>'+
				                            '<button id="temp-res2" value="'+result2+'" hidden></button>'+
				                     '</form>'+
				                '</div>'+
				                      '<div class="clear"></div> '+
				                            '<div class="create-icons">'+
				                                '<div class="create-button-left">'+
				                                    '<a id="create_button" hidden><img src="../../img/text/create.png" height="80" alt=""/></a>'+
				                                '</div>'+

				                                '<div class="create-button-right">'+
				                                    '<a id="submit_add3"><img src="../../img/text/next.png" height="80" alt=""/></a>'+
				                                '</div>'+
				                            '</div>'
						);

						$("#submit_add3").click(function(){
								

						var temp_val1 = $("#temp-val1").val();
						var temp_res1 = $("#temp-res1").val();//value for q1
						var temp_val2 = $("#temp-val2").val();
						var temp_res2 = $("#temp-res2").val();//value for q2
						var result3 = sum(parseInt(tempX[3]),parseInt(tempY[3]));
						var value3 = $("#q3").val();//value for q3
								$("#add-question3").hide();
								$("#quiz-logo").hide();
								$(".quiz-container").hide();
						var count = 0;

					for(i=1; i<4; i++){

						if(i==1){
							if(temp_val1==temp_res1){
							count++;
							}
						}
						else if(i==2){
							if(temp_val2==temp_res2){
							count++;
							}
						}
						else if(i==3){
							if(result3==value3){
							count++;
							}
						}

					}	


					if(count>=2){
					$(".score-container").show();
					$(".score-container").append(
					'<div class="quiz-logo">'+
		                '<img  id="quiz-logo" src="../../img/text/score.png" alt="" height="80">'+
		            '</div>'+

		            '<div class="container-score"><h1>'+count+'</h1></div>'+

                '<div class="score-alert">'+
                    '<div class="score-logo">'+
                        '<img src="../../img/animals/monkeyface.png" alt="" height="150" width="200">'+
                    '</div>'+
                    '<div class="score-desc">'+
                            '<h3>Good Job. !</h3>'+
                    '</div>'+
                '</div>'+

            '<div class="clear"></div>'+
            '<div class="create-icons">'+
                 '<div class="create-button-left">'+
                    '<a href="../../index.html"><img src="../../img/text/exit.png" height="80" alt=""/></a>'+
                 '</div>'+

                 '<div class="create-button-right">'+
                '<a href="../../start/index.html"><img src="../../img/text/take-another-quiz.png" height="80" alt=""/></a>'+
                '</div>'+
             '</div>'
						);
					}
					else{
						$(".score-container").show();
					$(".score-container").append(
					'<div class="quiz-logo">'+
		                '<img  id="quiz-logo" src="../../img/text/score.png" alt="" height="80">'+
		            '</div>'+

		            '<div class="container-score"><h1>'+count+'</h1></div>'+

                '<div class="score-alert">'+
                    '<div class="score-logo">'+
                        '<img src="../../img/animals/sad-monkey.png" alt="" height="150" width="200">'+
                    '</div>'+
                    '<div class="score-desc">'+
                            '<h3>Sorry you are failed. Take the Tutorial again.</h3>'+
                    '</div>'+
                '</div>'+

            '<div class="clear"></div>'+
            '<div class="create-icons">'+
                 '<div class="create-button-left">'+
                    '<a href="../../index.html"><img src="../../img/text/exit.png" height="80" alt=""/></a>'+
                 '</div>'+

                 '<div class="create-button-right">'+
                '<a href="../../tutorial/index.html"><img src="../../img/text/tutorial.png" height="80" alt=""/></a>'+
                '</div>'+
             '</div>'
						);
					}

				

						});//end of submit 3



				});//end of submit_add2

	});//end of submit_add1


}


function subQuiz(){

		var multiAnimals = {
    'animal1' : [' ','../../img/animals/1dog.png', '../../img/animals/2dog.png','../../img/animals/3dog.png', '../../img/animals/4dog.png','../../img/animals/5dog.png'],
    'animal2' : [' ','../../img/animals/1cat.png', '../../img/animals/2cat.png','../../img/animals/3cat.png', '../../img/animals/4cat.png','../../img/animals/5cat.png'],
    'animal3' : [' ','../../img/animals/1fish.png', '../../img/animals/2fish.png','../../img/animals/3fish.png', '../../img/animals/4fish.png','../../img/animals/5fish.png']
};


			var tempX = Array();
			var tempY = Array();
			var result = Array();
			var buttonvalue;
			 for(i=1; i<6; i++){
                        	var x = Math.floor((Math.random()*5-1+1)+1);
							var y = Math.floor((Math.random()*5-1+1)+1);
						
						tempX += x;
              			tempY += y;		
              			
              }
              	console.log(tempX);
               console.log(tempY);
	$("#sub-question1").show();

	$("#sub-question1").append(

	  			'<img src="'+multiAnimals.animal1[tempX[1]]+'" alt="" height="120">'+
               '<img src="../../img/text/minus-sign.png" alt="" width ="100">'+
               '<img src="'+multiAnimals.animal1[tempY[1]]+'" alt="" height="120">'+
               '<img src="../../img/text/equals-sign.png" alt="" height="50">'+
             
                '<div class="dropdown">'+
                     '<form>'+
                           '<select id ="q1">'+
                                '<option >Choose Answer :</option>'+
                                '<option value="'+subt(parseInt(tempX[4]),parseInt(tempY[2]))+'">A.) '+subt(parseInt(tempX[4]),parseInt(tempY[2]))+'</option>'+
                                '<option value="'+subt(parseInt(tempX[1]),parseInt(tempY[3]))+'">B.) '+subt(parseInt(tempX[1]),parseInt(tempY[3]))+'</option>'+
                                '<option value="'+subt(parseInt(tempX[1]),parseInt(tempY[1]))+'">C.) '+subt(parseInt(tempX[1]),parseInt(tempY[1]))+'</option>'+
                                '<option value="'+subt(parseInt(tempX[1]),parseInt(tempY[4]))+'">D.) '+subt(parseInt(tempX[1]),parseInt(tempY[4]))+'</option>'+
                            '</select>'+
                     '</form>'+
                '</div>'+
                      '<div class="clear"></div> '+
                            '<div class="create-icons">'+
                                '<div class="create-button-left">'+
                                    '<a id="create_button" hidden><img src="../../img/text/create.png" height="80" alt=""/></a>'+
                                '</div>'+

                                '<div class="create-button-right">'+
                                    '<a id="submit_add1"><img src="../../img/text/next.png" height="80" alt=""/></a>'+
                                '</div>'+
                            '</div>'
	);



	$("#submit_add1").click(function(){
		var valueq1 = $("#q1").val();
		$("#sub-question1").hide();
		
			
			var result1 = subt(parseInt(tempX[1]),parseInt(tempY[1]));
			

			$("#sub-question2").show();
			$("#sub-question2").append(

	  			'<img src="'+multiAnimals.animal2[tempX[2]]+'" alt="" height="120">'+
                '<img src="../../img/text/minus-sign.png" alt="" width ="100">'+
               '<img src="'+multiAnimals.animal2[tempY[2]]+'" alt="" height="120">'+
               '<img src="../../img/text/equals-sign.png" alt="" height="50">'+
             
                '<div class="dropdown">'+
                     '<form>'+
                     		
                           '<select id ="q2">'+
                                '<option >Choose Answer :</option>'+
                               
                                '<option value="'+subt(parseInt(tempX[4]),parseInt(tempY[2]))+'">A.) '+subt(parseInt(tempX[4]),parseInt(tempY[2]))+'</option>'+
                                '<option value="'+subt(parseInt(tempX[2]),parseInt(tempY[2]))+'">B.) '+subt(parseInt(tempX[2]),parseInt(tempY[2]))+'</option>'+
                                '<option value="'+subt(parseInt(tempX[1]),parseInt(tempY[4]))+'">C.) '+subt(parseInt(tempX[1]),parseInt(tempY[4]))+'</option>'+
                                '<option value="'+subt(parseInt(tempX[2]),parseInt(tempY[4]))+'">D.) '+subt(parseInt(tempX[2]),parseInt(tempY[4]))+'</option>'+
                            '</select>'+
                            '<button id="temp-val1" value="'+valueq1+'" hidden></button>'+
                            '<button id="temp-res1" value="'+result1+'" hidden></button>'+
                     '</form>'+
                '</div>'+
                      '<div class="clear"></div> '+
                            '<div class="create-icons">'+
                                '<div class="create-button-left">'+
                                    '<a id="create_button" hidden><img src="../../img/text/create.png" height="80" alt=""/></a>'+
                                '</div>'+

                                '<div class="create-button-right">'+
                                    '<a id="submit_add2"><img src="../../img/text/next.png" height="80" alt=""/></a>'+
                                '</div>'+
                            '</div>'
			);//append question2

				$("#submit_add2").click(function(){
						var temp_val1 = $("#temp-val1").val();
						var temp_res1 = $("#temp-res1").val();//value for q1
						var result2 = subt(parseInt(tempX[2]),parseInt(tempY[2]));
						var valueq2 = $("#q2").val();//value for q2


						$("#sub-question2").hide();
						$("#sub-question3").show();

						$("#sub-question3").append(
							'<img src="'+multiAnimals.animal3[tempX[3]]+'" alt="" height="120" width="150">'+
				                '<img src="../../img/text/minus-sign.png" alt="" width ="100">'+
				               '<img src="'+multiAnimals.animal3[tempY[3]]+'" alt="" height="120" width="150">'+
				               '<img src="../../img/text/equals-sign.png" alt="" height="50" >'+
				             
				                '<div class="dropdown">'+
				                     '<form>'+
				                     		
				                           '<select id ="q3">'+
				                                '<option >Choose Answer :</option>'+
				                               
				                                '<option value="'+subt(parseInt(tempX[3]),parseInt(tempY[3]))+'">A.) '+subt(parseInt(tempX[3]),parseInt(tempY[3]))+'</option>'+
				                                '<option value="'+subt(parseInt(tempX[4]),parseInt(tempY[2]))+'">B.) '+subt(parseInt(tempX[4]),parseInt(tempY[2]))+'</option>'+
				                                '<option value="'+subt(parseInt(tempX[1]),parseInt(tempY[4]))+'">C.) '+subt(parseInt(tempX[1]),parseInt(tempY[4]))+'</option>'+
				                                '<option value="'+subt(parseInt(tempX[4]),parseInt(tempY[3]))+'">D.) '+subt(parseInt(tempX[4]),parseInt(tempY[3]))+'</option>'+
				                            '</select>'+
				                            '<button id="temp-val1" value="'+temp_val1+'" hidden></button>'+
				                            '<button id="temp-res1" value="'+temp_res1+'" hidden></button>'+
				                            '<button id="temp-val2" value="'+valueq2+'" hidden></button>'+
				                            '<button id="temp-res2" value="'+result2+'" hidden></button>'+
				                     '</form>'+
				                '</div>'+
				                      '<div class="clear"></div> '+
				                            '<div class="create-icons">'+
				                                '<div class="create-button-left">'+
				                                    '<a id="create_button" hidden><img src="../../img/text/create.png" height="80" alt=""/></a>'+
				                                '</div>'+

				                                '<div class="create-button-right">'+
				                                    '<a id="submit_add3"><img src="../../img/text/next.png" height="80" alt=""/></a>'+
				                                '</div>'+
				                            '</div>'
						);

						$("#submit_add3").click(function(){
								$("#sub-question3").hide();
								
								$("#quiz-logo").hide();
								
								$("#sub-quiz-container").hide();
								

						var temp_val1 = $("#temp-val1").val();
						var temp_res1 = $("#temp-res1").val();//value for q1
						var temp_val2 = $("#temp-val2").val();
						var temp_res2 = $("#temp-res2").val();//value for q2
						var result3 = subt(parseInt(tempX[3]),parseInt(tempY[3]));
						var value3 = $("#q3").val();//value for q3
						
						var count =0;

					for(i=1; i<5; i++){

						if(i==1){
							if(temp_val1==temp_res1){
							count++;
							}
						}
						else if(i==2){
							if(temp_val2==temp_res2){
							count++;
							}
						}
						else if(i==3){
							if(result3==value3){
							count++;
							}
						}

					}	


					if(count>=2){
					$("#sub-score-container").show();
					$("#sub-score-container").append(
					'<div class="quiz-logo">'+
		                '<img  id="quiz-logo" src="../../img/text/score.png" alt="" height="80">'+
		            '</div>'+

		            '<div class="container-score"><h1>'+count+'</h1></div>'+

                '<div class="score-alert">'+
                    '<div class="score-logo">'+
                        '<img src="../../img/animals/monkeyface.png" alt="" height="150" width="200">'+
                    '</div>'+
                    '<div class="score-desc">'+
                            '<h3>Good Job. !</h3>'+
                    '</div>'+
                '</div>'+

            '<div class="clear"></div>'+
            '<div class="create-icons">'+
                 '<div class="create-button-left">'+
                    '<a href="../../index.html"><img src="../../img/text/exit.png" height="80" alt=""/></a>'+
                 '</div>'+

                 '<div class="create-button-right">'+
                '<a href="../../start/index.html"><img src="../../img/text/take-another-quiz.png" height="80" alt=""/></a>'+
                '</div>'+
             '</div>'
						);
					}
					else{
						$("#sub-score-container").show();
					$("#sub-score-container").append(
					'<div class="quiz-logo">'+
		                '<img  id="quiz-logo" src="../../img/text/score.png" alt="" height="80">'+
		            '</div>'+

		            '<div class="container-score"><h1>'+count+'</h1></div>'+

                '<div class="score-alert">'+
                    '<div class="score-logo">'+
                        '<img src="../../img/animals/sad-monkey.png" alt="" height="150" width="200">'+
                    '</div>'+
                    '<div class="score-desc">'+
                            '<h3>Sorry you are failed. Take the Tutorial again.</h3>'+
                    '</div>'+
                '</div>'+

            '<div class="clear"></div>'+
            '<div class="create-icons">'+
                 '<div class="create-button-left">'+
                    '<a href="../../index.html"><img src="../../img/text/exit.png" height="80" alt=""/></a>'+
                 '</div>'+

                 '<div class="create-button-right">'+
                '<a href="../../tutorial/index.html"><img src="../../img/text/tutorial.png" height="80" alt=""/></a>'+
                '</div>'+
             '</div>'
						);
					}

				

						});//end of submit 3



				});//end of submit_add2

	});//end of submit_add1


}

window.onload = function(){
	createusertable();
	createusertableSub();
	addQuiz();
	subQuiz();
}

