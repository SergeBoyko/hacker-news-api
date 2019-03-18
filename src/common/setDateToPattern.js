import { dataFormatFromPattern } from './dataFormat'

export function setDateToPattern(comments) {
    const allComments = comments.length;
    for (let i = 0; i < allComments; i++) {
        let changeFormatToPattern = comments[i].time;
        comments[i].time = dataFormatFromPattern(changeFormatToPattern);
    }
    return comments
}