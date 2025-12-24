import { validationResult} from "express-validator";
import  validationError  from "../errors/validation-error.js";

const useValidators =
    (validators = []) =>
    async (req, res, next) => {
      try{
        await Promise.all(validators.map((validator) => validator.run(req)));

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const formatted = errors.array().map(({ path, msg }) => ({
                field: path,
                message: msg,
            }));
            return next(new validationError(formatted));
        }

        return next();
      } catch (error) {
        return next(error); 
      }};
  
export default useValidators;