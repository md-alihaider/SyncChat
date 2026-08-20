const GenderSelect = () => {
  return (
    <div className="form-control pt-1">
      <label className="label px-1 pb-1">
        <span className="label-text text-white/80 font-medium">Gender</span>
      </label>

      <div className="flex gap-6 px-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio radio-primary radio-sm"
          />

          <span className="text-sm text-white/70">Male</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio radio-primary radio-sm"
          />

          <span className="text-sm text-white/70">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderSelect;
