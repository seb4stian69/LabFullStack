package org.sofka.mykrello.model.service.interfaces;

import org.sofka.mykrello.model.domain.LogDto;

import java.util.Optional;

<<<<<<< HEAD
<<<<<<< HEAD
public interface LogDtoInterface {

    public LogDto findById(Integer id);

    public LogDto create(LogDto log);

=======
=======
>>>>>>> testBranch
/**
 * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
 * @Description interfaz de servicio de Logdto
 */
public interface LogDtoInterface {

    /**
     * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
     * @Description Busca un Log de acuerdo al identificador
     * @param id Identificador del Log
     * @return Log
     */
    public LogDto findById(Integer id);

    /**
     * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
     * @Description Crea un Log
     * @param log datos para la creacion del Log
     * @return Log
     */
    public LogDto create(LogDto log);


    /**
     * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
     * @Description Actualiza un Log
     * @param log datos para actualizar
     * @return Log
     */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
    public LogDto update(LogDto log);
}
