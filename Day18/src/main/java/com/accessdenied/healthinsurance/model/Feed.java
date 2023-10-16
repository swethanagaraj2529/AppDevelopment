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

@Table(name = "feed")

public class Feed {

	@Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(length = 50, nullable = false)

    private String name;
    


    @Column(length = 50, nullable = false)

    private String email;

    

    @Column(length = 50, nullable = false)

    private String rating;


    @Column(length = 50, nullable = false)

    private String content;

  

 





	public Long getUid() {

		return id;

	}


	public void setUid(Long id) {

		this.id = id;

	}

	public String getname() {

		return name;

	}


	public String getEmail() {

		return email;

	}
	public void setEmail(String email) {

		this.email = email;

	}
	public String getrating() {

		return rating;

	}
	public void setrating(String rating) {

		this.rating = rating;

	}








	public String getcontent() {

		return content;

	}



	public void setcontent(String content) {

		this.content = content;

	}



	public Feed(Long id, String name, String email,

			String rating, String content) {

		super();

		this.id = id;

		this.name = name;


		this.email = email;

		this.rating = rating;

		this.content = content;

	
		

	}

	public Feed() {

		

	}

    

    

}