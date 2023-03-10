import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { DataCheckContext } from '../../contexts/DataTrasactionsContext'
import * as z from 'zod'
import {
  CloseButton,
  Content,
  DivProductType,
  Overlay,
  ProductType,
  ProductTypeButton,
  SpanTitle,
  ThirdType,
  ThirdTypeButton,
} from './styles'
import { Controller, useForm } from 'react-hook-form'

const DataFormSchema = z.object({
  company: z.string(),
  nameProduct: z.string(),
  number_invoice: z.string(),
  dateCheckin: z.string(),
  third: z.enum(['yes', 'no']),
  typeProduct: z.enum(['food', 'industrial', 'house', 'technology', 'others']),
  amount: z.number(),
  unitaryValue: z.number(),
  totalValue: z.number(),
})

type DateFormInputs = z.infer<typeof DataFormSchema>

export function NewCheckoutModal() {
  const { createDataInputOutput } = useContext(DataCheckContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<DateFormInputs>({
    resolver: zodResolver(DataFormSchema),
  })

  /* Inputs */
  async function handleSubmitNewDataOut(data: DateFormInputs) {
    const {
      company,
      nameProduct,
      number_invoice,
      dateCheckin,
      third,
      typeProduct,
      amount,
      unitaryValue,
      totalValue,
    } = data

    /* Mandando os inputs para o context */
    await createDataInputOutput({
      company,
      nameProduct,
      number_invoice,
      dateCheckin,
      third,
      typeProduct,
      amount,
      unitaryValue,
      totalValue,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Registro Saída</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleSubmitNewDataOut)}>
          <div>
            <input
              type="text"
              placeholder="Empresa"
              required
              {...register('company')}
            />
            <input
              type="text"
              placeholder="Nome do produto"
              required
              {...register('nameProduct')}
            />
            <input
              type="text"
              placeholder="Número da nota"
              required
              {...register('number_invoice')}
            />
            <input
              type="date"
              placeholder="Data de Emissão"
              required
              {...register('dateCheckin')}
            />

            <Controller
              control={control}
              name="third"
              render={({ field }) => {
                return (
                  <ThirdType onValueChange={field.onChange} value={field.value}>
                    <SpanTitle>Fornecedor</SpanTitle>
                    <ThirdTypeButton variant="yes" value="yes">
                      <span>Terceiro? Sim</span>
                    </ThirdTypeButton>

                    <ThirdTypeButton variant="no" value="no">
                      <span>Terceiro? Não</span>
                    </ThirdTypeButton>
                  </ThirdType>
                )
              }}
            />
          </div>

          <div>
            <SpanTitle>Tipo do produto</SpanTitle>

            <Controller
              control={control}
              name="typeProduct"
              render={({ field }) => {
                return (
                  <ProductType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <DivProductType>
                      <ProductTypeButton value="food">
                        <span>Alimento</span>
                      </ProductTypeButton>

                      <ProductTypeButton value="industrial">
                        <span>Industrial</span>
                      </ProductTypeButton>

                      <ProductTypeButton value="house">
                        <span>Casa</span>
                      </ProductTypeButton>
                    </DivProductType>

                    <DivProductType>
                      <ProductTypeButton value="technology">
                        <span>Tecnologia</span>
                      </ProductTypeButton>

                      <ProductTypeButton value="others">
                        <span>Outros</span>
                      </ProductTypeButton>
                    </DivProductType>
                  </ProductType>
                )
              }}
            />

            <input
              type="number"
              placeholder="Quantidade"
              required
              {...register('amount', { valueAsNumber: true })}
            />
            <input
              type="number"
              placeholder="Valor unitário"
              required
              {...register('unitaryValue', { valueAsNumber: true })}
            />
            <input
              type="number"
              placeholder="Valor Total"
              required
              {...register('totalValue', { valueAsNumber: true })}
            />

            <div>
              <button type="submit" disabled={isSubmitting}>
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
