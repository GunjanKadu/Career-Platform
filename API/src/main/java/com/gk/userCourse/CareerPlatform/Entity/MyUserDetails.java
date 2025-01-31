package com.gk.userCourse.CareerPlatform.Entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class MyUserDetails implements UserDetails {
    private String userName;
    private String password;
    private List<GrantedAuthority> authorityList;

    public MyUserDetails(User user) {
        // taking the user object from the db and converting it into the UserDetails Object
        this.userName = user.getEmail();
        this.password = user.getPassword();
        this.authorityList = Arrays.stream(user.getRole().split(",")).map(role -> new SimpleGrantedAuthority(role)).collect(Collectors.toList());
    }

    public MyUserDetails() {

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorityList;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
