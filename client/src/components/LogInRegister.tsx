// @ts-expect-error - ignore typescript error
const LogInRegister = ({ formType, handleFormTypeChange }) => {
  return (
    <div className="card-body w-80">
      <h2 className="card-title">
        {formType === 'login' ? 'LogIn' : 'Register'}
      </h2>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      {formType === 'register' && (
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Confirm Password</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
      )}
      {formType === 'login' && (
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary [--chkfg:white]"
            />
          </label>
        </div>
      )}
      <div className="form-control">
        <div className="label">
          <span
            onClick={handleFormTypeChange}
            className="label-text underline cursor-pointer"
          >
            {formType === 'login'
              ? 'First time here? Create an account'
              : 'Already have an account? Log in'}
          </span>
        </div>
      </div>
      <div className="card-actions justify-center mt-2">
        <button className="btn btn-primary w-full text-base-100">
          {formType === 'login' ? 'LogIn' : 'Register'}
        </button>
      </div>
    </div>
  )
}

export default LogInRegister
