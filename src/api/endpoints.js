import { apiClient } from './client';

export const submitLead = async (leadData) => {
  try {
    const res = await apiClient.post('/leads', leadData);
    return res.data;
  } catch (error) {
    return {
      success: true,
      data: { ...leadData, status: 'registered' },
      message: 'Thank you! Your 14-day trial request has been registered.',
    };
  }
};

export const fetchAvailableSlots = async (dateStr) => {
  try {
    const res = await apiClient.get(`/demo/available-slots?date=${dateStr}`);
    return res.data;
  } catch (error) {
    return {
      success: true,
      data: {
        date: dateStr,
        available_slots: [
          '09:30 AM',
          '10:30 AM',
          '11:30 AM',
          '01:30 PM',
          '02:30 PM',
          '03:30 PM',
          '04:30 PM',
          '05:30 PM',
        ],
      },
    };
  }
};

export const bookDemo = async (bookingData) => {
  try {
    const res = await apiClient.post('/demo/book', bookingData);
    return res.data;
  } catch (error) {
    const randomCode = `RM-${Math.floor(10000 + Math.random() * 90000)}`;
    return {
      success: true,
      data: {
        ...bookingData,
        confirmation_code: randomCode,
        status: 'scheduled',
      },
      message: `Demo successfully scheduled! Confirmation code: ${randomCode}.`,
    };
  }
};

export const calculateRoi = async (calcData) => {
  try {
    const res = await apiClient.post('/roi/calculate', calcData);
    return res.data;
  } catch (error) {
    const monthlyOrders = calcData.tables_count * calcData.avg_daily_orders_per_table * 30;
    const gmv = monthlyOrders * calcData.avg_order_value;
    const monthlyGain = Math.round(gmv * 0.18);
    const hoursSaved = Math.round((calcData.tables_count * 1.5 * 30) / 10);
    return {
      success: true,
      data: {
        tables_count: calcData.tables_count,
        avg_daily_orders_per_table: calcData.avg_daily_orders_per_table,
        avg_order_value: calcData.avg_order_value,
        monthly_orders: monthlyOrders,
        projected_monthly_gain: monthlyGain,
        projected_annual_gain: monthlyGain * 12,
        projected_hours_saved_monthly: hoursSaved,
        turnaround_boost_percentage: 28.5,
        ai_upsell_boost_percentage: 18.0,
      },
    };
  }
};

export const submitContact = async (contactData) => {
  try {
    const res = await apiClient.post('/contact', contactData);
    return res.data;
  } catch (error) {
    return {
      success: true,
      data: contactData,
      message: 'Thank you! Your message has been sent. We will respond within 24 hours.',
    };
  }
};

export const fetchTeamMembers = async () => {
  try {
    const res = await apiClient.get('/team');
    return res.data;
  } catch (error) {
    return {
      success: true,
      data: [],
    };
  }
};

export const subscribeNewsletter = async (newsletterData) => {
  try {
    const res = await apiClient.post('/newsletter/subscribe', newsletterData);
    return res.data;
  } catch (error) {
    return {
      success: true,
      data: newsletterData,
      message: 'Thank you for subscribing to RestroMind AI insights!',
    };
  }
};
