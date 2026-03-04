/**
 * Format a date string to a relative time (e.g., "1 hour ago") or a fixed date format (YYYY-MM-DD).
 * Rules:
 * - If within 1 minute: "Just now" (방금 전)
 * - If within 1 hour: "X minutes ago" (X분 전)
 * - If within 24 hours: "X hours ago" (X시간 전)
 * - If within 10 days: "X days ago" (X일 전)
 * - Otherwise: "YYYY-MM-DD"
 */
export function formatRelativeDate(dateString: string | Date | undefined | null): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';

    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 0) {
        // Future date, just format it
        return date.toISOString().split('T')[0];
    }

    if (diffInSeconds < 60) {
        return '방금 전';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes}분 전`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours}시간 전`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays <= 10) {
        return `${diffInDays}일 전`;
    }

    // Default: YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

/**
 * Formats a date string into a specific format.
 * Default format: YYYY-MM-DD HH:mm
 */
export function formatDate(dateString: string | Date | undefined | null, formatStr: string = 'YYYY-MM-DD HH:mm'): string {
    if (!dateString) return '';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    let result = formatStr
        .replace('YYYY', year.toString())
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);

    return result;
}
