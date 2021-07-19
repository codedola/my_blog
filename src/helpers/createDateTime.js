import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/vi';

dayjs.locale('vi');
dayjs.extend(relativeTime);

function createDateTime(created) {
    const createdDate = dayjs(created)
    const createdDateStr = createdDate.format('DD/MM/YYYY');
    const currentDate = dayjs();
    const relativeTimeStr = createdDate.from(currentDate);
    
    return {
        createdDateStr,
        relativeTimeStr
    }
}

export default createDateTime;