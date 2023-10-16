package com.accessdenied.healthinsurance.service;

import com.accessdenied.healthinsurance.model.RegisterUser;
import com.accessdenied.healthinsurance.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterUserService {

    private final RegisterRepository registerRepository;

    @Autowired
    public RegisterUserService(RegisterRepository registerRepository) {
        this.registerRepository = registerRepository;
    }

    public RegisterUser saveUser(RegisterUser user) {
        // Add validation or business logic if needed before saving the user.
        return registerRepository.save(user);
    }

    public List<RegisterUser> getAllUsers() {
        return registerRepository.findAll();
    }

    public Optional<RegisterUser> getUserById(Long id) {
        return registerRepository.findById(id);
    }

    public RegisterUser updateUser(RegisterUser user) {
        // Add validation or business logic if needed before updating the user.
        return registerRepository.saveAndFlush(user);
    }

    public void deleteUser(Long id) {
        registerRepository.deleteById(id);
    }
}
