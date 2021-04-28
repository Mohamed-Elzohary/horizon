const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const horizonSchema = new Schema({
    // START Hero Section 1/13
    "name": {
        type: String,
        required: false
    },
    "hero_section_display": {
        type: Boolean,
        required: false
    },
    "hero_header_1": {
        type: String,
        required: false
    },
    "hero_parag_1": {
        type: String,
        required: false
    },
    "hero_parag_2": {
        type: String,
        required: false
    },
    "hero_link_1_name": {
        type: String,
        required: false
    },
    "hero_link_1_href": {
        type: String,
        required: false
    },
    "design_state": {
        type: Boolean,
        required: false
    },
    "design_img": {
        type: String,
        required: false
    },
    // END HERO SECTION
    // Start Lens Design 1 Section 2/13
    "ld1_section_display": {
        type: Boolean,
        required: false
    },
    "prog_card_1_link": {
        type: String,
        required: false
    },
    "prog_card_1_img": {
        type: String,
        required: false
    },
    "prog_card_1_type": {
        type: String,
        required: false
    },
    "prog_card_1_header": {
        type: String,
        required: false
    },

    // "prog_card_2_link": {
    //     type: String,
    //     required: false
    // },
    // "prog_card_2_img": {
    //     type: String,
    //     required: false
    // },
    // "prog_card_2_type": {
    //     type: String,
    //     required: false
    // },
    // "prog_card_2_header": {
    //     type: String,
    //     required: false
    // },

    // "prog_card_3_link": {
    //     type: String,
    //     required: false
    // },
    // "prog_card_3_img": {
    //     type: String,
    //     required: false
    // },
    // "prog_card_3_type": {
    //     type: String,
    //     required: false
    // },
    // "prog_card_3_header": {
    //     type: String,
    //     required: false
    // },

    // "prog_card_4_link": {
    //     type: String,
    //     required: false
    // },
    // "prog_card_4_img": {
    //     type: String,
    //     required: false
    // },
    // "prog_card_4_type": {
    //     type: String,
    //     required: false
    // },
    // "prog_card_4_header": {
    //     type: String,
    //     required: false
    // },

    // END SECTION
    // START LENS INFO 1 3/13
    "li1_section_display": {
        type: Boolean,
        required: false
    },
    "li1_header": {
        type: String,
        required: false
    },
    "li1_desc": {
        type: String,
        required: false
    },
    "li1_img": {
        type: String,
        required: false
    },
    "li1_parag_1": {
        type: String,
        required: false
    },
    "li1_parag_2": {
        type: String,
        required: false
    },
    "li1_parag_3": {
        type: String,
        required: false
    },
    "li1_parag_4": {
        type: String,
        required: false
    },
    // END SECTION
    // START LENS DESIGNS 2 4/13
    "ld2_section_display": {
        type: Boolean,
        required: false
    },
    "ld2_header": {
        type: String,
        required: false
    },
    "ld2_desc": {
        type: String,
        required: false
    },
    "ld2_designs": [{
        "_id": {
            type: Schema.ObjectId,
            required: false
        },
        "header": {
            type: String,
            required: false
        },
        "sub_header": {
            type: String,
            required: false
        },
        "img": {
            type: String,
            required: false
        },
        "content_before": {
            type: String,
            required: false
        },
        "content_after": {
            type: String,
            required: false
        },
        "specs": [{
            "_id": {
                type: Schema.ObjectId,
                required: false
            },
            "title": {
                type: String,
                required: false
            },
            "desc": {
                type: String,
                required: false
            },
        }]
    }],
    // END SECTION
    // START LENS Info 2 5/13
    "li2_section_display": {
        type: Boolean,
        required: false
    },
    "li2_header": {
        type: String,
        required: false
    },
    "li2_desc": {
        type: String,
        required: false
    },
    "li2_lft_parags": [{
        "parag_header": {
            type: String,
            required: false
        },
        "parag_content": {
            type: String,
            required: false
        }
    }],
    "li2_rght_parags": [{
        "parag_header": {
            type: String,
            required: false
        },
        "parag_content": {
            type: String,
            required: false
        }
    }]
})

module.exports = mongoose.model('Horizon', horizonSchema);