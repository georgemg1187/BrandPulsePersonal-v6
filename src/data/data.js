const Metrics = {
    english: {
        nextBtn: "Next",
        submitBtn: "Submit",
        endMessage: "Thank you",
        menuItems: {
            brandAwareness: { label: "Brand Awareness", value: "brandAwareness" },
            adRecallAdAwareness: { label: "Ad recall/ ad awareness", value: "adRecallAdAwareness" },
            aidedAdRecall: { label: "Aided ad recall", value: "aidedAdRecall" },
            messageAssociation: { label: "Message association", value: "messageAssociation" },
            favourability: { label: "Favourability", value: "favourability" },
            consideration: { label: "Consideration", value: "consideration" },
            intent: { label: "Intent", value: "intent" },
            custom: { label: "Custom", value: "custom" }
        },
        type: {
            custom: {
                question: "",
                answers: ["", "", "", "", ""],
                multiple: false,
                randomize: false,
                none: { checked: false, value: "" }
            },

            brandAwareness: {
                question: "Which of the following (brand/product category brands) have you heard of? (tick all that apply)",
                answers: ["Brand A", "Brand B", "Brand C", "Brand D"],
                multiple: true,
                randomize: true,
                none: { checked: true, value: "None of the above" }
            },

            adRecallAdAwareness: {
                question: "Do you recall seeing an ad for any of the following (brand category) online recently? (Tick all that apply)",
                answers: ["Brand A", "Brand B", "Brand C", "Brand D"],
                multiple: true,
                randomize: true,
                none: { checked: true, value: "None of the above" }
            },

            aidedAdRecall: {
                question: "Do you recall seeing an ad for (the brand) recently?",
                answers: ["Yes", "No", "I don't know"],
                multiple: false,
                randomize: false,
                none: { checked: false, value: "" }
            },

            messageAssociation: {
                question: "Which of the following brands do you most associate with (Message)?",
                answers: ["Brand A", "Brand B", "Brand C", "Brand D"],
                multiple: false,
                randomize: true,
                none: { checked: true, value: "None of the above" }
            },

            favourability: {
                question: "What is your opinion of (brand/product)?",
                answers: ["I like it", "I neither like nor dislike it", "I dislike it", "I don't know"],
                multiple: false,
                randomize: false,
                none: { checked: false, value: "" }
            },

            consideration: {
                question: "Which of these brands would you consider purchasing? (tick all that apply)",
                answers: ["Brand A", "Brand B", "Brand C", "Brand D"],
                multiple: true,
                randomize: true,
                none: { checked: true, value: "None of the above" }
            },

            intent: {
                question: "How likely are you (to purchase) (brand)?",
                answers: ["Very likely", "Somewhat likely", "Neutral", "Somewhat unlikely", "Very unlikely"],
                multiple: false,
                randomize: false,
                none: { checked: false, value: "" }
            },
        }
    },

    // ================================== FRENCH ======================================>>>>>>

    french: {
        nextBtn: "Suivant",
        submitBtn: "Soumettre",
        endMessage: "Merci!",
        menuItems: {
            brandAwareness: { label: "Notoriété", value: "brandAwareness" },
            adRecallAdAwareness: { label: "Souvenir publicitaire", value: "adRecallAdAwareness" },
            aidedAdRecall: { label: "Souvenir publicitaire assisté", value: "aidedAdRecall" },
            messageAssociation: { label: "Association du message", value: "messageAssociation" },
            favourability: { label: "Image", value: "favourability" },
            consideration: { label: "Considération", value: "consideration" },
            intent: { label: "Intention", value: "intent" },
            custom: { label: "Custom", value: "custom" },
        },
        type: {
            custom: {
                question: "",
                answers: ["", "", "", "", ""],
                multiple: false,
                randomize: false,
                none: { checked: false, value: "" }
            },

            brandAwareness: {
                question: "Parmi les marques de (catégorie du produit testé) suivantes, de quelles marques avez-vous déjà entendu parler? (Sélectionnez tout ce qui s'applique)",
                answers: ["Marque A", "Marque B", "Marque C", "Marque D"],
                multiple: true,
                randomize: true,
                none: { checked: true, value: "Aucune de ces marques" }
            },

            adRecallAdAwareness: {
                question: "Parmi les marques de (catégorie du produit testé) suivantes, pour lesquelles vous souvenez-vous avoir vu de la publicité en ligne récemment? (Sélectionnez tout ce qui s'applique)",
                answers: ["Marque A", "Marque B", "Marque C", "Marque D"],
                multiple: true,
                randomize: true,
                none: { checked: true, value: "Aucune de ces marques" }
            },

            aidedAdRecall: {
                question: "Vous souvenez-vous avoir vu une publicité pour (la marque) récemment?",
                answers: ["Oui", "Non", "Je ne sais pas"],
                multiple: false,
                randomize: false,
                none: { checked: false, value: "" }
            },

            messageAssociation: {
                question: "Parmi les marques suivantes, laquelle associez-vous le plus au message (message publicitaire de la marque)?",
                answers: ["Marque A", "Marque B", "Marque C", "Marque D"],
                multiple: false,
                randomize: true,
                none: { checked: true, value: "Aucune de ces marques" }
            },

            favourability: {
                question: "Quelle est votre opinion générale de (la marque/produit)?",
                answers: ["Je l'apprécie", "Neutre", "Je ne l'apprécie pas", "Je ne sais pas"],
                multiple: false,
                randomize: false,
                none: { checked: false, value: "" }
            },

            consideration: {
                question: "Parmi les marques suivantes, lesquelles considéreriez-vous pour un futur achat? (Sélectionnez tout ce qui s'applique)",
                answers: ["Marque A", "Marque B", "Marque C", "Marque D"],
                multiple: true,
                randomize: true,
                none: { checked: true, value: "Aucune de ces marques" }
            },

            intent: {
                question: "Quelle est la probilité que vous (achetiez un produit de la marque)?",
                answers: ["Très probable", "Plutôt probable", "Neutre", "Peu probable", "Trés impropable"],
                multiple: false,
                randomize: false,
                none: { checked: false, value: "" }
            },
        }
    }
}

export default Metrics;