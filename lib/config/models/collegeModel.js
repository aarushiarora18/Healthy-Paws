// import mongoose from "mongoose";

// // Image Schema
// const imageSchema = new mongoose.Schema({
//     url: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     publicId: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     caption: String,
//     altText: {
//         type: String,
//         required: true
//     },
//     size: Number,
//     mimeType: String,
//     dimensions: {
//         width: Number,
//         height: Number
//     },
//     uploadedBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     isFeatured: {
//         type: Boolean,
//         default: false
//     }
// }, {
//     timestamps: true
// });

// // Gallery Schema
// const gallerySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     description: String,
//     category: {
//         type: String,
//         enum: ['Campus', 'Events', 'Facilities', 'Students', 'Faculty', 'Others'],
//         required: true
//     },
//     images: [imageSchema]
// });

// // Review Schema
// const reviewSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',  // Assuming you have a User model
//         required: true
//     },
//     rating: {
//         type: Number,
//         required: true,
//         min: 1,
//         max: 5
//     },
//     title: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 100
//     },
//     comment: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 1000
//     },
//     isVerified: {
//         type: Boolean,
//         default: false
//     }
// }, {
//     timestamps: true
// });

// // Course Schema
// const courseSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     code: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     department: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     duration: {
//         years: {
//             type: Number,
//             required: true,
//             min: 1
//         },
//         type: {
//             type: String,
//             enum: ['Full-time', 'Part-time', 'Distance'],
//             required: true
//         }
//     },
//     totalSeats: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     annualFee: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     description: {
//         type: String,
//         trim: true
//     },
//     isActive: {
//         type: Boolean,
//         default: true
//     }
// });

// // Placement Stats Schema
// const placementStatsSchema = new mongoose.Schema({
//     year: {
//         type: Number,
//         required: true
//     },
//     averagePackage: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     highestPackage: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     placementPercentage: {
//         type: Number,
//         required: true,
//         min: 0,
//         max: 100
//     },
//     topRecruiters: [{
//         type: String,
//         trim: true
//     }]
// });

// const locationSchema = new mongoose.Schema({
//     city: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     state: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     zipCode: {
//         type: String,
//         required: true,
//         trim: true,
//         validate: {
//             validator: function(v) {
//                 return /^\d{5}(-\d{4})?$/.test(v);
//             },
//             message: props => `${props.value} is not a valid ZIP code!`
//         }
//     },
//     country: {
//         type: String,
//         required: true,
//         trim: true,
//         default: 'India'
//     },
//     campus: {
//         type: {
//             type: String,
//             enum: ['Urban', 'Suburban', 'Rural'],
//             required: true
//         },
//         totalArea: {
//             type: Number,  // in acres
//             min: 0
//         }
//     }
// });

// const collegeSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     location: {
//         type: locationSchema,
//         required: true
//     },
//     accreditations: {
//         type: [{
//             type: String,
//             trim: true
//         }],
//         default: []
//     },
//     foundedYear: {
//         type: Number,
//         min: 1600,
//         max: new Date().getFullYear()
//     },
//     website: {
//         type: String,
//         trim: true,
//         validate: {
//             validator: function(v) {
//                 return /^https?:\/\/.+\..+/.test(v);
//             },
//             message: props => `${props.value} is not a valid URL!`
//         }
//     },
//     ranking: {
//         national: Number,
//         global: Number,
//         lastUpdated: Date
//     },
//     infrastructure: {
//         libraries: Number,
//         laboratories: Number,
//         sportsFacilities: [String],
//         hostelCapacity: Number,
//         hasWiFiCampus: Boolean,
//         facilities: [String]
//     },
//     academics: {
//         studentFacultyRatio: String,
//         totalFaculty: Number,
//         researchCenters: Number,
//         totalPatents: Number
//     },
//     courses: {
//         type: [courseSchema],
//         default: []
//     },
//     placements: {
//         type: [placementStatsSchema],
//         default: []
//     },
//     reviews: {
//         type: [reviewSchema],
//         default: []
//     },
//     ratings: {
//         overall: {
//             type: Number,
//             min: 0,
//             max: 5,
//             default: 0
//         },
//         academics: {
//             type: Number,
//             min: 0,
//             max: 5,
//             default: 0
//         },
//         infrastructure: {
//             type: Number,
//             min: 0,
//             max: 5,
//             default: 0
//         },
//         placements: {
//             type: Number,
//             min: 0,
//             max: 5,
//             default: 0
//         },
//         campusLife: {
//             type: Number,
//             min: 0,
//             max: 5,
//             default: 0
//         }
//     },
//     admissionProcess: {
//         entranceExams: [{
//             type: String,
//             trim: true
//         }],
//         applicationDeadline: Date,
//         admissionCriteria: [String],
//         documents: [String]
//     },
//     scholarships: [{
//         name: String,
//         description: String,
//         amount: Number,
//         eligibilityCriteria: [String]
//     }],
//     events: [{
//         name: String,
//         date: Date,
//         description: String,
//         type: {
//             type: String,
//             enum: ['Academic', 'Cultural', 'Sports', 'Technical', 'Other']
//         }
//     }],
//     socialMedia: {
//         facebook: String,
//         twitter: String,
//         linkedin: String,
//         instagram: String
//     },
//     enrollmentCount: {
//         type: Number,
//         min: 0
//     },
//     isActive: {
//         type: Boolean,
//         default: true
//     }
// }, {
//     timestamps: true,
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true }
// });

// // Virtual for calculating average rating
// collegeSchema.virtual('averageRating').get(function() {
//     const ratings = this.ratings;
//     const sum = ratings.overall + ratings.academics + ratings.infrastructure + 
//                 ratings.placements + ratings.campusLife;
//     return (sum / 5).toFixed(1);
// });

// // Index for better search performance
// collegeSchema.index({ name: 'text', 'location.city': 'text', 'location.state': 'text' });

// // Pre-save middleware to update overall rating when reviews change
// collegeSchema.pre('save', function(next) {
//     if (this.reviews.length > 0) {
//         const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
//         this.ratings.overall = (totalRating / this.reviews.length).toFixed(1);
//     }
//     next();
// });

// const College = mongoose.model("College", collegeSchema);

// export default College;

const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      default: "India"
    }
  },
  courses: [
    {
      name: {
        type: String,
        required: true
      },
      duration: {
        type: String,
        required: true // e.g., "4 years", "2 years"
      },
      fees: {
        type: Number,
        required: true // Fees in your chosen currency
      }
    }
  ],
  rankings: {
    national: {
      type: Number, // National ranking
      default: null
    },
    international: {
      type: Number, // International ranking
      default: null
    }
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to user model
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5 // Rating between 1 and 5
      },
      comment: {
        type: String,
        trim: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  establishedYear: {
    type: Number,
    required: true
  },
  facilities: {
    library: {
      type: Boolean,
      default: false
    },
    sports: {
      type: Boolean,
      default: false
    },
    hostels: {
      type: Boolean,
      default: false
    },
    labs: {
      type: Boolean,
      default: false
    },
    wifi: {
      type: Boolean,
      default: false
    }
  },
  image: {
    type: String, // URL for the college image
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

collegeSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const College = mongoose.models.College || mongoose.model('College', collegeSchema);

module.exports = College;
