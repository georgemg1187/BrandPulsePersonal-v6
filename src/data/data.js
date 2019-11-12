const Metrics = {
    english: {
        nextBtn: "Next",
        submitBtn: "Submit",
        endMessage: "Thank You",
        menuItems: {
            brandAwareness: {
                label: "Brand Awareness",
                value: "brandAwareness"
            },
            adRecallAdAwareness: {
                label: "Ad recall/ ad awareness",
                value: "adRecallAdAwareness"
            },
            aidedAdRecall: {
                label: "Aided ad recall",
                value: "aidedAdRecall"
            },
            messageAssociation: {
                label: "Message association",
                value: "messageAssociation"
            },
            favourability: {
                label: "Favourability (revised)",
                value: "favourability"
            },
            consideration: {
                label: "Consideration",
                value: "consideration"
            },
            purchaseIntent: {
                label: "Purchase Intent (revised)",
                value: "purchaseIntent"
            },
            actionIntent: {
                label: "Action intent (new)",
                value: "actionIntent"
            },
            custom: {
                label: "Custom (new)",
                value: "custom"
            }
        },
        type: {
            adRecallAdAwareness: {
                question: "Do you recall seeing an ad for any of the following (brand category) online recently? (Tick all that apply)",
                answers: ["Brand A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "None of the above"
                }
            },
            aidedAdRecall: {
                question: "Do you recall seeing an ad for (the brand) recently?",
                answers: ["Yes", "No", "I don't know"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            brandAwareness: {
                question: "Which of the following (brand/product category brands) have you heard of? (tick all that apply)",
                answers: ["Brand A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "None of the above"
                }
            },
            messageAssociation: {
                question: "Which of the following brands do you most associate with (Message)?",
                answers: ["Brand A", "B", "C", "D"],
                multiple: false,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "None of the above"
                }
            },
            favourability: {
                question: "What is your opinion of (brand/product)?",
                answers: ["I like it a lot", "I like it", "I neither like nor dislike it", "I don't like it", "I hate it"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            consideration: {
                question: " Which of these brands would you consider purchasing? (tick all that apply)",
                answers: ["Brand A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "None of the above"
                }
            },
            purchaseIntent: {
                question: "How likely are you (to purchase) (brand)?",
                answers: ["Very likely", "Somewhat likely", "Neither Likely nor Unlikely", "Somewhat unlikely", "Very unlikely\n"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            actionIntent: {
                question: "How likely are you to (undertake a specific action)?",
                answers: ["Very likely", "Somewhat likely", "Neither Likely nor Unlikely", "Somewhat unlikely", "Very unlikely"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            custom: {
                question: "",
                answers: ["", "", "", ""],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: true,
                    checked: false,
                    value: ""
                }
            }
        }
    },

    //French
    french: {
        nextBtn: "Suivant",
        submitBtn: "Soumettre",
        endMessage: "Merci!",
        menuItems: {
            brandAwareness: {
                label: "Notoriété",
                value: "brandAwareness"
            },
            adRecallAdAwareness: {
                label: "Souvenir publicitaire",
                value: "adRecallAdAwareness"
            },
            aidedAdRecall: {
                label: "Souvenir publicitaire assisté",
                value: "aidedAdRecall"
            },
            messageAssociation: {
                label: "Association du message",
                value: "messageAssociation"
            },
            favourability: {
                label: "Image",
                value: "favourability"
            },
            consideration: {
                label: "Considération",
                value: "consideration"
            },
            purchaseIntent: {
                label: "Purchase intention",
                value: "purchaseIntent"
            },
            actionIntent: {
                label: "Action intention",
                value: "actionIntent"
            },
            custom: {
                label: "Custom (new)",
                value: "custom"
            }
        },
        type: {
            adRecallAdAwareness: {
                question: "Parmi les marques de (catégorie du produit testé) suivantes, pour lesquelles vous souvenez-vous avoir vu de la publicité en ligne récemment? (Sélectionnez tout ce qui s'applique)",
                answers: ["Marque A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Aucune de ces marques"
                }
            },
            aidedAdRecall: {
                question: "Vous souvenez-vous avoir vu une publicité pour (la marque) récemment? ",
                answers: ["Oui", "Non", "Je ne sais pas"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            brandAwareness: {
                question: "Parmi les marques de (catégorie du produit testé) suivantes, de quelles marques avez-vous déjà entendu parler? (Sélectionnez tout ce qui s'applique)",
                answers: ["Marque A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Aucune de ces marques"
                }
            },
            messageAssociation: {
                question: "Parmi les marques suivantes, laquelle associez-vous le plus au message (message publicitaire de la marque)? ",
                answers: ["Marque A", "B", "C", "D"],
                multiple: false,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Aucune de ces marques"
                }
            },
            favourability: {
                question: "Quelle est votre opinion générale de (la marque/produit)?",
                answers: ["Je l'apprécie", "Neutre", "Je ne l'apprécie pas", "Je ne sais pas "],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            consideration: {
                question: " Parmi les marques suivantes, lesquelles considéreriez-vous pour un futur achat? (Sélectionnez tout ce qui s'applique)",
                answers: ["Marque A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Aucune de ces marques"
                }
            },
            purchaseIntent: {
                question: "Quelle est la probilité que vous (achetiez un produit de la marque)?",
                answers: ["Très probable", "Plutôt probable", "Neutre", "Peu probable", "Trés impropable "],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            actionIntent: {
                question: "Quelle est la probilité que vous (réalisiez cette action spécifique)?",
                answers: ["Très probable", "Plutôt probable", "Neutre", "Peu probable", "Trés impropable "],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            custom: {
                question: "",
                answers: ["", "", "", ""],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: true,
                    checked: false,
                    value: ""
                }
            }
        }
    },

    //spanish
    spanish: {
        nextBtn: "Siguiente",
        submitBtn: "Enviar",
        endMessage: "Gracias",
        menuItems: {
            brandAwareness: {
                label: "Recuerdo de marca",
                value: "brandAwareness"
            },
            adRecallAdAwareness: {
                label: "Recuerdo publicitario",
                value: "adRecallAdAwareness"
            },
            aidedAdRecall: {
                label: "Recuerdo publicitario sugerido",
                value: "aidedAdRecall"
            },
            messageAssociation: {
                label: "Asociación del mensaje",
                value: "messageAssociation"
            },
            favourability: {
                label: "Favorabilidad",
                value: "favourability"
            },
            consideration: {
                label: "Consideración",
                value: "consideration"
            },
            purchaseIntent: {
                label: "Intención de compra",
                value: "purchaseIntent"
            },
            actionIntent: {
                label: "Intención de realizar alguna acción",
                value: "actionIntent"
            },
            custom: {
                label: "Custom",
                value: "custom"
            }
        },
        type: {
            adRecallAdAwareness: {
                question: "¿Cuál de las siguientes marcas de (catergoría de marca) ha visto anunciada recientemente en Internet?",
                answers: ["Marca A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Ninguna de estas"
                }
            },
            aidedAdRecall: {
                question: "¿Recuerda haber visto publicidad de (la marca) recientemente en Internet? ",
                answers: ["Si", "No", "No sé"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            brandAwareness: {
                question: "¿Cuál de las siguientes (marcas / marcas de ...) conoce?",
                answers: ["Marca A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Ninguna de estas"
                }
            },
            messageAssociation: {
                question: "¿Qué marca asocia más con (mensaje de la marca)?",
                answers: ["Marca A", "B", "C", "D"],
                multiple: false,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Ninguna de estas"
                }
            },
            favourability: {
                question: "¿Cúal es su opinión general acerca de (marca/producto)?",
                answers: ["Muy favorable", "Algo favorable", "Neutra", "Poco favorable", "Nada favorable"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            consideration: {
                question: "¿Cuál de las siguientes marcas de (categoría de producto) consideraría comprar?",
                answers: ["Marca A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Ninguna de estas"
                }
            },
            purchaseIntent: {
                question: "¿Qué probabilidad hay de que compre algún producto de la marca (marca)?",
                answers: ["Muy probable", "Algo probable", "Neutro", "Poco probable", "Nada probable"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            actionIntent: {
                question: "¿Qué probabilidad hay de que (realices alguna acción)?",
                answers: ["Muy probable", "Algo probable", "Neutro", "Poco probable", "Nada probable"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            custom: {
                question: "",
                answers: ["", "", "", ""],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: true,
                    checked: false,
                    value: ""
                }
            }
        }
    },

    //Italian
    italian: {
        nextBtn: "Successiva",
        submitBtn: "Invia",
        endMessage: "Grazie!",
        menuItems: {
            brandAwareness: {
                label: "Brand Awareness",
                value: "brandAwareness"
            },
            adRecallAdAwareness: {
                label: "Ad recall/ ad awareness",
                value: "adRecallAdAwareness"
            },
            aidedAdRecall: {
                label: "Ad recall assistita",
                value: "aidedAdRecall"
            },
            messageAssociation: {
                label: "Associazione del messaggio",
                value: "messageAssociation"
            },
            favourability: {
                label: "Brand/Product Favourability",
                value: "favourability"
            },
            consideration: {
                label: "Consideration",
                value: "consideration"
            },
            purchaseIntent: {
                label: "Purchase Intent",
                value: "purchaseIntent"
            },
            actionIntent: {
                label: "Action Intent",
                value: "actionIntent"
            },
            custom: {
                label: "Custom",
                value: "custom"
            }
        },
        type: {
            adRecallAdAwareness: {
                question: "Ricordi di aver visto online di recente qualche annuncio di (categorie di brand)? (Seleziona tutte le risposte corrette)",
                answers: ["Brand A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Nessuno di questi"
                }
            },
            aidedAdRecall: {
                question: "Ricordi di aver visto di recente un annuncio di (brand)?",
                answers: ["Sì", "No", "Non lo so"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            brandAwareness: {
                question: "Quale tra i seguenti (brand/prodotti di categoria dei brand) conosci? (Seleziona tutte le risposte corrette)",
                answers: ["Brand A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Nessuno di questi"
                }
            },
            messageAssociation: {
                question: "A quale tra i seguenti brand associ maggiormente (il messaggio)?",
                answers: ["Brand A", "B", "C", "D"],
                multiple: false,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Nessuno di questi"
                }
            },
            favourability: {
                question: "Qual è la tua opinione su (brand/prodotto)?",
                answers: ["Mi piace molto", "mi piace", "Nè mi piace nè non mi piace", "Non mi piace", "Non mi piace affatto"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            consideration: {
                question: "Di quali tra i seguenti brand considereresti l'acquisto? (Seleziona tutte le risposte corrette)",
                answers: ["Brand A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Nessuno di questi"
                }
            },
            purchaseIntent: {
                question: "Quanto è probabile (che acquisterai) (brand)?",
                answers: ["Molto probabile", "Abbastanza probabile", "Neutro", "Abbastanza improbabile", "Molto improbabile"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            actionIntent: {
                question: "Quanto è probabile (chu tu compia una determinata azione)?",
                answers: ["Molto probabile", "Abbastanza probabile", "Neutro", "Abbastanza improbabile", "Molto improbabile"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            custom: {
                question: "",
                answers: ["", "", "", ""],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: true,
                    checked: false,
                    value: ""
                }
            }
        }
    },

    //german
    german: {
        nextBtn: "Nächste",
        submitBtn: "Absenden",
        endMessage: "Danke!",
        menuItems: {
            brandAwareness: {
                label: "Brand Awareness",
                value: "brandAwareness"
            },
            adRecallAdAwareness: {
                label: "Ad recall/ ad awareness",
                value: "adRecallAdAwareness"
            },
            aidedAdRecall: {
                label: "Aided ad recall",
                value: "aidedAdRecall"
            },
            messageAssociation: {
                label: "Message association",
                value: "messageAssociation"
            },
            favourability: {
                label: "Favourability",
                value: "favourability"
            },
            consideration: {
                label: "Consideration",
                value: "consideration"
            },
            purchaseIntent: {
                label: "Purchase Intent",
                value: "purchaseIntent"
            },
            actionIntent: {
                label: "Action intent",
                value: "actionIntent"
            },
            custom: {
                label: "Custom",
                value: "custom"
            }
        },
        type: {
            adRecallAdAwareness: {
                question: "Erinnern Sie sich kürzlich Online-Werbung für eine der folgenden (Markenkategorie) gesehen zu haben? (Bitte alle Zutreffenden ankreuzen)",
                answers: ["Marke A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Keine der Genannten"
                }
            },
            aidedAdRecall: {
                question: "Erinnern Sie sich kürzlich Werbung für (die Marke) gesehen zu haben?",
                answers: ["Ja", "Nein", "Weiß ich nicht"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            brandAwareness: {
                question: "Von welcher der folgenden (Marken / Produktkategorie Marken) haben Sie schon einmal gehört? (Bitte alle Zutreffenden ankreuzen)",
                answers: ["Marke A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Keine der Genannten"
                }
            },
            messageAssociation: {
                question: "Welche der folgenden Marken assoziieren Sie am meisten mit (Message)?",
                answers: ["Marke A", "B", "C", "D"],
                multiple: false,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Keine der Genannten"
                }
            },
            favourability: {
                question: "Was ist Ihre Meinung zu (Marke / Produkt)?",
                answers: ["Mag ich sehr", "mag ich", "weder noch", "mag ich nicht", "mag ich gar nicht"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            consideration: {
                question: "Welche der folgenden Marken würden Sie erwägen zu kaufen? (Bitte alle Zutreffenden ankreuzen)",
                answers: ["Marke A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Keine der Genannten"
                }
            },
            purchaseIntent: {
                question: "Wie wahrscheinlich ist es, dass Sie (Marke) (kaufen)?",
                answers: ["Sehr wahrscheinlich", "eher wahrscheinlich", "weder noch", "eher unwahrscheinlich", "sehr unwahrscheinlich"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            actionIntent: {
                question: "Wie wahrscheinlich ist es, dass Sie (bestimmte Aktion ausführen)?",
                answers: ["Sehr wahrscheinlich", "eher wahrscheinlich", "weder noch", "eher unwahrscheinlich", "sehr unwahrscheinlich"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            custom: {
                question: "",
                answers: ["", "", "", ""],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: true,
                    checked: false,
                    value: ""
                }
            }
        }
    },

    //Portuguesse
    portuguese: {
        nextBtn: "Próxima",
        submitBtn: "Enviar",
        endMessage: "Obrigado!",
        menuItems: {
            brandAwareness: {
                label: "Brand Awareness",
                value: "brandAwareness"
            },
            adRecallAdAwareness: {
                label: "Ad Recall/ Ad Awareness",
                value: "adRecallAdAwareness"
            },
            aidedAdRecall: {
                label: "Aided Ad Recall",
                value: "aidedAdRecall"
            },
            messageAssociation: {
                label: "Associação de Mensagem\n",
                value: "messageAssociation"
            },
            favourability: {
                label: "Favorabilidade",
                value: "favourability"
            },
            consideration: {
                label: "Consideração",
                value: "consideration"
            },
            purchaseIntent: {
                label: "Intenção",
                value: "purchaseIntent"
            },
            actionIntent: {
                label: "Intenção de ação",
                value: "actionIntent"
            },
            custom: {
                label: "Custom",
                value: "custom"
            }
        },
        type: {
            adRecallAdAwareness: {
                question: "Você se lembra de ter visto um anúncio de alguma das seguintes (marcas da categorias) online recentemente? (Assinale todos que se aplicam)",
                answers: ["Marca A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Nenhuma"
                }
            },
            aidedAdRecall: {
                question: "Você se lembra de ter visto um anúncio da (marca) recentemente?",
                answers: ["Sim", "Não", "Não sei"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            brandAwareness: {
                question: "Quais das seguintes (marcas de categoria de marca / produto) você já ouviu falar? (marque todos que se aplicam",
                answers: ["Marca A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Nenhuma"
                }
            },
            messageAssociation: {
                question: "Quais das seguintes marcas você associa a [Mensagem]?",
                answers: ["Marca A", "B", "C", "D"],
                multiple: false,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Nenhuma"
                }
            },
            favourability: {
                question: "Qual é a sua opinião sobre (marca / produto)",
                answers: ["Gosto Muito", "Gosto", " Não gosto", "Não conheço"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            consideration: {
                question: "Quais destas marcas você consideraria comprar? (marque todos que se aplicam)",
                answers: ["Marca A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Nenhuma"
                }
            },
            purchaseIntent: {
                question: "Qual a probabilidade de você comprar um produto de marca (marca)?",
                answers: ["Muito provável", "pouco provável", "neutro", "improvável", "muito improvável"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            actionIntent: {
                question: "Qual é a probabilidade de que (faça alguma ação)?",
                answers: ["Muito provável", "pouco provável", "neutro", "improvável", "muito improvável"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            custom: {
                question: "",
                answers: ["", "", "", ""],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: true,
                    checked: false,
                    value: ""
                }
            }
        }
    },

    //LATAM
    latam: {
        nextBtn: "Siguiente",
        submitBtn: "Enviar",
        endMessage: "¡Gracias!",
        menuItems: {
            brandAwareness: {
                label: "Notoriedad de marca",
                value: "brandAwareness"
            },
            adRecallAdAwareness: {
                label: "Recuerdo del anuncio / Nototoriedad del anuncio",
                value: "adRecallAdAwareness"
            },
            aidedAdRecall: {
                label: "Recuerdo sugerido",
                value: "aidedAdRecall"
            },
            messageAssociation: {
                label: "Asociación del mensaje",
                value: "messageAssociation"
            },
            favourability: {
                label: "Favorabilidad",
                value: "favourability"
            },
            consideration: {
                label: "Consideración",
                value: "consideration"
            },
            purchaseIntent: {
                label: "Intención",
                value: "purchaseIntent"
            },
            actionIntent: {
                label: "Intención de realizar alguna acción",
                value: "actionIntent"
            },
            custom: {
                label: "Custom",
                value: "custom"
            }
        },
        type: {
            adRecallAdAwareness: {
                question: "Recuerdas haber visto algún anuncio de (catergoría de marca) en internet recientemente? (Selecciona todas las que necesites) ",
                answers: ["Marca A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Ninguna de estas"
                }
            },
            aidedAdRecall: {
                question: "¿Recuerdas haber visto un anuncio de (la marca) recientemente? ",
                answers: ["Si", "No", "No sé"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            brandAwareness: {
                question: "¿Cuál de las siguientes (marcas /marcas de producto) conoces? (Selecciona todas las que necesites)",
                answers: ["Marca A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Ninguna de estas"
                }
            },
            messageAssociation: {
                question: "¿Qué marca asocias más con el mensaje (Mensaje)?",
                answers: ["Marca A", "B", "C", "D"],
                multiple: false,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Ninguna de estas"
                }
            },
            favourability: {
                question: "¿Cuál es tu opinión sobre (marca/producto)?",
                answers: ["Muy favorable", "Algo favorable", "Neutra", "Poco favorable", "Nada favorable"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            consideration: {
                question: "¿Cuáles de las siguientes marcas piensas comprar? (selecciona todas las que necesites)",
                answers: ["Marca A", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "Ninguna de estas"
                }
            },
            purchaseIntent: {
                question: "¿Qué probabilidad hay de que compre algún producto de la marca (marca)?",
                answers: ["Muy probable", "Algo probable", "Neutral", "Poco probable", "Nada probable\n"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            actionIntent: {
                question: "¿Qué probabilidad hay de que (realices alguna acción)?",
                answers: ["Muy probable", "Algo probable", "Neutro", "Poco probable", "Nada probable"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            custom: {
                question: "",
                answers: ["", "", "", ""],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: true,
                    checked: false,
                    value: ""
                }
            }
        }
    },

    //Japansese
    japanese: {
        nextBtn: "次へ",
        submitBtn: "回答する",
        endMessage: "ありがとうございます。",
        menuItems: {
            brandAwareness: {
                label: "Brand Awareness\nブランド認知度",
                value: "brandAwareness"
            },
            adRecallAdAwareness: {
                label: "Ad recall/ ad awareness\n広告想起・広告認知度",
                value: "adRecallAdAwareness"
            },
            aidedAdRecall: {
                label: "Aided ad recall\n助成想起",
                value: "aidedAdRecall"
            },
            messageAssociation: {
                label: "Message association\nメッセージ・ブランド連想",
                value: "messageAssociation"
            },
            favourability: {
                label: "Favourability 好感度",
                value: "favourability"
            },
            consideration: {
                label: "Consideration\n検討",
                value: "consideration"
            },
            purchaseIntent: {
                label: "Purchase Intent \n購買意思・意向",
                value: "purchaseIntent"
            },
            actionIntent: {
                label: "Action intent \n購入決定",
                value: "actionIntent"
            },
            custom: {
                label: "Custom\nカスタム",
                value: "custom"
            }
        },
        type: {
            adRecallAdAwareness: {
                question: "あなたはオンライン上で以下のブランド（ブランドカテゴリー）の広告を最近見たことはありますか？（当てはまるものをすべて選んでください。）",
                answers: ["ブランドA", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "どれも当てはまらない"
                }
            },
            aidedAdRecall: {
                question: "あなたは以下の（ブランドの）広告を最近見たことがありますか？",
                answers: ["はい", "いいえ", "わからない"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            brandAwareness: {
                question: "以下のいずれ（ブランド・プロダクト・カテゴリー・ブランド）であなたが聞いたことのあるものを選んでください。（当てはまるものを全て選んでください。）",
                answers: ["ブランドA", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "どれも当てはまらない"
                }
            },
            messageAssociation: {
                question: "以下のブランドの中で【メッセージ】と最も連想するものを選んでください。",
                answers: ["ブランドA", "B", "C", "D"],
                multiple: false,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "どれも当てはまらない"
                }
            },
            favourability: {
                question: "あなたは以下のブランド・製品についてどう思いますか。",
                answers: ["とても好きだ、好きだ、どちらでもない、好きではない、嫌いだ"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            consideration: {
                question: " 以下のブランドの中で購入検討してもいいものを選んでください。（当てはまるものを全て選んでください。）",
                answers: ["ブランドA", "B", "C", "D"],
                multiple: true,
                randomize: true,
                none: {
                    toggleable: true,
                    checked: true,
                    value: "どれも当てはまらない"
                }
            },
            purchaseIntent: {
                question: "あなたは以下のブランドの製品を購入したいと思いますか？",
                answers: ["非常にそう思う、そう思う、どちらでもない、そう思わない、全く思わない"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            actionIntent: {
                question: "あなたは以下の（特定の）アクションをしますか？",
                answers: ["アクションする、アクションしようと思う、どちらでもない、しない、全くそうしない"],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: false,
                    checked: false,
                    value: ""
                }
            },
            custom: {
                question: "",
                answers: ["", "", "", ""],
                multiple: false,
                randomize: false,
                none: {
                    toggleable: true,
                    checked: false,
                    value: ""
                }
            }
        },

        //Arabic
        // arabic: 
    }
}

export default Metrics;