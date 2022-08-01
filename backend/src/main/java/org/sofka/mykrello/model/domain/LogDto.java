package org.sofka.mykrello.model.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;

<<<<<<< HEAD

=======
/***
 * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
 * @Description aqui se mapean los datos de la tabla "krl_log"
 * @Params None
 * @Anotations Entity - Table - Getter - Setter
 */
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
@Entity /**/ @Table(name = "krl_log")
@Getter /**/ @Setter
public class LogDto implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

<<<<<<< HEAD
=======
    /***
     * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
     * @Description atributos del objeto Log
     * @Anotations Id - GeneratedValue - Column
     */

>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id", updatable = false)
    private Integer id;

    @Column(name = "tsk_id_task")
    private Integer taskId;

    @Column(name = "clm_id_previous")
    private Integer columnaPrevious;

    @Column(name = "clm_id_current")
    private Integer columnaCurrent;

    @Column(name = "log_created_at", updatable = false)
    private Instant createdAt = Instant.now();
}
