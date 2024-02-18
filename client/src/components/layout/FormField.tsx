import { FormFieldProps } from '../../types/layoutTypes'

const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: FormFieldProps) => (
  <label className="form-control w-full">
    <div className="label">
      <span className="label-text">
        {label} <span className="text-error">{touched && error && error}</span>
      </span>
    </div>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className={`input input-bordered w-full ${touched && error ? 'input-error' : ''}`}
    />
  </label>
)

export default FormField
