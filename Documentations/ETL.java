import java.sql.*;
import java.io.*;
import com.mysql.jdbc.exceptions.jdbc4.*;

public class ETL {
	public static void main(String[] args) throws Exception {
		String table = args[0];
		Connection c = DriverManager
						.getConnection("jdbc:mysql://127.0.0.1:3306/db_hpq"
										,"root","");
		BufferedReader br = new BufferedReader(
								new FileReader(
									new File(table + ".csv")));
		String insert = "INSERT INTO " + table + "(";
		String cols = br.readLine();
		String colList[] = cols.split(",");
		for(int i = 0; i < colList.length; i++) {
			if( i > 0 ) {
				insert += ",";
			}
			insert += colList[i].replace("\"","");
		}
		insert += ") VALUES";
		int colsCount = colList.length;
		String values = "";

		int i = 0;
		int k = 0;
		int START = 0;
		int BATCH = 50;
		while(true) {
			if( i < START) {
				cols = br.readLine();
				if( cols.length() == 0 ) {
					break;
				}
				i++;
				continue;
			}
			for( k = 0; k < BATCH; k++ ) {
				// System.out.print(i + " " + k + " ");
				cols = br.readLine();
				if( cols == null || cols.length() == 0 ) {
					break;
				}

				colList = cols.split(",");
				if( k > 0 ) {
					values += ",";
				}
				values += "(";
				int cols = 0;
			
				for(int j = 0; cols < colsCount; j++){
					if(j > 0) {
						values += ",";
					} 

					if( j < colList.length ) {
						if( colList[j].length() > 0 
								&& colList[j].charAt(0) == '"') {
							String underflow = colList[j].substring(1);
							j++;
							while(!underflow.endsWith("\"") && j < colList.length) {
								underflow += ", " + colList[j];
								j++;
							}
							j--;
							colList[j] = underflow.substring(0,underflow.length() - 1);
							// System.out.println(underflow);
						}
						colList[j] = "'" + colList[j].replaceAll("'","") + "'";
						values += colList[j].equals("''") ? "NULL" 
									: colList[j];
						cols++;
					} else {
						values += "NULL";
						cols++;
					}

					// if( cols == 83 - 1) {
						// System.out.println((j + 1) + " cols");
					// }
				}
				values += ")";
				i++;
			}

			try {
				PreparedStatement ps = c.prepareStatement(insert + values);
				ps.execute();
				System.out.println(i + " records in");
			} catch(SQLException e) {
				e.printStackTrace();
				System.out.println("Error at " + i + " records in");
				// System.out.println(insert + values);
				if( !(e instanceof com.mysql.jdbc.MysqlDataTruncation)) {
					// break;
				}
			} catch(Exception e) {
				e.printStackTrace();
			} finally {
				values = "";
			}

			if( k < BATCH ) {
				break;
			}
		}

		br.close();

		c.close();
	}
}
