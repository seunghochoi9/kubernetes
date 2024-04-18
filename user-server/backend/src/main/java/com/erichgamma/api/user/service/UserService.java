package com.erichgamma.api.user.service;

import com.erichgamma.api.common.component.MessengerVo;
import com.erichgamma.api.common.service.CommandService;
import com.erichgamma.api.common.service.QueryService;
import com.erichgamma.api.user.model.User;
import com.erichgamma.api.user.model.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService extends CommandService<UserDto>, QueryService<UserDto> {
    List<UserDto> findAll();
    MessengerVo modify(UserDto user);
    List<UserDto> findUsersByName(String name);
    List<UserDto> findUsersByJob(String job);
    Optional<User> findUserByUsername(String username);

    default User dtoToEntity(UserDto dto){
        return User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .job(dto.getJob())
                .build();
    }

    default UserDto entityToDto(User user){
        return UserDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .phone(user.getPhone())
                .job(user.getJob())
                .build();
    }
    MessengerVo login(UserDto param);


    // default UserDto entityToDto(Optional<User> optional){
    //     return UserDto.builder().build();
    // }
}
