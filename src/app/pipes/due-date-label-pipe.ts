// Import Angular Pipe decorator and PipeTransform interface
import { Pipe, PipeTransform } from '@angular/core';

// Define a standalone pipe called 'dueDateLabel'
// 'standalone: true' allows this pipe to be used without adding it to a module
@Pipe({
  name: 'dueDateLabel', 
  standalone: true,
})
export class DueDateLabelPipe implements PipeTransform {
  /**
   * Transforms a due date string into a human-readable label.
   * @param value - The due date string (optional)
   * @param locale - Locale for formatting (defaults to user's browser locale)
   * @returns A formatted date string, prefixed with "overdue:" if the date is past
   */
  transform(value?: string, locale: string = navigator.language): string {

    if (!value) return 'not due date'; // If no value provided, return a default message

    const d = new Date(value);          // Convert string to Date object
    const today = new Date(); 
    today.setHours(0, 0, 0, 0);        // Normalize today to midnight for comparison

    const isOverdue = d < today;        // Check if the date is before today
    const label = d.toLocaleDateString(locale, { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });                                 // Format the date based on locale

    return isOverdue ? `overdue: ${label}` : label; // Prefix "overdue:" if needed
  }
}