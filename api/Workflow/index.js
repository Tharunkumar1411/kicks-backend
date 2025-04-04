const { WorkFlow } = require('../../DB/Schema/homeSchema');

/**
 * Save workflow to DB
 */
exports.setWorkflowDetail = async (req, res) => {
  try {
    const payload = req.body;

    const savedWorkflow = await WorkFlow.create(payload);

    return res.status(201).json({
      success: true,
      message: 'Workflow saved successfully',
      data: savedWorkflow,
    });
  } catch (error) {
    console.error('Error saving workflow:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while saving workflow',
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
  