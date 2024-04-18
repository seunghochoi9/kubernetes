package com.erichgamma.api.common.component;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class ImageVo {
    private long ImageId;
    String name;
    Long lastModified;
    Long lastModifiedDate;
    String type;
    String webkitRelativePath;
    Long size;
}
