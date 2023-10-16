package com.accessdenied.healthinsurance.model;
import jakarta.persistence.Column;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

import jakarta.persistence.Table;

import lombok.AllArgsConstructor;

import lombok.Builder;

import lombok.Data;

import lombok.NoArgsConstructor;

@Entity

@Table(name = "_applicationuser")

public class InsuranceUser {

	@Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(length = 50, nullable = false)

    private String firstname;
    
    @Column(length = 50, nullable = false)

    private String surname;
    
    @Column(length = 50 , nullable = false)
    private String fathername;

    @Column(length = 50, nullable = false)
    
    private int age;

    

    @Column(length = 50, nullable = false)

    private String gender;



    @Column(length = 50, nullable = false)

    private String email;

    

    @Column(length = 50, nullable = false)

    private String phone;

    

    @Column(length = 50, nullable = false)

    private String address;

    

    @Column(length = 50, nullable = false)

    private String document;

    @Column(length = 50, nullable = false)

    private String insurancetype;

    

    @Column(length = 50, nullable = false)

    private String insuranceplan;






	public Long getUid() {

		return id;

	}


	public void setUid(Long id) {

		this.id = id;

	}

	public String getfirstname() {

		return firstname;

	}
	public String getsurname() {

		return surname;

	}
	public String getfathername() {

		return fathername;

	}
	public int getAge() {

		return age;

	}

	public void setAge(int age) {

		this.age = age;

	}
	public String getGender() {

		return gender;

	}
	public void setGender(String gender) {

		this.gender = gender;

	}
	public String getEmail() {

		return email;

	}
	public void setEmail(String email) {

		this.email = email;

	}
	public String getPhone() {

		return phone;

	}
	public void setPhone(String phone) {

		this.phone = phone;

	}



	public String getAddress() {

		return address;

	}



	public void setAddress(String address) {

		this.address = address;

	}



	public String getdocument() {

		return document;

	}



	public void setdocument(String document) {

		this.document = document;

	}



	public String getInsurancetype() {

		return insurancetype;

	}



	public void setInsurancetype(String insurancetype) {

		this.insurancetype = insurancetype;

	}



	public String getInsuranceplan() {

		return insuranceplan;

	}



	public void setInsuranceplan(String insuranceplan) {

		this.insuranceplan = insuranceplan;

	}







	public InsuranceUser(Long id, String firstname,String surname,String fathername, int age, String gender, String email,

			String phone, String address, String document, String insurancetype,

			String insuranceplan) {

		super();

		this.id = id;

		this.firstname = firstname;
		this.surname = surname;
		this.fathername = fathername;	

		this.age = age;

		this.gender = gender;

		this.email = email;

		this.phone = phone;

		this.address = address;

		this.document = document;

		this.insurancetype = insurancetype;

		this.insuranceplan = insuranceplan;

		

	}

	public InsuranceUser() {

		

	}

    

    

}