const ExportNotesPayloadSchema = require("./schema");
const InvarianError = require("../../exceptions/InvariantError");

const ExportsValidator = {
  validateExportsNotesPayload: (payload) => {
    const validateresult = ExportNotesPayloadSchema.validate(payload);

    if (validateresult.error) {
      throw new InvarianError(validateresult.error.message);
    }
  },
};

module.exports = ExportsValidator;
