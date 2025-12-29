import mongoose from "mongoose";

const workflowSchema = new mongoose.Schema({
  flowId: {
    type: String,
    required: true,
    unique: true
  },
  nodes: {
    type: Array,
    default: []
  },
  edges: {
    type: Array,
    default: []
  },
  flowName: {
    type: String,
    required: true
  },
  editedOn: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  description: {
    type: String,
    default: "Some description here regarding the flow.."
  },
  apiConfig: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  }
}, {
  timestamps: true
});

export default mongoose.models.Workflow || mongoose.model("Workflow", workflowSchema);
