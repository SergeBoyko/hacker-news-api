import { dataFormat } from './dataFormat'

export function getDateFormatUnixTime(comments) {
    const allComments = comments.length;
    for (let i = 0; i < allComments; i++) {
        let dataFormated = comments[i].time;
        if (typeof dataFormated === 'number') {
            comments[i].time = dataFormat(dataFormated);
        }
    }
    return comments
}