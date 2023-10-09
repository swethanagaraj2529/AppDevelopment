package com.accessdenied.healthinsurance.controller;

	

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.accessdenied.healthinsurance.model.*;
import com.accessdenied.healthinsurance.repository.*;

	

	@RequestMapping("/api/apply")

	@RestController

	public class InsuranceController {

	@Autowired

	InsuranceRepository repo ;

	@PostMapping("/addEmployee")

	public InsuranceUser saveEmployee(@RequestBody InsuranceUser emp)

	{

	return repo.save(emp) ;

	}

	@GetMapping("/get")

	public List<InsuranceUser> getEmployee(InsuranceUser emp)

	{

		return repo.findAll() ;

	}

	@PutMapping("update")

	public InsuranceUser updateEmployee(@RequestBody InsuranceUser emp)

	{

	return repo.saveAndFlush(emp) ;

	}

	@DeleteMapping("/delete")

	public String delete(@RequestParam long id)

	{

		repo.deleteById(id) ;

		return "DELETED SUCCESSFULLY" ;

	}

	

	}