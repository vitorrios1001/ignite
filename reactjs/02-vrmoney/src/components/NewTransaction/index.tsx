import React from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

import { useModal } from '../../hooks/useModal';
import {
  Container,
  TransactionTypeContainer,
  RadioButton,
  AlertDanger,
} from './styles';

import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

type TypeTransaction = 'income' | 'outcome';

type Fields = {
  title: string;
  amount: number;
  category: string;
};

type FormFieldProps = {
  error?: { message?: string };
  children: React.ReactNode | React.ReactNodeArray;
};

const FormField = ({ children, error }: FormFieldProps) => {
  return (
    <>
      {children}
      {error?.message && <AlertDanger>{error.message}</AlertDanger>}
    </>
  );
};

const NewTransaction = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Fields>();

  const { handleCloseModal, handleOpenModal, modalIsOpen } = useModal();
  const [type, setType] = React.useState<TypeTransaction>('income');

  const handleSetType = React.useCallback(
    (typeTransaction: TypeTransaction) => setType(typeTransaction),
    [setType],
  );

  const onSubmit = (data: Fields) => {
    console.log({ ...data, type });

    api.post('/transactions', { ...data, type });
  };

  const handleClose = React.useCallback(() => {
    reset();
    handleCloseModal();
  }, [handleCloseModal, reset]);

  return (
    <>
      <button onClick={handleOpenModal} type="button">
        Nova Transação
      </button>
      <Modal
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
      >
        <button
          onClick={handleClose}
          className="react-modal-close"
          type="button"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastrar transação</h2>

          <FormField error={errors.title}>
            <input
              {...register('title', { required: 'Título obrigatório' })}
              placeholder="Título"
            />
          </FormField>

          <FormField error={errors.amount}>
            <input
              {...register('amount', {
                min: {
                  value: 1,
                  message: 'O valor mínimo é 1',
                },
                valueAsNumber: true,
                required: 'O valor deve ser maior que 0',
              })}
              defaultValue={0}
              type="number"
              placeholder="Valor"
            />
          </FormField>

          <TransactionTypeContainer>
            <RadioButton
              activeColor="green"
              isActive={type === 'income'}
              onClick={() => handleSetType('income')}
              type="button"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioButton>

            <RadioButton
              activeColor="red"
              isActive={type === 'outcome'}
              onClick={() => handleSetType('outcome')}
              type="button"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioButton>
          </TransactionTypeContainer>
          <FormField error={errors.category}>
            <input
              {...register('category', {
                required: 'O campo categoria é brigatório',
              })}
              placeholder="Categoria"
            />
          </FormField>

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
};

export default NewTransaction;
