export function htmlDecode(comments) {


    const allComments = comments.length;
    for (let i = 0; i < allComments; i++) {
        let originalText = comments[i].text;
        let doc = new DOMParser().parseFromString(originalText, "text/html");
        comments[i].text = doc.documentElement.textContent;
    }
    return comments

}