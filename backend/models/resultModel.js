import mongoose, { Schema } from "mongoose";

const performanceEnum = ["Excellent", "Good", "Average", "Needs Work"];

const resultSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    technology: {
       type: String,
        required: true,
        trim: true,
        enum: [
            "html",
            "css", 
            "js",
            "react",
            "node",
            "mongodb",
            "java",
            "python",
            "c",
            "cpp",
            "bootstrap"
        ] 
    },
    level: {
        type: String,
        required: true,
        enum: ["Basic", "Intermediate", "Advanced"]
    },
    totalQuestions: {
        type: Number,
        required: true,
        min: 0
    },
    correct: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    wrong: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    score: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    perfomance: {
        type: String,
        enum: performanceEnum,
        default: "Needs Work"
    },   
}, {
    timestamps: true
})

// COMPUTE SCORE AND PERFORMANCE
resultSchema.pre('save', async function () {
    const total = Number(this.totalQuestions) || 0;
    const correct = Number(this.correct) || 0;

    this.score = total ? Math.round((correct/total)*100) : 0;

    if(this.score >= 85) this.perfomance = 'Excellent';
    else if(this.score >= 65) this.perfomance = 'Good';
    else if(this.score >= 45) this.perfomance = 'Average';
    else this.perfomance = 'Needs Work';

    if((this.wrong === undefined || this.wrong === null) && total) {
        this.wrong = Math.max(0, total - correct);
    }
});

const Result = mongoose.models.Result || mongoose.model('Result', resultSchema);
export default Result;