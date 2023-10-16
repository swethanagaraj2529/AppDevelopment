package com.accessdenied.healthinsurance.controller;

	

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.accessdenied.healthinsurance.model.*;
import com.accessdenied.healthinsurance.repository.*;

	

	@RequestMapping("/api/list")

	@RestController

	public class RegisterUserController {

	@Autowired

	RegisterRepository reposi ;

	@PostMapping("/addlist")

	public RegisterUser saveEmployee(@RequestBody RegisterUser lis)

	{

	return reposi.save(lis);

	}

	@GetMapping("/get")

	public List<RegisterUser> getEmployee(RegisterUser lis)

	{

		return reposi.findAll() ;

	}

	@PutMapping("update")

	public RegisterUser updateEmployee(@RequestBody RegisterUser lis)

	{

	return reposi.saveAndFlush(lis) ;

	}

	@DeleteMapping("/delete")

	public String delete(@PathVariable long id)

	{

		reposi.deleteById(id) ;

		return "DELETED SUCCESSFULLY" ;

	}

	

	}