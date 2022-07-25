/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SPACE: 'Space',
            FOOTBALL: 'Football',
            SKILL_NAME: '%s Facts',
            GET_FACT_MESSAGE: 'Here\'s your fact : ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Here\'s your fact : ',
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Facts skill can\'t help you with that.  It can help you discover facts if you say tell me a fact. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            PREFERENCE_ERROR: 'Sorry, I am unable to retrieve your personalized identity.',
            STOP_MESSAGE: 'Goodbye!',
            CONFIRMATION_MESSAGE: 'Ok %s, I have added %s as a favorite topic',
            SPACE_FACTS:
                [
                    'A year on Mercury is just 88 days long.',
                    'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                    'On Mars, the Sun appears about half the size as it does on Earth.',
                    'Jupiter has the shortest day of all the planets.',
                    'The Sun is an almost perfect sphere.',
                ],
            FOOTBALL_FACTS:
                [
                    'Football is the most watched and most played sport on earth.',
                    'The fastest goal ever scored took only 2.4 seconds.',
                    'Only 8 countries have won the World Cup.',
                ],
        }
    },
    es: {
        translation: {
            SPACE: 'Espacio',
            FOOTBALL: 'Fútbol',            
            SKILL_NAME: '%s Curiosidades',
            GET_FACT_MESSAGE: 'Aquí está tu curiosidad: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Vale %s, Aquí está tu curiosidad: ',
            HELP_MESSAGE: 'Puedes decir dime una curiosidad del espacio o puedes decir salir... Cómo te puedo ayudar?',
            HELP_REPROMPT: 'Como te puedo ayudar?',
            FALLBACK_MESSAGE: 'La habilidad de Hechos no puede ayudarte con eso. Puede ayudarte a descubrir hechos si dices cuéntame un hecho. ¿En qué te puedo ayudar?',
            FALLBACK_REPROMPT: 'Como te puedo ayudar?',
            ERROR_MESSAGE: 'Lo sentimos, se ha producido un error.',
            PREFERENCE_ERROR: 'Lo siento, no puedo recuperar su identidad personalizada',
            STOP_MESSAGE: 'Adiós!',
            CONFIRMATION_MESSAGE: 'Vale %s, he añadido %s como curiosidad favorita.',
            SPACE_FACTS:
                [
                    'Un año en Mercurio es de solo 88 días',
                    'A pesar de estar más lejos del Sol, Venus tiene temperaturas más altas que Mercurio',
                    'En Marte el sol se ve la mitad de grande que en la Tierra',
                    'Jupiter tiene el día más corto de todos los planetas',
                    'El sol es una esféra casi perfecta',
                ],
            FOOTBALL_FACTS:
                [
                    'El fútbol es el deporte más visto y más jugado del mundo.',
                    'El gol más rápido jamás marcado tomó solo 2.4 segundos',
                    'Solo 8 países han ganado la Copa del Mundo',
                ],
        }
    },
    de: {
        translation: {
            SPACE: 'Plads',
            FOOTBALL: 'Fodbold',            
            SKILL_NAME: '%s Fakten',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            FALLBACK_MESSAGE: 'Fakta-færdigheden kan ikke hjælpe dig med det. Det kan hjælpe dig med at finde fakta, hvis du siger fortæl mig en kendsgerning. Hvad kan jeg hjælpe dig med?',
            FALLBACK_REPROMPT: 'Wie kann ich dir helfen?',
            ERROR_MESSAGE: 'Es ist ein Fehler aufgetreten.',
            PREFERENCE_ERROR: 'Jeg kan desværre ikke hente din personlige identitet',
            STOP_MESSAGE: 'Auf Wiedersehen!',
            CONFIRMATION_MESSAGE: 'Ok %s, jeg har tilføjet %s som et yndlingsemne.',
            SPACE_FACTS:
                [
                    'Ein Jahr dauert auf dem Merkur nur 88 Tage.',
                    'Die Venus ist zwar weiter von der Sonne entfernt, hat aber höhere Temperaturen als Merkur.',
                    'Venus dreht sich entgegen dem Uhrzeigersinn, möglicherweise aufgrund eines früheren Zusammenstoßes mit einem Asteroiden.',
                    'Auf dem Mars erscheint die Sonne nur halb so groß wie auf der Erde.',
                    'Jupiter hat den kürzesten Tag aller Planeten.',
                ],
            FOOTBALL_FACTS:
                [
                    'Fodbold er den mest sete og mest spillede sport på jorden.',
                    'Det hurtigste mål, der nogensinde blev scoret, tog kun 2,4 sekunder.',
                    'Kun 8 lande har vundet verdensmesterskabet.',
                ],
        }
    },
    ja: {
        translation: {
            SPACE: 'スペース',
            FOOTBALL: 'フットボール',            
            SKILL_NAME: '%s 日本語版豆知識',
            GET_FACT_MESSAGE: '知ってましたか？',
            GET_FACT_MESSAGE_PERSONALIZED: 'わかりました%sここにあなたの事実があります',
            HELP_MESSAGE: '豆知識を聞きたい時は「豆知識」と、終わりたい時は「おしまい」と言ってください。どうしますか？',
            HELP_REPROMPT: 'どうしますか？',
            ERROR_MESSAGE: '申し訳ありませんが、エラーが発生しました',
            PREFERENCE_ERROR: '申し訳ありませんが、個人のIDを取得できません',
            STOP_MESSAGE: 'さようなら',
            CONFIRMATION_MESSAGE: 'わかりました%s、お気に入りのトピックとして%sを追加しました',
            SPACE_FACTS:
                [
                    '水星の一年はたった88日です。',
                    '金星は水星と比べて太陽より遠くにありますが、気温は水星よりも高いです。',
                    '金星は反時計回りに自転しています。過去に起こった隕石の衝突が原因と言われています。',
                    '火星上から見ると、太陽の大きさは地球から見た場合の約半分に見えます。',
                    '木星の<sub alias="いちにち">1日</sub>は全惑星の中で一番短いです。',
                    '天の川銀河は約50億年後にアンドロメダ星雲と衝突します。',
                ],
            FOOTBALL_FACTS:
                [
                    'サッカーは、地球上で最も注目され、最もプレイされているスポーツです',
                    'これまでに得点した最速のゴールはわずか2.4秒でした',
                    'ワールドカップで優勝したのは8か国だけです',
                ],
        }
    },
    fr: {
        translation: {
            SPACE: 'Espace',
            FOOTBALL: 'Football',            
            SKILL_NAME: '%s Anecdotes',
            GET_FACT_MESSAGE: 'Voici votre anecdote : ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Voici votre anecdote : ',
            HELP_MESSAGE: 'Vous pouvez dire donne-moi une anecdote, ou, vous pouvez dire stop... Comment puis-je vous aider?',
            HELP_REPROMPT: 'Comment puis-je vous aider?',
            FALLBACK_MESSAGE: 'La compétence Faits ne peut pas vous aider. Cela peut vous aider à découvrir des faits si vous dites dites-moi un fait. En quoi puis-je vous aider?',
            FALLBACK_REPROMPT: 'Comment puis-je vous aider?',
            ERROR_MESSAGE: 'Désolé, une erreur est survenue.',
            PREFERENCE_ERROR: 'Désolé, je n\'arrive pas à récupérer votre identité personnalisée',
            STOP_MESSAGE: 'Au revoir!',
            CONFIRMATION_MESSAGE: 'Ok %s, j\'ai ajouté %s comme sujet favori.',
            SPACE_FACTS:
                [
                    'Une année sur Mercure ne dure que 88 jours.',
                    'En dépit de son éloignement du Soleil, Vénus connaît des températures plus élevées que sur Mercure.',
                    'Sur Mars, le Soleil apparaît environ deux fois plus petit que sur Terre.',
                    'De toutes les planètes, Jupiter a le jour le plus court.',
                    'Le Soleil est une sphère presque parfaite.',
                ],
            FOOTBALL_FACTS:
                [
                    'Le football est le sport le plus regardé et le plus pratiqué sur terre.',
                    'Le but le plus rapide jamais marqué n\'a pris que 2,4 secondes.',
                    'Seuls 8 pays ont remporté la Coupe du monde.',
                ],
        }
    },
    it: {
        translation: {
            SPACE: 'Spazio',
            FOOTBALL: 'Calcio',            
            SKILL_NAME: '%s Aneddoti',
            GET_FACT_MESSAGE: 'Ecco il tuo aneddoto: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s ,Ecco il tuo aneddoto: ',
            HELP_MESSAGE: 'Puoi chiedermi un aneddoto dallo spazio o puoi chiudermi dicendo "esci"... Come posso aiutarti?',
            HELP_REPROMPT: 'Come posso aiutarti?',
            FALLBACK_MESSAGE: 'L\'abilità Fatti non può aiutarti in questo. Può aiutarti a scoprire i fatti se dici dimmi un fatto. In cosa posso aiutarti?',
            FALLBACK_REPROMPT: 'Come posso aiutarti?',
            ERROR_MESSAGE: 'Spiacenti, si è verificato un errore.',
            PREFERENCE_ERROR: 'Mi dispiace, non riesco a recuperare la tua identità personalizzata',
            STOP_MESSAGE: 'A presto!',
            CONFIRMATION_MESSAGE: 'Ok %s, ho aggiunto %s come argomento preferito',
            SPACE_FACTS:
                [
                    'Sul pianeta Mercurio, un anno dura solamente 88 giorni.',
                    'Pur essendo più lontana dal Sole, Venere ha temperature più alte di Mercurio.',
                    'Su Marte il sole appare grande la metà che su la terra. ',
                    'Tra tutti i pianeti del sistema solare, la giornata più corta è su Giove.',
                    'Il Sole è quasi una sfera perfetta.',
                ],
            FOOTBALL_FACTS:
                [
                    'Il calcio è lo sport più seguito e più giocato al mondo.',
                    'Il gol più veloce mai segnato ha richiesto solo 2,4 secondi.',
                    'Solo 8 paesi hanno vinto la Coppa del Mondo.',
                ],
        }
    },
    pt: {
        translation: {
            SPACE: 'Espaço',
            FOOTBALL: 'Futebol',            
            SKILL_NAME: '%s Fatos',
            GET_FACT_MESSAGE: 'Aqui vai: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s Aqui vai: ',
            HELP_MESSAGE: 'Você pode me perguntar por um fato interessante sobre o espaço, ou, fexar a skill. Como posso ajudar?',
            HELP_REPROMPT: 'O que vai ser?',
            FALLBACK_MESSAGE: 'A habilidade Fatos não pode ajudá-lo com isso. Pode ajudá-lo a descobrir fatos, se você disser conte-me um fato. Com o que posso ajudar?',
            FALLBACK_REPROMPT: 'Eu posso contar fatos sobre o espaço. Como posso ajudar?',
            ERROR_MESSAGE: 'Desculpa, algo deu errado.',
            PREFERENCE_ERROR: 'Não consigo recuperar sua identidade personalizada',
            STOP_MESSAGE: 'Tchau!',
            CONFIRMATION_MESSAGE: 'Ok %s, adicionei %s como um tópico favorito',
            SPACE_FACTS:
                [
                    'Um ano em Mercúrio só dura 88 dias.',
                    'Apesar de ser mais distante do sol, Venus é mais quente que Mercúrio.',
                    'Visto de marte, o sol parece ser metade to tamanho que nós vemos da terra.',
                    'Júpiter tem os dias mais curtos entre os planetas no nosso sistema solar.',
                    'O sol é quase uma esfera perfeita.',
                ],
            FOOTBALL_FACTS:
                [
                    'O futebol é o esporte mais assistido e praticado no planeta.',
                    'O gol mais rápido já marcado levou apenas 2,4 segundos',
                    'Apenas 8 países ganharam a Copa do Mundo',
                ],
        }
    },
    hi: {
        translation: {
            SPACE: 'अंतरिक्षान',
            FOOTBALL: 'Football',          
            SKILL_NAME: '%s facts',
            GET_FACT_MESSAGE: 'ये लीजिए आपका fact: ',
            GET_FACT_MESSAGE_PERSONALIZED: 'ठीक है %s, ये लीजिए आपका fact: ',
            HELP_MESSAGE: 'आप मुझे नया fact सुनाओ बोल सकते हैं या फिर exit भी बोल सकते हैं... आप क्या करना चाहेंगे?',
            HELP_REPROMPT: 'मैं आपकी किस प्रकार से सहायता कर सकती हूँ?',
            ERROR_MESSAGE: 'सॉरी, मैं वो समज नहीं पायी. क्या आप repeat कर सकते हैं?',
            PREFERENCE_ERROR: 'क्षमा करें, मैं आपकी व्यक्तिगत पहचान पुनः प्राप्त करने में असमर्थ ',
            STOP_MESSAGE: 'अच्छा bye, फिर मिलते हैं',
            CONFIRMATION_MESSAGE: 'ठीक है %s, मैंने %s को पसंदीदा विषय के रूप में जोड़ा है',
            SPACE_FACTS:
                [
                    'बुध गृह में एक साल में केवल अठासी दिन होते हैं',
                    'सूरज से दूर होने के बावजूद, Venus का तापमान Mercury से ज़्यादा होता हैं',
                    'Earth के तुलना से Mars में सूरज का size तक़रीबन आधा हैं',
                    'सारे ग्रहों में Jupiter का दिन सबसे कम हैं',
                    'सूरज का shape एकदम गेंद आकार में हैं'
                ],
            FOOTBALL_FACTS:
                [
                    'फुटबॉल धरती पर सबसे ज्यादा देखा जाने वाला और सबसे ज्यादा खेला जाने वाला खेल है',
                    'अब तक का सबसे तेज़ गोल करने में केवल 2.4 सेकंड का समय लगा',
                    'केवल 8 देशों ने विश्व कप जीता है',
                ],
        }
    },
    ar: {
        translation: {
            SPACE: 'فضاء',
            FOOTBALL: 'كرة القدم',            
            SKILL_NAME: '%s حقيقة',
            GET_FACT_MESSAGE: 'المعلومة اليوم هي',
            GET_FACT_MESSAGE_PERSONALIZED: 'حسنًا %s المعلومات اليوم هي',
            HELP_MESSAGE: 'تقدر تقول أحكي لي معلومة عن الفضاء أو تقدر تقول خلاص للخروج من اللعبة. كيف ممكن أساعدك؟',
            HELP_REPROMPT: 'كيف أقدر أساعدك؟',
            FALLBACK_MESSAGE: 'مهارة الحقائق لا يمكن أن تساعدك في ذلك. يمكن أن يساعدك في اكتشاف الحقائق إذا قلت قل لي حقيقة. بماذا يمكنني مساعدتك؟',
            FALLBACK_REPROMPT: 'كيف أقدر أساعدك؟',
            ERROR_MESSAGE: 'أعتذر، حدث خطأ.',
            PREFERENCE_ERROR: 'عذرًا ، لا يمكنني استرداد هويتك الشخصية',
            STOP_MESSAGE: 'مع السلامة',
            CONFIRMATION_MESSAGE: 'حسنًا %s ، لقد أضفت %s كموضوع حقائق مفضل',
            SPACE_FACTS:
                [
                    'عدد أيام السنة على عطارد هو 88 يوم فقط.',
                    'على الرغم من كون كوكب الزهرة بعيد عن الشمس، إلا أنه يعاني من درجات حرارة أعلى من تلك على عطارد.',
                    'على سطح المريخ، تظهر الشمس حوالي نصف الحجم الذي نراه من سطح الأرض.',
                    'كوكب المشتري لديه أقصر يوم بين جميع الكواكب.',
                    'يكاد يكون شكل الشمس كرة مثالية.'
                ],
            FOOTBALL_FACTS:
                [
                    'كرة القدم هي الرياضة الأكثر مشاهدة والأكثر لعبًا على وجه الأرض',
                    'أسرع هدف تم تسجيله استغرق 2.4 ثانية فقط',
                    'فازت 8 دول فقط بكأس العالم',
                ],
        }
    }
}