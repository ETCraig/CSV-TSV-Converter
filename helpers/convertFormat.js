export default async function convertFormat(data, type) {
    if (type === 'CSV') {
        const lines = data.split('\n')
        const result = []
        const headers = lines[0].split(',')

        for (let i = 1; i < lines.length; i++) {
            if (!lines[i])
                continue
            const obj = {}
            const currentline = lines[i].split(',')

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j]
            }
            result.push(obj)
        }
        return result
    } else if (type === 'TSV') {
        var x = data.split('\n');
        for (var i = 0; i < x.length; i++) {
            let y = x[i].split('\t');
            x[i] = y;
        }
        x.shift();
        return x;
    }
}