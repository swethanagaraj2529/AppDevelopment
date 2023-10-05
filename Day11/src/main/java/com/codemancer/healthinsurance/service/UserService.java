package com.codemancer.healthinsurance.service;

import java.util.List;

import com.codemancer.healthinsurance.dto.request.UserRequest;
import com.codemancer.healthinsurance.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
