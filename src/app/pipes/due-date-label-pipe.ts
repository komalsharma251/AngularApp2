import { Pipe, PipeTransform } from '@angular/core';
// when creating in the CLI error of the standalone true for the pipe you need to type it in as --standalone true
@Pipe({
  name: 'dueDateLabel', standalone: true,
})

export class DueDateLabelPipe implements PipeTransform {
// vaule?:string
  transform(value?: string,  locale: string = navigator.language): string {

      if (!value) return 'not due date';
      const d = new Date(value);
      const today = new Date(); today.setHours(0, 0, 0, 0);
      const isOverdue = d < today;
      const label = d.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
      return isOverdue ? `overdue: ${label}` : label;
  }

}
