module.exports = {
    Ngejek : ( message ) => {

        let saru = [
            'coeng', 'anjay', 'su', 'HEI', 'jangkrik', 'wedhus', 'njing',
            'fuck', 'ngentot', 'JANCOK'
        ];

        let len = saru.length;
        let stat = false;
        let idx = 0;

        while (len!=0) {
            if(message.includes(saru[idx])) {
                stat = true;
                break;
            } else {
                len--;
            }
            idx++;
        }

        return stat;
    }
}
