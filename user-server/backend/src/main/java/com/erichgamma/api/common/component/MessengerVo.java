package com.erichgamma.api.common.component;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class MessengerVo {
    private String message;
    private int status;
    private String token;
}
