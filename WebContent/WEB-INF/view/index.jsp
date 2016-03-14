<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

	<head>
		<title>ADVANDB MCO2</title>
		<link rel="stylesheet" href="<c:url value="/resources/assets/css/style.css" />" />
		<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
		<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
		<script src="<c:url value="/resources/assets/js/script.js" />" type="text/javascript"></script>
	</head>

	<body>
		<div id="header">
			<h1>ADVANDB MCO2</h1>

			<div id="navFactTable">
				<button data-factTable="crops" class="active">Crops</button>
				<button data-factTable="landParcel">Land Parcel</button>
				<button data-factTable="ARCDP">ARCDP</button>
			</div>
		</div>

		<div id="content">

			<div class="section section-options">
				<h2>Rollup and Drilldown</h2>
				<div id="optionsRD"></div>

				<h2 id="headerSliceDice">Slice and Dice</h2>
				<table id="tableSliceDice"></table>

				<button id="buttonApply">Apply</button>

			</div>

			<div class="section section-results">
				<h2>Results</h2>
				<table id="tableResults">
					<tr>
						<th>Column 1</th>
						<th>Column 2</th>
						<th>Column 3</th>
						<th>Column 4</th>
					</tr>
					<tr>
						<td>Row 1 Col 1</td>
						<td>Row 1 Col 2</td>
						<td>Row 1 Col 3</td>
						<td>Row 1 Col 4</td>
					</tr>
					<tr>
						<td>Row 2 Col 1</td>
						<td>Row 2 Col 2</td>
						<td>Row 2 Col 3</td>
						<td>Row 2 Col 4</td>
					</tr>
					<tr>
						<td>Row 3 Col 1</td>
						<td>Row 3 Col 2</td>
						<td>Row 3 Col 3</td>
						<td>Row 3 Col 4</td>
					</tr>
					<tr>
						<td>Row 4 Col 1</td>
						<td>Row 4 Col 2</td>
						<td>Row 4 Col 3</td>
						<td>Row 4 Col 4</td>
					</tr>
				</table>
			</div>

		</div>

	</body>
</html>