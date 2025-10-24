import { useState } from 'react';
import { X, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Privacy Policy",
      appName: "File Metadata Changer",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          text: "By using File Metadata Changer, you agree to use this tool responsibly and in accordance with all applicable laws and regulations."
        },
        {
          heading: "2. Intended Use",
          text: "This application is designed for legitimate purposes such as organizing files, correcting metadata errors, or managing personal file information. Any use for fraudulent, illegal, or malicious purposes is strictly prohibited."
        },
        {
          heading: "3. User Responsibility",
          text: "You are solely responsible for how you use this tool. The developer does not endorse or support any illegal or unethical use of File Metadata Changer, including but not limited to: tampering with evidence, forging documents, violating data integrity requirements, or any other unlawful activities."
        },
        {
          heading: "4. Limitation of Liability",
          text: "The developer of File Metadata Changer shall not be held responsible or liable for any misuse of this application. By using this tool, you acknowledge that you assume all risks and responsibilities for your actions."
        },
        {
          heading: "5. No Warranty",
          text: "This application is provided 'as is' without any warranties of any kind. The developer makes no guarantees about the accuracy, reliability, or suitability of the application for any particular purpose."
        },
        {
          heading: "6. Data Privacy",
          text: "All file processing is performed locally on your device. No files or metadata are uploaded to any server or shared with third parties. Your data remains completely private and under your control."
        },
        {
          heading: "7. Legal Compliance",
          text: "Users must ensure their use of this application complies with all applicable local, state, national, and international laws. Violation of laws through misuse of this tool is the sole responsibility of the user."
        },
        {
          heading: "8. Indemnification",
          text: "By using File Metadata Changer, you agree to indemnify and hold harmless the developer from any claims, damages, or legal actions arising from your use or misuse of the application."
        }
      ],
      lastUpdated: "Last Updated: October 24, 2025"
    },
    te: {
      title: "గోప్యతా విధానం",
      appName: "ఫైల్ మెటాడేటా చేంజర్",
      sections: [
        {
          heading: "1. నిబంధనల అంగీకారం",
          text: "ఫైల్ మెటాడేటా చేంజర్‌ను ఉపయోగించడం ద్వారా, మీరు ఈ సాధనాన్ని బాధ్యతాయుతంగా మరియు అన్ని వర్తించే చట్టాలు మరియు నిబంధనలకు అనుగుణంగా ఉపయోగించడానికి అంగీకరిస్తున్నారు."
        },
        {
          heading: "2. ఉద్దేశిత ఉపయోగం",
          text: "ఈ అప్లికేషన్ ఫైల్‌లను నిర్వహించడం, మెటాడేటా లోపాలను సరిదిద్దడం లేదా వ్యక్తిగత ఫైల్ సమాచారాన్ని నిర్వహించడం వంటి చట్టబద్ధమైన ప్రయోజనాల కోసం రూపొందించబడింది. మోసపూరిత, చట్టవిరుద్ధ లేదా హానికరమైన ప్రయోజనాల కోసం ఏదైనా ఉపయోగం ఖచ్చితంగా నిషేధించబడింది."
        },
        {
          heading: "3. వినియోగదారు బాధ్యత",
          text: "మీరు ఈ సాధనాన్ని ఎలా ఉపయోగిస్తారనే విషయానికి మీరు మాత్రమే బాధ్యులు. డెవలపర్ ఫైల్ మెటాడేటా చేంజర్ యొక్క ఏ చట్టవిరుద్ధమైన లేదా అనైతిక ఉపయోగాన్ని ఆమోదించడు లేదా మద్దతు ఇవ్వడు, ఇందులో ఇవి ఉన్నాయి కానీ వీటికే పరిమితం కాదు: సాక్ష్యాలను తారుమారు చేయడం, పత్రాలను నకిలీ చేయడం, డేటా సమగ్రత అవసరాలను ఉల్లంఘించడం లేదా ఇతర చట్టవిరుద్ధ కార్యకలాపాలు."
        },
        {
          heading: "4. బాధ్యత పరిమితి",
          text: "ఫైల్ మెటాడేటా చేంజర్ యొక్క డెవలపర్ ఈ అప్లికేషన్ యొక్క ఏ దుర్వినియోగానికి బాధ్యత వహించడు లేదా బాధ్యత వహించడు. ఈ సాధనాన్ని ఉపయోగించడం ద్వారా, మీరు మీ చర్యలకు అన్ని నష్టాలు మరియు బాధ్యతలను స్వీకరిస్తున్నారని మీరు అంగీకరిస్తున్నారు."
        },
        {
          heading: "5. వారంటీ లేదు",
          text: "ఈ అప్లికేషన్ ఎటువంటి హామీలు లేకుండా 'యథాతథంగా' అందించబడుతుంది. డెవలపర్ ఏ నిర్దిష్ట ప్రయోజనం కోసం అప్లికేషన్ యొక్క ఖచ్చితత్వం, విశ్వసనీయత లేదా అనుకూలత గురించి ఎటువంటి హామీలు ఇవ్వడు."
        },
        {
          heading: "6. డేటా గోప్యత",
          text: "అన్ని ఫైల్ ప్రాసెసింగ్ మీ పరికరంలో స్థానికంగా నిర్వహించబడుతుంది. ఫైల్‌లు లేదా మెటాడేటా ఏ సర్వర్‌కు అప్‌లోడ్ చేయబడవు లేదా మూడవ పక్షాలతో భాగస్వామ్యం చేయబడవు. మీ డేటా పూర్తిగా ప్రైవేట్‌గా మరియు మీ నియంత్రణలో ఉంటుంది."
        },
        {
          heading: "7. చట్టపరమైన అనుపాలన",
          text: "వినియోగదారులు ఈ అప్లికేషన్ యొక్క వారి ఉపయోగం అన్ని వర్తించే స్థానిక, రాష్ట్ర, జాతీయ మరియు అంతర్జాతీయ చట్టాలకు అనుగుణంగా ఉండేలా చూసుకోవాలి. ఈ సాధనాన్ని దుర్వినియోగం చేయడం ద్వారా చట్టాలను ఉల్లంఘించడం వినియోగదారు యొక్క ఏకైక బాధ్యత."
        },
        {
          heading: "8. నష్టపరిహారం",
          text: "ఫైల్ మెటాడేటా చేంజర్‌ను ఉపయోగించడం ద్వారా, మీరు అప్లికేషన్‌ను మీరు ఉపయోగించడం లేదా దుర్వినియోగం చేయడం నుండి ఉత్పన్నమయ్యే ఏవైనా దావాలు, నష్టాలు లేదా చట్టపరమైన చర్యల నుండి డెవలపర్‌ను నష్టపరిహారం చెల్లించడానికి మరియు హాని లేకుండా ఉంచడానికి అంగీకరిస్తున్నారు."
        }
      ],
      lastUpdated: "చివరిగా నవీకరించబడింది: అక్టోబర్ 24, 2025"
    },
    mr: {
      title: "गोपनीयता धोरण",
      appName: "फाइल मेटाडेटा चेंजर",
      sections: [
        {
          heading: "1. अटींची स्वीकृती",
          text: "फाइल मेटाडेटा चेंजर वापरून, तुम्ही हे साधन जबाबदारीने आणि सर्व लागू कायदे आणि नियमांच्या अनुषंगाने वापरण्यास सहमत आहात."
        },
        {
          heading: "2. इच्छित वापर",
          text: "हा अॅप्लिकेशन फाइल्स व्यवस्थित करणे, मेटाडेटा त्रुटी दुरुस्त करणे किंवा वैयक्तिक फाइल माहिती व्यवस्थापित करणे यासारख्या कायदेशीर उद्देशांसाठी डिझाइन केलेला आहे. फसव्या, बेकायदेशीर किंवा दुर्भावनापूर्ण हेतूंसाठी कोणताही वापर कठोरपणे प्रतिबंधित आहे."
        },
        {
          heading: "3. वापरकर्त्याची जबाबदारी",
          text: "तुम्ही हे साधन कसे वापरता याची जबाबदारी केवळ तुमची आहे. डेव्हलपर फाइल मेटाडेटा चेंजरच्या कोणत्याही बेकायदेशीर किंवा अनैतिक वापराचे समर्थन किंवा पाठिंबा देत नाही, यासह परंतु इतकेच मर्यादित नाही: पुराव्याशी छेडछाड करणे, दस्तऐवज खोटे तयार करणे, डेटा अखंडता आवश्यकतांचे उल्लंघन करणे किंवा इतर कोणत्याही बेकायदेशीर क्रियाकलाप."
        },
        {
          heading: "4. दायित्वाची मर्यादा",
          text: "फाइल मेटाडेटा चेंजरचा डेव्हलपर या अॅप्लिकेशनच्या कोणत्याही गैरवापरासाठी जबाबदार किंवा उत्तरदायी धरला जाणार नाही. हे साधन वापरून, तुम्ही कबूल करता की तुम्ही तुमच्या कृतींसाठी सर्व जोखीम आणि जबाबदाऱ्या स्वीकारता."
        },
        {
          heading: "5. हमी नाही",
          text: "हा अॅप्लिकेशन कोणत्याही प्रकारच्या हमीशिवाय 'जसा आहे तसा' प्रदान केला आहे. डेव्हलपर कोणत्याही विशिष्ट हेतूसाठी अॅप्लिकेशनच्या अचूकता, विश्वसनीयता किंवा योग्यतेबद्दल कोणतीही हमी देत नाही."
        },
        {
          heading: "6. डेटा गोपनीयता",
          text: "सर्व फाइल प्रक्रिया तुमच्या डिव्हाइसवर स्थानिकरित्या केली जाते. कोणत्याही फाइल्स किंवा मेटाडेटा कोणत्याही सर्व्हरवर अपलोड केला जात नाही किंवा तृतीय पक्षांसह सामायिक केला जात नाही. तुमचा डेटा पूर्णपणे खाजगी आणि तुमच्या नियंत्रणाखाली राहतो."
        },
        {
          heading: "7. कायदेशीर अनुपालन",
          text: "वापरकर्त्यांनी हे सुनिश्चित केले पाहिजे की या अॅप्लिकेशनचा त्यांचा वापर सर्व लागू स्थानिक, राज्य, राष्ट्रीय आणि आंतरराष्ट्रीय कायद्यांचे पालन करतो. या साधनाच्या गैरवापराद्वारे कायद्यांचे उल्लंघन करणे ही केवळ वापरकर्त्याची जबाबदारी आहे."
        },
        {
          heading: "8. नुकसानभरपाई",
          text: "फाइल मेटाडेटा चेंजर वापरून, तुम्ही अॅप्लिकेशनच्या तुमच्या वापरामुळे किंवा गैरवापरामुळे उद्भवलेल्या कोणत्याही दाव्यांपासून, नुकसानीपासून किंवा कायदेशीर कारवायांपासून डेव्हलपरला नुकसानभरपाई देण्यास आणि हानीमुक्त ठेवण्यास सहमत आहात."
        }
      ],
      lastUpdated: "शेवटचे अद्यतन: ऑक्टोबर 24, 2025"
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Privacy Policy
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">
                {content[language].title}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 border-b">
              <Globe className="w-5 h-5 text-gray-600" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="te">తెలుగు (Telugu)</option>
                <option value="mr">मराठी (Marathi)</option>
              </select>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-6 flex-1">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {content[language].appName}
                </h3>
              </div>

              <div className="space-y-6">
                {content[language].sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {section.heading}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t text-sm text-gray-500">
                {content[language].lastUpdated}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-gray-50">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}