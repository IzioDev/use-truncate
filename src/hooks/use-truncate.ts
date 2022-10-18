import { useMemo } from "react";

type UseTruncateOptions = {
  maxLength?: number;
  ellipsis?: string;
};

const getPreferredOptions = (
  options?: UseTruncateOptions
): Required<UseTruncateOptions> => ({
  maxLength: options?.maxLength ?? Infinity,
  ellipsis: options?.ellipsis ?? "...",
});

/**
 *
 * @param stringValue The value to truncate
 * @param options The options to use when truncating
 * @returns The truncated value
 *
 * @example ```ts
 * const truncatedValue = useTruncate("This string is too long I guess", { maxLength: 10 });
 * ```
 */
export const useTruncate = (
  stringValue: string,
  options?: UseTruncateOptions
): string => {
  const truncated = useMemo(() => {
    if (!stringValue) {
      return "";
    }

    const preferredOptions = getPreferredOptions(options);

    return stringValue.length > preferredOptions.maxLength
      ? stringValue.slice(0, preferredOptions.maxLength) + "..."
      : stringValue;
  }, [stringValue]);

  return truncated;
};
