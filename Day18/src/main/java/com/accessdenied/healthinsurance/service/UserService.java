package com.accessdenied.healthinsurance.service;

import java.util.List;

import com.accessdenied.healthinsurance.dto.request.UserRequest;
import com.accessdenied.healthinsurance.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
