package com.accessdenied.healthinsurance.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.accessdenied.healthinsurance.model.RegisterUser;

@Repository

public interface  RegisterRepository extends JpaRepository<RegisterUser, Long> {


}
