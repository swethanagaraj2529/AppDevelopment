//package com.codemancer.healthinsurance.service;
//
//import java.util.List;
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.codemancer.healthinsurance.repository.LoginSignupRepo;
//
//@RestController
//@CrossOrigin
//public class LoginSignupService {
//	
//	@Autowired
//	public LoginSignupService object1;
//	@PostMapping("/login")
//    public String login(@RequestBody Map<String,String> loginData)
//    {
//  	 String emailid = loginData.get("emailid");
//  	 String password = loginData.get("password");
//  	 String result = object1.checkLogin(emailid,password);
//  	 return result;
//    }
//	//SignIn
//	@PostMapping("/postlogin")
//	public LoginSignupRepo postSignIn(@RequestBody LoginSignupRepo p)
//	{
//		return object1.EnterDetails(p);
//	}
//	//SignUp
//	@GetMapping("/getsignup")
//	public List<LoginSignupRepo> findAll()
//	{
//		return object1.getUserSignUp();
//	}
//	@PostMapping("/postsignup")
//	public String addUser(@RequestBody LoginSignupRepo p)
//	{
//		return object1.addUser(p);
//	}
//	@PutMapping(value="/updatesignup")
//	public LoginSignupRepo updateUser(@RequestBody LoginSignupRepo s)
//	{
//		return object1.updateUser(s);
//	}
//	@DeleteMapping("/deletesignup/{email}")
//	public void deleteUser(@PathVariable("email") String email)
//	{
//		object1.deleteUser(email);
//	}
//
//
//}
