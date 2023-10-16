package com.accessdenied.healthinsurance.service;

import com.accessdenied.healthinsurance.dto.request.AuthenticationRequest;
import com.accessdenied.healthinsurance.dto.request.RegisterRequest;
import com.accessdenied.healthinsurance.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
