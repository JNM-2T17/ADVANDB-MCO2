package web;

import java.io.IOException;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
		String[] groupBy = groupByStr.split(";");
		String[] whereCols = whereColsStr.split(";");
		String[] whereRangeS = whereRangeStr.split(";");
		String[] whereVals = whereValsStr.split(";");
		boolean[] whereRange = new boolean[whereRangeS.length];
		for( String s : groupBy ) {
			System.out.println(s);
		}
		for( int i = 0, j = 0; i < whereCols.length; i++, j++ ) {
			whereRange[i] = whereRangeS[i].equals("true");
			System.out.print(whereCols[i] + " " + whereRange[i] + " " + whereVals[j]);
			if( whereRange[i] ) {
				j++;
				System.out.println(" " + whereVals[j]);
			} else {
				System.out.println();
			}
		}
		
		response.getWriter().write("OK");
	}
}
