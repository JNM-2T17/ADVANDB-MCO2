$(document).ready(function(){

	var dimCount;
	var checkDimCount = 0;

	var dimensions = {
		crops : 		[
							{
								name   : "tenur",
								display : "Owner Tenure",
								range  : false,
								values : [
									"Owner, owner-like possession of house and lot",
									"Rent house/room including lot",
									"Own house, rent lot",
									"Own house, rent-free lot with consent of owner",
									"Own house, rent-free lot without consent of owner",
									"Rent-free house and lot with consent of owner",
									"Rent-free house and lot without consent of owner",
									"Living in a public space with rent",
									"Living in a public space without rent",
									"Other tenure status"
								]
						  	},
						  	{
								name   : "wall",
								display : "Wall Type",
								range  : false,
								values : ["Strong materials (tile,concrete, brick, stone, wood, plywood)",
								          "Light materials (bamboo, sawali, cogon, nipa, anahaw)",
								          "Salvaged/makeshift materials",
								          "Mixed but predominantly strong materials",
								          "Mixed but predominantly light materials",
								          "Mixed but predominantly salvaged materials",
								          "Not applicable"]
						  	},
						  	{
						  		name   : "roof",
								display : "Roof Type",
								range  : false,
								values : ["Strong materials (tile,concrete, brick, stone, wood, plywood)",
								          "Light materials (bamboo, sawali, cogon, nipa, anahaw)",
								          "Salvaged/makeshift materials",
								          "Mixed but predominantly strong materials",
								          "Mixed but predominantly light materials",
								          "Mixed but predominantly salvaged materials",
								          "Not applicable"]
						  	},
						  	{
						  		name   : "house_type",
								display : "House Type",
								range  : false,
								values : ["Single house",
								          "Duplex",
								          "Multi-unit residential (three units or more)",
								          "Commercial/industrial/agricultural building/house",
								          "Others (boat, cave, etc.)"]
						  	},
						  	{
						  		name   : "location",
								display : "Location",
								range  : false,
								values : []
						  	},
						  	{
						  		name   : "water",
								display : "Water Source",
								range  : false,
								values : ["Own faucet, community water system",
								          "Shared faucet, community water system",
								          "Own use tubed/piped deep well",
								          "Shared tubed/piped deep well",
								          "tubed/piped shallow well",
								          "Dug well",
								          "Protected Spring",
								          "Unprotected Spring",
								          "Lake, river, rain and others",
								          "Peddler",
								          "Bottled water",
								          "Others"]
						  	},
						  	{
						  		name   : "croptype",
								display : "Crop Type",
								range  : false,
								values : ["Sugar cane",
								          "Palay",
								          "Corn",
								          "Coffee",
								          "Other Crops"]
						  	}
			   			],
		landParcel : 	[
							{
								name   : "tenur",
								display : "Owner Tenure",
								range  : false,
								values : [
									"Owner, owner-like possession of house and lot",
									"Rent house/room including lot",
									"Own house, rent lot",
									"Own house, rent-free lot with consent of owner",
									"Own house, rent-free lot without consent of owner",
									"Rent-free house and lot with consent of owner",
									"Rent-free house and lot without consent of owner",
									"Living in a public space with rent",
									"Living in a public space without rent",
									"Other tenure status"
								]
						  	},
						  	{
								name   : "wall",
								display : "Wall Type",
								range  : false,
								values : ["Strong materials (tile,concrete, brick, stone, wood, plywood)",
								          "Light materials (bamboo, sawali, cogon, nipa, anahaw)",
								          "Salvaged/makeshift materials",
								          "Mixed but predominantly strong materials",
								          "Mixed but predominantly light materials",
								          "Mixed but predominantly salvaged materials",
								          "Not applicable"]
						  	},
						  	{
						  		name   : "roof",
								display : "Roof Type",
								range  : false,
								values : ["Strong materials (tile,concrete, brick, stone, wood, plywood)",
								          "Light materials (bamboo, sawali, cogon, nipa, anahaw)",
								          "Salvaged/makeshift materials",
								          "Mixed but predominantly strong materials",
								          "Mixed but predominantly light materials",
								          "Mixed but predominantly salvaged materials",
								          "Not applicable"]
						  	},
						  	{
						  		name   : "house_type",
								display : "House Type",
								range  : false,
								values : ["Single house",
								          "Duplex",
								          "Multi-unit residential (three units or more)",
								          "Commercial/industrial/agricultural building/house",
								          "Others (boat, cave, etc.)"]
						  	},
						  	{
						  		name   : "location",
								display : "Location",
								range  : false,
								values : []
						  	},
						  	{
						  		name   : "water",
								display : "Water Source",
								range  : false,
								values : ["Own faucet, community water system",
								          "Shared faucet, community water system",
								          "Own use tubed/piped deep well",
								          "Shared tubed/piped deep well",
								          "tubed/piped shallow well",
								          "Dug well",
								          "Protected Spring",
								          "Unprotected Spring",
								          "Lake, river, rain and others",
								          "Peddler",
								          "Bottled water",
								          "Others"]
						  	}
					   	],
		arcdp : 		[
							{
								name   : "tenur",
								display : "Owner Tenure",
								range  : false,
								values : [
									"Owner, owner-like possession of house and lot",
									"Rent house/room including lot",
									"Own house, rent lot",
									"Own house, rent-free lot with consent of owner",
									"Own house, rent-free lot without consent of owner",
									"Rent-free house and lot with consent of owner",
									"Rent-free house and lot without consent of owner",
									"Living in a public space with rent",
									"Living in a public space without rent",
									"Other tenure status"
								]
						  	},
						  	{
								name   : "wall",
								display : "Wall Type",
								range  : false,
								values : ["Strong materials (tile,concrete, brick, stone, wood, plywood)",
								          "Light materials (bamboo, sawali, cogon, nipa, anahaw)",
								          "Salvaged/makeshift materials",
								          "Mixed but predominantly strong materials",
								          "Mixed but predominantly light materials",
								          "Mixed but predominantly salvaged materials",
								          "Not applicable"]
						  	},
						  	{
						  		name   : "roof",
								display : "Roof Type",
								range  : false,
								values : ["Strong materials (tile,concrete, brick, stone, wood, plywood)",
								          "Light materials (bamboo, sawali, cogon, nipa, anahaw)",
								          "Salvaged/makeshift materials",
								          "Mixed but predominantly strong materials",
								          "Mixed but predominantly light materials",
								          "Mixed but predominantly salvaged materials",
								          "Not applicable"]
						  	},
						  	{
						  		name   : "house_type",
								display : "House Type",
								range  : false,
								values : ["Single house",
								          "Duplex",
								          "Multi-unit residential (three units or more)",
								          "Commercial/industrial/agricultural building/house",
								          "Others (boat, cave, etc.)"]
						  	},
						  	{
						  		name   : "location",
								display : "Location",
								range  : false,
								values : []
						  	},
						  	{
						  		name   : "water",
								display : "Water Source",
								range  : false,
								values : ["Own faucet, community water system",
								          "Shared faucet, community water system",
								          "Own use tubed/piped deep well",
								          "Shared tubed/piped deep well",
								          "tubed/piped shallow well",
								          "Dug well",
								          "Protected Spring",
								          "Unprotected Spring",
								          "Lake, river, rain and others",
								          "Peddler",
								          "Bottled water",
								          "Others"]
						  	},
						  	{
						  		name : "sch_type",
								display : "School Type",
						  		range : false,
						  		values : ["Public","Private"]
						  	},
						  	{
						  		name : "workcl",
								display : "Work Class",
						  		range : false,
						  		values : ["Working for private household",
						  		        "Working for private business/establishment/farm",
						  		      "Working for government/corporation",
						  		      "Self-employed without any employee",
						  		      "Employer in own family-operated or business",
						  		      "Working with pay on family-operated or business",
						  		      "Working without pay on family-operated or business"]
						  	},
						  	{
						  		name : "jobind",
								display : "Job Index",
						  		range : false,
						  		values : ["Employed","Unemployed"]
						  	},
						  	{
						  		name : "jstatus",
								display : "Job Status",
						  		range : false,
						  		values : ["Permanent",
						  		        "Short-term, seasonal or casual",
						  		      "Worked on different jobs on day to day or week to week"]
						  	},
						  	{
						  		name : "gradel",
								display : "Current Grade Level",
						  		range : true,
						  		values : ["Day Care",
						  		        "Nursery/Kindergarten/Preparatory",
						  		      "Grade 1",
						  		      "Grade 2",
						  		      "Grade 3",
						  		      "Grade 4",
						  		      "Grade 5",
						  		      "Grade 6",
						  		      "Grade 7",
						  		      "Grade 8",
						  		      "Grade 9/3rd Year HS",
						  		      "Grade 10/4th Year HS",
						  		      "Grade 11",
						  		      "Grade 12",
						  		      "1st year PS PS/N-T/TV",
						  		      "2nd year PS PS/N-T/TV",
						  		      "3rd year PS PS/N-T/TV",
						  		      "1st year College",
						  		      "2nd year College",
						  		      "3rd year College",
						  		      "4th year College or higher",
						  		      "Post grad with units",
						  		      "ALS Elementary",
						  		      "ALS Secondary",
						  		      "SPED Elementary",
						  		      "SPED Secondary"]
						  	},
						  	{
						  		name : "educal",
								display : "Highest Educational Attainment",
						  		range : true,
						  		values : ["No Grade",
						  		          "Day Care",
						  		        "Nursery/Kindergarten/Preparatory",
						  		      "Grade 1",
						  		      "Grade 2",
						  		      "Grade 3",
						  		      "Grade 4",
						  		      "Grade 5",
						  		      "Grade 6",
						  		      "Grade 7",
						  		      "Grade 8",
						  		      "Grade 9/3rd Year HS",
						  		      "Grade 10/4th Year HS",
						  		      "Grade 11",
						  		      "Grade 12",
						  		      "1st year PS PS/N-T/TV",
						  		      "2nd year PS PS/N-T/TV",
						  		      "3rd year PS PS/N-T/TV",
						  		      "1st year College",
						  		      "2nd year College",
						  		      "3rd year College",
						  		      "4th year College or higher",
						  		      "Post grad with units",
						  		      "ALS Elementary",
						  		      "ALS Secondary",
						  		      "SPED Elementary",
						  		      "SPED Secondary",
						  		      "Grade school graduate",
						  		      "High school graduate",
						  		      "Post secondary graduate",
						  		      "College graduate",
						  		      "Master's/PhD graduate"]
						  	}
					   ]
	};
	
	for( x in dimensions ) {
		for( y in dimensions[x] ) {
			if( dimensions[x][y].name === "location") {
				for( i = 1; i <= 3078; i++ ) {
					dimensions[x][y].values.push(i);
				}
			}
		}
	}
	
	var active;
	var fact = "crop";

	setupFactTable(dimensions.crops);

	$("#navFactTable button").click(function(){
		$("#navFactTable button").removeClass("active");
		$(this).addClass("active");
		switch($(this).attr("data-factTable")){
			case "crops":
				fact = "crop";
				active = dimensions.crops;
				break;
			case "landParcel":
				fact = "landParcel";
				active = dimensions.landParcel;
				break;
			case "ARCDP":
				fact = "ARCDP";
				active = dimensions.arcdp;
		}
		setupFactTable(active);
	});

	$("#buttonApply").click(function(){
		var groupBy = [];
		var whereCols = [];
		var whereRange = [];
		var whereVals = [];
		var error = false;

		$("#errorMessage").remove();

		$(".checkRollDrill").each(function(){
			if(error == false){
				var column = $(this).val();

				if($(this).attr("checked")){
					groupBy.push(column);
				}
				else if($("#tableSliceDice tr[data-column=" + column + "] input.checkSliceDice").attr("checked")){
					whereCols.push(column);
					whereVals.push($("#tableSliceDice tr[data-column=" + column + "] .inputSliceDice:first-of-type").val());
					if(whereVals[whereVals.length - 1] == null){
						errorMessage("Please do not leave any input blank");
						error = true;
					}
					if($("#tableSliceDice tr[data-column=" + column + "] .inputSliceDice:first-of-type").hasClass("inputRange") == true){
						whereVals.push($("#tableSliceDice tr[data-column=" + column + "] .inputSliceDice:last-of-type").val());
						if(whereVals[whereVals.length - 1] == null){
							errorMessage("Please do not leave any input blank");
							error = true;
						}
						whereRange.push(true);
					}
					else{
						whereRange.push(false);
					}
				}
			}
		});

		if(error == false){
			console.log("groupBy");
			console.log(groupBy);
			console.log("whereCols");
			console.log(whereCols);
			console.log("whereRange");
			console.log(whereRange);
			console.log("whereVals");
			console.log(whereVals);
			$.ajax({
				url : "Query",
				method : "POST",
				dataType : "json",
				data : {
					table : fact,
					groupBy : groupBy.join(";"),
					whereCols : whereCols.join(";"),
					whereRange : whereRange.join(";"),
					whereVals : whereVals.join(";")
				},
				success : function(a) {
					console.log(a);
				}
			});
		}
	});
});

