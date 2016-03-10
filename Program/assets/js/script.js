$(document).ready(function(){

	var dimCount = 5;
	var checkDimCount = 0;

	$("#navFactTable button").click(function(){
		$("#navFactTable button").removeClass("active");
		$(this).addClass("active");
	});

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
			$(this).parent().parent().find("input.inputSliceDice").prop( "disabled", false );
		}
		else{
			$(this).parent().parent().find("input.inputSliceDice").prop( "disabled", true );
		}
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