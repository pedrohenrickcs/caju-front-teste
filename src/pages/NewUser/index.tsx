
import * as S from "./styles";
import routes from "~/router/routes";
import Button from "~/components/common/Buttons";
import TextField from "~/components/common/TextField";
import CpfMaskedTextField from "~/components/common/CpfTextField";

import { useHistory } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/common/Buttons/IconButton";
import { api } from "~/services";
import { SubmitHandler, useForm } from "react-hook-form";
import { validateCPF } from "~/utils/validateCPF";
import { validateDate } from "~/utils/validateDate";

type UserFormData = {
  employeeName: string;
  email: string;
  cpf: string;
  admissionDate: string;
};

const NewUserPage = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>();
  
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const onSubmit: SubmitHandler<UserFormData> = async (data: any) => {
    try {
      await api.createRegistrations({
        status: "REVIEW",
        ...data
      });
      history.push(routes.dashboard);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Nome"
            type="text"
            error={errors.employeeName && errors.employeeName.message}
            {...register("employeeName", {
              required: "Nome completo é obrigatório",
              pattern: {
                value: /^(?!\d)[A-Za-zÀ-ÖØ-öø-ÿ]{2,}(?: [A-Za-zÀ-ÖØ-öø-ÿ]{2,})+$/,
                message: "Nome completo deve conter pelo menos um espaço, ter no mínimo duas letras e não começar com um número"
              }
            })}
          />
          <TextField
            label="Email"
            type="email"
            error={errors.email && errors.email.message}
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Formato de email inválido"
              }
            })}
          />
          <CpfMaskedTextField
            label="CPF"
            type="text"
            error={errors.cpf && errors.cpf.message}
            placeholder="CPF"
            {...register("cpf", {
              required: "CPF é obrigatório",
              validate: value => validateCPF(value) || "CPF inválido"
            })}
          />
          <TextField
            label="Data de admissão"
            type="date"
            error={errors.admissionDate && errors.admissionDate.message}
            {...register("admissionDate", {
              required: "Data é obrigatória",
              validate: validateDate,
            })}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
