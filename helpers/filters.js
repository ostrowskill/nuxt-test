import experts from '@/config/experts'

const filterExperts = (idsToMatch) => {
    return experts.filter(expert => {
        if (idsToMatch.indexOf(expert.id) >= 0) {
            return expert
        }
    })
}

export {
    filterExperts
}