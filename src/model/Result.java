package model;

import java.util.HashMap;

public class Result {
	private HashMap<String,String> results;
	
	public Result() {
		results = new HashMap<String,String>();
	}
	
	public void setResult(String key, String value) {
		results.put(key, value);
	}
}
