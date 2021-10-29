const mongoose = require('mongoose')
const { toJSON, paginate } = require('./plugins')

const projectsSchema = mongoose.Schema(
    {
        name:{
            type:String,
        },
        short_name:{
            type:String,
        },
        status: {
            type: String,
            enum: ["started","onhold","stack","complete"],
            default: "stack",
        },
        priority: {
            type: String,
            enum: ["low","medium","high"],
            default: "medium",
        },
        role:{
            type:String,
            enum:["admin","user","client","guest","owner"],
            default:"admin",
        },
        default_assign_to:{
            type:String,
        },
        status_workflow:{
            type:String,
        },
        select_workflow_for_bug:{
            type:String,
        },
        default_task_type:{
            type:String,
        },
        description_of_project:{
            type:String,
        },
        estimated_hours:{
            type:Number,
        },
        // date_range:{
        //     type: Date,
        //     default: Date.now,
        // },
        project_manager:{
            type:String
        },
        client:{
            type:Number,
        },
        currency:{
            type:Number,
        },
        budget:{
            type:Number,
        },
        default_rate:{
            type:Number,
        },
        cost_approximate:{
            type:Number,
        },
        min_tolerance:{
            type:String,
        },
        max_tolerance:{
            type:String,
        },
        project_type:{
            type:String,
        },
        industry:{
            type:String,
        },
        created_by:{
            type:String,
            default:"xyz"
        },
        created_at:{
            type: Date,
            default: Date.now,
        },
        updated_by:{
            type:String,
            default:"xyz"
        },
        updated_at:{
            type: Date,
            default: Date.now,
        },
        start_date:{
            type:String,
        },
        end_date:{
            type:String,
        }
    }
);
// projectsSchema.plugin(toJSON);
// projectsSchema.plugin(paginate);
const Projects = mongoose.model('Projects', projectsSchema);
module.exports = Projects;