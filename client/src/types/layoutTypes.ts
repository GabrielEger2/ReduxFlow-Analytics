export interface FormFieldProps {
  label: string
  type: string
  name: string
  value: string | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  error: string | undefined
  touched: boolean
}
