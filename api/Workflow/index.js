const { WorkFlow } = require('../../DB/Models/productModels');

exports.setWorkflowDetail = async (req, res) => {
  try {
    const payload = req.body;

    const updatedWorkflow = await WorkFlow.findOneAndUpdate(
      { flowId: payload.flowId },   // Search condition
      payload,                      // New data to set
      {
        new: true,                  // Return the updated document
        upsert: true,               // Create if it doesn't exist
        runValidators: true         // Validate against schema
      }
    );

    return res.status(201).json({
      success: true,
      message: 'Workflow saved/updated successfully',
      data: updatedWorkflow,
    });
  } catch (error) {
    console.error('Error saving/updating workflow:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while saving/updating workflow',
    });
  }
};



exports.getAllWorkflows = async (req, res) => {
    try {
      const workflows = await WorkFlow.find({});
  
      return res.status(200).json({
        success: true,
        data: workflows,
      });
    } catch (error) {
      console.error('Error fetching workflows:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error while fetching workflows',
      });
    }
};
  