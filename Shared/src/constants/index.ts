export const USER_ROLES = {
  REGULAR: 1,
  MANAGER: 0,
} as const;

export const AUTH_MESSAGES = {
  PERNR_REQUIRED: "Your pernr is required",
  INVALID_PERNR: "The pernr you've entered is invalid",
  LOGIN_SUCCESS: "logged in successfully",
  INTERNAL_ERROR: "System internal error",
} as const;
