package pl.edu.pg.student.isa_laboratories.producer.dto;

import lombok.*;
import pl.edu.pg.student.isa_laboratories.producer.entity.Producer;

import java.util.function.Function;

/**
 * A DTO for the {@link Producer} entity
 */
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@ToString
@EqualsAndHashCode
public class GetProducerResponse{

    @Getter
    @Setter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @ToString
    @EqualsAndHashCode
    public static class Car {
        private Long id;
        private String name;
    }

    private String name;

    private int foundationYear;

    public static Function<Producer, GetProducerResponse> entityToDtoMapper() {
        return producer -> GetProducerResponse.builder()
                .name(producer.getName())
                .foundationYear(producer.getFoundationYear())
                .build();
    }
}