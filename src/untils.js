import dayjs from 'dayjs';

export function humanizeTaskDueDate(dueDate, dateFormat) {
  return dueDate ? dayjs(dueDate).format(dateFormat) : '';
}