function setupFactTable(currTable){
	dimCount = currTable.length;
	checkDimCount = 0;

	var string = "";
	for(var i = 0; i < currTable.length; i++){
		string += "<input class=\"checkRollDrill\" type=\"checkbox\" value=\"" + currTable[i].name + "\"> " + currTable[i].display + "<br>\n";
	}
	$("#optionsRD").html(string);

	$("#tableSliceDice").html("");
	for(var i = 0; i < currTable.length; i++){
		string = "<tr data-column=\"" + currTable[i].name + "\">\n" 
					+ "<td><input class=\"checkSliceDice\" type=\"checkbox\"></td>\n"
					+ "<td>" + currTable[i].display + "</td>\n"
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
			var value;
			if(currTable[i].name == "educal" ) {
				if( j < 3 ) {
					value = j;
				} else if( j < 18 ){
					value = j + 8;
				} else if( j < 22 ){
					value = j + 13;
				} else if( j < 23 ) {
					value = j + 19;
				} else if( j < 27 ) {
					value = j + 28;
				} else switch ( j ) {
					case 27:
						value = 100;
						break;
					case 28:
						value = 200;
						break;
					case 29:
						value = 210;
						break;
					case 30:
						value = 300;
						break;
					default:
						value = 400;
				}
			} else if(currTable[i].name == "gradel" ) {
				if( j < 2 ) {
					value = j + 1;
				} else if( j < 17 ){
					value = j + 9;
				} else if( j < 21 ){
					value = j + 14	;
				} else if( j < 22 ) {
					value = j + 20;
				} else {
					value = j + 29;
				}
			} else {
				value = j + 1;
			}
			$(selectRow + " select").append("<option value=\"" + value + "\">" + currTable[i].values[j] + "</option>\n");
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
	
	$(".inputRange:last-of-type").change(function(){
		var chosenIndex = $(this).find("option:selected").index();
		var firstDropDown = $(this).parent().find(".inputRange:first-of-type");

		var firstChosenIndex = firstDropDown.find("option:selected").index();
		if(firstChosenIndex > chosenIndex){
			firstChosenIndex = chosenIndex;
		}

		firstDropDown.html("");
		for(var j = 0; j <= chosenIndex; j++){
			firstDropDown.append("<option value=\"" + $(this).find("option").eq(j).val() + "\">" + $(this).find("option").eq(j).text() + "</option>\n");
		}

		firstDropDown.val($(this).find("option").eq(firstChosenIndex).val())
	});
}

function errorMessage(message){
	$("#errorMessage").remove();
	$(".section-options").append("<div id=\"errorMessage\">" + message + "</div>");
}