<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

	<head>
		<title>ADVANDB MCO2</title>
		<link rel="stylesheet" href="<c:url value="/resources/assets/css/style.css" />" />
		<link rel="stylesheet" href="<c:url value="/resources/assets/css/font-awesome.min.css" />" />
		<link rel="shortcut icon" href="<c:url value="/resources/assets/images/logo.png"/>"/>
		<script src="<c:url value="resources/assets/js/jquery.min.js" />"></script>
		<script src="<c:url value="resources/assets/js/jquery-migrate-1.2.1.min.js" />"></script>
		<script src="<c:url value="/resources/assets/js/script.js" />" type="text/javascript"></script>
		<script src="<c:url value="/resources/assets/js/jquery.tablesorter.min.js" />"></script>
		<script src="<c:url value="/resources/assets/js/jquery.tablesorter.widgets.min.js" />"></script>
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
				</table>
			</div>

		</div>

	</body>
</html>