package model;

public class QueryBuilder {
	public static void main(String[] args) {
		String query = QueryBuilder.buildQuery("crop C INNER JOIN household H ON C.household = H.id", new String[] {
				"house_type",
				"tenur",
				"croptype"
		}, new String[]{
				"SUM(crop_vol) as sumcrop",
				"AVG(crop_vol) as avgcrop"
		}, new String[] {
				"wall",
				"roof"
		}, new boolean[] {
				true,false
		});
		System.out.println(query);
	}
	
	public static String buildQuery(String table,String[] dimensions,String[] aggregates, String[] selection, boolean[] isRange) {
		String select = "SELECT ";
		String groupBy = "GROUP BY ";
		for(String s: dimensions) {
			select += s + ",";
			groupBy += s + ",";
		}
		
		for( String s : aggregates ) {
			select += s + ",";
		}
		
		select = select.substring(0,select.length() - 1);
		groupBy = groupBy.substring(0,groupBy.length() - 1);
		
		String from = "FROM " + table;
		String where = null;
		if( selection == null ) {
			where = "";
		} else {
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
		
		return select + "\n" + from + "\n" + where + "\n" + groupBy;
	}
}
