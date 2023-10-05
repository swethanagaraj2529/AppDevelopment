package com.codemancer.healthinsurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codemancer.healthinsurance.model.LoginSignUp;

@Repository
public interface LoginSignupRepo extends JpaRepository <LoginSignUp,Integer> {
	LoginSignUp findByUsername(String username);

	void deleteByEmailid(String email);

	LoginSignUp findByEmailid(String emailid);
}
