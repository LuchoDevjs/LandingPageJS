export const validateFields = values => {
    let errors = {};
    // validacion nombre
    if (!values.nombre) {
      errors.nombre = "Ingresa un nombre";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
      errors.nombre = "El nombre solo puede contener letras y espacios";
    }
    // validacion apellido
    if (!values.apellido) {
      errors.apellido = "Ingresa un apellido";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.apellido)) {
      errors.apellido = "El apellido solo puede contener letras y espacios";
    }
    // validacion email
    if (!values.email) {
      errors.email = "Ingresa un Correo Electronico";
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
    ) {
      errors.email =
        "El nombre solo puede contener letras, numeros, puntos y guiones";
    }
    // validacion localidad
    if (!values.localidad) {
      errors.localidad = "Ingrese su localidad";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.localidad)) {
      errors.localidad =
        "Su localidad solo puede contener letras y espacios";
    }
    // validacion telefono
    if (!values.telefono) {
      errors.telefono = "Ingresa un Telefono Celular";
    } else if (!/^[+]*[(]?[0-9]{1,4}[)]?[0-9-\s\.]{10,15}$/.test(values.telefono)) {
      errors.telefono = "Ingrese el numero de telefono completo porfavor";
    }
    return errors;
  }