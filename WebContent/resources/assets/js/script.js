$(document).ready(function(){

	var dimCount;
	var checkDimCount = 0;

	var dimensions = {
		crops : 		[
							{
								name   : "crops1",
								range  : false,
								values : ["House", "Cave", "Boat"]
						  	},
						  	{
								name   : "crops2",
								range  : true,
								values : ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"]
						  	},
						  	{
								name   : "crops3",
								range  : true,
								values : ["Cookies", "Cake", "Ice Cream", "Brownies"]
						  	}
			   			],
		landParcel : 	[
							{
								name   : "land1",
								range  : false,
								values : ["House", "Cave", "Boat"]
						  	},
						  	{
								name   : "land2",
								range  : true,
								values : ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"]
						  	},
						  	{
								name   : "land3",
								range  : false,
								values : ["Cookies", "Cake", "Ice Cream", "Brownies"]
						  	},
						  	{
								name   : "land4",
								range  : true,
								values : ["0.0", "1.0", "1.5", "2.0", "2.5", "3.0", "3.5", "4.0"]
						  	}
					   	],
		arcdp : 		[
							{
								name   : "arcdp1",
								range  : false,
								values : ["House", "Cave", "Boat"]
						  	},
						  	{
								name   : "arcdp2",
								range  : true,
								values : ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"]
						  	},
						  	{
								name   : "arcdp3",
								range  : false,
								values : ["Cookies", "Cake", "Ice Cream", "Brownies"]
						  	}
					   ]
	};

	setupFactTable(dimensions.crops);

	$("#navFactTable button").click(function(){
		$("#navFactTable button").removeClass("active");
		$(this).addClass("active");
		var currTable;
		switch($(this).attr("data-factTable")){
			case "crops":
				currTable = dimensions.crops;
				break;
			case "landParcel":
				currTable = dimensions.landParcel;
				break;
			case "ARCDP":
				currTable = dimensions.arcdp;
		}
		setupFactTable(currTable);
	});

	$("#buttonApply").click(function(){
		var groupBy = [];
		var whereCols = [];
		var whereVals = [];

		$(".checkRollDrill").each(function(){
			var column = $(this).val();

			if($(this).attr("checked")){
				groupBy.push(column);
			}
			else if($("#tableSliceDice tr[data-column=" + column + "] input.checkSliceDice").attr("checked")){
				whereCols.push(column);
				whereVals.push($("#tableSliceDice tr[data-column=" + column + "] input.inputSliceDice").val());
			}
		});

		console.log("groupBy");
		console.log(groupBy);
		console.log("whereCols");
		console.log(whereCols);
		console.log("whereVals");
		console.log(whereVals);
	});
});

function setupFactTable(currTable){
	dimCount = currTable.length;
	checkDimCount = 0;

	var string = "";
	for(var i = 0; i < currTable.length; i++){
		string += "<input class=\"checkRollDrill\" type=\"checkbox\" value=\"" + currTable[i].name + "\"> " + currTable[i].name + "<br>\n";
	}
	$("#optionsRD").html(string);

	$("#tableSliceDice").html("");
	for(var i = 0; i < currTable.length; i++){
		string = "<tr data-column=\"" + currTable[i].name + "\">\n" 
					+ "<td><input class=\"checkSliceDice\" type=\"checkbox\"></td>\n"
					+ "<td>" + currTable[i].name + "</td>\n"
					+ "<td class=\"choices\">\n</td>\n</tr>\n";

		$("#tableSliceDice").append(string);
	}
	for(var i = 0; i < currTable.length; i++){
		var selectRow = "tr[data-column=" + currTable[i].name + "]";

		if(currTable[i].range == false){
			$(selectRow + " td.choices").append("<select class=\"inputSliceDice\" disabled>\n<option selected disabled>Choose here</option>\n</select>\n");;			
		}
		else{
			for(var j = 0; j < 2; j++){
				if(j == 1){
					$(selectRow + " td.choices").append(" - ");
				}
				$(selectRow + " td.choices").append("<select class=\"inputSliceDice inputRange\" disabled>\n<option selected disabled>Choose here</option>\n</select>\n");
			}
		}

		for(var j = 0; j < currTable[i].values.length; j++){
			$(selectRow + " select").append("<option value=\"" + currTable[i].values[j] + "\">" + currTable[i].values[j] + "</option>\n");
		}
	}

	addListeners();
}

function addListeners(){
	$(".checkRollDrill").change(function(){
		if($(this).attr("checked")){
			$("#tableSliceDice tr[data-column=" + $(this).val() + "]").css("display", "none");
			checkDimCount++;
			if(dimCount == checkDimCount){
				$("#headerSliceDice").css("display", "none");
			}
		}
		else{
			$("#tableSliceDice tr[data-column=" + $(this).val() + "]").css("display", "table-row");
			checkDimCount--;
			if(dimCount - 1 == checkDimCount){
				$("#headerSliceDice").css("display", "block");
			}
		}
	});

	$(".checkSliceDice").change(function(){
		if($(this).attr("checked")){
			$(this).parent().parent().find(".inputSliceDice").prop( "disabled", false );
		}
		else{
			$(this).parent().parent().find(".inputSliceDice").prop( "disabled", true );
		}
	});

	$(".inputSliceDice:last-of-type").change(function(){
		var chosenIndex = $(this).find("option:selected").index();
		var firstDropDown = $(this).parent().find(".inputSliceDice:first-of-type");

		var firstChosenIndex = firstDropDown.find("option:selected").index();
		if(firstChosenIndex > chosenIndex){
			firstChosenIndex = chosenIndex;
		}

		firstDropDown.html("");
		for(var j = 0; j <= chosenIndex; j++){
			firstDropDown.append("<option value=\"" + $(this).find("option").eq(j).val() + "\">" + $(this).find("option").eq(j).val() + "</option>\n");
		}

		firstDropDown.val($(this).find("option").eq(firstChosenIndex).val())
	});
}