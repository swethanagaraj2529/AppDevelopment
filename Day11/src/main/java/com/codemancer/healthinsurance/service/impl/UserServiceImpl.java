package com.codemancer.healthinsurance.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.codemancer.healthinsurance.dto.request.UserRequest;
import com.codemancer.healthinsurance.dto.response.UserResponse;
import com.codemancer.healthinsurance.model.User;
import com.codemancer.healthinsurance.model.enumerate.Role;
import com.codemancer.healthinsurance.repository.UserRepository;
import com.codemancer.healthinsurance.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private  UserRepository User;
    //private final OrderRepository orderRepository;

    @Override
    public List<UserResponse> getAllUsers() {
        List<User> userList = User.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUser(Long uid) {
        User user = User.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    @Override
    public UserResponse updateUser(UserRequest request, Long uid) {
        User user = User.findByUid(uid);
        User newUser = new User();
        if (user != null) {
            newUser = UserResponse.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(request.getPassword())
                    .role(request.getRole())
                    .isEnabled(request.getIsEnabled())
                    .build();
            User.save(newUser);
        }
        return mapUserToUserResponse(newUser);
    }

    @Override
    public boolean deleteProduct(Long uid) {
        User user = User.findByUid(uid);

        if (user != null) {
            //orderRepository.deleteByUserUid(uid);
            User.deleteByUid(uid);
            return true;
        } else {
            return false;
        }
    }

    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .build();
    }

}
