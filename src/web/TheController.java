package web;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.QueryBuilder;
import model.Result;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import dao.DBManager;

@Controller
public class TheController {
	@RequestMapping("/")
	public void home(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("WEB-INF/view/index.jsp").forward(request, response);
	}
	
	@RequestMapping("/Query")
	@ResponseBody
	public void query(	@RequestParam(value="table") String table,
						@RequestParam(value="groupBy") String groupByStr,
						@RequestParam(value="whereCols") String whereColsStr,
						@RequestParam(value="whereRange") String whereRangeStr,
						@RequestParam(value="whereVals") String whereValsStr,
			HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println(table);
		String[] groupBy = groupByStr.length() == 0 ? new String[0] : groupByStr.split(";");
		String[] whereCols = whereColsStr.length() == 0 ? new String[0] : whereColsStr.split(";");
		String[] whereRangeS = whereRangeStr.length() == 0 ? new String[0] : whereRangeStr.split(";");
		String[] whereVals = whereValsStr.length() == 0 ? new String[0] : whereValsStr.split(";");
		boolean[] whereRange = new boolean[whereRangeS.length];
//		for( String s : groupBy ) {
//			System.out.println(s);
//		}
		for( int i = 0, j = 0; i < whereCols.length; i++, j++ ) {
			whereRange[i] = whereRangeS[i].equals("true");
//			System.out.print(whereCols[i] + " " + whereRange[i] + " " + whereVals[j]);
//			if( whereRange[i] ) {
//				j++;
//				System.out.println(" " + whereVals[j]);
//			} else {
//				System.out.println();
//			}
		}
		
		String[] aggregates = new String[0];
		String[] cols = new String[0];
		switch(table) {
			case "crop":
				aggregates = new String[] {
						"SUM(crop_vol) AS totalCrop",
						"AVG(crop_vol) AS avgCrop"
				};
				cols = new String[] {
						"totalCrop",
						"avgCrop"
				};
				break;
			case "landParcel":
				aggregates = new String[] {
						"SUM(alp_area) AS totalArea",
						"AVG(alp_area) AS avgArea"
				};
				cols = new String[] {
						"totalArea",
						"avgArea"
				};
				break;
			case "ARCDP":
				aggregates = new String[] {
						"AVG(age) AS avgAge",
						"AVG(gradel_calc) AS avgGrade",
						"AVG(work_ddhrs) AS avgWorkHrs"
				};
				cols = new String[] {
						"avgAge",
						"avgGrade",
						"avgWorkHrs"
				};
				break;
			default:
		}
		
		String query = QueryBuilder.buildQuery(table, groupBy, aggregates, whereCols, whereRange,cols);
		Connection c = DBManager.getInstance().getConnection();
		PreparedStatement ps;
		try {
			ps = c.prepareStatement(query);
			for(int i = 1; i <= whereVals.length; i++ ) {
				ps.setString(i,whereVals[i - 1]);
			}
			System.out.println(ps);
			ArrayList<Result> results = new ArrayList<Result>();
			ResultSet rs = ps.executeQuery();
			while( rs.next() ) {
				Result r = new Result();
				for( String s : groupBy ) {
					r.setResult(s, rs.getString(s));
				}
				
				for( String s : cols ) {
					r.setResult(s,rs.getString(s));
				}
				results.add(r);
			}
			response.getWriter().write(new Gson().toJson(results));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.getWriter().write(e.getMessage());
		} finally {
			try {
				c.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
