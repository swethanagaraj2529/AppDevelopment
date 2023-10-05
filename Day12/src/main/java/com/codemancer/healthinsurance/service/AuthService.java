package com.codemancer.healthinsurance.service;

import com.codemancer.healthinsurance.dto.request.AuthenticationRequest;
import com.codemancer.healthinsurance.dto.request.RegisterRequest;
import com.codemancer.healthinsurance.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
