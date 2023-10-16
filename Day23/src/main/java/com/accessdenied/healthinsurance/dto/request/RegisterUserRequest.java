package com.accessdenied.healthinsurance.dto.request;

import lombok.Data;

@Data
public class RegisterUserRequest {
	  private String name;
	    private String fathername;
	    private int age;
	    private String gender;
	    private String email;
	    private String phone;
	    private String address;
	    private String document;
	    private String insurancetype;
	    private String insuranceplan;

}
