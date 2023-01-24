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

const DataFromSchema = z.object({
  id: z.number(),
  company: z.string(),
  number_invoice: z.string(),
  dateCheckin: z.date(),
  third: z.enum(['yes', 'no']),
  nameProduct: z.string(),
  typeProduct: z.enum([
    'food',
    'industrial',
    'house',
    'public',
    'technology',
    'others',
  ]),
  amount: z.number(),
  unitaryValue: z.number(),
  totalValue: z.number(),
})

type DateFromInputs = z.infer<typeof DataFromSchema>

export function NewCheckInModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<DateFromInputs>({
    resolver: zodResolver(DataFromSchema),
  })

  function handleSubmitNewData(data: DateFromInputs) {
    console.log(data)
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
              type="number"
              placeholder="Número da nota"
              required
              {...register('number_invoice', { valueAsNumber: true })}
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
                    <ThirdTypeButton variant="yes" value="sim">
                      <span>Terceiro? Sim</span>
                    </ThirdTypeButton>

                    <ThirdTypeButton variant="no" value="não">
                      <span>Terceiro? Não</span>
                    </ThirdTypeButton>
                  </ThirdType>
                )
              }}
            />
          </div>

          <div>
            <SpanTitle>Tipo do produto</SpanTitle>

            <ProductType>
              <DivProductType>
                <ProductTypeButton value="Alimento">
                  <span>Alimento</span>
                </ProductTypeButton>

                <ProductTypeButton value="Industrial">
                  <span>Industrial</span>
                </ProductTypeButton>

                <ProductTypeButton value="Casa">
                  <span>Casa</span>
                </ProductTypeButton>
              </DivProductType>

              <DivProductType>
                <ProductTypeButton value="Tecnologia">
                  <span>Tecnologia</span>
                </ProductTypeButton>

                <ProductTypeButton value="Outros">
                  <span>Outros</span>
                </ProductTypeButton>
              </DivProductType>
            </ProductType>

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
