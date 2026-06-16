import Result from "../models/resultModel.js";

export async function createResult(req, res) {
    try{
        if(!req.user || !req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'Not Authorized'
            })
        }

        const { title, technology, level, totalQuestions, correct, wrong } = req.body;
        if(!technology || !level || totalQuestions === undefined || correct === undefined) {
            return res.status(400).json({
                success: false,
                message: 'Missing Fields'
            })
        }

        // COMPUTE WRONG IF NOT PROVIDED
        const computedWrong = wrong !== undefined ? Number(wrong) : Math.max(0, Number(totalQuestions) - Number(correct));

        if(!title) {
            return res.status(400).json({
                success: false,
                message: 'Missing Title'
            })
        }

        const payload = {
            title: String(title).trim(),
            technology,
            level,
            totalQuestions: Number(totalQuestions),
            correct: Number(correct),
            wrong: Number(wrong),
            user: req.user.id    // for a particular user
        };

        const created = await Result.create(payload);
        return res.status(201).json({
            success: true,
            message: 'Result Created',
            result: created
        })
    }
    catch(err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}

// LIST THE RESULT

export async function listResults(req, res) {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not Authorized',
      });
    }

    const { technology } = req.query; 

    const query = { user: req.user.id };

    if (typeof technology === 'string' && technology.toLowerCase() !== 'all') {
      query.technology = technology;
    }

    const items = await Result.find(query).sort({ createdAt: -1 }).lean();
    return res.json({
      success: true,
      results: items,  // note: your frontend expects res.data.results
    });
  } catch (err) {
    console.error('ListResults Error:', err);
    return res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
}
