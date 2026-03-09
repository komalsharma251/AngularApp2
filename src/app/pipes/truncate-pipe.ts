// Import Angular Pipe decorator and PipeTransform interface
import { Pipe, PipeTransform } from '@angular/core';

// Define a standalone pipe called 'truncate'
// 'standalone: true' allows it to be used directly in components without a module
@Pipe({
  name: 'truncate', 
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  /**
   * Shortens a string to a specified length and appends a trailing indicator (e.g., "...")
   * @param value - The input string (can be undefined)
   * @param limit - Maximum number of characters before truncation (default 120)
   * @param trail - String to append when truncating (default '...')
   * @returns The truncated string with trail or the original string if under the limit
   */
  transform(value: string | undefined, limit = 120, trail = '...'): string {
    if (!value) return '';  // Return empty string if input is undefined

    // If the string is longer than the limit, slice and append trail
    // Otherwise, return the original string
    return value.length > limit ? value.slice(0, limit).trimEnd() + trail : value;
  }
}