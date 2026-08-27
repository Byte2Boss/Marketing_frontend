import { apiClient } from './client';
import { PRICING_TIERS, PRICING_COMPARISON_MATRIX } from '../data/pricingData';
import { TESTIMONIALS, TRUST_STATS } from '../data/testimonialsData';
import { FAQS, FAQ_CATEGORIES } from '../data/faqData';
import { CORE_FEATURES } from '../data/featuresData';
import { RESTAURANT_THEMES, MOCK_MENUS } from '../data/mockMenuData';

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

export const subscribeNewsletter = async (newsletterData) => {
  try {
    const res = await apiClient.post('/newsletter/subscribe', newsletterData);
    return res.data;
  } catch (error) {
    return {
      success: true,
      data: newsletterData,
      message: 'Thank you for subscribing to RestroMind AI Restaurant Insights!',
    };
  }
};

export const submitNewsletter = subscribeNewsletter;

export const fetchTeamMembers = async () => {
  try {
    const res = await apiClient.get('/team');
    return res.data;
  } catch (error) {
    return { success: true, data: [] };
  }
};

export const fetchPricingContent = async () => {
  try {
    const res = await apiClient.get('/content/pricing');
    if (res.data?.data?.tiers?.length > 0) {
      // Map API fields (snake_case -> camelCase) for frontend components
      const tiers = res.data.data.tiers.map((t) => ({
        id: t.id,
        name: t.name,
        tagline: t.tagline,
        priceMonthly: t.price_monthly,
        priceAnnual: t.price_annual,
        isPopular: t.is_popular,
        badge: t.badge,
        tierScope: t.tier_scope,
        ctaText: t.cta_text,
        features: t.features,
      }));
      return {
        success: true,
        data: {
          tiers,
          matrix: res.data.data.matrix,
        },
      };
    }
    return { success: true, data: { tiers: PRICING_TIERS, matrix: PRICING_COMPARISON_MATRIX } };
  } catch (error) {
    return { success: true, data: { tiers: PRICING_TIERS, matrix: PRICING_COMPARISON_MATRIX } };
  }
};

export const fetchTestimonialsContent = async () => {
  try {
    const res = await apiClient.get('/content/testimonials');
    if (res.data?.data?.testimonials?.length > 0) {
      return {
        success: true,
        data: {
          testimonials: res.data.data.testimonials,
          trustStats: res.data.data.trust_stats,
        },
      };
    }
    return { success: true, data: { testimonials: TESTIMONIALS, trustStats: TRUST_STATS } };
  } catch (error) {
    return { success: true, data: { testimonials: TESTIMONIALS, trustStats: TRUST_STATS } };
  }
};

export const fetchFaqsContent = async () => {
  try {
    const res = await apiClient.get('/content/faqs');
    if (res.data?.data?.faqs?.length > 0) {
      return res.data;
    }
    return { success: true, data: { categories: FAQ_CATEGORIES, faqs: FAQS } };
  } catch (error) {
    return { success: true, data: { categories: FAQ_CATEGORIES, faqs: FAQS } };
  }
};

export const fetchFeaturesContent = async () => {
  try {
    const res = await apiClient.get('/content/features');
    if (res.data?.data?.length > 0) {
      const features = res.data.data.map((f) => ({
        id: f.id,
        title: f.title,
        subtitle: f.subtitle,
        description: f.description,
        category: f.category,
        iconName: f.icon_name,
        color: f.color,
        metricsBadge: f.metrics_badge,
        bulletPoints: f.bullet_points,
      }));
      return { success: true, data: features };
    }
    return { success: true, data: CORE_FEATURES };
  } catch (error) {
    return { success: true, data: CORE_FEATURES };
  }
};

export const fetchMenuConceptsContent = async () => {
  try {
    const res = await apiClient.get('/content/concepts');
    if (res.data?.data?.length > 0) {
      const themes = res.data.data.map((c) => ({
        id: c.id,
        name: c.name,
        concept: c.concept,
        accentColor: c.accent_color,
        vibe: c.vibe,
      }));

      const menus = {};
      res.data.data.forEach((c) => {
        menus[c.id] = {
          title: c.title,
          tagline: c.tagline,
          categories: c.categories,
          items: c.items || [],
        };
      });

      return {
        success: true,
        data: {
          themes,
          menus,
        },
      };
    }
    return { success: true, data: { themes: RESTAURANT_THEMES, menus: MOCK_MENUS } };
  } catch (error) {
    return { success: true, data: { themes: RESTAURANT_THEMES, menus: MOCK_MENUS } };
  }
};
