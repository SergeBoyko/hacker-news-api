export function sortByDate(comments) {
    const allComments = comments.length;
    for (let i = 0; i < allComments; i++) {
        if (allComments > 2) {
            comments.sort(
                (d1, d2) => new Date(d2.time) - new Date(d1.time)
            );
        }
    }
    return comments
}