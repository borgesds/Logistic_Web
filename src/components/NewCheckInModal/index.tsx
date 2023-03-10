import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { useContext } from 'react'
import { DataCheckContext } from '../../contexts/DataTrasactionsContext'

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

export function NewCheckInModal() {
  const { createDataInputCheckIn } = useContext(DataCheckContext)

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
  async function handleSubmitNewData(data: DateFormInputs) {
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
    await createDataInputCheckIn({
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
        <Dialog.Title>Registro Entrada</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleSubmitNewData)}>
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
              placeholder="N??mero da nota"
              required
              {...register('number_invoice')}
            />
            <input
              type="date"
              placeholder="Data de Emiss??o"
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
                      <span>Terceiro? N??o</span>
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
              placeholder="Valor unit??rio"
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
