export default async function rebuildData(data, type) {
    if (data && data.length > 0) {
        let rebuilt = '';
        // let header = Object.keys(obj[0]).join(',');
        let values = data.map(o => Object.values(o).join(',')).join('\n');

        rebuilt += '\n' + values;

        return rebuilt;
    } else {
        return null;
    }
} 