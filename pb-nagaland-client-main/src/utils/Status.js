const QUERY_TAGS = Object.freeze({
  AUTH: 'Auth',
  COMPLAINT: 'Complaint',
  STATE: 'State',
  CITY: 'City',
  CATEGORY: 'Category',
});
const ComplaintStatus = Object.freeze({
  PENDING: 0,
  APPROVED: 1,
  REJECTED: 2,
});

export {QUERY_TAGS, ComplaintStatus};
