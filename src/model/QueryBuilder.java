package model;

public class QueryBuilder {
	public static String buildQuery(String table,String[] dimensions,String[] aggregates, String[] selection, boolean[] isRange,String[] orderBy) {
		String select = "SELECT ";
		String groupBy = "";
		String from = "FROM (SELECT * FROM " + table + " A INNER JOIN household H ON A.household = H.id) X";
		if( dimensions != null && dimensions.length > 0 ) {
			groupBy = "GROUP BY ";
			for(String s: dimensions) {
				if( s.equals("location_id") ) {
					from += " INNER JOIN location L ON X.location_id = L.id";
					select += "concat(mun,',',zone,',',brgy,',',purok) AS location_id ,";
				} else {
					from += " INNER JOIN " + s + " ON X." + s + " = " + s + ".id";
					select += s + ".desc AS " + s + " ,";
				}
				groupBy += s + ",";
			}
			groupBy = groupBy.substring(0,groupBy.length() - 1);
		}
		
		for( String s : aggregates ) {
			select += s + ",";
		}
		
		select = select.substring(0,select.length() - 1);
		
		String where = "";
		if( selection != null && selection.length > 0 ) {
			where = "WHERE ";
			for(int i = 0; i < selection.length; i++) {
				where += selection[i];
				if( isRange[i]) {
					where += " BETWEEN ? AND ? AND ";
				} else {
					where += " = ? AND ";
				}
			}
			where = where.substring(0,where.length() - 5);
		}
		
		String orderByStr = "";
		if( orderBy != null && orderBy.length > 0 ) {
			orderByStr = "ORDER BY ";
			for(String s : orderBy) {
				orderByStr += s + " DESC,";
			}
			orderByStr = orderByStr.substring(0,orderByStr.length() - 1);
		}
		
		return select + "\n" + from + "\n" + where + "\n" + groupBy + "\n" + orderByStr;
	}
}
