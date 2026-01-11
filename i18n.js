/* Simple client-side i18n for immi
   - Look for elements with `data-i18n` and replace their textContent
   - Exposes `translatePage(lang)` globally
*/
(function(){
  const translations = {
    en: {
      title: 'immi - Belong faster in a new country',
      'nav.features': 'Features',
      'nav.useCases': 'Use Cases',
      'nav.howItWorks': 'How It Works',
      'nav.impact': 'Impact',
      'nav.faq': 'FAQ',
      'hero.pill': 'Support for an accessible and familiar world',
      'hero.title': 'Belong anywhere.',
      'hero.subtitle': 'Meet <span class="immi-highlight">immi</span> - where language learning meets life navigation. Get native language support, cultural context, and confidence.',
      'hero.try': 'Try immi ⤴',
      'hero.see': 'See how it works ⤵',
      'trust.h3': 'Built for the New Citizen',
      'trust.p': 'Designed for newcomers, refugees, and families navigating new lives.',
      'features.title': 'Everyday superpowers.',
      'cta.title': 'Ready to feel at home?',
      'cta.text': 'Join the waitlist and be the first to experience a world without language barriers. Your journey to belonging starts here.',
      'cta.button': 'Try immi',
      'footer.brandP': 'A life-aid for newcomers.',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.contact': 'Contact',
      'footer.social': 'Twitter/X',
      'page.interface.title': 'Explore the <span class="immi-highlight">immi</span> System',
      'page.start.scanning': 'Start Scanning',
      'page.start.roleplay': 'Start RolePlay'
    },
    zh: {
      title: 'immi - 更快融入新国家',
      'nav.features': '功能',
      'nav.useCases': '使用场景',
      'nav.howItWorks': '如何运作',
      'nav.impact': '影响',
      'nav.faq': '常见问题',
      'hero.pill': '支持一个无障碍且熟悉的世界',
      'hero.title': '随处归属。',
      'hero.subtitle': '认识 <span class="immi-highlight">immi</span> — 语言学习与生活导航的结合。提供母语支持、文化背景和信心。',
      'hero.try': '试用 immi ⤴',
      'hero.see': '查看如何工作 ⤵',
      'trust.h3': '为新公民而建',
      'trust.p': '为新移民、难民和家庭设计，帮助他们在新生活中导航。',
      'features.title': '日常超能力。',
      'cta.title': '准备好感觉像在家了吗？',
      'cta.text': '加入候补名单，成为第一个体验无语言障碍世界的人。你的归属之旅从这里开始。',
      'cta.button': '试用 immi',
      'footer.brandP': '为新来者提供生活援助。',
      'footer.privacy': '隐私',
      'footer.terms': '条款',
      'footer.contact': '联系',
      'footer.social': '推特/X',
      'page.interface.title': '探索 <span class="immi-highlight">immi</span> 系统',
      'page.start.scanning': '开始扫描',
      'page.start.roleplay': '开始角色扮演'
    },
    fr: {
      title: 'immi - S’intégrer plus vite dans un nouveau pays',
      'nav.features': 'Fonctionnalités',
      'nav.useCases': 'Cas d’utilisation',
      'nav.howItWorks': 'Comment ça marche',
      'nav.impact': 'Impact',
      'nav.faq': 'FAQ',
      'hero.pill': 'Soutenir un monde accessible et familier',
      'hero.title': 'Se sentir chez soi, partout.',
      'hero.subtitle': 'Découvrez <span class="immi-highlight">immi</span> — où l’apprentissage des langues rencontre la navigation dans la vie quotidienne. Obtenez un soutien natif, du contexte culturel et de la confiance.',
      'hero.try': 'Essayer immi ⤴',
      'hero.see': 'Voir comment ça marche ⤵',
      'trust.h3': 'Conçu pour le nouvel·le citoyen·ne',
      'trust.p': 'Conçu pour les nouveaux arrivants, les réfugiés et les familles naviguant une nouvelle vie.',
      'features.title': 'Super-pouvoirs du quotidien.',
      'cta.title': 'Prêt à vous sentir chez vous ?',
      'cta.text': 'Rejoignez la liste d’attente et soyez les premiers à expérimenter un monde sans barrières linguistiques. Votre parcours vers l’appartenance commence ici.',
      'cta.button': 'Essayer immi',
      'footer.brandP': 'Une aide pour la vie des nouveaux arrivants.',
      'footer.privacy': 'Confidentialité',
      'footer.terms': 'Conditions',
      'footer.contact': 'Contact',
      'footer.social': 'Twitter/X',
      'page.interface.title': 'Explorez le <span class="immi-highlight">immi</span> système',
      'page.start.scanning': 'Commencer la numérisation',
      'page.start.roleplay': 'Commencer le jeu de rôle'
    },
    hi: {
      title: 'immi - नए देश में तेज़ी से घरबद्ध हों',
      'nav.features': 'विशेषताएँ',
      'nav.useCases': 'उपयोग के मामले',
      'nav.howItWorks': 'यह कैसे काम करता है',
      'nav.impact': 'प्रभाव',
      'nav.faq': 'बार-बार पूछे जाने वाले प्रश्न',
      'hero.pill': 'एक सुलभ और परिचित दुनिया के लिए समर्थन',
      'hero.title': 'कहीं भी अपना महसूस करें।',
      'hero.subtitle': '<span class="immi-highlight">immi</span> से मिलें - जहाँ भाषा सीखना जीवन नेविगेशन से मिलता है। मातृभाषा समर्थन, सांस्कृतिक संदर्भ और आत्मविश्वास प्राप्त करें।',
      'hero.try': 'immi आज़माएँ ⤴',
      'hero.see': 'देखें यह कैसे काम करता है ⤵',
      'trust.h3': 'नए नागरिक के लिए बनाया गया',
      'trust.p': 'नवागंतुकों, शरणार्थियों और परिवारों के लिए डिजाइन किया गया।',
      'features.title': 'दैनिक सुपरपावर।',
      'cta.title': 'क्या आप घर जैसा महसूस करने के लिए तैयार हैं?',
      'cta.text': 'वेटलिस्ट में शामिल हों और भाषा बाधाओं के बिना दुनिया का अनुभव करने वाले पहले लोगों में से एक बनें। आपकी यात्रा यहाँ से शुरू होती है।',
      'cta.button': 'immi आज़माएँ',
      'footer.brandP': 'नवागंतुकों के लिए जीवन- सहायक।',
      'footer.privacy': 'गोपनीयता',
      'footer.terms': 'नियम',
      'footer.contact': 'संपर्क',
      'footer.social': 'ट्विटर/X',
      'page.interface.title': 'immi प्रणाली का <span class="immi-highlight">immi</span> अन्वेषण करें',
      'page.start.scanning': 'स्कैनिंग शुरू करें',
      'page.start.roleplay': 'रोलप्ले शुरू करें'
    }
  };

  function translatePage(lang){
    if (!translations[lang]) lang = 'en';

    // document title
    if (translations[lang].title) {
      document.title = translations[lang].title;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!key) return;

      const txt = translations[lang][key];
      if (txt !== undefined) {
        if (
          el.tagName.toLowerCase() === 'input' ||
          el.tagName.toLowerCase() === 'textarea'
        ) {
          el.placeholder = txt;
        } else {
          el.innerHTML = txt; // only instance with span will get highlighted
        }
      }
    });
  }

  // expose
  window.translatePage = translatePage;

  // auto-init on DOM ready using saved language
  document.addEventListener('DOMContentLoaded', () => {
    try { const saved = localStorage.getItem('immi-lang') || 'en'; translatePage(saved); } catch (err) { translatePage('en'); }
  });

})();
