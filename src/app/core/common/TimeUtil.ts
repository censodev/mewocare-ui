export class TimeUtil {
    static computeTimeAgo(epochMillis: number): string {
        const epoch = new Date(Date.now() - epochMillis).getTime();
        const mins = Math.floor(epoch / (1000 * 60));
        const hrs = Math.floor(mins / 60);
        const days = Math.floor(hrs / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
        return years > 0
          ? years + ' years ago'
          : months > 0
            ? months + ' months ago'
            : days > 0
              ? days + ' days ago'
              : hrs > 0
                ? hrs + ' hrs ago'
                : mins > 0
                    ? mins + ' mins ago'
                    : 'now';
    }
}