export const formatDateBR = (date?: number | Date | string): string =>
  new Intl.DateTimeFormat('pt-BR').format(
    typeof date === 'string' ? new Date(date) : date,
  );
