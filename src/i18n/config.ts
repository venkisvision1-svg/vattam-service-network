import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      common: {
        appName: 'VATTAM Service Network',
        language: 'Language',
        logout: 'Logout',
      },
      navigation: {
        home: 'Home',
        services: 'Services',
        booking: 'Bookings',
        dashboard: 'Dashboard',
        profile: 'Profile',
      },
      home: {
        title: 'Professional Services at Your Doorstep',
        subtitle: 'AC Service • CCTV • Plumbing • Electrician & More',
        cta: 'Book Now',
      },
      booking: {
        title: 'Book a Service',
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        service: 'Select Service',
        description: 'Describe your issue',
        address: 'Service Address',
        date: 'Date',
        time: 'Time',
        confirm: 'Confirm Booking',
      },
      services: {
        ac: 'AC Service',
        cctv: 'CCTV Installation',
        fridge: 'Fridge Repair',
        washing: 'Washing Machine Repair',
        electric: 'Electrician',
        plumbing: 'Plumbing',
        solar: 'Solar Service',
        ro: 'RO Service',
        marketing: 'Digital Marketing',
        website: 'Website Creation',
      },
    },
  },
  ta: {
    translation: {
      common: {
        appName: 'வட்டம் சேவை நெட்வொர்க்',
        language: 'மொழி',
        logout: 'வெளியேறு',
      },
      navigation: {
        home: 'முகப்பு',
        services: 'சேவைகள்',
        booking: 'முன்பதிவுகள்',
        dashboard: 'டாஷ்போர்ড்',
        profile: 'சுயவிவரம்',
      },
      home: {
        title: 'உங்கள் வீதியில் தொழிலரீதியான சேவைகள்',
        subtitle: 'AC சேவை • CCTV • குழாய் • மின்சாரம் மற்றும் பலவற்றைப் பெறுங்கள்',
        cta: 'இப்போது பதிவு செய்யுங்கள்',
      },
      booking: {
        title: 'சேவையை பதிவு செய்யுங்கள்',
        name: 'முழு பெயர்',
        phone: 'தொலைபேசி எண்',
        email: 'மின்னஞ்சல் முகவரி',
        service: 'சேவையைத் தேர்ந்தெடுங்கள்',
        description: 'உங்கள் সমস்யை விவரிக்கவும்',
        address: 'சேவை முகவரி',
        date: 'தேதி',
        time: 'நேரம்',
        confirm: 'முன்பதிவை உறுதிப்படுத்தவும்',
      },
      services: {
        ac: 'AC சேவை',
        cctv: 'CCTV நிறுவல்',
        fridge: 'ஃபிரிஜ் பழுதுபார்ப்பு',
        washing: 'சலவை கருவி பழுதுபார்ப்பு',
        electric: 'மின்சாரவியல்',
        plumbing: 'குழாய் பணி',
        solar: 'சூரிய சேவை',
        ro: 'RO சேவை',
        marketing: 'டிஜிட்டல் மார்க்கெட்டிங்',
        website: 'வலைத்தளம் உருவாக்கம்',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n