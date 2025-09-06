"use client";
import { Input, Textarea } from "@/components/ui";
import { Controller } from "react-hook-form";

const FormField = ({
  control,
  name,
  label,
  type = "text",
  placeholder,
  errors,
  isTextarea = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          {isTextarea ? (
            <Textarea
              {...field}
              label={label}
              placeholder={placeholder}
              labelPlacement="outside"
              isInvalid={!!errors[name]}
              errorMessage={errors[name]?.message}
              classNames={{
                input:
                  "h-12 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500",
                inputWrapper: "rounded-xl",
                label:
                  "text-gray-700 dark:text-gray-300 text-sm font-medium mb-3",
                errorMessage: "text-red-500 text-sm mt-1",
              }}
            />
          ) : (
            <Input
              {...field}
              type={type}
              label={label}
              placeholder={placeholder}
              labelPlacement="outside"
              isInvalid={!!errors[name]}
              errorMessage={errors[name]?.message}
              classNames={{
                input:
                  "h-12 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500",
                inputWrapper: "rounded-xl",
                label:
                  "text-gray-700 dark:text-gray-300 text-sm font-medium mb-3",
                errorMessage: "text-red-500 text-sm mt-1",
              }}
            />
          )}
        </>
      )}
    />
  );
};

export default FormField;
