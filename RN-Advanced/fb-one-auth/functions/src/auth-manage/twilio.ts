import * as twilio from 'twilio';

const accountSID = 'AC6bf69ada729dc4db408021d84d0fa1d6';
const authToken = '611e83f110a5a09cfaa9c7f464f6037e';

export const Twilio = twilio(accountSID, authToken);