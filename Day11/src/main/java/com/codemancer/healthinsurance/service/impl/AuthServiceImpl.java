package com.codemancer.healthinsurance.service.impl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.codemancer.healthinsurance.dto.request.AuthenticationRequest;
import com.codemancer.healthinsurance.dto.request.RegisterRequest;
import com.codemancer.healthinsurance.dto.response.AuthenticationResponse;
import com.codemancer.healthinsurance.model.User;
import com.codemancer.healthinsurance.model.enumerate.Role;
import com.codemancer.healthinsurance.repository.UserRepository;
import com.codemancer.healthinsurance.service.AuthService;
import com.codemancer.healthinsurance.util.JwtUtil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private UserRepository User;
    private  PasswordEncoder passwordEncoder;
    private  AuthenticationManager authenticationManager;
    private  JwtUtil jwtUtil;

    @Override
    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = User.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            User.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = User.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .uid(user.getUid())
                .build();
    }
}
