import { z } from 'zod';

export const SignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4),
  role: z.string().optional(),
});

export const AddressSchema = z.object({
  lineOne: z.string(),
  lineTwo: z.string().nullable(),
  pincode: z.string().length(6).optional(),
  country: z.string(),
  city: z.string(),
});

// export const UpdateUserSchema = z.object({
//   name: z.string().nullable(),
//   defaultShippingAddress: z.number().nullable(),
//   defaultBillingAddress: z.number().nullable(),
// });

export const UpdateUserSchema = z.object({
  name: z.string().optional(),
  defaultShippingAddress: z.number().optional(),
  defaultBillingAddress: z.number().optional(),
});
